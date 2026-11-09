import Image from "next/image";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const HIGHLIGHTS = [
  "Department of Tourism certified drivers",
  "Private Bedouin desert camp in Al Khatim",
  "Direct operator booking with no markups",
  "International 5-star standard BBQ dinner",
  "Eco-conscious leave-no-trace practices",
  "Instant 24/7 WhatsApp guest assistance",
];

export function CompanyOverview({story,whatsapp}:{story:any,whatsapp:any}) {
  
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Narrative */}
          <div className="lg:col-span-7">
            <SectionLabel>{story.title}</SectionLabel>
            <div className="[&_h2]:font-[family-name:var(--font-bebas)] [&_h2]:text-4xl [&_h2]:uppercase [&_h2]:tracking-[0.02em] [&_h2]:leading-tight [&_h2]:text-[#1E1A17] sm:[&_h2]:text-5xl md:[&_h2]:text-6xl [&_p]:mt-6 [&_p]:space-y-4 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-[#555] sm:[&_p]:text-base sm:[&_p]:leading-7 [&_p_strong]:font-semibold [&_p_strong]:text-[#1E1A17]
            [&_ul]:mt-8 [&_ul]:grid [&_ul]:grid-cols-1 [&_ul]:gap-3 sm:[&_ul]:grid-cols-2 [&_ul_li]:flex [&_ul_li]:items-center [&_ul_li]:gap-2.5 [&_ul_li]:text-xs [&_ul_li]:font-medium [&_ul_li]:text-[#2E2E2E] sm:[&_ul_li]:text-sm [&_li]:before:content-['✓'] [&_li]:before:flex [&_li]:before:items-center [&_li]:before:justify-center [&_li]:before:shrink-0 [&_li]:before:mt-0.5 [&_li]:before:h-5 [&_li]:before:w-5 [&_li]:before:rounded-full [&_li]:before:rounded-full [&_li]:before:bg-white [&_li]:before:border [&_li]:before:border-[#B85D19] [&_li]:before:text-[#B85D19] [&_li]:before:text-xs [&_li]:before:font-bold [&_li]:before:text-xs [&_li]:before:font-bold [&_ul_li]after:shrink-0 [&_ul_li]after:text-[#B85D19]" dangerouslySetInnerHTML={{__html:story.content || ""}} />
      

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/packages" variant="primary" size="md" showIcon>
                Explore Our Tours
              </Button>
              <Button  href={`https://wa.me/${whatsapp}?text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%27d%20like%20to%20book%20a%20tour.`}
               isExternal variant="outline" size="md">
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Visual Collage */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg shadow-xl">
              <Image
               src={story?.image || ""}
                alt="Caravan in the Abu Dhabi desert"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-4 hidden rounded-lg border border-black/10 bg-white p-5 shadow-2xl sm:block md:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B85D19]/10 text-[#B85D19]">
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#888]">
                    Safety Record
                  </p>
                  <p className="text-base font-bold text-[#1E1A17]">
                    100% Insured Fleet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

