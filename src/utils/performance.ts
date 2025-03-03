// Utility functions for performance optimization
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Check if the device is low-end
export const isLowEndDevice = (): boolean => {
  return (
    !window.matchMedia('(min-resolution: 2dppx)').matches && // Not a retina display
    navigator.hardwareConcurrency <= 4 && // 4 or fewer CPU cores
    !matchMedia('(hover: hover)').matches // No hover capability (likely mobile)
  );
};

// Detect connection speed
export const getConnectionSpeed = (): 'slow' | 'medium' | 'fast' => {
  const connection = (navigator as any).connection;
  
  if (!connection) return 'medium';
  
  if (connection.effectiveType === '4g') return 'fast';
  if (connection.effectiveType === '3g') return 'medium';
  return 'slow';
};