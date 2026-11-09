"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PackageCard } from "@/components/packages/PackageCard";

export { PackageCard };

interface DesertPackage {
  title: string;
  slug: string;
  subtitle: string;
  duration: string;
  inclusions: string[];
  image: string;
  price: string;
  category: string;
}

export function PackagesGrid({
  packages,
  whatsapp,
}: {
  packages: DesertPackage[];
  whatsapp: string;
}) {
  const INITIAL_COUNT = 6;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT);

  // Extract unique categories safely
  const categories = [
    "All",
    ...Array.from(new Set(packages.map((p) => p.category).filter(Boolean))),
  ];

  // Filter packages based on active category
  const filteredPackages =
    activeCategory === "All"
      ? packages
      : packages.filter((p) => p.category === activeCategory);

  // Paginated packages to render
  const visiblePackages = filteredPackages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPackages.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_COUNT); // Reset pagination count on category tab switch
  };

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 space-y-8">
        {/* Category Filter Buttons (Centered) */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shadow-xs cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#B85D19] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered & Paginated Packages Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePackages.map((pkg, idx) => (
            <PackageCard key={pkg.slug || idx} pkg={pkg} whatsapp={whatsapp} />
          ))}
        </div>

        {/* See More Button */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleSeeMore}
              className="inline-flex items-center gap-2 rounded-xl bg-[#B85D19] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#9E4E14] transition-all cursor-pointer"
            >
              <span>See More Packages</span>
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}