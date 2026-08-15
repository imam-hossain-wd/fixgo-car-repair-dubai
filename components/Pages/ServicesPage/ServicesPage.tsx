import { Metadata } from "next";
import Link from "next/link";
import {
  RiBattery2Line,
  RiFlashlightLine,
  RiComputerLine,
  RiOilLine,
 RiSettings3Line as RiAirConditioningLine,
 RiSettings3Line as RiBrakeLine,
  RiCarLine,
  RiSettings3Line,
  RiArrowRightLine,
  RiShieldCheckLine,
  RiTimeLine,
  RiPriceTag3Line,
  RiSearchLine,
  RiCheckboxCircleLine,
  RiRoadsterLine,
  RiToolsLine,
  RiDashboardLine,
  RiGradienterLine,
  RiSunLine,
  RiSnowflakeLine,
  RiSteering2Line,
  RiWifiLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";


// Map service names to icons and colors
const serviceIconMap: Record<string, { icon: any; color: string; gradient: string; description: string }> = {
  "Car Battery Replacement": {
    icon: RiBattery2Line,
    color: "from-green-600 to-emerald-600",
    gradient: "from-green-500/20 to-emerald-500/20",
    description: "Professional battery replacement with genuine parts. 24/7 mobile service across Dubai."
  },
  "Jump Start Car": {
    icon: RiFlashlightLine,
    color: "from-yellow-500 to-orange-500",
    gradient: "from-yellow-500/20 to-orange-500/20",
    description: "Quick jump-start service for dead batteries. Arrive in 5-15 minutes."
  },
  "Car Computer Diagnostic": {
    icon: RiComputerLine,
    color: "from-blue-600 to-cyan-600",
    gradient: "from-blue-500/20 to-cyan-500/20",
    description: "Advanced diagnostic tools to identify and fix vehicle issues instantly."
  },
  "Car Alternator Repair": {
    icon: RiDashboardLine,
    color: "from-purple-600 to-violet-600",
    gradient: "from-purple-500/20 to-violet-500/20",
    description: "Expert alternator repair and replacement on location."
  },
  "Car Fuel Pump Repair": {
    icon: RiGradienterLine,
    color: "from-red-600 to-rose-600",
    gradient: "from-red-500/20 to-rose-500/20",
    description: "Professional fuel pump diagnostics and repair services."
  },
  "Car Starter Motor Repair": {
    icon: RiSettings3Line,
    color: "from-slate-600 to-zinc-600",
    gradient: "from-slate-500/20 to-zinc-500/20",
    description: "Starter motor repair and replacement for all vehicle makes."
  },
  "Car AC Repair": {
    icon: RiAirConditioningLine,
    color: "from-cyan-500 to-sky-500",
    gradient: "from-cyan-500/20 to-sky-500/20",
    description: "Full AC diagnostics, gas refills, and compressor repairs on location."
  },
  "Car Window Motor Repair": {
    icon: RiWifiLine,
    color: "from-indigo-600 to-blue-600",
    gradient: "from-indigo-500/20 to-blue-500/20",
    description: "Window motor repair and replacement for all vehicle models."
  },
  "Radiator Replacement": {
    icon: RiSunLine,
    color: "from-orange-600 to-red-600",
    gradient: "from-orange-500/20 to-red-500/20",
    description: "Complete radiator replacement and cooling system repair."
  },
  "ABS System Repair": {
    icon: RiShieldCheckLine,
    color: "from-emerald-600 to-teal-600",
    gradient: "from-emerald-500/20 to-teal-500/20",
    description: "ABS system diagnostics and repair for safe braking."
  },
  "Brake Pad Repair": {
    icon: RiBrakeLine,
    color: "from-red-600 to-rose-600",
    gradient: "from-red-500/20 to-rose-500/20",
    description: "Professional brake inspection, pad replacement, and rotor servicing."
  },
  "Car Detailing Service": {
    icon: RiRoadsterLine,
    color: "from-pink-600 to-rose-600",
    gradient: "from-pink-500/20 to-rose-500/20",
    description: "Comprehensive interior and exterior car detailing service."
  },
  "Emergency Car Repair": {
    icon: RiFlashlightLine,
    color: "from-red-600 to-orange-600",
    gradient: "from-red-500/20 to-orange-500/20",
    description: "24/7 emergency repair service for breakdowns and accidents."
  },
  "Car Mechanic Service": {
    icon: RiToolsLine,
    color: "from-slate-600 to-neutral-600",
    gradient: "from-slate-500/20 to-neutral-500/20",
    description: "Full vehicle inspection and maintenance by certified mechanics."
  },
  "Oil Change Service": {
    icon: RiOilLine,
    color: "from-amber-600 to-yellow-600",
    gradient: "from-amber-500/20 to-yellow-500/20",
    description: "Premium oil change and filter replacement at your doorstep."
  },
  "Car AC Gas Refill Service": {
    icon: RiSnowflakeLine,
    color: "from-blue-400 to-cyan-400",
    gradient: "from-blue-400/20 to-cyan-400/20",
    description: "AC gas refill and system check for optimal cooling."
  },
  "Car Transmission Repair": {
    icon: RiSteering2Line,
    color: "from-purple-600 to-indigo-600",
    gradient: "from-purple-500/20 to-indigo-500/20",
    description: "Expert transmission diagnostics and repair services on location."
  },
  "Car Service Dubai": {
    icon: RiCarLine,
    color: "from-blue-600 to-purple-600",
    gradient: "from-blue-500/20 to-purple-500/20",
    description: "Comprehensive car service packages for all makes and models."
  },
  "Car Repair Dubai": {
    icon: RiCarLine,
    color: "from-red-600 to-pink-600",
    gradient: "from-red-500/20 to-pink-500/20",
    description: "Full car repair services by certified mobile mechanics."
  },
};

// Default icon for services without specific mapping
const defaultIcon = {
  icon: RiSettings3Line,
  color: "from-neutral-600 to-zinc-600",
  gradient: "from-neutral-500/20 to-zinc-500/20",
  description: "Professional car repair service by certified mechanics."
};

export const metadata: Metadata = {
  title: "Services - FixGo Car Repair Dubai | 24/7 Mobile Auto Repair",
  description: "Explore our comprehensive range of mobile car repair services in Dubai. From battery replacement to AC repair, our certified mechanics come to you 24/7.",
  keywords: "car repair services dubai, mobile mechanic, battery replacement, AC repair, brake repair, transmission service",
  openGraph: {
    title: "Services - FixGo Car Repair Dubai | 24/7 Mobile Auto Repair",
    description: "Explore our comprehensive range of mobile car repair services in Dubai.",
    type: "website",
    url: "https://www.fixgocarrepair.com/services",
  },
};

export default function ServicesPage() {
  const { services, displayNumber, numberCallLink } = SiteConfig;

  // Group services by category
  const servicesWithIcons = services.map((service:any) => {
    const mapping = serviceIconMap[service.name] || defaultIcon;
    return {
      ...service,
      icon: mapping.icon,
      color: mapping.color,
      gradient: mapping.gradient,
      description: mapping.description,
    };
  });

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
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 backdrop-blur-sm">
            <RiSearchLine className="h-4 w-4" />
            Our Services
          </div> */}

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
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicesWithIcons.map((service:any) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-red-500/5"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                {/* Icon */}
                <div className="relative mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 transition-all duration-300 group-hover:scale-110">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40`} />
                  <Icon className="relative h-7 w-7 text-white transition-colors duration-300 group-hover:text-red-400" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-red-400">
                    {service.name}
                  </h3>
                  
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

                {/* Service Badge */}
                <div className="absolute right-3 top-3 rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-neutral-400 backdrop-blur-sm">
                  On-Site
                </div>
              </Link>
            );
          })}
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