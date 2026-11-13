"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle2, RefreshCw, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactEnquiryForm({tour}:{tour:any[]}) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedPackage: "Evening Desert Safari",
    tourDate: "",
    guests: "2 Guests",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/form`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          selectedPackage: formData.selectedPackage,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          tourDate: formData.tourDate,
          guests: formData.guests,
          message: formData.message,
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
        selectedPackage: tour?.[0]?.title || "Evening Desert Safari",
        tourDate: "",
        guests: "2 Guests",
        message: "",
      });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to send your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white border border-black/10 p-6 sm:p-8 lg:p-10">
      <div>
        <h2 className="mt-1 font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl uppercase tracking-wide text-[#B85D19] leading-none">
          Send Us An Enquiry
        </h2>
      </div>

      {/* Success Message UI */}
      {submitted ? (
        <div className="mt-8 rounded-xl bg-[#FAF8F5] border border-[#B85D19]/30 p-8 text-center">
          <CheckCircle2 size={44} className="mx-auto text-[#B85D19] mb-3" />
          <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-[#1E1A17]">
            Thank You for Your Enquiry!
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#555] max-w-md mx-auto">
            Your booking details were received. Our safari coordinator will confirm your dates and pickup time shortly.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setErrorMessage("");
              }}
              variant="primary"
              size="sm"
            >
              Submit Another Enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          
          {/* Error Message UI */}
          {errorMessage && (
            <div className="flex items-center gap-2.5 rounded-xl bg-red-50 border border-red-200 p-4 text-xs sm:text-sm text-red-700 font-medium">
              <AlertCircle size={18} className="shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Package Selection */}
          <div className="relative pt-2.5">
            <label
              htmlFor="selectedPackage"
              className="absolute -top-0 left-3 z-10 bg-white px-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1E1A17]"
            >
              Select Package <span className="text-[#B85D19]">*</span>
            </label>
            <div className="relative">
              <select
                id="selectedPackage"
                name="selectedPackage"
                required
                value={formData.selectedPackage}
                onChange={handleChange}
                className="w-full appearance-none rounded-xl border border-black/20 bg-white px-3.5 py-3 text-sm font-semibold text-[#1E1A17] focus:border-[#B85D19] focus:outline-none focus:ring-1 focus:ring-[#B85D19]"
              >
                 {tour.map((pkg) => (
                  <option key={pkg.id} value={pkg.title}>
                    {pkg.title} {pkg.price ? `(AED ${pkg.price})` : ""}
                  </option>
                ))}
                <option value="Abu Dhabi City Tour">Abu Dhabi City Tour</option>
                <option value="Dubai Full Day Tour from Abu Dhabi">Dubai Full Day Tour from Abu Dhabi</option>
                <option value="Custom Group / Private Expedition">Custom Group / Private Expedition</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black/40 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Full Name & Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative pt-2.5">
              <label
                htmlFor="name"
                className="absolute -top-0 left-3 z-10 bg-white px-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1E1A17]"
              >
                Full Name <span className="text-[#B85D19]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-black/20 bg-white px-3.5 py-3 text-sm text-[#1E1A17] placeholder:text-[#999] focus:border-[#B85D19] focus:outline-none focus:ring-1 focus:ring-[#B85D19]"
              />
            </div>

            <div className="relative pt-2.5">
              <label
                htmlFor="email"
                className="absolute -top-0 left-3 z-10 bg-white px-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1E1A17]"
              >
                Email Address <span className="text-[#B85D19]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-black/20 bg-white px-3.5 py-3 text-sm text-[#1E1A17] placeholder:text-[#999] focus:border-[#B85D19] focus:outline-none focus:ring-1 focus:ring-[#B85D19]"
              />
            </div>
          </div>

          {/* Phone & Date */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative pt-2.5">
              <label
                htmlFor="phone"
                className="absolute -top-0 left-3 z-10 bg-white px-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1E1A17]"
              >
                Phone / WhatsApp <span className="text-[#B85D19]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="+971 50 000 0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-black/20 bg-white px-3.5 py-3 text-sm text-[#1E1A17] placeholder:text-[#999] focus:border-[#B85D19] focus:outline-none focus:ring-1 focus:ring-[#B85D19]"
              />
            </div>

            <div className="relative pt-2.5">
              <label
                htmlFor="tourDate"
                className="absolute -top-0 left-3 z-10 bg-white px-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1E1A17]"
              >
                Preferred Date <span className="text-[#B85D19]">*</span>
              </label>
              <input
                type="date"
                id="tourDate"
                name="tourDate"
                required
                value={formData.tourDate}
                onChange={handleChange}
                className="w-full rounded-xl border border-black/20 bg-white px-3.5 py-3 text-sm text-[#1E1A17] focus:border-[#B85D19] focus:outline-none focus:ring-1 focus:ring-[#B85D19]"
              />
            </div>
          </div>

          {/* Guests Count */}
          <div className="relative pt-2.5">
            <label
              htmlFor="guests"
              className="absolute -top-0 left-3 z-10 bg-white px-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1E1A17]"
            >
              Number of Guests
            </label>
            <div className="relative">
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full appearance-none rounded-xl border border-black/20 bg-white px-3.5 py-3 text-sm font-semibold text-[#1E1A17] focus:border-[#B85D19] focus:outline-none focus:ring-1 focus:ring-[#B85D19]"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4 Guests">4 Guests</option>
                <option value="5 Guests">5 Guests</option>
                <option value="6-10 Guests (Group)">6-10 Guests (Group)</option>
                <option value="10+ Guests (Corporate / Private)">10+ Guests (Corporate / Private)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black/40 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="relative pt-2.5">
            <label
              htmlFor="message"
              className="absolute -top-0 left-3 z-10 bg-white px-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1E1A17]"
            >
              Pickup Address / Special Notes
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Mention hotel pickup location, dietary requirements, or special occasion..."
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-black/20 bg-white px-3.5 py-3 text-sm text-[#1E1A17] placeholder:text-[#999] focus:border-[#B85D19] focus:outline-none focus:ring-1 focus:ring-[#B85D19]"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              size="md"
              showIcon={!isSubmitting}
              icon={isSubmitting ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
              iconPosition="right"
              className="w-full justify-center !rounded-xl py-3.5 text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit Tour Enquiry"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}