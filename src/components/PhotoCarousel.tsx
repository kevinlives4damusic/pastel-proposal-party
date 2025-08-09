import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const photos = [
  new URL("/lovable-uploads/b0cb7af6-66d8-4e67-8198-a8c9511c3ba9.png", import.meta.url).pathname,
  new URL("/lovable-uploads/fd6ba729-a2dc-4871-9751-3cf6911a8964.png", import.meta.url).pathname,
  new URL("/lovable-uploads/6c6065bb-140a-45c2-8cb7-d5efcb716444.png", import.meta.url).pathname,
];

const PhotoCarousel: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Carousel className="w-full animate-enter">
        <CarouselContent>
          {photos.map((src, idx) => (
            <CarouselItem key={idx}>
              <Card className="hover-scale hover-glow">
                <CardContent className="p-2 md:p-4">
                  <img
                    src={src}
                    alt={`Cute memory ${idx + 1}`}
                    loading="lazy"
                    className="rounded-md w-full h-[260px] md:h-[380px] object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="glass px-3 py-2" aria-label="Previous" />
        <CarouselNext className="glass px-3 py-2" aria-label="Next" />
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
