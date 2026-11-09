import { SectionLabel } from "@/components/ui/SectionLabel";

const MILESTONES = [
  {
    year: "2010",
    title: "The First Expedition",
    desc: "Started as a family-run desert safari outfit with two Land Cruisers and an unyielding passion for Abu Dhabi's dunes.",
  },
  {
    year: "2015",
    title: "Eco-Heritage Desert Camp",
    desc: "Built our proprietary Bedouin-style camp in Al Khatim, integrating solar-powered amenities with traditional palm-frond architecture.",
  },
  {
    year: "2020",
    title: "Liwa Empty Quarter Specialist",
    desc: "Pioneered extended overnight expeditions and self-drive masterclasses deep into the legendary Rub' al Khali desert.",
  },
  {
    year: "Today",
    title: "Abu Dhabi's Trusted Name",
    desc: "Over 120,000 travelers hosted, an expanding fleet of luxury 4x4s, and a relentless focus on safety and personalized desert memories.",
  },
];
interface Data{
  mile?:{
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
export function MilestoneTimeline({mile}:Data) {
  return (
    <section className="bg-[#FAF8F5] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1360px]">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <SectionLabel className="justify-center">{mile?.title}</SectionLabel>
          <div className="[&_p]:mt-3 [&_p]:text-sm [&_p]:text-[#666] sm:[&_p]:text-base [&_h2]:font-[family-name:var(--font-bebas)] [&_h2]:text-4xl [&_h2]:uppercase [&_h2]:tracking-[0.02em] [&_h2]:leading-tight [&_h2]:text-[#1E1A17] sm:[&_h2]:text-5xl md:[&_h2]:text-6xl" dangerouslySetInnerHTML={{__html:mile?.content ?? ""}} />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {mile?.detail.map((step,idx) => (
            <div key={idx} className="relative flex flex-col">
              <div className="flex items-center gap-3">
                <span className="font-[family-name:var(--font-bebas)] text-3xl text-[#B85D19] sm:text-4xl">
                  {step.option}
                </span>
                <div className="h-px flex-1 bg-black/15" />
              </div>
              <h4 className="mt-3 text-base font-bold text-[#1E1A17]">
                {step.title}
              </h4>
              <div className="mt-2 text-xs leading-relaxed text-[#666] sm:text-sm" dangerouslySetInnerHTML={{__html:step.description}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

