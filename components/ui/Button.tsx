import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type ButtonVariant =
  | "primary"     // Rich Desert Terracotta (#B85D19) with white text & hover shift
  | "secondary"   // Warm Desert Gold (#FDB414) with dark text
  | "tertiary"    // Dark / Desert charcoal (#1E1A17) with white text
  | "outline"     // Transparent with border
  | "glass"       // Translucent dark frosted with border for hero/banners
  | "ghost";      // Clean text with hover effect

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      target,
      rel,
      showIcon = false,
      icon,
      iconPosition = "right",
      isExternal = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseClasses =
      "group inline-flex items-center justify-center font-semibold rounded-sm transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none";

    // Size variants
    const sizeClasses: Record<ButtonSize, string> = {
      sm: "px-3.5 py-2 text-xs gap-2",
      md: "px-5 py-3 text-sm gap-3.5",
      lg: "px-6 py-4 text-sm font-bold gap-4 hover:gap-5",
    };

    // Style variants
    const variantClasses: Record<ButtonVariant, string> = {
      primary:
        "btn-desert-primary bg-[#B85D19] !text-white hover:bg-[#9B4C12] shadow-sm hover:shadow-md",
      secondary:
        "bg-[#FDB414] !text-[#1E1508] hover:bg-white shadow-md hover:shadow-lg",
      tertiary:
        "bg-[#1E1A17] !text-white hover:bg-[#322A25] shadow-sm",
      outline:
        "border border-[#B85D19] !text-[#B85D19] hover:bg-[#B85D19] hover:!text-white",
      glass:
        "border border-white/40 bg-black/30 backdrop-blur-md text-white hover:border-white hover:bg-white hover:!text-[#1E1508] shadow-md",
      ghost:
        "bg-transparent !text-[#1E1A17] hover:bg-black/5 hover:!text-[#B85D19]",
    };

    // Default arrow icon matching the exact stroke geometry from the design
    const iconSize = size === "sm" ? 12 : size === "lg" ? 16 : 14;
    const renderedIcon = showIcon
      ? icon || (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ fill: "none" }}
            className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <line x1="4" y1="12" x2="12" y2="4" style={{ fill: "none" }} />
            <polyline points="5 4 12 4 12 11" style={{ fill: "none" }} />
          </svg>
        )
      : null;

    // Sand fill hover effect classes (fills from bottom to top like sand in an hourglass)
    const sandFillClass =
      variant === "primary"
        ? "btn-sand-fill"
        : variant === "secondary"
        ? "btn-sand-fill btn-sand-fill-gold"
        : variant === "tertiary"
        ? "btn-sand-fill btn-sand-fill-charcoal"
        : variant === "outline"
        ? "btn-sand-fill btn-sand-fill-outline"
        : "";

    const combinedClasses = `${baseClasses} ${sandFillClass} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

    // Inline white color enforcement for primary & tertiary variants (not glass, so glass can turn dark on hover)
    const textStyle =
      variant === "primary" || variant === "tertiary"
        ? { color: "#ffffff" }
        : undefined;

    // Inner content wrapped with relative z-10 so sand fill stays behind
    const renderContent = () => (
      <>
        {showIcon && iconPosition === "left" && (
          <span className="relative z-10 inline-flex shrink-0 items-center">{renderedIcon}</span>
        )}
        <span style={textStyle} className="relative z-10">
          {children}
        </span>
        {showIcon && iconPosition === "right" && (
          <span className="relative z-10 inline-flex shrink-0 items-center">{renderedIcon}</span>
        )}
      </>
    );

    // Render as Next.js Link or Anchor if href is provided
    if (href) {
      if (isExternal || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target={target || (isExternal ? "_blank" : undefined)}
            rel={rel || (isExternal ? "noreferrer" : undefined)}
            style={textStyle}
            className={combinedClasses}
          >
            {renderContent()}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          style={textStyle}
          className={combinedClasses}
        >
          {renderContent()}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        style={textStyle}
        className={combinedClasses}
        {...props}
      >
        {renderContent()}
      </button>
    );
  }
);

Button.displayName = "Button";
