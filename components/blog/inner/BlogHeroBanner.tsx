import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
interface BlogPost {
  title: string;
  slug: string;
  subtitle: string;
  date: string;
  content: string;
  image: string;
  read_time: string;
}

export function BlogHeroBanner({ post }: { post: BlogPost }) {
  return (
    <section className="relative overflow-hidden bg-[#1E1A17] text-white pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20 border-b border-black/10">
      {/* Subtle Desert SVG Dune Waves & Silhouette in background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Subtle warm desert radial glow */}
        <div className="absolute right-0 top-0 h-[360px] w-[360px] -translate-y-1/3 translate-x-1/4 rounded-full bg-[#B85D19]/15 blur-3xl pointer-events-none" />

        {/* Desert Dunes SVG Wave graphic spanning bottom of header */}
        <svg
          className="absolute -bottom-1 left-0 w-full h-28 sm:h-36 md:h-44 text-[#B85D19]/15"
          viewBox="0 0 1440 240"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Background distant gentle dune */}
          <path
            d="M0 160C240 100 480 200 720 140C960 80 1200 180 1440 120V240H0V160Z"
            fill="currentColor"
            fillOpacity="0.35"
          />
          {/* Midground rolling dune wave */}
          <path
            d="M0 190C180 140 360 210 600 170C840 130 1080 220 1440 160V240H0V190Z"
            fill="currentColor"
            fillOpacity="0.6"
          />
          {/* Foreground sweeping sand dune crest */}
          <path
            d="M0 210C300 175 600 235 900 195C1150 165 1320 215 1440 190V240H0V210Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-white/70">
          <Link href="/" className="hover:text-[#FDB414] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#FDB414] transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-[#FDB414] truncate max-w-[200px] sm:max-w-[320px]">
            {post.subtitle}
          </span>
        </nav>

        {/* Category Tag */}
        <span className="inline-block rounded bg-[#B85D19] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm mb-3">
          {post.subtitle}
        </span>

        {/* Article Title */}
        <h1 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-white leading-[1.05] max-w-4xl">
          {post.title}
        </h1>

        {/* Meta Info Bar */}
        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-white/80 border-t border-white/10 pt-4">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Calendar size={14} className="text-[#FDB414]" />
            {post.date}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Clock size={14} className="text-[#FDB414]" />
            {post.read_time}
          </span>
        </div>
      </div>
    </section>
  );
}
