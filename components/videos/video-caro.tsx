import { ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function VideoCarousel({ children }: { children: ReactNode[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
        axis: "x",
      }}
      className="m-auto w-[94%]"
    >
      <CarouselContent className="items-center w-11/12 m-auto">
        {children && children.length > 1
          ? children.map((child, idx) => (
              <CarouselItem
                key={idx}
                className="flex justify-center 3xl:basis-1/5 2xl:basis-1/4 lg:basis-1/3 md:basis-1/2"
              >
                {child}
              </CarouselItem>
            ))
          : children}
      </CarouselContent>

      <CarouselPrevious className="h-full bg-transparent border-0 rounded-sm w-25 hover:bg-secondary/25" />
      <CarouselNext className="h-full bg-transparent border-0 rounded-sm w-25 hover:bg-secondary/25" />
    </Carousel>
  );
}
