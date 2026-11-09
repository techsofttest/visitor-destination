import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStats } from "@/components/about/AboutStats";
import { CompanyOverview } from "@/components/about/CompanyOverview";
import { MissionVision } from "@/components/about/MissionVision";
import { CoreValues } from "@/components/about/CoreValues";
import { MilestoneTimeline } from "@/components/about/MilestoneTimeline";
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
  vission: {
    title: string;
    content: string;
    image:string;
        detail:{
      title:string;
      option:string;
      icon:string;
      description:string;
   }[];
  };
   core: {
    title: string;
    content: string;
    image:string;
    whatsapp: string;
    detail:{
      title:string;
      option:string;
      icon:string;
      description:string;
   }[];
  };
   mile: {
    title: string;
    content: string;
    image:string;
    detail:{
      title:string;
      option:string;
      icon:string;
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

  const res = await fetch(`${baseUrl}/about`, {
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

export default async function AboutPage() {
   let data: ProductResponse | null = null;

  try {
    data = await getSEO();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }

  return (
    <main className="bg-white text-[#221C18]">
      {/* 1. Hero Banner */}
      <AboutHero hero={data?.banner} />

      {/* 2. Key Metrics Bar */}
      <AboutStats stat={data?.about.detail ?? []} />

      {/* 3. Company Overview */}
      <CompanyOverview story={data?.about} whatsapp={data?.core.whatsapp ?? ""} />

      {/* 4. Mission & Vision */}
      <MissionVision vission={data?.vission} />

      {/* 5. Core Values */}
      <CoreValues core={data?.core}  />

      {/* 6. Milestone Timeline */}
      <MilestoneTimeline  mile={data?.mile} />

      {/* 7. Call To Action */}
      <CtaSection cta={data?.cta} phone={data?.cta.phone} />
    </main>
  );
}
