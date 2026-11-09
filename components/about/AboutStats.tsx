"use client";
export function AboutStats({stat}:{stat:any[]}) {
  return (
    <section className="bg-[#FAF8F5] py-8">
      <div className="mx-auto max-w-[1360px] px-5 md:px-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-8">
          {stat.map((stat,idx) => (
            <div key={idx} className="text-center sm:text-left">
              <p className="font-[family-name:var(--font-bebas)] text-4xl text-[#B85D19] sm:text-5xl md:text-6xl">
                {stat.title}{stat.icon}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#666] sm:text-sm">
                {stat.option}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

