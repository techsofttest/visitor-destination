import type { Metadata } from "next";
import { PageHeroBanner } from "@/components/global/PageHeroBanner";
import { FaqSection } from "@/components/home/FaqSection";
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
  };
   faq: {
    title: string;
    content: string;
    image:string;
    whatsapp:string;
    detail:{
      title:string;
      description:string;
   }[];
  };
 cta: {
    title: string;
    content: string;
    image: string;
    phone: string;
  };
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/faq`, {
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

export default async function FaqPage() {
   let data: ProductResponse | null = null;

  try {
    data = await getSEO();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }
  return (
    <main className="bg-white text-[#221C18]">
      <PageHeroBanner
        title={data?.banner.title|| "FAQ"}
        subtitle={data?.banner.content || "Everything you need to know about tour timings, package inclusions, safety precautions, and bookings before heading into the dunes."}
        imageSrc={data?.banner.image || "/banner/Golden Dunes at Sunset.png"}
      />
      {/* Section 4: Frequently Asked Questions (FAQ) Accordion */}
      <FaqSection  faq={data?.faq} whatsapp={data?.faq?.whatsapp ?? ""} />

      {/* Section 5: Final Booking & CTA Section */}
      <CtaSection cta={data?.cta} phone={data?.cta.phone}/>
    </main>
  );
}
