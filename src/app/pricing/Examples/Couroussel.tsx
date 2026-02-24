"use client";

import type * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/components/ui/utils";

export type SamplesCarouselSlide = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type CourousselProps = {
  slides: SamplesCarouselSlide[];
  className?: string;
};

export function Couroussel({ slides, className }: CourousselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    loop: false,
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!emblaApi) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      emblaApi.scrollPrev();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      emblaApi.scrollNext();
    }

    if (event.key === "Home") {
      event.preventDefault();
      emblaApi.scrollTo(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      emblaApi.scrollTo(emblaApi.scrollSnapList().length - 1);
    }
  };

  if (slides.length === 0) return null;

  return (
    <div
      className={cn(
        "relative",
        "[--grid-width:64rem]",
        "[--grid-gutter:1.5rem]",
        "[--page-padding:max(var(--grid-gutter),calc((100vw-var(--grid-width))/2+var(--grid-gutter)))]",
        "[--slide-gap:2rem] md:[--slide-gap:4rem]",
        "[--peek:4rem] md:[--peek:5rem]",
        "[--slide-size:min(60rem,calc(100%-var(--page-padding)-var(--peek)))]",
        className,
      )}
      aria-roledescription="carousel"
      aria-label="Samples carousel"
    >
      <div className="relative">
        <div
          ref={emblaRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="mx-auto touch-pan-y overflow-hidden outline-none cursor-grab active:cursor-grabbing"
        >
          <div
            className={cn(
              "flex items-stretch gap-[var(--slide-gap)]",
              "pl-[var(--page-padding)]",
              "py-3",
            )}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${slide.label} (${index + 1} of ${slides.length})`}
                className="flex-[0_0_var(--slide-size)] self-stretch last:mr-[var(--page-padding)] cursor-pointer"
                onClick={(event) => {
                  if (!emblaApi) return;
                  const target = event.target as HTMLElement;
                  if (
                    target.closest(
                      "a,button,input,select,textarea,[role='button']",
                    )
                  ) {
                    return;
                  }
                  emblaApi.scrollTo(index);
                }}
              >
                <div className="h-full w-full [&>*]:h-full">
                  {slide.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
