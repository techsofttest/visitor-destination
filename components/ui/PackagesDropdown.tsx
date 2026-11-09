"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ArrowUpRight,
  MapPin,Clock
} from "lucide-react";
import { DesertIcon } from "@/components/ui/SocialIcons";

interface TourItem {
  id: string | number;
  title: string;
  slug: string;
  image:string;
  price:string;
  duration:string;
}

interface TourCategory {
  id: string | number;
  title: string;
  slug: string;
  tours: TourItem[];
}

interface PackagesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  tour: TourCategory[];
  whatsapp:string;
}

interface PackagesDropdownContentProps {
  tour: TourCategory[];
  onClose?: () => void;
  whatsapp:string;
}

export function PackagesDropdownContent({
  tour,whatsapp,
  onClose,
}: PackagesDropdownContentProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = tour[activeIndex] ?? tour[0];

  return (
    <div className="w-[960px] max-w-[96vw] overflow-hidden rounded-2xl bg-white text-[#111111] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.22)] border border-black/10">
      <div className="grid grid-cols-12 min-h-[300px]">

        {/* Left Column: Dynamic Tour Categories */}
        <div className="col-span-3 border-r border-black/5 bg-[#FBF9F6] p-4 flex flex-col justify-between">

          <div className="space-y-2">
            <span className="block px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#888]">
              Tour Categories
            </span>

            {tour.map((category, index) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left text-[13px] font-bold transition-all cursor-pointer ${
                  activeIndex === index
                    ? "bg-[#B85D19] text-white shadow-sm"
                    : "text-[#2D241C] hover:bg-white hover:text-[#B85D19]"
                }`}
              >
                <span className="flex items-center gap-2.5 min-w-0">
                  <DesertIcon
                    size={17}
                    className={`shrink-0 transition-colors ${
                      activeIndex === index
                        ? "text-white"
                        : "text-[#B85D19]"
                    }`}
                  />

                  <span className="truncate">
                    {category.title}
                  </span>
                </span>

                <span
                  className={`flex h-5 min-w-5 px-1 items-center justify-center rounded-full text-[10px] font-bold transition-colors ${
                    activeIndex === index
                      ? "bg-white/20 text-white"
                      : "bg-black/5 text-[#666] group-hover:bg-[#B85D19]/10 group-hover:text-[#B85D19]"
                  }`}
                >
                  {category.tours?.length ?? 0}
                </span>
              </button>
            ))}

            {tour.length === 0 && (
              <p className="px-2 py-3 text-xs text-gray-500">
                No tour categories available.
              </p>
            )}
          </div>

          {/* WhatsApp Help */}
          <div className="mt-6">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-black/90">
              Need Help Choosing?
            </span>

            <p className="mt-1 text-[11.5px] text-black/90 leading-snug">
              Chat with our Abu Dhabi safari guides directly on WhatsApp.
            </p>

            <a
              href={`https://wa.me/${whatsapp}?text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%27d%20like%20to%20book%20a%20tour.`}
              target="_blank"
              rel="noreferrer"
              className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-[#B85D19] hover:underline"
            >
              <span>Instant WhatsApp Concierge</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Right Column: Tours from Selected Category */}
        <div className="col-span-9 p-6 bg-white flex flex-col">

          {activeCategory ? (
            <>
              {/* Category Heading */}
              <div className="mb-4 flex items-center justify-between border-b border-black/5 pb-3">
                <div>
                  <h3 className="text-sm font-bold text-[#1E1A17]">
                    {activeCategory.title}
                  </h3>

                  <p className="mt-1 text-[11px] text-[#888]">
                    Explore our available tours
                  </p>
                </div>

                <Link
                  href="/packages"
                  onClick={onClose}
                  className="group inline-flex items-center gap-1 text-xs font-bold text-[#B85D19] hover:text-[#9B4C12] transition-colors"
                >
                  <span>Explore all tours</span>
                  <ChevronRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              {/* Dynamic Tour List */}
              {activeCategory.tours?.length > 0 ? (
                <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                {activeCategory.tours.map((pkg) => (
                  <Link
                    key={pkg.id}
                    href={`/packages/${pkg.slug}`}
                    onClick={onClose}
                    className="group flex items-center gap-3.5 rounded-lg p-2 transition-colors hover:bg-[#FAF8F5]"
                  >
                    {/* Visual Thumbnail */}
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#2D241C]">
                      <Image
                        src={pkg?.image || ""}
                        alt={pkg.title}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-center overflow-hidden">
                      <h4 className="line-clamp-1 text-[13.5px] font-semibold text-[#1E1A17] transition-colors group-hover:text-[#B85D19]">
                        {pkg.title}
                      </h4>
                      <div className="mt-0.5 flex items-center gap-2 text-[11px] text-[#777]">
                        {/* <span className="flex items-center gap-1 font-semibold text-[#1E1A17]">
                          <Star size={11} fill="#FDB414" color="#FDB414" /> {pkg.rating}
                        </span> 
                        <span className="text-[#DDD]">•</span>  */}
                        
                        {pkg.duration &&<span className="flex items-center gap-1">
                          <Clock size={11} /> {pkg.duration}
                        </span>}
                      </div>
                      {pkg.price && <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-[13px] font-bold text-[#B85D19]">
                         AED {pkg.price}
                        </span>
                        <span className="text-[10px] text-[#888]">/ person</span>
                      </div>}
                    </div>
                  </Link>
                ))}
              </div>
                  
              ) : (
                <div className="flex flex-1 items-center justify-center py-12 text-center">
                  <div>
                    <MapPin
                      size={28}
                      className="mx-auto mb-2 text-[#B85D19]/50"
                    />
                    <p className="text-sm font-semibold text-[#2D241C]">
                      No tours available
                    </p>
                    <p className="mt-1 text-xs text-[#888]">
                      Please check back later.
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center text-sm text-gray-500">
              No tour categories available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function PackagesDropdown({
  isOpen,
  onClose,
  className = "",
  tour,whatsapp
}: PackagesDropdownProps) {
  return (
    <div
      className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200 ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0 pointer-events-none"
      } ${className}`}
    >
      <PackagesDropdownContent whatsapp={whatsapp}
        tour={tour ?? []}
        onClose={onClose}
      />
    </div>
  );
}
