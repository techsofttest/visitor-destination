import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

interface BlogPost{
title:string;
    slug:string;
    subtitle:string;
    date:string;
    content :string;
    image:string;
    read_time:string;
}

export function FeaturedBlogCard({ blog }: {blog: BlogPost} ) {
  return (
    <section className="pt-12 md:pt-16 pb-8">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B85D19]">
            <span className="h-2 w-2 rounded-full bg-[#B85D19]" />
            Featured Story
          </div>
          <span className="text-xs text-[#777] font-medium">Editor&apos;s Pick</span>
        </div>

        <article className="group relative overflow-hidden rounded-2xl border border-black/10 bg-[#FAF8F5] shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#B85D19]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Featured Blog Image */}
            <div className="relative h-72 sm:h-96 lg:h-auto lg:col-span-7 overflow-hidden bg-[#2D241C]">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              <div className="absolute left-4 top-4">
                <span className="rounded bg-[#B85D19] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                  {blog.subtitle}
                </span>
              </div>
            </div>

            {/* Featured Blog Content */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 lg:col-span-5 bg-white">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#777] mb-3">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Calendar size={13} className="text-[#B85D19]" />
                    {blog.date}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Clock size={13} className="text-[#B85D19]" />
                    {blog.read_time}
                  </span>
                </div>

                <h2 className="font-[family-name:var(--font-bebas)] text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide leading-tight text-[#111111] transition-colors group-hover:text-[#B85D19]">
                  <Link href={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>

                <div className="mt-3 text-sm text-[#444444] leading-relaxed line-clamp-3 sm:line-clamp-4"dangerouslySetInnerHTML={{__html:blog.content}} />
              </div>

              <div className="mt-6 pt-5 border-t border-black/10 flex items-center justify-between">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#B85D19] transition-transform group-hover:translate-x-1"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight size={16} />
                </Link>

                <span className="text-xs text-[#888] font-medium flex items-center gap-1">
                  <BookOpen size={13} /> Detailed Article
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
