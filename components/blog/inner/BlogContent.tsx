import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface BlogPost {
  title: string;
  slug: string;
  subtitle: string;
  date: string;
  content: string;
  image: string;
  read_time: string;
}

export function BlogContent({ post ,book }: { post: BlogPost ,book:any }) {
  return (
    <article className="lg:col-span-8">
      {/* Back to Blog link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-bold text-[#B85D19] hover:underline mb-6"
      >
        <ArrowLeft size={14} /> Back to all articles
      </Link>

      {/* Article Main Image */}
      <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-2xl mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      {/* Article Content Container with Clean Tailwind Typography & Checkmark Bullets */}
   <div 
        className="space-y-3 
          [&_hr]:mt-10 [&_hr]:pt-6 [&_hr]:border-t [&_hr]:border-black/10 
          [&_h3]:font-[family-name:var(--font-bebas)] [&_h3]:text-2xl [&_h3]:uppercase [&_h3]:tracking-wide [&_h3]:text-[#111111] [&_h3]:mb-2 
          [&_h2]:font-[family-name:var(--font-bebas)] [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-[#111111] 
          [&_p]:text-sm sm:[&_p]:text-base [&_p]:leading-relaxed [&_p]:text-[#444444] 
          [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:rounded-xl [&_ul]:bg-[#FAF8F5] [&_ul]:p-4 sm:[&_ul]:p-5 [&_ul]:border [&_ul]:border-black/5 
          [&_ul_li]:flex [&_ul_li]:items-start [&_ul_li]:gap-2.5 [&_ul_li]:text-xs sm:[&_ul_li]:text-sm [&_ul_li]:text-[#2D241C]
          [&_ul_li::marker]:hidden
          [&_ul_li]:before:content-[''] [&_ul_li]:before:mt-1 [&_ul_li]:before:h-4 [&_ul_li]:before:w-4 [&_ul_li]:before:shrink-0 
          [&_ul_li]:before:bg-[#B85D19] 
         [&_li]:before:content-['✓'] [&_li]:before:flex [&_li]:before:items-center [&_li]:before:justify-center [&_li]:before:shrink-0 [&_li]:before:mt-0.5 [&_li]:before:h-5 [&_li]:before:w-5 [&_li]:before:rounded-full [&_li]:before:rounded-full [&_li]:before:bg-white [&_li]:before:border [&_li]:before:border-[#B85D19] [&_li]:before:text-[#B85D19] [&_li]:before:text-xs [&_li]:before:font-bold [&_li]:before:text-xs [&_li]:before:font-bold"

        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />

      {/* Booking Quick Box */}
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#1E1A17] to-[#2D241C] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <h4 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-white">
          {book?.title || ""}
          </h4>
          <div className="text-xs sm:text-sm text-white/80 mt-1 max-w-md" dangerouslySetInnerHTML={{__html:book?.content || ""}} />
        </div>
        <Button
         href={`https://wa.me/${book?.whatsapp}?text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%27d%20like%20to%20book%20a%20tour.`}
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