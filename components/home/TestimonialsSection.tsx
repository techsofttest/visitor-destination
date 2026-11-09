"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/components/data/content";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="reviews" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* Header with identical control button styling */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Kind words from the road</SectionLabel>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-[0.03em] leading-[0.95] md:text-6xl">
              The memories say it best.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <div className="flex items-center gap-2 text-sm text-[#5C5C5C]">
              <span className="flex gap-0.5 text-[#FDB414]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={15} fill="currentColor" />
                ))}
              </span>{" "}
              Every journey matters
            </div>

            {/* Carousel controls */}
            <div className="hidden shrink-0 gap-2 sm:flex">
              <button
                type="button"
                aria-label="Scroll testimonials left"
                onClick={scrollPrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-[#F1F0ED] transition-colors hover:bg-[#B85D19] hover:text-white"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Scroll testimonials right"
                onClick={scrollNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-[#B85D19] text-white transition-colors hover:bg-[#9B4C12]"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Embla continuous carousel viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 py-4">
            {testimonials.map((testimonial, index) => {
              const isMiddleActive = index === selectedIndex;
              return (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="min-w-0 pl-4 flex-[0_0_88%] sm:flex-[0_0_55%] md:flex-[0_0_40%] lg:flex-[0_0_33.333%]"
                >
                  <article
                    className={`flex min-h-[340px] flex-col justify-between rounded-xl p-7 md:p-8 transition-all duration-500 ease-out ${isMiddleActive
                      ? "bg-[#B85D19] text-white scale-[1.02]"
                      : "bg-[#F5F4F1] text-[#242424] opacity-90 hover:opacity-100"
                      }`}
                  >
                    <div>
                      <div
                        className={`mb-5 text-5xl leading-none transition-colors duration-300 ${isMiddleActive ? "text-[#FDB414]" : "text-[#B85D19]"
                          }`}
                        aria-hidden="true"
                      >
                        “
                      </div>
                      <blockquote className="text-lg font-medium leading-[1.5] tracking-[-0.02em] md:text-xl">
                        “{testimonial.quote}”
                      </blockquote>
                    </div>

                    <div
                      className={`mt-8 flex items-center justify-between border-t pt-5 transition-colors duration-300 ${isMiddleActive ? "border-white/20" : "border-black/10"
                        }`}
                    >
                      <div>
                        <p className="text-sm font-semibold">{testimonial.name}</p>
                        <p
                          className={`mt-1 text-xs ${isMiddleActive ? "text-white/70" : "text-[#777]"
                            }`}
                        >
                          {testimonial.detail}
                        </p>
                      </div>
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-300 ${isMiddleActive
                          ? "bg-white/15 text-white"
                          : "bg-white text-[#B85D19] shadow-sm"
                          }`}
                      >
                        {testimonial.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </span>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile controls & indicator */}
        <div className="mt-6 flex items-center justify-between sm:hidden">
          <p className="text-xs text-[#777]">
            Reviews <span className="mx-1 text-[#B85D19]">·</span>{" "}
            {String(selectedIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </p>
          <div className="flex gap-1.5">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={scrollPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#F1F0ED]"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={scrollNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#B85D19] text-white"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
