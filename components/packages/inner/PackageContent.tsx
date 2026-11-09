"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
interface PackageDetail {
    title?:string;
    slug:string;
    description:string;
    subtitle:string;
    duration:string;
    time:string;
    inclusions: PackageText[] | null;
    image:string;
    price:string;
    pickup:string;
    exclusions: PackageText[] | null;
    itinerary: PackageText[] | null;
    category: string;
}
type PackageText = string | { title?: string };

interface BookInfo {
  title?: string;
  content?: string;
  whatsapp?: string;
  phone?: string;
  detail?: { title: string }[];
}

function getPackageText(item: PackageText): string {
  return typeof item === "string" ? item : item.title ?? "";
}

export function PackageContent({ pkg,book }: { pkg: PackageDetail ,book:BookInfo}) {
    const whatsappMessage = encodeURIComponent(
    `Hello Abu Dhabi Desert Safari, I want to book the ${pkg?.title || "package"}.`
  );
  return (
    <article className="lg:col-span-8">
      {/* Back to Packages link */}
      <Link
        href="/packages"
        className="inline-flex items-center gap-2 text-xs font-bold text-[#B85D19] hover:underline mb-6"
      >
        <ArrowLeft size={14} /> Back to all packages
      </Link>

      {/* Package Main Image */}
      <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-2xl mb-10 bg-[#2D241C]">
        <Image
          src={pkg.image}
          alt={pkg?.title || ""}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover"
        />
      </div>
   {/* Package Structured Sections */}
   <div className="space-y-8 text-[#333333]">
    <div className="space-y-3">
     <div className="[&_blockquote]:rounded-xl [&_blockquote]:bg-[#FAF8F5] [&_blockquote]:p-5 sm:[&_blockquote]:p-6  [&_blockquote]:mb-8 [&_blockquote_p]:text-base sm:[&_blockquote_p]:text-lg [&_blockquote_p]:leading-relaxed [&_blockquote_p]:text-[#2D241C] [&_blockquote_p]:font-medium [&_h2]:mt-3 [&_h2]:font-[family-name:var(--font-bebas)] [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-[#111111] [&_p]:text-sm sm:[&_p]:text-base [&_p]:leading-relaxed [&_p]:text-[#444444] [&_ul]:mt-3 [&_ul]:space-y-3 [&_ul]:rounded-xl [&_ul]:bg-[#FAF8F5] [&_ul]:p-4 sm:[&_ul]:p-5 [&_ul]:border [&_ul]:border-black/5 [&_li]:relative [&_li]:flex [&_li]:items-start [&_li]:gap-2.5 [&_li]:text-xs sm:[&_li]:text-sm [&_li]:text-[#2D241C] [&_li]:before:content-['✓'] [&_li]:before:flex [&_li]:before:items-center [&_li]:before:justify-center [&_li]:before:shrink-0 [&_li]:before:mt-0.5 [&_li]:before:h-5 [&_li]:before:w-5 [&_li]:before:rounded-full [&_li]:before:rounded-full [&_li]:before:bg-white [&_li]:before:border [&_li]:before:border-[#B85D19] [&_li]:before:text-[#B85D19] [&_li]:before:text-xs [&_li]:before:font-bold [&_li]:before:text-xs [&_li]:before:font-bold"
      dangerouslySetInnerHTML={{__html: pkg.description ?? "",}}/></div>
        

        {/* Inclusions & Exclusions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-black/10">
         {pkg.inclusions && pkg.inclusions.length > 0 && (
          
          <div className="rounded-xl bg-white border border-black/10 p-5 shadow-xs">
            <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-[#1E1A17] mb-3 flex items-center gap-2">
              What is Included
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#333]">
              {(pkg.inclusions ?? []).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>{getPackageText(item)}</span>
                </li>
              ))}
            </ul>
          </div>)}

         {pkg.exclusions && pkg.exclusions.length > 0 && (
          <div className="rounded-xl bg-white border border-black/10 p-5 shadow-xs">
            <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-[#1E1A17] mb-3 flex items-center gap-2">
              Exclusions / Optional
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#555]">
              {(pkg.exclusions ?? []).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <XCircle size={15} className="text-[#B71955] shrink-0 mt-0.5" />
                  <span>{getPackageText(item)}</span>
                </li>
              ))}
            </ul>
          </div>)}
        </div>

        {/* Important Info / Guidelines */}
        {pkg.itinerary && pkg.itinerary.length > 0 && (
          <div className="rounded-xl bg-[#FFF8F0] border border-[#B85D19]/20 p-5 sm:p-6">
            <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-[#B85D19] mb-3 flex items-center gap-2">
              <Info size={28} />
              Important Guidelines & Advice
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#443830]">
              {pkg.itinerary.map((info, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B85D19] shrink-0 mt-2" />
                  <span>{getPackageText(info)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Booking Quick Box */}
      <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#1E1A17] to-[#2D241C] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <h4 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-white">
            {book.title}{pkg.title}?
          </h4>
          <div className="text-xs sm:text-sm text-white/80 mt-1 max-w-md" dangerouslySetInnerHTML={{__html:book?.content ?? ""}} />
        </div>
        <Button
          href={`https://wa.me/${book.whatsapp}?text=${whatsappMessage}`}
          isExternal
          variant="primary"
          size="md"
          showIcon
          className="whitespace-nowrap"
        >
          Book on WhatsApp
        </Button>
      </div>
    </article>
  );
}
