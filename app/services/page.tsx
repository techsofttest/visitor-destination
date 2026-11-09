import type { Metadata } from "next";
import { services } from "@/components/data/content";
import { PageHeroBanner } from "@/components/global/PageHeroBanner";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { CtaSection } from "@/components/home/CtaSection";

// export const metadata: Metadata = {
//   title: "All Tours & Travel Services | Abu Dhabi Desert Safari",
//   description:
//     "Explore all services by Abu Dhabi Desert Safari — from desert adventures and overnight camps to city tours, airport transfers, and hotel bookings across the UAE.",
// };
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
  service:{
    title: string;
    content: string;
    image: string;
  }[];
    whatsapp:string
 cta: {
    title: string;
    content: string;
    image: string;
    phone: string;
  };
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/service`, {
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
export default async function ServicesPage() {
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
        title={data?.banner.title || "Services"}
        subtitle={data?.banner.content || "Complete travel & excursion solutions across Abu Dhabi and the UAE, from desert expeditions to private city explorations."}
        imageSrc={data?.banner.image || "/banner/Six Saddled Camels in Golden Dunes.png"}
      />

      {/* 2. Services Grid */}
      <ServicesGrid services={data?.service ?? []} whatsapp={data?.whatsapp ?? ''}/>

      {/* 3. CTA Section */}
      <CtaSection cta={data?.cta} phone={data?.cta.phone}/>
    </main>
  );
}
