
import Link from "next/link";
import {

  RiSettings3Line,
  RiArrowRightLine,
  RiShieldCheckLine,
  RiTimeLine,
  RiPriceTag3Line,
  RiCheckboxCircleLine,
  RiToolsLine,

} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import ServiceCard from "@/components/Shared/ServiceCard/ServiceCard";
import { services } from "@/data/services/services";




export default function ServicesPage() {
  const { displayNumber, numberCallLink } = SiteConfig;


  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-5">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-[500px] w-[500px] rounded-full bg-orange-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Comprehensive Auto Repair
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              At Your Doorstep
            </span>
          </h1>

          <p className="mt-4 text-lg text-neutral-400">
            From simple battery replacements to complex mechanical repairs — 
            our certified mobile mechanics handle it all on-site with transparent 
            pricing and guaranteed work.
          </p>

          {/* Quick Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-white/5 bg-white/5 px-6 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <RiTimeLine className="h-5 w-5 text-emerald-400" />
              <span className="text-sm text-neutral-300">
                <span className="font-semibold text-white">5-15 min</span> response
              </span>
            </div>
            <div className="hidden h-6 w-px bg-white/10 md:block" />
            <div className="flex items-center gap-2">
              <RiPriceTag3Line className="h-5 w-5 text-emerald-400" />
              <span className="text-sm text-neutral-300">
                <span className="font-semibold text-white">100%</span> upfront pricing
              </span>
            </div>
            <div className="hidden h-6 w-px bg-white/10 md:block" />
            <div className="flex items-center gap-2">
              <RiShieldCheckLine className="h-5 w-5 text-emerald-400" />
              <span className="text-sm text-neutral-300">
                <span className="font-semibold text-white">Guaranteed</span> work
              </span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
            {/* Services Grid */}
        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              name={service.name}
              slug={service.slug}
              description={service.intro?.content?.substring(0, 100) || service.metaDescription?.substring(0, 100)}
              features={service.features}
              // popular={service?.popular}
              service_image={service.service_image}
            />
          ))}
        </div>

        {/* Service Count */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500">
            <span className="font-semibold text-white">{services.length}</span> specialized services available
            <span className="mx-2 hidden sm:inline">•</span>
            <span className="block sm:inline">Available 24/7 across all Dubai communities</span>
          </p>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-600/10 via-red-700/5 to-transparent p-8 backdrop-blur-sm sm:p-12">
            {/* Background Decoration */}
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-orange-600/20 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
              <div className="flex items-center gap-6">
                <div className="hidden rounded-full bg-red-500/20 p-4 lg:block">
                  <RiToolsLine className="h-8 w-8 text-red-400" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Need Immediate Assistance?
                  </h3>
                  <p className="mt-2 text-neutral-400">
                    Our certified mechanics are ready to help you 24/7. 
                    Call us now for emergency service.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-neutral-400">
                      <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400" />
                      <span>5-15 min response</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-400">
                      <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400" />
                      <span>100% transparent pricing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-400">
                      <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400" />
                      <span>Certified mechanics</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 lg:items-end">
                <Link
                  href={numberCallLink}
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
                >
                  <span>📞 Call Now</span>
                  <span className="text-xs opacity-80">|</span>
                  <span className="text-sm font-mono">{displayNumber}</span>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-red-400 transition-colors hover:text-red-300"
                >
                  <span>Book Online Instead</span>
                  <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Our Services */}
        <div className="mt-16 rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="inline-flex rounded-full bg-emerald-500/10 p-3">
                <RiTimeLine className="h-6 w-6 text-emerald-400" />
              </div>
              <h4 className="mt-3 text-sm font-semibold text-white">Rapid Response</h4>
              <p className="mt-1 text-xs text-neutral-400">Arrive in 5-15 minutes</p>
            </div>
            <div className="text-center">
              <div className="inline-flex rounded-full bg-blue-500/10 p-3">
                <RiShieldCheckLine className="h-6 w-6 text-blue-400" />
              </div>
              <h4 className="mt-3 text-sm font-semibold text-white">Certified Mechanics</h4>
              <p className="mt-1 text-xs text-neutral-400">Trained professionals</p>
            </div>
            <div className="text-center">
              <div className="inline-flex rounded-full bg-purple-500/10 p-3">
                <RiPriceTag3Line className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="mt-3 text-sm font-semibold text-white">Transparent Pricing</h4>
              <p className="mt-1 text-xs text-neutral-400">No hidden fees</p>
            </div>
            <div className="text-center">
              <div className="inline-flex rounded-full bg-orange-500/10 p-3">
                <RiSettings3Line className="h-6 w-6 text-orange-400" />
              </div>
              <h4 className="mt-3 text-sm font-semibold text-white">All Makes & Models</h4>
              <p className="mt-1 text-xs text-neutral-400">Multi-brand expertise</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}