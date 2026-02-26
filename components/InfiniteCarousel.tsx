import { ReactNode } from "react";

interface InfiniteCarouselProps {
  children: ReactNode;
}

export const InfiniteCarousel = ({ children }: InfiniteCarouselProps) => {
  return (
    <div className="relative w-full overflow-hidden mt-10">
      <div className="flex w-max animate-marquee gap-8">
        
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="flex gap-8">
          {children}
        </div>
      ))}

      </div>
    </div>
  );
}