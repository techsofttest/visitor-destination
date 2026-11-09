

import Link from "next/link";
import { Plus, ArrowUpRight } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

export interface AccordionItemData {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

interface FaqAccordionProps {
  items: AccordionItemData[];
  defaultValue?: string;
  className?: string;
}

export function FaqAccordion({
  items,
  defaultValue = "item-0",
  className = "",
}: FaqAccordionProps) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      defaultValue={defaultValue}
      className={`space-y-3 ${className}`}
    >
      {items.map((item, idx) => (
        <AccordionPrimitive.Item
          key={idx}
          value={`item-${idx}`}
          className="group overflow-hidden rounded-xl bg-white transition-all duration-200 data-[state=open]:shadow-xs"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors md:px-6 md:py-4.5 cursor-pointer">
              <span className="text-sm font-semibold text-[#1E1A17] sm:text-base group-hover:text-[#B85D19] transition-colors">
                {item.title}
              </span>

              <Plus
                size={18}
                className="shrink-0 text-black/60 transition-transform duration-250 ease-out group-data-[state=open]:rotate-45 group-data-[state=open]:text-[#B85D19]"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          <AccordionPrimitive.Content className="accordion-content overflow-hidden text-xs text-[#555] sm:text-sm">
            <div className="border-t border-black/5 px-5 pb-5 pt-3 md:px-6 md:pb-6">
              <div className="[&_p]:leading-relaxed [&_p]:text-[#555] [&_hr]:mt-3.5 [&_hr]:pt-2.5 [&_hr]:border-t [&_hr]:border-dashed [&_hr]:border-[#B85D19]/25 [&_a]:inline-flex [&_a]:items-center [&_a]:gap-1.5 text-sm [&_a]:font-semibold [&_a]:text-[#B85D19] [&_a]:transition-colors [&_a]:hover:text-[#964810] [&_a]:hover:underline  [&_a]:after:content-['↗']
              [&_a]:after:text-base [&_a]:after:shrink-0 [&_a]:after:text-[#B85D19]  [&_a]:after:font-normal [&_a]:after:no-underline" dangerouslySetInnerHTML={{__html:item.description}}  />
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
