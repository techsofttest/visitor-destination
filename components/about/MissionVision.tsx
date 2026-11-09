import { Target, Eye } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
interface Data{
  vission?:{
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

export function MissionVision({vission}:Data) {
  return (
    <section className="bg-[#FAF8F5] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1360px]">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <SectionLabel className="justify-center">{vission?.title}</SectionLabel>
          <div className="[&_p]:mt-3 [&_p]:text-sm [&_p]:text-[#666] sm:[&_p]:text-base [&_h2]:font-[family-name:var(--font-bebas)] [&_h2]:text-4xl [&_h2]:uppercase [&_h2]:tracking-[0.02em] [&_h2]:leading-tight [&_h2]:text-[#1E1A17] [&_h2]:sm:text-5xl md:[&_h2]:text-6xl" dangerouslySetInnerHTML={{__html:vission?.content ?? ""}} />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {vission?.detail.map((stat,idx) => (
          <div key={idx} className="relative flex flex-col justify-between rounded-xl border border-black/10 bg-white p-8 md:p-12 shadow-xs transition-all hover:shadow-md">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#B85D19]/10 text-[#B85D19]" dangerouslySetInnerHTML={{__html:stat.icon}} />
                {/* <Target size={34} strokeWidth={1.8} /> */}
              
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#B85D19]">
                {stat.title}
              </div>
              <div className="[&_p]:mt-4 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-[#555] sm:[&_p]:text-base sm:[&_p]:leading-7 [&_h3]:font-[family-name:var(--font-bebas)] [&_h3]:text-3xl [&_h3]:uppercase [&_h3]:tracking-wide [&_h3]:text-[#1E1A17] sm:[&_h3]:text-4xl" dangerouslySetInnerHTML={{__html:stat.description}} />
            </div>

            <div className="mt-8 border-t border-black/5 pt-6">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#1E1A17]">
                <span className="h-2 w-2 rounded-full bg-[#B85D19]" />
                {stat.option}
              </div>
            </div>
          </div>))}
        </div>
      </div>
    </section>
  );
}

