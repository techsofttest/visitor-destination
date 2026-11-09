import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
interface BlogPost{

    title:string;
    slug:string;
    subtitle:string;
    date:string;
    content :string;
    image:string;
    read_time:string;
}
export function BlogCard({ blog }: {blog:BlogPost}) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-black/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#B85D19]/40">
      <div>
        {/* Card Image */}
        <div className="relative h-48 w-full overflow-hidden bg-[#2D241C]">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Category Badge */}
          <div className="absolute left-3 top-3">
            <span className="rounded bg-[#B85D19] px-2 py-0.5 text-[11px] tracking-wider text-white">
              {blog.subtitle}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4">
          {/* Date */}
          <div className="flex items-center gap-1 text-[11px] text-[#777] mb-2 font-medium">
            <Calendar size={11} className="text-[#B85D19]" />
            <span>{blog.date}</span>
          </div>

          {/* Title */}
          <h4 className="font-[family-name:var(--font-bebas)] text-[19px] uppercase tracking-wide leading-tight text-[#111111] transition-colors group-hover:text-[#B85D19] line-clamp-2">
            <Link href={`/blog/${blog.slug}`}>
              {blog.title}
            </Link>
          </h4>

          {/* Description */}
          <div className="mt-2 text-[12px] text-[#444444] leading-relaxed line-clamp-3 font-normal" dangerouslySetInnerHTML={{__html:blog.content}}/>
        </div>
      </div>

      {/* Card Footer: Read More Link & Read Time */}
      <div className="border-t border-black/5 bg-[#FAF8F5] px-4 py-3 flex items-center justify-between">

        {/* Replaced Author with Read Time */}
        <span className="inline-flex items-center gap-1 text-[10.5px] text-[#777] font-medium">
          <Clock size={11} className="text-[#B85D19]" />
          <span>{blog.read_time}</span>
        </span>

        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B85D19] transition-transform group-hover:translate-x-0.5"
        >
          <span>Read Article</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </article>
  );
}

export function BlogsGrid({ blogs,totalCount,}: {blogs: BlogPost[];totalCount: number;}) {
  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-4">
          <div>
            <h3 className="font-[family-name:var(--font-bebas)] text-2xl sm:text-3xl uppercase tracking-wide text-[#111]">
              All Articles & Guides
            </h3>
          </div>
          <span className="text-xs font-bold text-[#B85D19] bg-[#B85D19]/10 px-3 py-1 rounded-full">
            {totalCount} Articles
          </span>
        </div>

        {/* 5-Column Responsive Grid: 1 col on mobile, 2 on sm, 3 on md, 4 on lg, 5 on xl */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {blogs.map((blog,idx) => (
            <BlogCard key={idx} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
