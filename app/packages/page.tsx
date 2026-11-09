import type { Metadata } from "next";
import { PageHeroBanner } from "@/components/global/PageHeroBanner";
import { PackagesGrid } from "@/components/packages/PackagesGrid";
import { CtaSection } from "@/components/home/CtaSection";
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
  };whatsapp:string;
  pac:{
    title:string;
    slug:string;
    subtitle:string;
    duration:string;
    inclusions:string[];
    image:string;
    price:string;
    category: string;
  }[];
 cta: {
    title: string;
    content: string;
    image: string;
    phone: string;
  };
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/package`, {
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

export default async function PackagesPage() {
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
        title={data?.banner.title || "Packages"}
        subtitle={data?.banner.content || "Handpicked desert safaris, VIP majlis retreats, and thrilling dune adventures designed for unforgettable Arabian journeys."}
        imageSrc={data?.banner.image || "/banner/Airborne Black Desert Truck.png"}
      />

      <PackagesGrid whatsapp={data?.whatsapp ?? ""} packages={data?.pac ?? []} />

      <CtaSection cta={data?.cta} phone={data?.cta.phone}/>
    </main>
  );
}
