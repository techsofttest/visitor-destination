"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PackageCard } from "@/components/packages/PackageCard";
import type { PackageDetail } from "@/components/data/packages";

export function OtherPackagesCarousel({
  packages,whatsapp
}: {
  packages: any[];whatsapp:string
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!packages || packages.length === 0) return null;

  return (
    <section className="bg-[#FAF8F5] py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-5 md:px-10">
        {/* Section Header with navigation arrows */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end md:mb-12">
          <div>
            <SectionLabel>More Desert Experiences</SectionLabel>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl uppercase tracking-wide text-[#1E1A17] sm:text-4xl md:text-5xl leading-none">
              Explore Other Packages
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous tours"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#1E1A17] transition-all hover:bg-[#B85D19] hover:text-white cursor-pointer shadow-xs"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next tours"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#1E1A17] transition-all hover:bg-[#B85D19] hover:text-white cursor-pointer shadow-xs"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Embla Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-5">
            {packages.map((pkg,idx) => (
              <div
                key={idx}
                className="min-w-0 flex-[0_0_100%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <PackageCard pkg={pkg} whatsapp={whatsapp} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
