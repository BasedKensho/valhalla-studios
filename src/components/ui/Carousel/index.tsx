import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselProps } from './types';
import { cardVariants, swipeConfidenceThreshold, swipePower } from './styles';
import { wrap, getVisibleIndexes } from './utils';

const Carousel: React.FC<CarouselProps> = ({ 
  items, 
  autoPlayInterval = 5000,
  className = '',
  vertical = true
}) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemIndex = wrap(0, items.length, page);

  const paginate = (newDirection: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPage([page + newDirection, newDirection]);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    if (autoPlayInterval > 0) {
      const timer = setInterval(() => paginate(1), autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [autoPlayInterval, page]);

  const visibleIndexes = getVisibleIndexes(itemIndex, items.length);

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
          {visibleIndexes.map((index, position) => {
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
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
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
              const diff = i - itemIndex;
              if (diff !== 0) {
                paginate(diff);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === itemIndex
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
export type { CarouselItem, CarouselProps } from './types';