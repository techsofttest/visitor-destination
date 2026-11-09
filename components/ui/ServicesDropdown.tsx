"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { services } from "@/components/data/content";

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function ServicesDropdown({
  isOpen,
  onClose,
  className = "",
}: ServicesDropdownProps) {
  return (
    <div
      className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0 pointer-events-none"
      } ${className}`}
    >
      <div className="w-[440px] max-w-[90vw] rounded-lg border border-black/10 bg-white p-4 shadow-2xl text-[#1E1E1E]">
        <div className="mb-2.5 flex items-center justify-between border-b border-black/5 pb-2 text-[12px] font-semibold text-[#B85D19]">
          <span>Services & Tours</span>
        </div>
        <div className="custom-scrollbar grid grid-cols-2 gap-1.5 max-h-[520px] max-h-[75vh] overflow-y-auto pr-1.5">
          {services.map((item) => (
            <Link
              key={item.title}
              href="#services"
              onClick={onClose}
              className="group/item flex items-center justify-between rounded-md px-2.5 py-2 transition-colors hover:bg-[#F5F4F1]"
            >
              <span className="text-xs font-semibold text-[#1E1E1E] transition-colors group-hover/item:text-[#B85D19]">
                {item.title}
              </span>
              <ChevronRight
                size={13}
                className="shrink-0 text-black/30 transition-transform group-hover/item:translate-x-0.5 group-hover/item:text-[#B85D19]"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
