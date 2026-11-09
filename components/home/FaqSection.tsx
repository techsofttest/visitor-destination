import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export interface FaqItem {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

interface Data{
   faq?: {
    title: string;
    content: string;
    image:string;
    detail:{
      title:string;
      description:string;
   }[];
  };
  whatsapp:string;
}
export function FaqSection({faq,whatsapp}:Data) {
  return (
    <section id="faq" className="bg-[#FAF8F5] py-16 md:py-24">
      <div className="mx-auto max-w-[1360px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Subtitle & Contact Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <SectionLabel>{faq?.title ?? ""}</SectionLabel>
            <div className="[&_h2]:font-[family-name:var(--font-bebas)] [&_h2]:text-4xl [&_h2]:uppercase [&_h2]:tracking-[0.02em] [&_h2]:leading-[0.95] [&_h2]:text-[#1E1A17] [&_h2]:sm:text-5xl [&_h2]:md:text-6xl [&_p]:mt-4 [&_p]:text-sm [&_p]:text-[#555] md:[&_p]:text-base [&_p]:leading-relaxed" dangerouslySetInnerHTML={{__html:faq?.content ?? ""}} />
            

            {/* Left Contact Card matching design system */}
            <div className="mt-8 rounded-2xl bg-[#F0EDE6] p-6 md:p-8">
              <p className="text-sm font-medium leading-relaxed text-[#2A2A2A] md:text-[15px]">
                Have more questions for us? Our desert tour specialists are here to assist 24/7. Get in touch with us!
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  href={`https://wa.me/${whatsapp}?text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%27d%20like%20to%20book%20a%20tour.`}
                  isExternal
                  variant="primary"
                  size="md"
                  showIcon
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Radix UI Smooth Accordion List */}
          <div className="lg:col-span-7">
            <FaqAccordion items={faq?.detail ?? []} defaultValue="item-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
