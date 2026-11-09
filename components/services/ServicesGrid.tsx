"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface ServiceItem {
  title: string;
  image: string;
  content: string;
}

export function ServiceCard({ service, whatsapp }: { service: ServiceItem; whatsapp: string }) {
  const whatsappMessage = encodeURIComponent(
    `Hello Abu Dhabi Desert Safari, I am interested in ${service.title}.`
  );

  return (
    <article className="group relative flex h-[410px] w-full flex-col justify-end overflow-hidden rounded-xl bg-[#302B25] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col justify-end">
        <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide leading-tight text-white transition-colors">
          {service.title}
        </h3>
        <div
          className="mt-2 min-h-[40px] text-xs leading-relaxed text-white/80 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: service.content }}
        />

        {/* Action Link: Full-width white button */}
        <div className="mt-2">
          <Button
            href={`https://wa.me/${whatsapp}?text=${whatsappMessage}`}
            isExternal
            variant="outline"
            size="sm"
            showIcon
            icon={
              <ArrowUpRight
                size={16}
                className="text-[#1A1613] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:!text-white"
              />
            }
            iconPosition="right"
            className="w-full justify-between !rounded-lg !bg-white px-4 py-3 text-xs font-bold !text-black !border-transparent !hover:border-transparent hover:!bg-[#FDB414] hover:!text-white transition-colors shadow-xs"
          >
            <span>Enquire now</span>
          </Button>
        </div>
      </div>
    </article>
  );
}

export function ServicesGrid({ services, whatsapp }: { services: ServiceItem[]; whatsapp: string }) {
  const INITIAL_COUNT = 8;
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT);

  const visibleServices = services.slice(0, visibleCount);
  const hasMore = visibleCount < services.length;

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleServices.map((service, idx) => (
            <ServiceCard key={service.title || idx} service={service} whatsapp={whatsapp} />
          ))}
        </div>

        {/* See More Button Container */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleSeeMore}
              className="inline-flex items-center gap-2 rounded-xl bg-[#B85D19] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#9E4E14] transition-all cursor-pointer"
            >
              <span>See More Services</span>
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}