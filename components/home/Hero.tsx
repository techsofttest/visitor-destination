"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowLeft, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/components/data/content";
import { Button } from "@/components/ui/Button";

const HERO_VIDEOS = [
  {
    src: "/hero/279507_medium.mp4",
    title: "Desert Horizon",
  },
  {
    src: "/hero/0_Man_Desert_1280x720.mp4",
    title: "Emirates Experience",
  },
];

export function Hero({hero,whatsapp}:{hero:any,whatsapp:string}) {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleNextVideo = useCallback(() => {
    setActiveVideo((current) => (current + 1) % HERO_VIDEOS.length);
  }, []);

  // When active video changes, reset and play it
  useEffect(() => {
    const currentVideo = videoRefs.current[activeVideo];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, [activeVideo]);

  return (
    <section aria-label="Featured destinations" className="relative w-full max-w-full min-h-[690px] h-[88svh] max-h-[940px] bg-[#29231C] text-white overflow-hidden">
      {/* Background Video Slides - Play sequentially one after other */}
      {HERO_VIDEOS.map((video, index) => (
        <div
          key={video.src}
          aria-hidden={index !== activeVideo}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeVideo ? "opacity-100 z-0" : "pointer-events-none opacity-0 -z-10"
            }`}
        >
          <video
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={video.src}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleNextVideo}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

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
            <div className="text-sm leading-relaxed text-white/90 sm:text-right md:text-base" dangerouslySetInnerHTML={{__html:hero.content ?? ""}} />

            <div className="flex flex-wrap items-center justify-start gap-3.5 sm:justify-end">
              {/* Primary Button */}
              <Button
                href="/packages"
                variant="secondary"
                size="md"
                showIcon
                icon={<ArrowDownRight size={17} className="transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />}
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
