import Image from "next/image";

interface PageHeroBannerProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function PageHeroBanner({
  title,
  subtitle,
  imageSrc = "/banner/Desert Caravan Beneath Endless Skies.png",
  imageAlt,
}: PageHeroBannerProps) {
  return (
    <section className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-[#1E1A17] text-white sm:min-h-[400px] md:min-h-[460px] lg:min-h-[500px]">
      <Image
        src={imageSrc}
        alt={imageAlt || `${title} - Abu Dhabi Desert Safari`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-5 pt-36 pb-10 sm:pb-12 md:px-10 md:pt-44 md:pb-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="text-left">
            <h1 className="font-[family-name:var(--font-bebas)] text-6xl uppercase tracking-[0.03em] text-white sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
              {title}
            </h1>
          </div>
          {subtitle && (
            <div className="md:max-w-lg md:text-right">
              <div className="text-sm sm:text-base text-white/85 font-normal leading-relaxed md:pb-1" dangerouslySetInnerHTML={{__html:subtitle}}/>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
