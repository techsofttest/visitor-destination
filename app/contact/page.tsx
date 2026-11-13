import type { Metadata } from "next";
import { PageHeroBanner } from "@/components/global/PageHeroBanner";
import { ContactInfoSection } from "@/components/contact/ContactInfoSection";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
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
  };
   tour: {
    id: number;
    title: string;
    price:string;
  }[];
contact:any;
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/contact`, {
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

export default async function ContactPage() {
  let data: ProductResponse | null = null;

  try {
    data = await getSEO();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }
  return (
    <main className="bg-white text-[#221C18]">
      {/* 1. Page Hero Banner */}
      <PageHeroBanner
        title={ data?.banner.title || "Contact Us"}
        subtitle={ data?.banner.content || "Reach out to our Abu Dhabi tour desk directly. Reserve your desert safari, request a custom quote, or ask any question 24/7."}
        imageSrc={ data?.banner.image || "/banner/Golden Hour Dune Companions.png"}
      />

      {/* 2. Section One: Contact Details (Unboxed open layout) */}
      <section className="py-14 sm:py-16 md:py-20 border-b border-black/5">
        <div className="mx-auto max-w-[1360px] px-5 md:px-10">
          <ContactInfoSection about={data?.about} contact={data?.contact} />
        </div>
      </section>

      {/* 3. Section Two: Full-bleed Background Image with Form on Left Edge */}
      <ContactFormSection tour={data?.tour ?? []} imageSrc="/banner/Desert Dunes 4x4 Sunset Expedition2.png" />

    </main>
  );
}
