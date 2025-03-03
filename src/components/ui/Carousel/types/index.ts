export interface CarouselItem {
  id: number | string;
  content: React.ReactNode;
}

export interface CarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
  className?: string;
  vertical?: boolean;
}