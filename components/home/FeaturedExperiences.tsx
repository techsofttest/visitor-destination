"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { featuredExperiences } from "@/components/data/content";

interface ExperienceItem {
  title: string;
  description: string;
  images: string[];
  alt: string;
  href: string;
  bgColor: string;
}

function ExperienceCard({ exp, interval = 4500 }: { exp: ExperienceItem; interval?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!exp.images || exp.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % exp.images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [exp.images, interval]);

  return (
    <Link
      href={exp.href}
      className={`group relative min-h-[410px] overflow-hidden rounded-xl ${exp.bgColor} text-white md:min-h-[510px] block`}
    >
      {/* Background image carousel */}
      {exp.images.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
            }`}
        >
          <Image
            src={src}
            alt={`${exp.alt} - Slide ${idx + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={idx === 0}
            className={`object-cover transition-transform duration-[6000ms] ease-out ${idx === currentIndex ? "scale-105" : "scale-100"
              }`}
          />
        </div>
      ))}

      {/* Top-down gradient covering up to half the card */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none z-10" />

      {/* Subtle bottom gradient to highlight indicator */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />

      {/* Top content */}
      <div className="absolute inset-x-6 top-6 flex items-start justify-between gap-4 md:inset-x-8 md:top-8 z-20">
        <div>
          <h3 className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-[0.03em] leading-none text-white md:text-5xl">
            {exp.title}
          </h3>
          <p className="mt-2.5 max-w-sm text-sm leading-6 text-white/95">
            {exp.description}
          </p>
        </div>
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-white text-[#241909] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shadow-md">
          <ArrowUpRight size={21} />
        </span>
      </div>

      {/* Very small indicator on bottom-left */}
      <div
        className="absolute bottom-5 left-6 md:bottom-6 md:left-8 z-20 flex items-center gap-1.5"
        aria-label={`Slide ${currentIndex + 1} of ${exp.images.length}`}
      >
        {exp.images.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(dotIdx);
            }}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${dotIdx === currentIndex
              ? "w-4 bg-white"
              : "w-1 bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
        {/* <span className="ml-1 text-[10px] font-medium tracking-wider text-white/75 select-none">
          {currentIndex + 1}/{exp.images.length}
        </span> */}
      </div>
    </Link>
  );
}

export function FeaturedExperiences() {
  return (
    <section id="experiences" className="bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
          <div>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-[0.03em] leading-[0.95] md:text-6xl">
              Choose your adventure.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#656565]">
            From the rush of the dunes to the energy of the city, find the experience that feels like you.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredExperiences.map((exp, i) => (
            <ExperienceCard
              key={exp.title}
              exp={exp}
              interval={4000 + i * 800} // slight offset so they don't change at the exact same millisecond
            />
          ))}
        </div>
      </div>
    </section>
  );
}
