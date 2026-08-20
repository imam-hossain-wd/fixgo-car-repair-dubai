"use client";

import {
  RiFlashlightLine,
  RiComputerLine,
  RiPriceTag3Line,
  RiCalendar2Line,
  RiShieldCheckLine,
  RiCheckboxCircleLine,
  RiArrowRightLine,
  RiMedalLine,
  RiCustomerService2Line,
  RiTimeLine,
  RiStarLine,
  RiThumbUpLine,
} from "@remixicon/react";
import Link from "next/link";

const WhyChooseUs = () => {
  // Data from your config
  const reasons = [
    {
      id: 1,
      icon: RiFlashlightLine,
      title: "Ultra-Fast 5–15 Minute Onsite Arrival",
      description:
        "Our mobile service units are strategically deployed across major Dubai corridors, ensuring the fastest emergency response time in the region.",
      category: "Speed",
      gradient: "from-orange-500 to-red-500",
      stats: "Average response: 8 minutes",
    },
    {
      id: 2,
      icon: RiComputerLine,
      title: "Complete Onsite Diagnostic & Repair Capabilities",
      description:
        "Equipped with dealer-grade computer scanners and specialized tools, our certified technicians resolve up to 90% of vehicle issues directly on the spot—eliminating the need for expensive recovery towing.",
      category: "Technology",
      gradient: "from-blue-600 to-cyan-600",
      stats: "90% issues resolved on-site",
    },
    {
      id: 3,
      icon: RiPriceTag3Line,
      title: "100% Transparent, Upfront Pricing",
      description:
        "We provide clear, itemized quotes before any work begins. You get honest pricing with zero hidden charges or surprise call-out fees.",
      category: "Value",
      gradient: "from-emerald-600 to-green-600",
      stats: "0 hidden fees",
    },
    {
      id: 4,
      icon: RiCalendar2Line,
      title: "24/7/365 Emergency Roadside Assistance",
      description:
        "Car breakdowns do not follow business hours. Our team operates round-the-clock across all Dubai residential and commercial districts, including weekends and public holidays.",
      category: "Availability",
      gradient: "from-purple-600 to-violet-600",
      stats: "24/7/365 service",
    },
    {
      id: 5,
      icon: RiShieldCheckLine,
      title: "Certified Technicians & Guaranteed Work",
      description:
        "Every repair is handled by trained, multi-brand auto mechanics using premium, OEM-grade parts backed by service guarantees for long-term reliability.",
      category: "Quality",
      gradient: "from-amber-600 to-yellow-600",
      stats: "100% guaranteed work",
    },
  ];

  // Key metrics
  const metrics = [
    {
      value: "5-15",
      label: "Minutes Response Time",
      description: "Average arrival across Dubai",
      icon: RiTimeLine,
    },
    {
      value: "90%",
      label: "On-Site Fix Rate",
      description: "Issues resolved on the spot",
      icon: RiCheckboxCircleLine,
    },
    {
      value: "4.9/5",
      label: "Customer Rating",
      description: "Based on 2,000+ reviews",
      icon: RiStarLine,
    },
    {
      value: "100%",
      label: "Transparent Pricing",
      description: "No hidden fees or surprises",
      icon: RiThumbUpLine,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-5">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-[600px] w-[600px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-[500px] w-[500px] rounded-full bg-orange-600/5 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/images/choose-pattern.svg')] opacity-5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 backdrop-blur-sm">
            <RiMedalLine className="h-4 w-4" />
            Why Choose FixGo
          </div> */}

          <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why AutoFast Is
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Dubai&lsquo;s Trusted Choice
            </span>
          </h2>

          <p className="mt-4 text-lg text-neutral-400">
            We combine speed, technology, and transparency to deliver the best
            mobile car repair experience in Dubai.
          </p>
        </div>

        {/* Key Metrics - Quick Stats */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="group rounded-xl border border-white/5 bg-white/5 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-red-500/30 hover:bg-white/10"
              >
                <div className="inline-flex rounded-lg bg-red-500/10 p-2">
                  <Icon className="h-5 w-5 text-red-400" />
                </div>
                <p className="mt-2 font-serif text-2xl font-bold text-white">
                  {metric.value}
                </p>
                <p className="text-xs font-medium text-neutral-300">
                  {metric.label}
                </p>
                <p className="mt-0.5 text-[10px] text-neutral-500">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Reasons Grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                className="group relative rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-red-500/5"
              >
                {/* Icon with Gradient */}
                <div className="relative inline-flex">
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${reason.gradient} opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40`}
                  />
                  <div
                    className={`relative rounded-xl bg-gradient-to-br ${reason.gradient} p-3`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  {/* Category Tag */}
                  <span className="inline-block rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                    {reason.category}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-red-400">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {reason.description}
                  </p>

                  {/* Stat Badge */}
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-xs text-neutral-300">
                      {reason.stats}
                    </span>
                  </div>
                </div>

                {/* Decorative Line */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${reason.gradient} transition-all duration-700 group-hover:w-full`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA with Additional Trust Signals */}
        <div className="mt-8">
          <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              {/* Left - Trust Signals */}
              <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-500/20 p-2">
                    <RiShieldCheckLine className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Certified & Insured</p>
                    <p className="text-xs text-neutral-400">All mechanics verified</p>
                  </div>
                </div>

                <div className="hidden h-10 w-px bg-white/10 lg:block" />

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-500/20 p-2">
                    <RiCustomerService2Line className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">24/7 Support</p>
                    <p className="text-xs text-neutral-400">Always here to help</p>
                  </div>
                </div>

                <div className="hidden h-10 w-px bg-white/10 lg:block" />

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-purple-500/20 p-2">
                    <RiPriceTag3Line className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Best Price Guarantee</p>
                    <p className="text-xs text-neutral-400">Competitive rates</p>
                  </div>
                </div>
              </div>

              {/* Right - CTA */}
              <Link
                href="/contact"
                className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50 lg:w-auto"
              >
                <span>Experience FixGo Today</span>
                <RiArrowRightLine className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Additional Trust Badge */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500">
            <span className="flex items-center gap-1">
              <span className="text-emerald-400">✓</span>
              No hidden fees
            </span>
            <span className="flex items-center gap-1">
              <span className="text-emerald-400">✓</span>
              OEM-grade parts
            </span>
            <span className="flex items-center gap-1">
              <span className="text-emerald-400">✓</span>
              Service guarantee
            </span>
            <span className="flex items-center gap-1">
              <span className="text-emerald-400">✓</span>
              Licensed & insured
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;