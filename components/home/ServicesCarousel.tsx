import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WHATSAPP_URL, services, unsplash } from "@/components/data/content";

export function ServicesCarousel() {
  const featuredServices = services.slice(0, 4);

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* Section Header */}
        <div className="mb-8 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div>
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="font-[family-name:var(--font-bebas)] max-w-2xl text-4xl uppercase tracking-[0.03em] leading-[0.95] md:text-6xl">
              More ways to make it memorable.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <p className="max-w-md text-sm leading-6 text-[#666] sm:text-right md:text-base">
              From one-day discoveries to complete group itineraries, we take care of the details.
            </p>
            {/* View All Services Button */}
            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 rounded-lg border border-[#B85D19] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#B85D19] transition-all duration-200 hover:bg-[#B85D19] hover:!text-white shadow-xs"
            >
              <span>View all services</span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid Layout (Non-carousel) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <article
              key={service.title}
              className="group relative flex h-[410px] w-full flex-col justify-end overflow-hidden rounded-xl bg-[#302B25] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={service.image.startsWith("/") ? service.image : unsplash(service.image, 760)}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5 transition-colors duration-300 group-hover:from-black/95" />

              {/* Tag Pill */}
              {/* <div className="absolute left-5 top-5">
                <span className="rounded bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-xs border border-white/10">
                  {service.tag}
                </span>
              </div> */}

              {/* Bottom Details */}
              <div className="relative z-10 p-5">
                <h3 className="text-2xl font-semibold leading-snug tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-2 min-h-[40px] text-xs leading-5 text-white/80">
                  {service.description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-xs font-bold !text-[#1A1613] transition-colors hover:bg-[#FDB414]"
                >
                  <span>Enquire now</span>
                  <ArrowUpRight size={16} className="text-[#1A1613]" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
