import Image from "next/image";
import { Sparkles } from "lucide-react";

export function AboutHero({hero}:{hero:any}) {
  return (
    <section className="relative isolate flex min-h-[440px] items-end overflow-hidden bg-[#1E1A17] text-white md:min-h-[520px] lg:min-h-[560px]">
      <Image
        src={ hero?.image || "/banner/Desert Camel Ride Panorama.png"}
        alt="Golden desert dunes of Abu Dhabi"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Soft cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-5 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44">
        <div className="max-w-3xl">
          <h1 className="font-[family-name:var(--font-bebas)] text-5xl uppercase tracking-[0.02em] leading-[0.9] text-white sm:text-7xl md:text-8xl" dangerouslySetInnerHTML={{__html:hero?.title || ""}} />
          <div className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg" dangerouslySetInnerHTML={{__html:hero?.content || ""}} />
        </div>
      </div>
    </section>
  );
}

