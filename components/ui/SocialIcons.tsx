import { FaTripadvisor } from "react-icons/fa";
import { GiCamel } from "react-icons/gi";
import { FaCity } from "react-icons/fa6";

export function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function YoutubeIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9" />
    </svg>
  );
}

export function FacebookIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function GetYourGuideIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 568 617"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M71.1297 257.923C31.9201 257.923 0 289.209 0 327.444C0 365.681 31.9201 396.964 71.1297 396.964C110.339 396.964 142.259 365.681 142.259 327.44C142.259 289.206 110.339 257.923 71.1297 257.923Z" />
      <path d="M2.77566 200.568C0.693916 208.215 4.85741 212.733 13.1844 212.733H151.28C156.832 212.733 159.954 210.648 162.036 205.086C179.387 158.854 219.287 132.09 279.314 132.09C339.341 132.09 377.857 157.116 396.593 203.348C399.022 208.91 402.144 210.995 407.349 210.995H545.795C554.122 210.995 558.285 206.477 556.203 198.83C528.79 92.1139 450.722 0 279.661 0C108.604 0 30.5323 94.8946 2.77566 200.568Z" />
      <path d="M13.1844 456.057C51.3531 545.394 131.851 616.652 277.58 616.652L277.233 617C366.754 617 420.189 588.495 450.722 544.003V596.141C450.722 601.355 454.191 604.831 459.396 604.831H559.326C564.53 604.831 568 601.355 568 596.141V280.516C568 275.302 564.53 271.826 559.326 271.826H287.988C282.784 271.826 279.314 275.302 279.314 280.516V377.847C279.314 383.061 282.784 386.537 287.988 386.537H405.961C389.654 451.539 344.546 484.563 280.355 484.563C240.455 484.563 204.021 472.046 179.734 446.325C176.608 443.197 174.183 442.154 169.669 442.154H20.8175C13.1844 442.154 9.36787 447.368 13.1844 456.057Z" />
    </svg>
  );
}

export function XIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export const TwitterIcon = XIcon;

export function TripadvisorIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return <FaTripadvisor size={size} className={className} />;
}

export function DesertIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return <GiCamel size={size} className={className} />;
}

export function CityIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return <FaCity size={size} className={className} />;
}
