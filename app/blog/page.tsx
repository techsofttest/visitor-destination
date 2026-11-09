import type { Metadata } from "next";
import { PageHeroBanner } from "@/components/global/PageHeroBanner";
import { FeaturedBlogCard } from "@/components/blog/FeaturedBlogCard";
import { BlogsGrid } from "@/components/blog/BlogsGrid";
import { CtaSection } from "@/components/home/CtaSection";
interface BlogPostItem{
   title:string;
    slug:string;
    subtitle:string;
    date:string;
    content :string;
    image:string;
    read_time:string;
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
    image:string;
  };
featured: BlogPostItem;
   blog: BlogPostItem[];
contact:any;
 cta: {
    title: string;
    content: string;
    image: string;
  };
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/blog`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch SEO data");
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getSEO();

    return {
      title: data?.seo?.meta_title ?? "Home",
      description: data?.seo?.meta_desc ?? "",
      keywords: data?.seo?.meta_key ?? "",
    };
  } catch (error) {
    return {
      title: "Home",
    };
  }
}

export default async function BlogsPage() {
   let data: ProductResponse | null = null;

  try {
    data = await getSEO();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }
  return (
    <main className="bg-white text-[#221C18]">
      {/* 1. Common Hero Banner */}
      <PageHeroBanner
        title={ data?.banner.title ||"Blog"}
        subtitle={ data?.banner.content  ||"Insider guides, travel tips, cultural insights, and stories from the golden dunes of Abu Dhabi."}
        imageSrc={data?.banner.image  || "/banner/Golden Hour Camel Caravan.png"}
      />

      {data?.featured && <FeaturedBlogCard blog={data.featured} />}

      {/* 3. Blogs Listing Grid */}
      {data?.blog && <BlogsGrid blogs={data.blog} totalCount={data.blog.length ?? 0} />}
      {/* 4. Bottom CTA Section */}
      <CtaSection  cta={data?.cta } phone={data?.contact.phone }/>
    </main>
  );
}
