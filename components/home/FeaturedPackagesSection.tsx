import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PackageCard } from "@/components/packages/PackageCard";

interface DesertPackage{
title:string;
slug:string;
subtitle:string;
duration:string;
inclusions:string[];
image:string;
price:string;
category?:string;
}

export function FeaturedPackagesSection({pac,whatsapp}:{pac:DesertPackage[],whatsapp:string}) {
  return (
    <section id="packages" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div>
            <SectionLabel>Handcrafted Desert Adventures</SectionLabel>
            <h2 className="font-[family-name:var(--font-bebas)] max-w-3xl text-4xl uppercase tracking-[0.02em] leading-[0.95] md:text-6xl text-[#1E1A17]">
              Featured Abu Dhabi Desert Safaris
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <p className="max-w-md text-sm leading-6 text-[#666] sm:text-right md:text-base">
              Choose from 6 curated desert experiences guaranteed to deliver thrill, luxury, and authentic Arabian memories.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B85D19]">
              <ShieldCheck size={16} /> 100% Best Price & Direct Booking Guarantee
            </div>
          </div>
        </div>

        {/* 6 Packages Grid Layout using shared PackageCard */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pac.map((pkg,idx) => (
            <PackageCard key={idx} pkg={pkg} whatsapp={whatsapp} />
          ))}
        </div>
      </div>
    </section>
  );
}
