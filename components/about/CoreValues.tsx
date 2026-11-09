import { ShieldCheck, HeartHandshake, Award, Compass } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Safety",
    description:
      "All vehicles feature certified internal roll-cages, GPS telemetry, passenger liability insurance, and are piloted by DTCM-licensed dune drivers.",
    floatClass: "animate-icon-float",
  },
  {
    icon: HeartHandshake,
    title: "Genuine Emirati Hospitality",
    description:
      "From warm Gahwa and fresh dates to traditional majlis setups, we share authentic Arabian traditions with respect, warmth, and sincerity.",
    floatClass: "animate-icon-float-delayed-1",
  },
  {
    icon: Award,
    title: "Direct Operator Pricing",
    description:
      "No middleman markups, hidden surcharges, or booking commissions. You book directly with the registered desert camp operator.",
    floatClass: "animate-icon-float-delayed-2",
  },
  {
    icon: Compass,
    title: "Curated Desert Routes",
    description:
      "From the golden dunes of Al Khatim to the majestic 300-meter ridges of Liwa in the Empty Quarter, our itineraries are crafted with local intimacy.",
    floatClass: "animate-icon-float",
  },
];
interface Data{
  core?:{
  title: string;
    content: string;
    image:string;
    detail:{
      title:string;
      option:string;
      icon:string;
      description:string;
   }[]; 
  }
}
export function CoreValues({core}:Data) {
  const floatClass =['animate-icon-float','animate-icon-float-delayed-1','animate-icon-float-delayed-2','animate-icon-float'];
  return (
    <section className="bg-white px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1360px]">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <SectionLabel className="justify-center">{core?.title}</SectionLabel>
          <div className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-[0.02em] leading-tight text-[#1E1A17] sm:text-5xl md:text-6xl" dangerouslySetInnerHTML={{__html:core?.content ?? ""}} />
        </div>

        {/* Minimal Unboxed Editorial Grid matching WhyChooseUs */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-12">
          {core?.detail.map((val,idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="flex flex-col items-start">
                <span className={`mb-5 text-[#B85D19] ${floatClass}`}  dangerouslySetInnerHTML={{__html:val.icon}} />
                  {/* <Icon size={40} strokeWidth={1.6} /> */}
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-[0.03em] leading-snug text-[#1E1A17] md:text-3xl">
                  {val.title}
                </h3>
                <div className="mt-2 text-xs leading-relaxed text-[#555] md:text-sm" dangerouslySetInnerHTML={{__html:val.description}} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
