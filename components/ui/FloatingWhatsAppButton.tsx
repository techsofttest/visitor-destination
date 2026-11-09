"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/components/data/content";

export function FloatingWhatsAppButton({ className = "",whatsapp }: { className?: string ,whatsapp:any }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Show once the user scrolls down past 150px
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/${whatsapp}?text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%27d%20like%20to%20book%20a%20tour.`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Abu Dhabi Desert Safari on WhatsApp"
      className={`group fixed bottom-6 left-1/2 -translate-x-1/2 z-50 inline-flex items-center gap-2.5 rounded-full bg-[#128C7E] px-4 py-2.5 text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:bg-[#075E54] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-8 pointer-events-none"
      } ${className}`}
    >
      {/* WhatsApp Icon with green online dot */}
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xs">
        <FaWhatsapp size={19} />
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 border border-white" />
        </span>
      </span>

      {/* Crisp high-contrast label */}
      <span className="pr-1 text-[13px] font-bold tracking-tight text-white antialiased">
        Chat with us
      </span>
    </a>
  );
}
