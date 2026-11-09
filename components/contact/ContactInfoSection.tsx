import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";

export function ContactInfoSection({about,contact}:{about:any,contact:any}) {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="max-w-2xl">
        <SectionLabel>{about?.title || ""}</SectionLabel>
        <div className="[&_h2]:mt-1 [&_h2]:font-[family-name:var(--font-bebas)] [&_h2]:text-4xl sm:[&_h2]:text-5xl [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-[#1E1A17] [&_h2]:leading-none [&_p]:mt-2 [&_p]:text-sm sm:[&_p]:text-base [&_p]:leading-relaxed [&_p]:text-[#555]" dangerouslySetInnerHTML={{__html:about?.content  || ""}} />
      </div>

      {/* Clean open grid of contact channels */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Item 1: Office */}
        <div className="group flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF8F5] text-[#B85D19] transition-all duration-300 group-hover:bg-[#B85D19] group-hover:text-white group-hover:scale-105 group-hover:shadow-md">
            <MapPin size={22} />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#888]">Head Office</h4>
            <div className="mt-1 text-sm font-semibold text-[#1E1A17] leading-snug" dangerouslySetInnerHTML={{__html:contact?.address ?? ""}} />
          </div>
        </div>

        {/* Item 2: Phone */}
        <div className="group flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF8F5] text-[#B85D19] transition-all duration-300 group-hover:bg-[#B85D19] group-hover:text-white group-hover:scale-105 group-hover:shadow-md">
            <Phone size={22} />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#888]">Direct Hotline</h4>
            <a
              href={`tel:${contact?.phone}`}
              className="mt-1 inline-block text-sm font-semibold text-[#1E1A17] underline decoration-[#B85D19]/40 underline-offset-4 transition-all duration-200 hover:text-[#B85D19] hover:decoration-[#B85D19] hover:translate-x-0.5"
            >{contact?.phone}
            </a>
          </div>
        </div>

        {/* Item 3: WhatsApp */}
        <div className="group flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF8F5] text-[#B85D19] transition-all duration-300 group-hover:bg-[#B85D19] group-hover:text-white group-hover:scale-105 group-hover:shadow-md">
            <MessageSquare size={22} />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#888]">WhatsApp Desk</h4>
            <a
               href={`https://wa.me/${contact?.whatsapp}?text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%27d%20like%20to%20book%20a%20tour.`}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-sm font-semibold text-[#1E1A17] underline decoration-[#B85D19]/40 underline-offset-4 transition-all duration-200 hover:text-[#B85D19] hover:decoration-[#B85D19] hover:translate-x-0.5"
            >
              {contact?.whatsapp} (24/7)
            </a>
          </div>
        </div>

        {/* Item 4: Email */}
        <div className="group flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF8F5] text-[#B85D19] transition-all duration-300 group-hover:bg-[#B85D19] group-hover:text-white group-hover:scale-105 group-hover:shadow-md">
            <Mail size={22} />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#888]">Email Us</h4>
            <a
              href={`mailto:${contact?.email}`}
              className="mt-1 inline-block text-sm font-semibold text-[#1E1A17] underline decoration-[#B85D19]/40 underline-offset-4 transition-all duration-200 hover:text-[#B85D19] hover:decoration-[#B85D19] hover:translate-x-0.5 break-all"
            >
              {contact?.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
