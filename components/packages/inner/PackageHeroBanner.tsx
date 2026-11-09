import Image from "next/image";
import Link from "next/link";
import { Clock, Star, MapPin } from "lucide-react";

export function PackageHeroBanner({ pkg }: { pkg: any }) {
  return (
    <section className="relative overflow-hidden bg-[#1E1A17] text-white pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20 border-b border-black/10">
      {/* Subtle Desert SVG Dune Waves & Silhouette in background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Subtle warm desert radial glow */}
        <div className="absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/3 translate-x-1/4 rounded-full bg-[#B85D19]/15 blur-3xl pointer-events-none" />

        {/* Desert Dunes SVG Wave graphic spanning bottom of header */}
        <svg
          className="absolute -bottom-1 left-0 w-full h-28 sm:h-36 md:h-44 text-[#B85D19]/15"
          viewBox="0 0 1440 240"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 160C240 100 480 200 720 140C960 80 1200 180 1440 120V240H0V160Z"
            fill="currentColor"
            fillOpacity="0.35"
          />
          <path
            d="M0 190C180 140 360 210 600 170C840 130 1080 220 1440 160V240H0V190Z"
            fill="currentColor"
            fillOpacity="0.6"
          />
          <path
            d="M0 210C300 175 600 235 900 195C1150 165 1320 215 1440 190V240H0V210Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Metadata, Breadcrumb, Title & Key Details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-white/70">
              <Link href="/" className="hover:text-[#FDB414] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/packages" className="hover:text-[#FDB414] transition-colors">
                Packages
              </Link>
              <span>/</span>
              <span className="text-[#FDB414] truncate max-w-[200px] sm:max-w-[320px]">
                {pkg.title}
              </span>
            </nav>

            {/* Category / Badge */}
            {/* <div>
              {pkg.badge ? (
                <span className="inline-block rounded bg-[#B85D19] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm mb-3">
                  {pkg.badge}
                </span>
              ) : (
                <span className="inline-block rounded bg-[#B85D19] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm mb-3">
                  {pkg.category}
                </span>
              )}
            </div> */}

            {/* Package Title */}
            <h1 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-white leading-[1.02]">
              {pkg.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
              {pkg.subtitle}
            </p>

            {/* Meta Info Bar */} {pkg.duration && pkg.time && pkg.pickup &&(
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/80 border-t border-white/10 pt-4">
              {pkg.duration && pkg.time &&(<span className="inline-flex items-center gap-1.5 font-medium">
                <Clock size={14} className="text-[#FDB414]" />
                {pkg.duration} ({pkg.time})
              </span>)}
              {/* <span>•</span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Star size={14} fill="#FDB414" color="#FDB414" />
                {pkg.rating} ({pkg.reviews} reviews)
              </span> */}
              <span>•</span>{pkg.pickup &&
              <span className="inline-flex items-center gap-1.5 font-medium">
                <MapPin size={14} className="text-[#FDB414]" />
                {pkg.pickup}
              </span>}
            </div>)}
          </div>

          {/* Right Column: Hero Image with locked 4:3 Aspect Ratio (identical to package card) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#2D241C] shadow-2xl">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Price Pill Overlay */}
              {pkg.price && pkg.duration && (<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-black/60 px-4 py-2.5 backdrop-blur-md">
                {pkg.price &&<div>
                  <div className="text-lg font-black text-[#FDB414] leading-tight">
                    AED {pkg.price} <span className="text-xs font-normal text-white/80">/ person</span>
                  </div>
                </div>}
                <div className="flex items-center text-[12px] font-semibold text-white">
                  <span>{pkg.duration}</span>
                </div>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
