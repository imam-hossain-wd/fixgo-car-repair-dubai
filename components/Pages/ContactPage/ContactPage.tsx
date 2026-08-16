"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  RiPhoneLine,
  RiMailLine,
  RiMapPinLine,
  RiWhatsappLine,
  RiTimeLine,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiSendPlaneLine,
  RiCustomerService2Line,
  RiShieldCheckLine,
  RiStarLine,
  RiBuildingLine,
  RiRoadMapLine,
  RiNavigationLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
// import { SiteConfig } from "@/lib/site-config";


interface IAreaProps {
    name : string;
    slug: string

}


export default function ContactPage() {
  const { displayNumber, email, location, streetAddress, city, country, GMB, numberCallLink, whatsappCallLink } = SiteConfig;
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Contact methods
  const contactMethods = [
    {
      icon: RiPhoneLine,
      title: "Call Us",
      description: "Available 24/7 for emergencies",
      action: numberCallLink,
      label: displayNumber,
      color: "from-green-600 to-emerald-600",
      hoverColor: "hover:border-green-500/30 hover:bg-green-500/10",
    },
    {
      icon: RiWhatsappLine,
      title: "WhatsApp",
      description: "Quick chat with our team",
      action: whatsappCallLink,
      label: "Chat on WhatsApp",
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:border-green-500/30 hover:bg-green-500/10",
      target: "_blank",
    },
    {
      icon: RiMailLine,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      action: `mailto:${email}`,
      label: email,
      color: "from-blue-600 to-cyan-600",
      hoverColor: "hover:border-blue-500/30 hover:bg-blue-500/10",
    },
    {
      icon: RiMapPinLine,
      title: "Visit Us",
      description: "Headquarters in Wadi Al Safa",
      action: GMB.mapsLink,
      label: "Get Directions",
      color: "from-red-600 to-orange-600",
      hoverColor: "hover:border-red-500/30 hover:bg-red-500/10",
      target: "_blank",
    },
  ];

  // Quick response indicators
  const quickIndicators = [
    {
      icon: RiTimeLine,
      label: "5-15 Min Response",
      description: "Average arrival time",
    },
    {
      icon: RiShieldCheckLine,
      label: "Certified Mechanics",
      description: "Trained professionals",
    },
    {
      icon: RiStarLine,
      label: "4.9/5 Rating",
      description: "Google Reviews",
    },
    {
      icon: RiCustomerService2Line,
      label: "24/7 Support",
      description: "Always available",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Simulate form submission - Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute right-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 h-[400px] w-[400px] rounded-full bg-orange-600/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 backdrop-blur-sm">
              <RiCustomerService2Line className="h-4 w-4" />
              Get in Touch
            </div>

            <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact FixGo
              <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                We're Here to Help 24/7
            </span>
            </h1>

            <p className="mt-4 text-lg text-neutral-400">
              Need emergency car repair? Our certified mechanics are ready to assist
              you anywhere in Dubai with rapid response times.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Link
                  key={method.title}
                  href={method.action}
                  target={method.target || "_self"}
                  rel={method.target === "_blank" ? "noopener noreferrer" : undefined}
                  className={`group flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 ${method.hoverColor} hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className={`inline-flex rounded-full bg-linear-to-br ${method.color} p-3 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    {method.title}
                  </h3>
                  <p className="text-xs text-neutral-400">{method.description}</p>
                  <span className="mt-2 text-sm font-medium text-red-400 group-hover:text-red-300">
                    {method.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Response Indicators */}
      <section className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/5 bg-white/5 px-6 py-4 backdrop-blur-sm">
            {quickIndicators.map((indicator) => {
              const Icon = indicator.icon;
              return (
                <div key={indicator.label} className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-500/10 p-1.5">
                    <Icon className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{indicator.label}</p>
                    <p className="text-xs text-neutral-500">{indicator.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form - Left */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                <div className="mb-6">
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Send Us a Message
                  </h2>
                  <p className="mt-1 text-sm text-neutral-400">
                    Fill in the form and we'll get back to you as soon as possible
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                      <RiCheckboxCircleLine className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Message Sent!</h3>
                    <p className="mt-2 text-sm text-neutral-400">
                      Thank you for contacting FixGo. We'll respond within 24 hours.
                      For emergencies, please call us directly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 text-sm font-medium text-red-400 hover:text-red-300"
                    >
                      Send another message →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-300">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm transition-colors focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-300">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm transition-colors focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                          placeholder="+971 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm transition-colors focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-300">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-colors focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      >
                        <option value="">Select a subject</option>
                        <option value="Emergency Repair">Emergency Repair</option>
                        <option value="Book a Service">Book a Service</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-300">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm transition-colors focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                        placeholder="Tell us about your car issue or service request..."
                      />
                    </div>

                    {error && (
                      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-red-600/50 disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <RiSendPlaneLine className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-neutral-500">
                      By submitting this form, you agree to our privacy policy.
                      We'll never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Right - Location & Info */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {/* Location Card */}
                <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                    Location
                  </h3>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-3">
                      <RiMapPinLine className="mt-0.5 h-5 w-5 text-red-400" />
                      <div>
                        <p className="text-sm text-white">{streetAddress}</p>
                        <p className="text-sm text-neutral-400">
                          {location}, {city}, {country}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={GMB.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300"
                    >
                      <RiRoadMapLine className="h-4 w-4" />
                      Get Directions
                      <RiArrowRightLine className="h-3 w-3" />
                    </Link>
                  </div>

                  {/* Map Preview */}
                  <div className="mt-4 overflow-hidden rounded-xl">
                    <div className="aspect-[16/9] w-full">
                      <iframe
                        src={GMB.embedMap}
                        className="h-full w-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="FixGo Car Repair Dubai Location"
                      />
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                    Operating Hours
                  </h3>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-400">24/7 Service</span>
                      <span className="text-emerald-400">Always Open</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <RiTimeLine className="h-3.5 w-3.5" />
                      <span>Available 365 days a year</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                      <span className="text-xs text-emerald-400">
                        Response in <span className="font-medium">5-15 minutes</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Emergency Note */}
                <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-red-500/20 p-2">
                      <RiNavigationLine className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Emergency Assistance
                      </h4>
                      <p className="mt-1 text-sm text-neutral-400">
                        For immediate emergency repair, call us directly. We're
                        available 24/7 for roadside assistance.
                      </p>
                      <Link
                        href={numberCallLink}
                        className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300"
                      >
                        <RiPhoneLine className="h-4 w-4" />
                        {displayNumber}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Quick Links */}
      <section className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Service Coverage
            </h3>
            <p className="mt-2 text-sm text-neutral-400">
              We serve all major Dubai communities
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {SiteConfig.serviceAreas.slice(0, 8).map((area:IAreaProps) => (
              <Link
                key={area.slug}
                href={`/area-we-serve/${area.slug}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-neutral-300 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                {area.name}
              </Link>
            ))}
            <Link
              href="/area-we-serve"
              className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-medium text-red-400 transition-all hover:bg-red-500/20"
            >
              + More Areas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-600/10 via-red-700/5 to-transparent p-8 backdrop-blur-sm sm:p-12">
            <div className="relative flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Need Immediate Assistance?
                </h3>
                <p className="mt-1 text-neutral-400">
                  Our team is standing by 24/7 for emergency car repair.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <Link
                  href={numberCallLink}
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
                >
                  <RiPhoneLine className="h-4 w-4" />
                  <span>Call Now</span>
                  <span className="text-xs opacity-80">|</span>
                  <span className="text-xs font-mono">{displayNumber}</span>
                </Link>
                <Link
                  href={whatsappCallLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                >
                  <RiWhatsappLine className="h-4 w-4 text-green-400" />
                  <span>Chat on WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}