"use client";

import { useEffect, useRef } from "react";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero({ hero, whatsapp }: { hero: any; whatsapp: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Fallback to ensure video plays on strict browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  return (
    <section
      aria-label="Featured destinations"
      className="relative w-full max-w-full min-h-[690px] h-[88svh] max-h-[940px] bg-[#29231C] text-white overflow-hidden"
    >
      {/* Background Loop Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/hero/frontbanner.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Gradients & overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-[1]" />

      {/* Hero Content */}
      <div className="relative z-[2] mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-20 pt-36 md:px-10 md:pb-24 lg:px-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          {/* Main Heading (H1) on Left */}
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="font-[family-name:var(--font-bebas)] text-5xl uppercase tracking-[0.02em] leading-[0.92] sm:text-6xl md:text-7xl lg:text-8xl">
              {hero.title || ""}
            </h1>
          </div>

          {/* Description & Action Buttons Aligned to Right Edge */}
          <div className="flex max-w-lg flex-col items-start gap-5 sm:items-end md:pb-2">
            <div
              className="text-sm leading-relaxed text-white/90 sm:text-right md:text-base"
              dangerouslySetInnerHTML={{ __html: hero.content ?? "" }}
            />

            <div className="flex flex-wrap items-center justify-start gap-3.5 sm:justify-end">
              {/* Primary Button */}
              <Button
                href="/packages"
                variant="secondary"
                size="md"
                showIcon
                icon={
                  <ArrowDownRight
                    size={17}
                    className="transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"
                  />
                }
              >
                Explore Tours
              </Button>

              {/* Secondary Button */}
              <Button
                href={`https://wa.me/${whatsapp}?text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%27d%20like%20to%20book%20a%20tour.`}
                isExternal
                variant="glass"
                size="md"
                showIcon
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}