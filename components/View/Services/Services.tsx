"use client";

import {
  RiBattery2Line,
  RiFlashlightLine,
  RiComputerLine,
  RiOilLine,
  RiWindowLine,
  RiCarLine,
  RiVirusFill,
  RiSettings3Line,
  RiArrowRightLine,
  RiSearchLine,
  RiShieldCheckLine,
  RiTimeLine,
} from "@remixicon/react";
import Link from "next/link";

// Service data with icons
const services = [
  {
    id: 1,
    icon: RiBattery2Line,
    name: "Car Battery Replacement",
    slug: "car-battery-replacement",
    description: "Fast battery replacement with genuine parts. 24/7 mobile service across Dubai.",
    category: "Electrical",
    color: "from-green-600 to-emerald-600",
    bgColor: "group-hover:bg-green-500/10",
    borderColor: "group-hover:border-green-500/30",
  },
  {
    id: 2,
    icon: RiFlashlightLine,
    name: "Jump Start Car",
    slug: "jump-start-car",
    description: "Quick jump-start service for dead batteries. Arrive in 5-15 minutes.",
    category: "Emergency",
    color: "from-yellow-500 to-orange-500",
    bgColor: "group-hover:bg-yellow-500/10",
    borderColor: "group-hover:border-yellow-500/30",
  },
  {
    id: 3,
    icon: RiComputerLine,
    name: "Car Computer Diagnostic",
    slug: "car-computer-diagnostic",
    description: "Advanced diagnostic tools to identify and fix vehicle issues instantly.",
    category: "Diagnostic",
    color: "from-blue-600 to-cyan-600",
    bgColor: "group-hover:bg-blue-500/10",
    borderColor: "group-hover:border-blue-500/30",
  },
  {
    id: 4,
    icon: RiWindowLine,
    name: "Car AC Repair",
    slug: "car-ac-repair",
    description: "Full AC diagnostics, gas refills, and compressor repairs on location.",
    category: "AC Service",
    color: "from-cyan-500 to-sky-500",
    bgColor: "group-hover:bg-cyan-500/10",
    borderColor: "group-hover:border-cyan-500/30",
  },
  {
    id: 5,
    icon: RiOilLine,
    name: "Oil Change Service",
    slug: "oil-change-service",
    description: "Premium oil change and filter replacement at your doorstep.",
    category: "Maintenance",
    color: "from-amber-600 to-yellow-600",
    bgColor: "group-hover:bg-amber-500/10",
    borderColor: "group-hover:border-amber-500/30",
  },
  {
    id: 6,
    icon: RiVirusFill,
    name: "Brake Pad Repair",
    slug: "brake-pad-repair",
    description: "Professional brake inspection, pad replacement, and rotor servicing.",
    category: "Safety",
    color: "from-red-600 to-rose-600",
    bgColor: "group-hover:bg-red-500/10",
    borderColor: "group-hover:border-red-500/30",
  },
  {
    id: 7,
    icon: RiCarLine,
    name: "Car Transmission Repair",
    slug: "car-transmission-repair",
    description: "Expert transmission diagnostics and repair services on location.",
    category: "Mechanical",
    color: "from-purple-600 to-violet-600",
    bgColor: "group-hover:bg-purple-500/10",
    borderColor: "group-hover:border-purple-500/30",
  },
  {
    id: 8,
    icon: RiSettings3Line,
    name: "Car Mechanic Service",
    slug: "car-mechanic-service",
    description: "Full vehicle inspection and maintenance by certified mechanics.",
    category: "General",
    color: "from-slate-600 to-zinc-600",
    bgColor: "group-hover:bg-slate-500/10",
    borderColor: "group-hover:border-slate-500/30",
  },
];

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-5">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-600/5 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/images/services-pattern.svg')] opacity-5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 backdrop-blur-sm">
            <RiSearchLine className="h-4 w-4" />
            Our Services
          </div>

          <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Comprehensive Auto Repair
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              At Your Doorstep
            </span>
          </h2>

          <p className="mt-4 text-lg text-neutral-400">
            From battery replacements to complex diagnostics — our certified mechanics
            handle it all on-site with transparent pricing.
          </p>

          {/* Quick Stats */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span>24/7 Service</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span>5-15 Min Response</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span>100% Upfront Pricing</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative flex flex-col rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-red-500/5"
              >
                {/* Card Background Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 ${service.bgColor}`} />

                {/* Icon */}
                <div className="relative mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 transition-all duration-300 group-hover:scale-110">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40`} />
                  <Icon className="relative h-7 w-7 text-white transition-colors duration-300 group-hover:text-red-400" />
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-red-400">
                        {service.name}
                      </h3>
                      <span className="mt-1 inline-block rounded-full bg-white/5 px-2 py-0.5 text-xs font-medium text-neutral-400">
                        {service.category}
                      </span>
                    </div>
                    <span className="mt-1 text-xs font-medium text-emerald-400">
                      On-Site
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-red-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>Learn More</span>
                    <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${service.color} transition-all duration-500 group-hover:w-full`} />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA - All Services Button */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6">
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <RiShieldCheckLine className="h-5 w-5 text-emerald-400" />
              <span className="text-sm text-neutral-400">Certified Mechanics</span>
            </div>
            <div className="flex items-center gap-2">
              <RiTimeLine className="h-5 w-5 text-emerald-400" />
              <span className="text-sm text-neutral-400">5-15 Min Response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-400">
                ⭐ <span className="font-medium text-white">4.9/5</span> Rating
              </span>
            </div>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
          >
            <span>View All Services</span>
            <RiArrowRightLine className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <p className="text-xs text-neutral-500">
            {services.length}+ specialized services available • Call us 24/7 for immediate assistance
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;