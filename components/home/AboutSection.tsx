import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AboutSection({about ,whatsapp}:{about:any,whatsapp:any}) {
  return (
    <section id="about" className="relative isolate min-h-[520px] overflow-hidden bg-white text-[#242424] md:min-h-[600px]">
      <Image
        src={about.image || "/banner/b2.jpg"}
        alt="Desert landscape stretching to the horizon"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-x-0 top-0 h-3/4 bg-gradient-to-b from-white via-white/85 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1280px] flex-col justify-between px-5 py-16 md:min-h-[600px] md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start lg:gap-16">
          <div>
            <h2 className="font-[family-name:var(--font-bebas)] text-5xl uppercase tracking-[0.03em] leading-[0.92] text-[#1E1E1E] md:text-7xl lg:text-8xl">
              {about?.title || ""}
            </h2>
          </div>
          <div className="flex max-w-lg flex-col items-start md:items-end md:text-right">
            <div className="text-base leading-7 text-[#2A2A2A] md:text-sm md:leading-5" dangerouslySetInnerHTML={{__html:about?.content ?? ""}} />
            <Button
              href={`https://wa.me/${whatsapp}?text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%27d%20like%20to%20book%20a%20tour.`}
              isExternal
              variant="primary"
              size="lg"
              showIcon
              className="mt-8"
            >
              Get to know us
            </Button>
          </div>
        </div>

        {/* Trust Signals Bar with Animated Perimeter Moving Border Line */}
        <div className="relative mt-16 rounded-sm overflow-hidden p-[1px] shadow-lg">
          {/* Moving border glowing line tracer around the perimeter */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none z-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              rx="2"
              ry="2"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              pathLength="100"
              strokeDasharray="18 82"
              className="moving-border-path"
            />
          </svg>

          {/* Card Content with lighter translucent backdrop blur */}
          <div className="relative z-0 flex flex-wrap items-center justify-around gap-6 rounded-sm bg-black/20 px-6 py-7 text-sm font-medium text-white backdrop-blur-md md:text-base">
            <div className="flex items-center gap-2.5">
              <span className="flex text-[#FDB414]">
                {Array.from({ length: 1 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </span>
              <span className="text-white" dangerouslySetInnerHTML={{__html:about?.detail?.[0].title ?? ""}} />
            </div>
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[#FDB414] shadow-xs" />
              <span className="text-white" dangerouslySetInnerHTML={{__html:about?.detail?.[1].title ?? ""}} />
            </div>
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[#FDB414] shadow-xs" />
              <span className="text-white" dangerouslySetInnerHTML={{__html:about?.detail?.[2].title ?? ""}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
