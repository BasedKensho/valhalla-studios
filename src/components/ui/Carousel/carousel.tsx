import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselItem {
  id: number | string;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
  className?: string;
  vertical?: boolean;
}

const cardVariants = {
  enter: (custom: { direction: number; position: 'left' | 'center' | 'right' }) => ({
    x: custom.direction > 0 ? 1000 : -1000,
    rotateY: custom.direction > 0 ? 30 : -30,
    opacity: 0,
    scale: 0.7,
    zIndex: custom.position === 'center' ? 2 : 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }),
  visible: (custom: { position: 'left' | 'center' | 'right' }) => ({
    x: custom.position === 'left' ? -360 : custom.position === 'right' ? 360 : 0,
    rotateY: custom.position === 'center' ? 0 : custom.position === 'left' ? 15 : -15,
    opacity: custom.position === 'center' ? 1 : 0.7,
    scale: custom.position === 'center' ? 1 : 0.85,
    zIndex: custom.position === 'center' ? 2 : 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1,
      duration: 0.8
    }
  }),
  exit: (custom: { direction: number; position: 'left' | 'center' | 'right' }) => ({
    x: custom.direction < 0 ? 1000 : -1000,
    rotateY: custom.direction < 0 ? -30 : 30,
    opacity: 0,
    scale: 0.7,
    zIndex: custom.position === 'center' ? 2 : 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const Carousel: React.FC<CarouselProps> = ({ 
  items, 
  autoPlayInterval = 5000,
  className = '',
  vertical = true
}) => {
  const [visibleCards, setVisibleCards] = useState([0, 1, 2]);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const paginate = (newDirection: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(newDirection);
    setVisibleCards(prev => {
      const newCards = prev.map(index => 
        (index + newDirection + items.length) % items.length
      );
      return newCards;
    });
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    if (autoPlayInterval > 0) {
      const timer = setInterval(() => paginate(1), autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [autoPlayInterval]);

  return (
    <div className={`relative ${vertical ? 'h-[700px]' : 'h-[400px]'} perspective-[2000px] ${className}`}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition-colors duration-200"
        disabled={isAnimating}
      >
        <ChevronLeft className="h-8 w-8" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition-colors duration-200"
        disabled={isAnimating}
      >
        <ChevronRight className="h-8 w-8" />
      </motion.button>

      <div className="relative h-full flex items-center justify-center">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleCards.map((index, position) => {
            const item = items[index];
            const positionName = position === 0 ? 'left' : position === 1 ? 'center' : 'right';
            
            return (
              <motion.div
                key={item.id}
                custom={{ direction, position: positionName }}
                variants={cardVariants}
                initial="enter"
                animate="visible"
                exit="exit"
                className={`
                  absolute w-full ${vertical ? 'max-w-[360px]' : 'max-w-[600px]'}
                  ${positionName === 'center' ? 'z-20' : 'z-10'}
                `}
                style={{ 
                  perspective: 2000,
                  transformStyle: 'preserve-3d'
                }}
              >
                {item.content}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const currentIndex = visibleCards[1]; // Center card index
              const diff = i - currentIndex;
              if (diff !== 0) {
                paginate(diff);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              visibleCards.includes(i)
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;