import Image from "next/image";
import { ContactEnquiryForm } from "@/components/contact/ContactEnquiryForm";

interface ContactFormSectionProps {
  imageSrc?: string;
  tour: {
    id: number;
    title: string;
    price:string;
  }[];
}

export function ContactFormSection({
  imageSrc = "/banner/Desert Caravan Beneath Endless Skies.png",tour
}: ContactFormSectionProps) {
  return (
    <section className="relative isolate min-h-[640px] overflow-hidden py-16 sm:py-20 md:py-28">
      {/* Full-bleed Edge-to-Edge Background Image */}
      <Image
        src={imageSrc}
        alt="Abu Dhabi Desert Safari Booking Enquiry"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Atmospheric Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

      {/* Section Content */}
      <div className="relative z-10 mx-auto max-w-[1360px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Hero Highlight Copy aligned to Top Left */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-6 flex-col justify-start text-left text-white pt-4 pr-4 lg:pr-8">

            <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-5xl uppercase tracking-wide leading-[0.95] xl:text-6xl text-left">
              Your Desert Adventure Starts Here
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white leading-relaxed max-w-lg text-left">
              Whether you are planning an exhilarating dune bashing expedition, a private romantic majlis dinner under the stars, or custom corporate desert hospitality, our local specialists will handle every detail.
            </p>
          </div>

          {/* Form on the right side */}
          <div className="w-full lg:col-span-6 xl:col-span-6">
            <ContactEnquiryForm tour={tour}/>
          </div>
        </div>
      </div>
    </section>
  );
}
