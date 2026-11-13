"use client";

import Image from "next/image";
import Link from "next/link";
import { TripadvisorWidget } from "@/components/ui/TripadvisorWidget";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FacebookIcon,
  GetYourGuideIcon,
  InstagramIcon,
  TripadvisorIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
interface ProductResponse {
  contact: any;
  tour: {
    id: string;
    title: string;
    slug: string;
    tours: {
  id: string | number;
  title: string;
  slug: string;
  image:string;
  price:string;
  duration:string;
    }[];
  }[];
}
export function Footer({ contact, tour }: ProductResponse) {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-[#0B1424] text-white">
      {/* Distinct Organic Wave Section Separator overlapping the section above */}
      <div className="absolute -top-12 left-0 right-0 z-10 w-full overflow-hidden leading-none pointer-events-none sm:-top-16 md:-top-24 lg:-top-28">
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="h-12 w-full sm:h-16 md:h-24 lg:h-28 block"
        >
          {/* Smooth S-curve wave contour filling seamlessly into the footer */}
          <path
            d="M0,64 C320,130 560,10 880,75 C1160,130 1340,30 1440,64 L1440,160 L0,160 Z"
            fill="#0B1424"
          />
        </svg>
      </div>

      {/* Lightweight Twinkling Stars in Desert Night Sky Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Subtle Warm Twinkling Stars Layer 1 */}
          <g className="star-1" fill="#FFFFFF">
            <circle cx="7%" cy="16%" r="1.5" />
            <circle cx="21%" cy="32%" r="2" />
            <circle cx="36%" cy="14%" r="1.5" />
            <circle cx="52%" cy="40%" r="2.2" />
            <circle cx="68%" cy="16%" r="1.8" />
            <circle cx="82%" cy="36%" r="2" />
            <circle cx="93%" cy="20%" r="1.6" />
            <circle cx="14%" cy="60%" r="1.7" />
            <circle cx="45%" cy="70%" r="2" />
            <circle cx="77%" cy="64%" r="1.5" />
          </g>

          {/* Golden Star Accents Layer 2 */}
          <g className="star-2" fill="#FDB414">
            <circle cx="12%" cy="26%" r="2.2" />
            <circle cx="29%" cy="22%" r="1.6" />
            <circle cx="47%" cy="28%" r="2.4" />
            <circle cx="63%" cy="24%" r="1.8" />
            <circle cx="87%" cy="14%" r="2.2" />
            <circle cx="27%" cy="66%" r="1.6" />
            <circle cx="59%" cy="58%" r="2" />
            <circle cx="91%" cy="54%" r="1.8" />
          </g>

          {/* Distant Micro-Stars Layer 3 */}
          <g className="star-3" fill="#FFFFFF">
            <circle cx="4%" cy="42%" r="1.4" />
            <circle cx="18%" cy="10%" r="1.5" />
            <circle cx="41%" cy="50%" r="1.4" />
            <circle cx="57%" cy="16%" r="1.3" />
            <circle cx="74%" cy="46%" r="1.5" />
            <circle cx="81%" cy="22%" r="1.4" />
            <circle cx="95%" cy="40%" r="1.5" />
            <circle cx="34%" cy="78%" r="1.3" />
            <circle cx="67%" cy="76%" r="1.5" />
          </g>
        </svg>
      </div>

      {/* Top Section: Links & Info Grid */}
      <div className="relative z-10 px-5 pt-12 md:px-10 md:pt-16">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1.4fr_1.4fr] lg:gap-12">
            {/* Column 1: Brand Info */}
            <div>
              <Link href="/" aria-label="Abu Dhabi Desert Safari home" className="inline-block transition-opacity hover:opacity-85">
                <Image
                  src="/logo/logo-sec-white.png"
                  alt="Abu Dhabi Desert Safari"
                  width={105}
                  height={63}
                  style={{ width: "auto", height: "auto" }}
                  className="max-h-12 w-auto object-contain"
                />
              </Link>

              <div className="mt-6 space-y-3 text-sm font-medium leading-relaxed text-white">
                <div className="flex items-start gap-2.5">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-white" />
                  <span className="text-white" dangerouslySetInnerHTML={{ __html: contact?.address || "" }} />
                </div>
                <p className="flex items-center gap-2.5">
                  <Phone size={16} className="shrink-0 text-white" />
                  <a href={`tel:${contact?.phone}`} className="footer-link text-white hover:!text-[#FDB414]">
                    {contact?.phone || ""}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail size={16} className="shrink-0 text-white" />
                  <a href={`mailto:${contact?.email}`} className="footer-link break-all text-white hover:!text-[#FDB414]">
                    {contact?.email || ""}
                  </a>
                </p>
              </div>

              <div className="mt-7">
                <div className="mb-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white">Review Us on TripAdvisor</p>
                  <TripadvisorWidget />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">Follow us on</p>
                <div className="mt-3 flex items-center gap-4 text-white">
                  <a aria-label="Instagram" href={contact?.instagram} target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 hover:text-[#FDB414]">
                    <InstagramIcon size={20} />
                  </a>
                  <a aria-label="Facebook" href={contact?.facebook} target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 hover:text-[#FDB414]">
                    <FacebookIcon size={20} />
                  </a>
                  <a aria-label="GetYourGuide" href={contact?.getyourguide} target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 hover:text-[#FDB414]">
                    <GetYourGuideIcon size={20} />
                  </a>
                  <a aria-label="Tripadvisor" href={contact?.tripadvisor} target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 hover:text-[#FDB414]">
                    <TripadvisorIcon size={21} />
                  </a>
                  <a aria-label="YouTube" href={contact?.youtube} target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 hover:text-[#FDB414]">
                    <YoutubeIcon size={21} />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-base font-bold uppercase tracking-wide text-white border-b border-white/10 pb-2">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm font-medium text-white/95">
                <li><Link href="/" className="footer-link text-white/95 hover:!text-[#FDB414]">Home</Link></li>
                <li><Link href="/about" className="footer-link text-white/95 hover:!text-[#FDB414]">About us</Link></li>
                <li><Link href="/packages" className="footer-link text-white/95 hover:!text-[#FDB414]">Tours</Link></li>
                <li><Link href="/services" className="footer-link text-white/95 hover:!text-[#FDB414]">Services</Link></li>
                <li><Link href="/blog" className="footer-link text-white/95 hover:!text-[#FDB414]">Blog</Link></li>
                <li><Link href="/faq" className="footer-link text-white/95 hover:!text-[#FDB414]">FAQ</Link></li>
                <li><Link href="/contact" className="footer-link text-white/95 hover:!text-[#FDB414]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold uppercase tracking-wide text-white border-b border-white/10 pb-2">
                Desert Adventures
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm font-medium text-white/95">
                {tour?.[0]?.tours.map((pac, idx) => (
                  <li key={idx}>
                    <Link href={`/packages/${pac.slug}`} className="footer-link text-white/95 hover:!text-[#FDB414]">
                      {pac.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Column 4: Sightseeing Tours & Payment Methods */}
            <div>
              <h3 className="text-base font-bold uppercase tracking-wide text-white border-b border-white/10 pb-2">
                Sightseeing Tours
              </h3> <ul className="mt-4 space-y-2.5 text-sm font-medium text-white/95">
              {tour?.[1]?.tours.map((pac, idx) => (
                <li key={idx}>
                  <Link href={`/packages/${pac.slug}`} className="footer-link text-white/95 hover:!text-[#FDB414]">
                    {pac.title}
                  </Link>
                </li>
              ))}</ul>

              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Payment Methods</h4>
                <div className="mt-3 flex flex-wrap items-center gap-2.5">
                  <div className="flex h-8 items-center justify-center rounded-md bg-white px-3 py-1 shadow-sm">
                    <Image
                      src="/footer/payment-option/netbanking.png"
                      alt="Net Banking"
                      width={70}
                      height={20}
                      className="h-4.5 w-auto object-contain"
                    />
                  </div>
                  <div className="flex h-8 items-center justify-center rounded-md bg-white px-3 py-1 shadow-sm">
                    <Image
                      src="/footer/payment-option/ziina-logo.webp"
                      alt="ziina"
                      width={60}
                      height={20}
                      className="h-8 w-auto object-cover"
                    />
                  </div>
                  <div className="flex h-8 items-center justify-center rounded-md bg-white px-3 py-1 shadow-sm">
                    <Image
                      src="/footer/payment-option/visa.png"
                      alt="Visa"
                      width={45}
                      height={20}
                      className="h-4.5 w-auto object-contain"
                    />
                  </div>
                  <div className="flex h-8 items-center justify-center rounded-md bg-white px-3 py-1 shadow-sm">
                    <Image
                      src="/footer/payment-option/coa.png"
                      alt="Cash on Arrival"
                      width={45}
                      height={20}
                      className="h-4.5 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner Image Section with smooth gradient transition and copyright placed inside */}
      <div className="relative mt-4 overflow-hidden h-[240px] sm:h-[280px] md:h-[340px] flex flex-col justify-end">
        {/* Background Banner Image */}
        <Image
          src="/banner/Moonlit Desert Caravan.png"
          alt="Abu Dhabi Skyline and Desert Panorama"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Smooth Top Gradient transition from #0B1424 to image + dark bottom scrim for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1424] via-[#0B1424]/50 to-black/75" />

        {/* Bottom Copyright & Legal Links Bar inside the image with enhanced contrast */}
        <div className="relative z-10 w-full px-5 pb-6 pt-4 md:px-10">
          <div className="mx-auto max-w-[1360px]">
            <div className="flex flex-col justify-between gap-3 border-t border-white/25 pt-4 text-[13px] font-medium text-white sm:flex-row sm:items-center">
              <p className="text-white drop-shadow-sm">© {currentYear} Visitors Destination. All rights reserved.</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href="https://www.techsoftweb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors hover:text-[#FDB414] hover:underline underline-offset-4 drop-shadow-sm"
                >
                  Web Design Company in Kochi Techsoft
                </a>
                <span className="text-white/60">|</span>
                <a href="#top" className="footer-link text-white drop-shadow-sm">Back to top ↑</a>
                <span className="text-white/90 drop-shadow-sm">Travel well. Discover more.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

