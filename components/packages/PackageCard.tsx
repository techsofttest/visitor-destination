import Image from "next/image";
import Link from "next/link";
import { Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
export function PackageCard({ pkg, whatsapp }: { pkg: DesertPackage ,whatsapp :string}) {
  const detailUrl = `/packages/${pkg.slug}`;
 const whatsappMessage = encodeURIComponent(
    `Hello Abu Dhabi Desert Safari, I want to book the ${pkg?.title || "package"}.`
  );
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-black/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#B85D19]/40">
      <div>
        {/* Image & Badges: Locked 4:3 Aspect Ratio */}
        <Link href={detailUrl} className="block relative aspect-[4/3] w-full overflow-hidden bg-[#2D241C]">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Badge */}
          {/* {pkg.subtitile&& (
            <div className="absolute left-3.5 top-3.5">
              <span className="rounded bg-[#B85D19] px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-white shadow-sm">
                {pkg.subtitile}
              </span>
            </div>
          )} */}

          {/* Duration */}{pkg.duration &&
          <div className="absolute right-3.5 top-3.5 flex items-center gap-1 rounded bg-black/60 px-2 py-0.5 text-[10.5px] font-medium text-white backdrop-blur-xs">
            <Clock size={11} />
            <span>{pkg.duration}</span>
          </div>}

          {/* Rating pill bottom-left */}
          {/* <div className="absolute bottom-2.5 left-3.5 flex items-center gap-1.5 text-xs text-white">
            <span className="flex items-center gap-0.5 rounded bg-black/70 px-2 py-0.5 font-bold text-white backdrop-blur-xs text-[11.5px]">
              <Star size={11} fill="#FDB414" color="#FDB414" /> {pkg.price}
            </span>
            <span className="text-white font-medium drop-shadow-sm text-[11px]">
              ({pkg.reviews} reviews)
            </span>
          </div> */}
        </Link>

        {/* Content */}
        <div className="p-4">
          <Link href={detailUrl} className="block">
            <h3 className="font-[family-name:var(--font-bebas)] text-[23px] uppercase tracking-wide leading-tight text-[#111111] transition-colors group-hover:text-[#B85D19]">
              {pkg.title}
            </h3>
          </Link>
          <p className="mt-1.5 text-[12.5px] text-[#333333] leading-snug line-clamp-2 font-normal">
            {pkg.subtitle}
          </p>

         {pkg.inclusions && pkg.inclusions.length > 0 && (
          <div className="mt-3.5 border-t border-black/10 pt-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#222222]">
              Key Inclusions:
            </span>
            <ul className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1.5 text-[11.5px] font-medium text-[#1A1A1A]">
              {pkg.inclusions.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B85D19] shrink-0" />
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>)}

          {/* Read More link */}
          <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between">
            <Link
              href={detailUrl}
              className="inline-flex items-center gap-1.5 text-xs font-semibold !text-[#B85D19] underline"
            >
              <span>Read package details</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Card Footer: Price & Direct CTA */}
      <div className="border-t border-black/5 bg-[#FAF8F5] px-4 py-3 flex items-center justify-between">
        {pkg.price &&<div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4A4A4A]">
            Starting from
          </span>
          <div className="text-base font-extrabold text-[#B85D19] leading-tight">
            {pkg.price} <span className="text-xs font-semibold text-[#333333]">/ person</span>
          </div>
        </div>}

        <Button
          href={`https://wa.me/${whatsapp}?text=${whatsappMessage}`}
          isExternal
          variant="primary"
          size="sm"
          showIcon
          className="rounded-md"
        >
          Book Now
        </Button>
      </div>
    </article>
  );
}
