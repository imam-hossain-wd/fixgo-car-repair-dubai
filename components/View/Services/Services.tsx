"use client";

import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import ServiceCard from "@/components/Shared/ServiceCard/ServiceCard";
import { services } from "@/data/services/services";


const FeatureServices = () => {
 
  const featuredServices = services.slice(0, 8);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-5">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-600/5 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/images/services-pattern.svg')] opacity-5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center">
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
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.slug}
              name={service.name}
              slug={service.slug}
              description={service.intro?.content?.substring(0, 100) || service.metaDescription?.substring(0, 100)}
              features={service.features}
              service_image={service.service_image}
            />
          ))}
        </div>

        {/* Bottom CTA - All Services Button */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6">
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-400">
                <span className="font-semibold text-white">{services.length}+</span> specialized services
              </span>
            </div>
            <div className="hidden h-6 w-px bg-white/10 md:block" />
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-400">
                <span className="font-semibold text-white">24/7</span> availability
              </span>
            </div>
            <div className="hidden h-6 w-px bg-white/10 md:block" />
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-400">
                ⭐ <span className="font-semibold text-white">4.9/5</span> Rating
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

export default FeatureServices;