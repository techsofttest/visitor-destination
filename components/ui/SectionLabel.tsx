import React from "react";

export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mb-4 inline-flex items-center gap-3 text-sm font-semibold text-[#B85D19] ${className}`}
    >
      {children}
    </div>
  );
}
