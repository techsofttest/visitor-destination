import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogHeroBanner } from "@/components/blog/inner/BlogHeroBanner";
import { BlogContent } from "@/components/blog/inner/BlogContent";
import { BlogSidebar } from "@/components/blog/inner/BlogSidebar";
import { CtaSection } from "@/components/home/CtaSection";

interface BlogPostItem {
  title: string;
  slug: string;
  subtitle: string;
  date: string;
  content: string;
  image: string;
  read_time: string;
}

interface ProductResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
  banner: {
    title: string;
    content: string;
    image: string;
  };
  detailed: BlogPostItem;
  blog: BlogPostItem[];
  contact: any;
  book:{
    title: string;
    content: string;
    whatsapp: string;
  }
  info:{
    title: string;
    content: string;
    whatsapp: string;
    phone:string;
  }
  cta: {
    title: string;
    content: string;
    image: string;
  };
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getSEO({ slug }: { slug: string }): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/blog/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog post data");
  }

  return res.json();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const data = await getSEO({ slug });

    return {
      title: data?.seo?.meta_title ?? data?.detailed?.title ?? "Blog Detail",
      description: data?.seo?.meta_desc ?? "",
      keywords: data?.seo?.meta_key ?? "",
      openGraph: {
        title: data?.detailed?.title,
        description: data?.seo?.meta_desc,
        images: data?.detailed?.image ? [{ url: data.detailed.image }] : [],
      },
    };
  } catch (error) {
    return {
      title: "Blog Detail",
    };
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  let data: ProductResponse | null = null;

  try {
    data = await getSEO({ slug });
  } catch (error) {
    console.error("Error fetching blog detail data:", error);
  }

  // If the API doesn't return a post, trigger 404
  if (!data || !data.detailed) {
    notFound();
  }

  const post = data.detailed;
  
  // Get related posts from the API's blog array (excluding current post)
  const relatedPosts = data.blog ? data.blog.filter((p) => p.slug !== post.slug).slice(0, 3) : [];

  return (
    <main className="bg-white text-[#221C18]">
      {/* 1. Hero Banner */}
      <BlogHeroBanner post={post} />

      {/* 2. Article Body & Sidebar Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <BlogContent post={post} book={data.book}/>
            <BlogSidebar relatedPosts={relatedPosts} info={data.info} />
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA Section */}
      <CtaSection cta={data?.cta} phone={data?.contact?.phone} />
    </main>
  );
}