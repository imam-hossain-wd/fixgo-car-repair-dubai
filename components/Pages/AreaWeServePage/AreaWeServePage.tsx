import { Metadata } from "next";
import Link from "next/link";
import {
  RiMapPinLine,
  RiBuildingLine,
  RiTimeLine,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiShieldCheckLine,
  RiRoadMapLine,
  RiCarLine,
  RiNavigationLine,
  RiStarLine,
  RiCustomerService2Line,
  RiHomeOfficeLine,
  RiStoreLine,
  RiCommunityLine,
  RiBusLine,
  RiSubwayLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";


export const metadata: Metadata = {
  title: "Service Areas - FixGo Car Repair Dubai | 24/7 Mobile Service Coverage",
  description: "FixGo provides 24/7 mobile car repair services across all Dubai communities including Dubailand, Business Bay, Downtown Dubai, JVC, and more. Rapid 5-15 minute response.",
  keywords: "car repair dubai, mobile mechanic dubai, service areas, dubailand, business bay, downtown dubai, jvc, al barsha",
  openGraph: {
    title: "Service Areas - FixGo Car Repair Dubai | 24/7 Mobile Service Coverage",
    description: "FixGo provides 24/7 mobile car repair services across all Dubai communities.",
    type: "website",
    url: "https://www.fixgocarrepair.com/area-we-serve",
  },
};

// Enhanced area data with additional details
const areaDetails: Record<string, { 
  description: string; 
  responseTime: string; 
  landmarks: string[];
  population: string;
  type: string;
  icon: any;
}> = {
  "Dubailand": {
    description: "Serving residential communities and commercial areas in Dubailand with rapid response times.",
    responseTime: "5-10 minutes",
    landmarks: ["Dubai Outlet Mall", "Global Village", "IMG Worlds of Adventure"],
    population: "High density residential",
    type: "Residential & Commercial",
    icon: RiHomeOfficeLine,
  },
  "Arabian Ranches": {
    description: "Premium villa community service with dedicated response teams for quick assistance.",
    responseTime: "5-12 minutes",
    landmarks: ["Arabian Ranches Golf Club", "Dubai Polo Club", "Al Qudra Lake"],
    population: "High-end residential",
    type: "Residential",
    icon: RiCommunityLine,
  },
  "Dubai Silicon Oasis": {
    description: "Technology park and residential areas served with priority response for IT professionals.",
    responseTime: "5-10 minutes",
    landmarks: ["Silicon Oasis", "Dubai Digital Park", "Silicon Central Mall"],
    population: "Tech & Residential",
    type: "Technology Park & Residential",
    icon: RiStoreLine,
  },
  "Dubai Motor City": {
    description: "Home to automotive enthusiasts, we provide specialized service for all vehicle types.",
    responseTime: "5-15 minutes",
    landmarks: ["Dubai Autodrome", "First Avenue Mall", "Motor City Golf Course"],
    population: "Mixed use",
    type: "Residential & Commercial",
    icon: RiCarLine,
  },
  "Jumeirah Village Circle": {
    description: "Family-friendly community with comprehensive coverage and quick response times.",
    responseTime: "5-12 minutes",
    landmarks: ["Circle Mall", "JVC District Parks", "Jumeirah Village"],
    population: "Residential",
    type: "Residential",
    icon: RiCommunityLine,
  },
  "Dubai Hills Estate": {
    description: "Luxury community service with premium support for high-end vehicles and immediate assistance.",
    responseTime: "5-10 minutes",
    landmarks: ["Dubai Hills Mall", "Golf Course", "Al Khail Road"],
    population: "Luxury Residential",
    type: "Residential",
    icon: RiHomeOfficeLine,
  },
  "Business Bay": {
    description: "Corporate district with priority service for professionals and businesses.",
    responseTime: "5-10 minutes",
    landmarks: ["Dubai Canal", "Bay Avenue", "Business Bay Metro"],
    population: "Commercial & Residential",
    type: "Commercial",
    icon: RiStoreLine,
  },
  "Al Barsha": {
    description: "Vibrant community with shopping and residential areas, fully covered for all repair needs.",
    responseTime: "5-12 minutes",
    landmarks: ["Mall of the Emirates", "Al Barsha Park", "Ski Dubai"],
    population: "Mixed use",
    type: "Residential & Commercial",
    icon: RiBuildingLine,
  },
  "Al Quoz": {
    description: "Industrial and artistic area with comprehensive service coverage for all vehicle types.",
    responseTime: "5-15 minutes",
    landmarks: ["Alserkal Avenue", "Al Quoz Industrial Area", "Dubai Frame"],
    population: "Industrial & Creative",
    type: "Industrial & Commercial",
    icon: RiBuildingLine,
  },
  "Downtown Dubai": {
    description: "Heart of Dubai with priority service for residents, tourists, and businesses.",
    responseTime: "5-8 minutes",
    landmarks: ["Burj Khalifa", "Dubai Mall", "Dubai Fountain"],
    population: "Commercial & Residential",
    type: "Commercial",
    icon: RiBuildingLine,
  },
};

export default function AreaWeServePage() {
  const { serviceAreas, displayNumber, numberCallLink, GMB } = SiteConfig;

  // Key metrics
  const metrics = [
    {
      value: "10+",
      label: "Communities",
      description: "Across Dubai",
      icon: RiCommunityLine,
      color: "from-emerald-500 to-green-500",
    },
    {
      value: "5-15",
      label: "Min Response",
      description: "Average arrival time",
      icon: RiTimeLine,
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: "100%",
      label: "Coverage",
      description: "All areas covered",
      icon: RiCheckboxCircleLine,
      color: "from-purple-500 to-pink-500",
    },
    {
      value: "24/7",
      label: "Availability",
      description: "Round the clock",
      icon: RiCustomerService2Line,
      color: "from-orange-500 to-red-500",
    },
  ];

  // Service areas with enhanced data
  const areasWithDetails = serviceAreas.map((area) => {
    const details = areaDetails[area.name] || {
      description: `Professional mobile car repair service available in ${area.name} with rapid response times.`,
      responseTime: "5-15 minutes",
      landmarks: ["All major roads", "Residential areas", "Commercial zones"],
      population: "Mixed use",
      type: "Residential & Commercial",
      icon: RiBuildingLine,
    };
    return { ...area, ...details };
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-20 sm:py-24 lg:py-32">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-[500px] w-[500px] rounded-full bg-orange-600/5 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/images/map-pattern.svg')] opacity-5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 backdrop-blur-sm">
            <RiMapPinLine className="h-4 w-4" />
            Service Coverage
          </div>

          <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Areas We Serve
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Across All Dubai Communities
            </span>
          </h1>

          <p className="mt-4 text-lg text-neutral-400">
            Strategic coverage across all major Dubai communities. Our mobile 
            mechanics are positioned for rapid 5-15 minute response times 
            throughout the city.
          </p>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="group rounded-xl border border-white/5 bg-white/5 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-red-500/30 hover:bg-white/10"
                >
                  <div className={`inline-flex rounded-lg bg-gradient-to-br ${metric.color} p-2`}>
                    <Icon className="h-5 w-5 text-white" />
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
        </div>

        {/* Area Highlights - Featured Areas */}
        <div className="mt-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areasWithDetails.slice(0, 6).map((area) => {
              const Icon = area.icon;
              return (
                <Link
                  key={area.slug}
                  href={`/area-we-serve/${area.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-red-500/5"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="mb-3 inline-flex rounded-xl bg-red-500/10 p-3">
                      <Icon className="h-6 w-6 text-red-400" />
                    </div>

                    {/* Response Time Badge */}
                    <div className="absolute right-0 top-0 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                      {area.responseTime}
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {area.name}
                    </h3>

                    <p className="mt-1 text-xs text-neutral-400">
                      {area.type}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                      {area.description}
                    </p>

                    {/* Landmarks */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {area.landmarks.slice(0, 2).map((landmark) => (
                        <span
                          key={landmark}
                          className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-neutral-500"
                        >
                          {landmark}
                        </span>
                      ))}
                      {area.landmarks.length > 2 && (
                        <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-neutral-500">
                          +{area.landmarks.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Learn More */}
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-red-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span>Learn More</span>
                      <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-500 group-hover:w-full" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* All Areas Grid */}
        <div className="mt-16">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div>
              <h2 className="font-serif text-2xl font-bold text-white">
                All Service Areas
              </h2>
              <p className="mt-1 text-sm text-neutral-400">
                Complete coverage across Dubai with rapid response times
              </p>
            </div>
            <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
              {serviceAreas.length} Areas
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {areasWithDetails.map((area) => {
              const Icon = area.icon;
              return (
                <Link
                  key={area.slug}
                  href={`/area-we-serve/${area.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-red-500/30 hover:bg-white/10 hover:shadow-lg"
                >
                  <div className="rounded-lg bg-red-500/10 p-2.5 transition-colors group-hover:bg-red-500/20">
                    <Icon className="h-4 w-4 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white group-hover:text-red-400">
                      {area.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-neutral-400">
                        {area.type}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-neutral-600" />
                      <span className="text-[10px] text-emerald-400">
                        {area.responseTime}
                      </span>
                    </div>
                  </div>
                  <RiArrowRightLine className="h-4 w-4 text-neutral-500 opacity-0 transition-all group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Service Coverage Map
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Our mobile units are strategically positioned across Dubai
                </p>
              </div>
              <Link
                href={GMB.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/20"
              >
                <RiRoadMapLine className="h-4 w-4" />
                View Full Map
              </Link>
            </div>

            <div className="mt-4 relative overflow-hidden rounded-xl">
              <div className="aspect-[16/9] w-full">
                <iframe
                  src={GMB.embedMap}
                  className="h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FixGo Car Repair Dubai Service Areas Map"
                />
              </div>

              {/* Map Overlay Badge */}
              <div className="absolute left-4 top-4 rounded-xl bg-neutral-900/90 px-4 py-2 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-sm font-medium text-white">
                    Active Across All Areas
                  </span>
                </div>
              </div>

              <div className="absolute right-4 bottom-4 rounded-xl bg-neutral-900/90 px-4 py-2 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2">
                  <RiNavigationLine className="h-4 w-4 text-red-400" />
                  <span className="text-xs text-neutral-300">
                    <span className="font-medium text-white">5-15 min</span> response
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="inline-flex rounded-full bg-emerald-500/10 p-3">
                <RiTimeLine className="h-6 w-6 text-emerald-400" />
              </div>
              <h4 className="mt-3 text-sm font-semibold text-white">
                Rapid Response
              </h4>
              <p className="mt-1 text-xs text-neutral-400">
                5-15 minute arrival
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex rounded-full bg-blue-500/10 p-3">
                <RiShieldCheckLine className="h-6 w-6 text-blue-400" />
              </div>
              <h4 className="mt-3 text-sm font-semibold text-white">
                Certified Mechanics
              </h4>
              <p className="mt-1 text-xs text-neutral-400">
                Trained professionals
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex rounded-full bg-purple-500/10 p-3">
                <RiCarLine className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="mt-3 text-sm font-semibold text-white">
                Mobile Workshop
              </h4>
              <p className="mt-1 text-xs text-neutral-400">
                Fully equipped vans
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex rounded-full bg-orange-500/10 p-3">
                <RiStarLine className="h-6 w-6 text-orange-400" />
              </div>
              <h4 className="mt-3 text-sm font-semibold text-white">
                High Rating
              </h4>
              <p className="mt-1 text-xs text-neutral-400">
                4.9/5 Google Rating
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-600/10 via-red-700/5 to-transparent p-8 backdrop-blur-sm sm:p-12">
          <div className="relative flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex items-center gap-4">
              <div className="hidden rounded-full bg-red-500/20 p-3 lg:block">
                <RiMapPinLine className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Need Service in Your Area?
                </h3>
                <p className="text-sm text-neutral-400">
                  Our mechanics are ready to help you 24/7 wherever you are in Dubai.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href={numberCallLink}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
              >
                <span>📞 Call Now</span>
                <span className="text-xs font-mono">{displayNumber}</span>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <span>Book Online</span>
                <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}