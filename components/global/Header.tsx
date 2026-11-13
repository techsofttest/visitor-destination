"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Menu, Phone, Plus, X } from "lucide-react";
import { FacebookIcon,GetYourGuideIcon,InstagramIcon,TripadvisorIcon,YoutubeIcon,} from "@/components/ui/SocialIcons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {desertAdventurePackages,citySightseeingPackages,} from "@/components/data/content";
import { PackagesDropdownContent } from "@/components/ui/PackagesDropdown";
import { Button } from "@/components/ui/Button";
interface ProductResponse{
contact:any;
tour:{
  id:string;
  title:string;
  slug:string;
  tours:{
  id: string | number;
  title: string;
  slug: string;
  image:string;
  price:string;
  duration:string;
  }[];
}[];
}
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our story", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Our services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
export function Header({contact , tour}:ProductResponse) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false);
 const [mobileDesertOpen, setMobileDesertOpen] = useState<number | null>(null);
  const [mobileCityOpen, setMobileCityOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // Track scroll position and direction to only show header on scrolling up
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 40) {
        // At the top of the page - show original unscrolled header
        setIsScrolled(false);
        setIsVisible(true);
      } else {
        setIsScrolled(true);

        if (currentScrollY < lastScrollY.current) {
          // Scrolling UP - reveal boxed header
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY.current + 5) {
          // Scrolling DOWN - hide header and close dropdowns
          setIsVisible(false);
          setPackagesOpen(false);
          setMobileMenuOpen(false);
        }
      }

      lastScrollY.current = currentScrollY;
    }

    lastScrollY.current = window.scrollY;
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPackagesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? `fixed top-3 px-4 md:px-8 lg:px-10 ${isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0 pointer-events-none"
        }`
        : "absolute top-0 px-0 translate-y-0 opacity-100"
        }`}
    >
      {!isScrolled && (
        <div className="hidden bg-[#B85D19] text-white md:block border-b border-white/10">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2 text-xs lg:px-10">
            <div className="tracking-wide text-white/95" dangerouslySetInnerHTML={{__html:contact?.address}} />
            <div className="flex items-center gap-5">
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-[#FDB414]"
                href={`tel:${contact?.phone}`}
              >
                <Phone size={13} /> {contact?.phone || ""}
              </a>
              <span className="h-3 w-px bg-white/30" />
              <div className="flex items-center gap-3.5 text-white/90">
                <a
                  aria-label="Instagram"
                  className="transition-transform hover:scale-110 hover:text-white"
                  href={contact?.instagram ?? ""}
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon size={14} />
                </a>
                <a
                  aria-label="Facebook"
                  className="transition-transform hover:scale-110 hover:text-white"
                  href={contact?.instagram ?? ""}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon size={14} />
                </a>
                <a
                  aria-label="GetYourGuide"
                  className="transition-transform hover:scale-110 hover:text-white"
                  href={contact?.getyourguide ?? ""}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GetYourGuideIcon size={14} />
                </a>
                <a
                  aria-label="Tripadvisor"
                  className="transition-transform hover:scale-110 hover:text-white"
                  href={contact?.tripadvisor ?? ""}
                  target="_blank"
                  rel="noreferrer"
                >
                  <TripadvisorIcon size={15} />
                </a>
                <a
                  aria-label="YouTube"
                  className="transition-transform hover:scale-110 hover:text-white"
                  href={contact?.youtube ?? ""}
                  target="_blank"
                  rel="noreferrer"
                >
                  <YoutubeIcon size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main navigation header */}
      <header
        className={`relative transition-all duration-300 ${isScrolled
          ? "mx-auto max-w-[1360px] rounded-lg bg-white shadow-md border border-black/5"
          : "bg-black/25 backdrop-blur-md border-b border-white/10"
          }`}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between transition-all duration-300 ${isScrolled
            ? "px-5 py-2.5 md:px-7 md:py-2.5"
            : "px-5 py-3 md:px-8 lg:px-10"
            }`}
        >
          {/* Logo placed inside main header bar without banner */}
          <Link
            href="/"
            aria-label="Abu Dhabi Desert Safari home"
            className="relative z-20 flex items-center transition-transform hover:opacity-90 py-0.5"
          >
            <Image
              src={isScrolled ? "/logo/logo-sec.png" : "/logo/logo-sec-white.png"}
              alt="Abu Dhabi Desert Safari"
              width={145}
              height={50}
              priority
              className="h-9 w-auto object-contain md:h-11"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu.Root
            delayDuration={80}
            skipDelayDuration={300}
            className="static hidden lg:block"
          >
            <NavigationMenu.List
              className={`flex items-center gap-6 ${isScrolled ? "text-[#1E1E1E]" : "text-white"
                }`}
            >
              {navLinks.map((link) => {
                // Packages menu with full-width category & package switcher dropdown
                if (link.label === "Packages") {
                  return (
                    <NavigationMenu.Item key={link.label} className="static">
                      <NavigationMenu.Trigger
                        className={`group inline-flex whitespace-nowrap items-center gap-1.5 py-2 text-sm font-medium transition-colors relative cursor-pointer outline-none ${isScrolled
                          ? "text-[#1E1E1E] hover:text-[#B85D19] data-[state=open]:text-[#B85D19]"
                          : "!text-white hover:opacity-80 data-[state=open]:opacity-90"
                          }`}
                      >
                        <span>{link.label}</span>
                        <Plus
                          size={17}
                          strokeWidth={2.4}
                          className={`transition-transform duration-300 group-data-[state=open]:rotate-45 ${isScrolled ? "text-[#1E1E1E]" : "text-white"
                            }`}
                        />
                        <span
                          className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full group-data-[state=open]:w-full ${isScrolled ? "bg-[#B85D19]" : "bg-white"
                            }`}
                        />
                      </NavigationMenu.Trigger>

                      {/* Dropdown Content managed cleanly through Radix Viewport */}
                      <NavigationMenu.Content className="outline-none">
                        <PackagesDropdownContent tour={tour} whatsapp={contact.whatsapp} onClose={() => { }} />
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                  );
                }

                // Standard Navigation Link
                return (
                  <NavigationMenu.Item key={link.label}>
                    <Link
                      href={link.href}
                      className={`group relative whitespace-nowrap py-2 text-sm font-medium transition-colors ${isScrolled
                        ? "text-[#1E1E1E] hover:text-[#B85D19]"
                        : "!text-white hover:opacity-80"
                        }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-[#B85D19]" : "bg-white"
                          }`}
                      />
                    </Link>
                  </NavigationMenu.Item>
                );
              })}

              <NavigationMenu.Item>
                <Button
                  href={`https://wa.me/${contact.whatsapp}?text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%27d%20like%20to%20book%20a%20tour.`}
                  isExternal
                  variant={isScrolled ? "primary" : "ghost"}
                  size="sm"
                  showIcon
                  className={
                    isScrolled
                      ? "!rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap"
                      : "bg-transparent !text-white hover:bg-transparent hover:!text-white hover:opacity-80 py-2 px-0 whitespace-nowrap text-sm font-semibold"
                  }
                >
                  Book Direct
                </Button>
              </NavigationMenu.Item>
            </NavigationMenu.List>

            {/* Radix Viewport positioned absolutely under the header and centered to the viewport/header */}
            <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-50">
              <NavigationMenu.Viewport className="relative overflow-hidden rounded-2xl shadow-2xl transition-all" />
            </div>
          </NavigationMenu.Root>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className={`relative z-10 inline-flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-80 lg:hidden ${isScrolled
              ? "text-[#B85D19]"
              : "text-white"
              }`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div
            className={`rounded-b-2xl bg-white p-5 text-[#242424] shadow-2xl lg:hidden ${isScrolled ? "border-t border-black/5" : "mx-4 mt-2 rounded-t-sm"
              }`}
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => {
                // Mobile Packages Accordion with Desert Adventure & City Sightseeing submenus
                if (link.label === "Packages") {
                  return (
                    <div key={link.label} className="border-b border-black/5 py-3">
                      <button
                        type="button"
                        onClick={() => setMobilePackagesOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between text-left text-sm font-medium text-[#242424] transition-colors hover:text-[#B85D19]"
                      >
                        <span>{link.label}</span>
                        <Plus
                          size={16}
                          className={`transition-transform duration-200 ${mobilePackagesOpen ? "rotate-45 text-[#B85D19]" : "text-black/60"
                            }`}
                        />
                      </button>

                      {mobilePackagesOpen && (
                        <div className="mt-3 space-y-2.5 pl-3 pr-1 pt-1">

                                  {tour.map((category, idx) => (
                                    <div key={category.id}>

                                      {/* Category */}
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setMobileDesertOpen((prev) => prev === idx ? null : idx)
                                        }
                                        className="flex w-full items-center justify-between py-2 text-xs font-bold text-[#B85D19]"
                                      >
                                        <span>
                                          {category.title} ({category.tours?.length ?? 0})
                                        </span>

                                        <span className="text-[11px] font-normal text-black/50">
                                          {mobileDesertOpen === idx ? "−" : "+"}
                                        </span>
                                      </button>

                                      {/* Category Tours */}
                                      {mobileDesertOpen === idx && (
                                      <div className="mt-1 space-y-1.5 pl-2 max-h-48 overflow-y-auto">

                                          {category.tours?.map((item) => (
                                            <Link
                                              key={item.id}
                                              href={`/packages/${item.slug}`}
                                              onClick={() => {
                                                setMobileMenuOpen(false);
                                                setMobilePackagesOpen(false);
                                                setMobileDesertOpen(null);
                                              }}
                                    className="block py-1 text-[11px] text-[#555] hover:text-[#B85D19]"
                                            >
                                              {item.title}
                                            </Link>
                                          ))}

                                          {(!category.tours || category.tours.length === 0) && (
                                            <p className="py-1.5 text-[11px] text-gray-400">
                                              No tours available.
                                            </p>
                                          )}

                                        </div>
                                      )}
                                    </div>
                                  ))}



                          {/* City Sightseeing Subcategory */}
                          {/* <div className="border-t border-black/5 pt-2">
                            <button
                              type="button"
                              onClick={() => setMobileCityOpen((prev) => !prev)}
                              className="flex w-full items-center justify-between py-1 text-xs font-bold text-[#B85D19]"
                            >
                              <span>City Sightseeing ({citySightseeingPackages.length})</span>
                              <span className="text-[11px] font-normal text-black/50">
                                {mobileCityOpen ? "−" : "+"}
                              </span>
                            </button>
                            {mobileCityOpen && (
                              <div className="mt-1 space-y-1.5 pl-2 max-h-48 overflow-y-auto">
                                {citySightseeingPackages.map((pkg) => (
                                  <Link
                                    key={pkg.title}
                                    href={pkg.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobilePackagesOpen(false);
                                    }}
                                    className="block py-1 text-[11px] text-[#555] hover:text-[#B85D19]"
                                  >
                                    {pkg.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div> */}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-black/5 py-3 text-sm transition-colors hover:text-[#B85D19]"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button
                href={`https://wa.me/${contact.whatsapp}?text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%27d%20like%20to%20book%20a%20tour.`}
                isExternal
                variant="primary"
                size="md"
                showIcon
                className="mt-4 w-full"
              >
                Contact us
              </Button>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
