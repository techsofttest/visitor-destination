import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { FeaturedPackagesSection } from "@/components/home/FeaturedPackagesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
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

   about: {
    title: string;
    content: string;
    image:string;
        detail:{
      title:string;
   }[];
  };
   why: {
    title: string;
    content: string;
    image:string;
    detail:{
      title:string;
      icon:string;
      description:string;
   }[];
  };
  pac:{
 title:string;
slug:string;
subtitle:string;
duration:string;
inclusions:string[];
image:string;
price:string;
}[];
   faq: {
    title: string;
    content: string;
    image:string;
    detail:{
      title:string;
      description:string;
   }[];
  };
contact:any;
 cta: {
    title: string;
    content: string;
    image: string;
  };
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/index`, {
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


export default  async function HomePage() {
  let data: ProductResponse | null = null;

  try {
    data = await getSEO();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }

  return (
    <main id="top" className="bg-white text-[#221C18]">
      {/* Section 1: Hero Section (Above-the-Fold) */}
      <Hero hero={data?.banner} whatsapp={data?.contact.whatsapp} />

      {/* Section 2: Featured Packages Grid (Strictly 6 Desert Safari Packages) */}
      <FeaturedPackagesSection pac={data?.pac ?? []} whatsapp={data?.contact.whatsapp}/>

      <AboutSection about={data?.about} whatsapp={data?.contact.whatsapp}/>

      {/* Section 3: "Why Choose Us?" & Trust Signals + Customer Reviews */}
      <WhyChooseUs why={data?.why} />

      {/* Section 4: Frequently Asked Questions (FAQ) Accordion */}
      <FaqSection  faq={data?.faq} whatsapp={data?.contact?.whatsapp ?? ""} />

      {/* Section 5: Final Booking & CTA Section */}
      <CtaSection cta={data?.cta} phone={data?.contact.phone}/>
    </main>
  );
}
