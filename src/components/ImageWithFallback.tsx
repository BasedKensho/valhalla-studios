import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  lowQuality?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  fallback = '', 
  lowQuality,
  alt = '',
  className = '',
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(lowQuality || src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (lowQuality) {
      const img = new Image();
      img.src = src as string;
      img.onload = () => {
        setImgSrc(src);
        setIsLoading(false);
      };
    }
  }, [src, lowQuality]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`${className} ${isLoading ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
      onError={() => setImgSrc(fallback)}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default React.memo(ImageWithFallback);