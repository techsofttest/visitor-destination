"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Phone, ShieldCheck, Check, Send, CheckCircle2, RefreshCw, AlertCircle, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";

interface PackageDetail {
    title: string;
    slug: string;
    description: string;
    subtitle: string;
    duration: string;
    time: string;
    inclusions: (string | { title?: string })[] | null;
    image: string;
    price: string;
    pickup: string;
    exclusions: (string | { title?: string })[] | null;
    itinerary: (string | { title?: string })[] | null;
    category: string;
}

interface BookInfo {
  title?: string;
  content?: string;
  whatsapp?: string;
  phone?: string;
  detail?: { title: string }[];
}

export function PackageSidebar({
  currentPackage,
  book,
  otherPackages,
  className = "",
}: {
  currentPackage: PackageDetail;
  otherPackages: PackageDetail[];
  className?: string;
  book: BookInfo;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourDate: "",
    guests: "2 Guests",
    message: "",
    captcha: ""
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const loadCaptcha = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/form`);

      if (!response.ok) {
        throw new Error("Unable to load CAPTCHA.");
      }

      const data = await response.json();
      setCaptchaQuestion(data.question);
      setCaptchaToken(data.captcha_token);
      setFormData((prev) => ({ ...prev, captcha: "" }));
    } catch (err) {
      setErrorMessage("Unable to load the CAPTCHA. Please refresh the page.");
    }
  };

  useEffect(() => {
    loadCaptcha();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/form`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          selectedPackage: currentPackage.title, // Automatically pinned to this page's tour
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          tourDate: formData.tourDate,
          guests: formData.guests,
          message: formData.message,
          captcha: formData.captcha,
          captcha_token: captchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your message.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        tourDate: "",
        guests: "2 Guests",
        message: "",
        captcha: ""
      });
      await loadCaptcha();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to send your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <aside className={`lg:col-span-4 lg:sticky lg:top-28 space-y-8 ${className}`}>
      {/* Booking & Price Summary Card */}
      <div className="rounded-2xl border border-black/10 bg-[#FAF8F5] p-6 shadow-xs">
        {currentPackage.price && (
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-[family-name:var(--font-bebas)] text-4xl text-[#B85D19] tracking-wide">
              AED {currentPackage.price}
            </span>
            <span className="text-sm text-[#555] font-medium">/ person</span>
          </div>
        )}

        <div className="mt-4 space-y-2 border-t border-black/10 pt-4 text-sm">
          {book?.detail?.map((info, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[#2D241C]">
              <Check size={16} className="text-emerald-600 shrink-0" />
              <span>{info.title}</span>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA Button */}
        <div className="mt-6">
          <Button
            href={`https://wa.me/${book?.whatsapp}?text=${encodeURIComponent(`Hello Abu Dhabi Desert Safari, I want to book the ${currentPackage.title}.`)}`}
            isExternal
            variant="primary"
            size="md"
            showIcon
            className="w-full justify-center text-xs font-bold uppercase tracking-wider"
          >
            Instant WhatsApp Booking
          </Button>
        </div>

        {/* Integrated Enquiry Form Card */}
        <div className="mt-6 pt-6 border-t border-black/10">
          <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-[#B85D19] mb-4">
            Book / Enquire This Tour
          </h3>

          {submitted ? (
            <div className="rounded-xl bg-white border border-[#B85D19]/30 p-5 text-center">
              <CheckCircle2 size={36} className="mx-auto text-[#B85D19] mb-2" />
              <h4 className="font-[family-name:var(--font-bebas)] text-xl uppercase tracking-wide text-[#1E1A17]">
                Enquiry Sent!
              </h4>
              <p className="mt-1 text-xs text-[#555]">
                Our safari coordinator will contact you shortly to confirm your booking for {currentPackage.title}.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-bold text-[#B85D19] underline cursor-pointer"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {errorMessage && (
                <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-xs text-red-700">
                  <AlertCircle size={16} className="shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Locked/Pre-pointed Package Indicator */}
              <div className="rounded-xl border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-[#1E1A17] flex items-center justify-between">
                <span className="text-[#555] font-normal uppercase text-[10px]">Selected Tour:</span>
                <span className="truncate max-w-[200px] text-[#B85D19]">{currentPackage.title}</span>
              </div>

              <div className="relative pt-2">
                <label className="absolute -top-0 left-3 z-10 bg-[#FAF8F5] px-1 text-[10px] font-bold uppercase tracking-wider text-[#1E1A17]">
                  Full Name <span className="text-[#B85D19]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-xs text-[#1E1A17] focus:border-[#B85D19] focus:outline-none"
                />
              </div>

              <div className="relative pt-2">
                <label className="absolute -top-0 left-3 z-10 bg-[#FAF8F5] px-1 text-[10px] font-bold uppercase tracking-wider text-[#1E1A17]">
                  Email Address <span className="text-[#B85D19]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-xs text-[#1E1A17] focus:border-[#B85D19] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="relative pt-2">
                  <label className="absolute -top-0 left-3 z-10 bg-[#FAF8F5] px-1 text-[10px] font-bold uppercase tracking-wider text-[#1E1A17]">
                    Phone <span className="text-[#B85D19]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+971..."
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-xs text-[#1E1A17] focus:border-[#B85D19] focus:outline-none"
                  />
                </div>

                <div className="relative pt-2">
                  <label className="absolute -top-0 left-3 z-10 bg-[#FAF8F5] px-1 text-[10px] font-bold uppercase tracking-wider text-[#1E1A17]">
                    Date <span className="text-[#B85D19]">*</span>
                  </label>
                  <input
                    type="date"
                    name="tourDate"
                    required
                    value={formData.tourDate}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-xs text-[#1E1A17] focus:border-[#B85D19] focus:outline-none"
                  />
                </div>
              </div>

              <div className="relative pt-2">
                <label className="absolute -top-0 left-3 z-10 bg-[#FAF8F5] px-1 text-[10px] font-bold uppercase tracking-wider text-[#1E1A17]">
                  Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-xl border border-black/20 bg-white px-3 py-2.5 text-xs font-semibold text-[#1E1A17] focus:border-[#B85D19] focus:outline-none"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests</option>
                  <option value="3 Guests">3 Guests</option>
                  <option value="4 Guests">4 Guests</option>
                  <option value="5+ Guests">5+ Guests (Group)</option>
                </select>
              </div>

              <div className="relative pt-2">
                <label className="absolute -top-0 left-3 z-10 bg-[#FAF8F5] px-1 text-[10px] font-bold uppercase tracking-wider text-[#1E1A17]">
                  Notes / Pickup Location
                </label>
                <textarea
                  name="message"
                  rows={2}
                  placeholder="Hotel name or special requests..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-black/20 bg-white px-3 py-2 text-xs text-[#1E1A17] focus:border-[#B85D19] focus:outline-none"
                />
              </div>

              {/* CAPTCHA */}
              <div className="relative pt-2">
                <label className="absolute -top-0 left-3 z-10 bg-[#FAF8F5] px-1 text-[10px] font-bold uppercase tracking-wider text-[#1E1A17]">
                  Verification <span className="text-[#B85D19]">*</span>
                </label>
                <div className="flex gap-2 pt-1">
                  <div className="flex items-center justify-between rounded-xl border border-black/20 bg-white px-3 py-2 w-1/2">
                    <span className="text-xs font-bold text-[#1E1A17]">{captchaQuestion || "Loading..."}</span>
                    <button
                      type="button"
                      onClick={() => { setFormData(prev => ({ ...prev, captcha: "" })); loadCaptcha(); }}
                      className="text-[#B85D19] hover:opacity-80"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <input
                    type="text"
                    name="captcha"
                    required
                    value={formData.captcha}
                    onChange={handleChange}
                    placeholder="Answer"
                    className="w-1/2 rounded-xl border border-black/20 bg-white px-3 py-2 text-xs text-[#1E1A17] focus:border-[#B85D19] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-1">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  size="sm"
                  showIcon={!isSubmitting}
                  icon={isSubmitting ? <Loader2 size={13} className="animate-spin" /> : <Send size={13} />}
                  iconPosition="right"
                  className="w-full justify-center text-xs font-bold uppercase tracking-wider py-2.5"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Operator Quick Contact Card */}
        <div className="mt-6 pt-4 border-t border-black/10 text-xs font-semibold space-y-2">
          <a
            href={`tel:${book?.phone}`}
            className="flex items-center gap-2 text-[#1E1E1E] hover:text-[#B85D19] transition-colors"
          >
            <Phone size={14} className="text-[#B85D19]" />
            <span className="text-xs underline">Call +971 54 427 8880</span>
          </a>
          <a
            href={`https://wa.me/${book?.whatsapp}?text=${encodeURIComponent("Hello Abu Dhabi Desert Safari, I'd like to book a tour.")}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#1E1E1E] hover:text-[#25D366] transition-colors"
          >
            <FaWhatsapp size={14} className="text-[#075E54]" />
            <span className="text-xs underline">24/7 Desert Concierge Desk</span>
          </a>
        </div>
      </div>
    </aside>
  );
}