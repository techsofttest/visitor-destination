import Image from "next/image";
import { Check } from "lucide-react";

export function IntroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#eef3f7] px-5 py-16 md:px-10 md:py-24">
      {/* Sky banner background */}
      <Image
        src="/banner/b.jpg"
        alt="Emirates scenic sky background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-top"
      />

      {/* White gradient from top fading down full height */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent z-[1] pointer-events-none" />

      {/* Subtle overall overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px]" />

      <div className="relative z-10 mx-auto grid max-w-[1280px] items-start gap-8 pt-4 md:grid-cols-[1fr_1.3fr] md:pt-8 lg:gap-12">
        <div>
          <h2 className="font-[family-name:var(--font-bebas)] max-w-lg text-4xl uppercase tracking-[0.03em] leading-[0.95] text-[#1E1E1E] md:text-5xl lg:text-6xl">
            The best journeys are the ones that <span className="text-[#B85D19]">stay with you.</span>
          </h2>
        </div>
        <div className="md:pl-6 lg:pl-10">
          <p className="text-sm leading-7 text-[#2A2A2A] md:text-medium md:leading-5">
            At Abu Dhabi Desert Safari, we bring the Emirates closer through thoughtfully planned tours, desert adventures, and dependable travel services. From your first arrival to your final sunset, we make every part of the journey feel easy.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1A1A1A]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B85D19] text-white">
                <Check size={12} strokeWidth={3} />
              </span>
              Thoughtfully planned trips
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1A1A1A]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B85D19] text-white">
                <Check size={12} strokeWidth={3} />
              </span>
              Friendly local support
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1A1A1A]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B85D19] text-white">
                <Check size={12} strokeWidth={3} />
              </span>
              Simple, seamless travel
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
