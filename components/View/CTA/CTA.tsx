"use client";

import {
  RiWhatsappLine,
  RiPhoneLine,
  RiArrowRightLine,
  RiShieldCheckLine,
  RiTimeLine,
  RiCustomerService2Line,
  RiStarLine,
  RiThumbUpLine,
  RiFlashlightLine,
  RiCheckboxCircleLine,
  RiSendPlaneLine,
} from "@remixicon/react";
import Link from "next/link";

const CTA = () => {
  // Trust indicators
  const trustIndicators = [
    {
      icon: RiShieldCheckLine,
      label: "Certified Mechanics",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: RiTimeLine,
      label: "5-15 Min Response",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: RiStarLine,
      label: "4.9/5 Rating",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: RiThumbUpLine,
      label: "100% Guaranteed",
      color: "from-purple-500 to-pink-500",
    },
  ];

  // Service highlights
  const highlights = [
    "24/7 Emergency Roadside Assistance",
    "Free Initial Vehicle Inspection",
    "Transparent Upfront Pricing",
    "OEM-Grade Replacement Parts",
    "Certified Multi-Brand Mechanics",
    "No Hidden Charges or Fees",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-20 sm:py-24 lg:py-32">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/cta-bg-pattern.svg')] opacity-10" />
        <div className="absolute left-1/3 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-600/10 blur-3xl" />
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-600/10 via-red-700/5 to-transparent backdrop-blur-sm shadow-2xl shadow-red-600/20">
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent" />

          <div className="relative px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
              {/* Left Content */}
              <div className="lg:col-span-3">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2 text-sm font-medium text-red-400 backdrop-blur-sm">
                  <RiFlashlightLine className="h-4 w-4" />
                  <span>Available 24/7 • 5-15 Min Response</span>
                </div>

                {/* Heading */}
                <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Need Emergency Car Repair?
                  <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    We&lsquo;re Here to Help
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-lg text-neutral-300">
                  Don&lsquo;t let car trouble ruin your day. Our certified mechanics are
                  ready to assist you 24/7 with fast, reliable, and transparent
                  mobile car repair services across Dubai.
                </p>

                {/* Trust Indicators */}
                <div className="mt-6 flex flex-wrap items-center gap-6">
                  {trustIndicators.map((indicator) => {
                    const Icon = indicator.icon;
                    return (
                      <div
                        key={indicator.label}
                        className="flex items-center gap-2"
                      >
                        <div
                          className={`rounded-full bg-gradient-to-br ${indicator.color} p-1`}
                        >
                          <Icon className="h-3.5 w-3.5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-white">
                          {indicator.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Highlights Grid */}
                <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 backdrop-blur-sm"
                    >
                      <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span className="text-xs font-medium text-neutral-300">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Action Buttons */}
              <div className="lg:col-span-2">
                <div className="flex h-full flex-col justify-center space-y-4">
                  <p className="text-center text-sm font-medium text-neutral-400">
                    Get Help Now
                  </p>

                  {/* Primary CTA - WhatsApp */}
                  <Link
                    href="https://wa.me/971541446338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-green-600/30 transition-all duration-300 hover:scale-105 hover:shadow-green-600/50"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative flex items-center gap-3">
                      <RiWhatsappLine className="h-6 w-6" />
                      <span>Chat on WhatsApp</span>
                      <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>

                  {/* Secondary CTA - Call */}
                  <Link
                    href="tel:+971541446338"
                    className="group flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl"
                  >
                    <RiPhoneLine className="h-5 w-5 text-red-400" />
                    <span>Call Now: +971 54 144 6338</span>
                  </Link>

                  {/* Tertiary CTA - Book Online */}
                  <Link
                    href="/contact"
                    className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-neutral-300 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    <RiSendPlaneLine className="h-4 w-4" />
                    <span>Book Online</span>
                  </Link>

                  {/* Operating Hours */}
                  <div className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-white/5 px-4 py-2 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-xs text-neutral-400">
                      <span className="font-medium text-white">24/7</span> Service
                    </span>
                    <span className="text-xs text-neutral-500">•</span>
                    <span className="text-xs text-neutral-400">
                      Response in <span className="font-medium text-white">5-15 min</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        </div>

        {/* Additional Trust Signals */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-white/5 bg-white/5 px-6 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <RiCustomerService2Line className="h-5 w-5 text-emerald-400" />
            <span className="text-sm text-neutral-300">
              <span className="font-semibold text-white">2,000+</span> Happy Customers
            </span>
          </div>
          <div className="hidden h-6 w-px bg-white/10 md:block" />
          <div className="flex items-center gap-2">
            <RiStarLine className="h-5 w-5 text-yellow-400" />
            <span className="text-sm text-neutral-300">
              <span className="font-semibold text-white">4.9/5</span> Google Rating
            </span>
          </div>
          <div className="hidden h-6 w-px bg-white/10 md:block" />
          <div className="flex items-center gap-2">
            <RiShieldCheckLine className="h-5 w-5 text-blue-400" />
            <span className="text-sm text-neutral-300">
              <span className="font-semibold text-white">100%</span> Satisfaction Guarantee
            </span>
          </div>
          <div className="hidden h-6 w-px bg-white/10 md:block" />
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-300">
              📍 <span className="font-semibold text-white">All Dubai</span> Communities
            </span>
          </div>
        </div>

        {/* Emergency Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-neutral-500">
            ⚡ Emergency? Call us now at{" "}
            <Link
              href="tel:+971541446338"
              className="font-medium text-red-400 hover:text-red-300"
            >
              +971 54 144 6338
            </Link>
            {" "}• Available 24/7/365
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;