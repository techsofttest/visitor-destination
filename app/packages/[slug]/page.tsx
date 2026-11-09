import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PACKAGES_DATA } from "@/components/data/packages";
import { PackageHeroBanner } from "@/components/packages/inner/PackageHeroBanner";
import { PackageContent } from "@/components/packages/inner/PackageContent";
import { PackageSidebar } from "@/components/packages/inner/PackageSidebar";
import { OtherPackagesCarousel } from "@/components/packages/inner/OtherPackagesCarousel";
import { CtaSection } from "@/components/home/CtaSection";

interface PackageDetail {
    title:string;
    slug:string;
    description:string;
    subtitle:string;
    duration:string;
    time:string;
    inclusions: (string | { title?: string })[] | null;
    image:string;
    price:string;
    pickup:string;
    exclusions: (string | { title?: string })[] | null;
    itinerary: (string | { title?: string })[] | null;
    category: string;
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
  detailed: PackageDetail;
  pac: PackageDetail[];
  contact: any;
  book:{
    title: string;
    content: string;
    whatsapp: string;
     phone: string;
    detail: {
      title:string
    }[];
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

  const res = await fetch(`${baseUrl}/package/${slug}`, {
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
      title: data?.seo?.meta_title ?? data?.detailed?.title ?? "Package Detail",
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

export default async function PackageDetailPage({ params }: PageProps) {
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

  const pck = data?.detailed;

  return (
    <main className="bg-white text-[#221C18]">
      {/* 1. Package Hero Banner matching Blog design */}
      <PackageHeroBanner pkg={pck} />

      {/* 2. Package Body & Sticky Sidebar */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <PackageContent pkg={data.detailed} book={data.book} />
            <PackageSidebar currentPackage={pck} otherPackages={(data.pac ?? []).slice(0, 4)} book={data.book} />
          </div>
        </div>
      </section>

      {/* 3. Other Packages Carousel Section */}
      <OtherPackagesCarousel packages={data.pac ?? []} whatsapp={data.book.whatsapp} />

      {/* 4. Bottom CTA Section */}
      <CtaSection cta={data?.cta} phone={data?.contact?.phone} />
    </main>
  );
}
