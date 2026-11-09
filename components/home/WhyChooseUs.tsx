import { SectionLabel } from "@/components/ui/SectionLabel";
interface Data{
   why?: {
    title: string;
    content: string;
    image:string;
    detail:{
      title:string;
      icon:string;
      description:string;
   }[];
  };
}
export function WhyChooseUs({why}:Data) {
  return (
    <section className="bg-[#FAF8F5] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1360px]">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <SectionLabel className="justify-center">{why?.title ?? ''}</SectionLabel>
          <div className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-[0.02em] leading-tight text-[#1E1A17] sm:text-5xl md:text-6xl" dangerouslySetInnerHTML={{__html:why?.content ?? ""}} />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12 lg:gap-16">
          {why?.detail?.map(( item, i) => (
          <div key={i} className="flex flex-col items-start">
            <span 
  className="mb-5 text-[#B85D19] animate-icon-float [&_svg]:size-[40px] [&_svg]:stroke-[1.6]" 
  dangerouslySetInnerHTML={{ __html: item.icon ?? "" }} 
/>
            <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-[0.03em] leading-snug text-[#1E1A17] md:text-3xl">
             {item.title}
            </h3>
            <div className="mt-2 text-xs leading-relaxed text-[#555] md:text-sm"dangerouslySetInnerHTML={{__html:item.description ?? ""}} />
          </div>))}
        </div>
      </div>
    </section>
  );
}
