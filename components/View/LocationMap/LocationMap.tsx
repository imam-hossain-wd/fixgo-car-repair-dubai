"use client";

import { SiteConfig } from "@/config/siteConfig";
import {
  RiMapPinLine,
  RiBuildingLine,
  RiRoadMapLine,
  RiArrowRightLine,
  RiPhoneLine,
  RiMailLine,
  RiTimeLine,
  RiCarLine,
  RiNavigationLine,
  RiCheckboxCircleLine,
  RiBusLine,
  RiSubwayLine,
} from "@remixicon/react";
import Link from "next/link";


const LocationMap = () => {
  const { GMB, location, streetAddress, city, country, displayNumber, email } = SiteConfig;

  // Service areas data
  const serviceAreas = [
    { name: "Dubailand", slug: "dubailand", icon: RiBuildingLine },
    { name: "Arabian Ranches", slug: "arabian-ranches", icon: RiBuildingLine },
    { name: "Dubai Silicon Oasis", slug: "dubai-silicon-oasis", icon: RiBuildingLine },
    { name: "Dubai Motor City", slug: "dubai-motor-city", icon: RiBuildingLine },
    { name: "Jumeirah Village Circle", slug: "jumeirah-village-circle", icon: RiBuildingLine },
    { name: "Dubai Hills Estate", slug: "dubai-hills-estate", icon: RiBuildingLine },
    { name: "Business Bay", slug: "business-bay", icon: RiBuildingLine },
    { name: "Al Barsha", slug: "al-barsha", icon: RiBuildingLine },
    { name: "Al Quoz", slug: "al-quoz", icon: RiBuildingLine },
    { name: "Downtown Dubai", slug: "downtown-dubai", icon: RiBuildingLine },
  ];

  // Location features
  const locationFeatures = [
    {
      icon: RiTimeLine,
      title: "5-15 Min Response",
      description: "Average arrival time across all service areas",
    },
    {
      icon: RiCarLine,
      title: "Mobile Workshop",
      description: "Fully equipped vans with advanced diagnostic tools",
    },
    {
      icon: RiCheckboxCircleLine,
      title: "Coverage Guarantee",
      description: "We serve all residential and commercial districts",
    },
    {
      icon: RiNavigationLine,
      title: "GPS Tracking",
      description: "Real-time mechanic location tracking available",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-5">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-600/5 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/images/map-pattern.svg')] opacity-5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            We Serve All of
            <span className="block bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Dubai Communities
            </span>
          </h2>

          <p className="mt-4 text-lg text-neutral-400">
            Strategically located to provide the fastest mobile car repair service
            across Dubai. We come to you anywhere, anytime.
          </p>
        </div>

        {/* Location Features */}
        {/* <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {locationFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-white/5 bg-white/5 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-red-500/30 hover:bg-white/10"
              >
                <div className="inline-flex rounded-lg bg-red-500/10 p-2 group-hover:bg-red-500/20">
                  <Icon className="h-5 w-5 text-red-400" />
                </div>
                <p className="mt-2 text-sm font-semibold text-white">
                  {feature.title}
                </p>
                <p className="mt-0.5 text-xs text-neutral-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div> */}

        {/* Map & Location Details */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Left: Location Details */}
          <div className="lg:col-span-1">
            <div className="flex h-full flex-col space-y-4">
              {/* Main Location Card */}
              <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-red-600 to-red-700 p-3 shadow-lg shadow-red-600/20">
                    <RiMapPinLine className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Headquarters
                    </h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      {streetAddress}
                    </p>
                    <p className="text-sm text-neutral-400">
                      {location}, {city}, {country}
                    </p>
                    <Link
                      href={GMB.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-red-400 transition-colors hover:text-red-300"
                    >
                      <RiRoadMapLine className="h-4 w-4" />
                      View on Google Maps
                      <RiArrowRightLine className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                  Contact Information
                </h4>
                <div className="space-y-3">
                  <Link
                    href={`tel:${SiteConfig.numberCallLink}`}
                    className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2 transition-colors hover:bg-white/10"
                  >
                    <div className="rounded-full bg-emerald-500/20 p-1.5">
                      <RiPhoneLine className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Phone</p>
                      <p className="text-sm font-medium text-white">
                        {displayNumber}
                      </p>
                    </div>
                  </Link>

                  <Link
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2 transition-colors hover:bg-white/10"
                  >
                    <div className="rounded-full bg-blue-500/20 p-1.5">
                      <RiMailLine className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Email</p>
                      <p className="text-sm font-medium text-white">{email}</p>
                    </div>
                  </Link>

                  <div className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2">
                    <div className="rounded-full bg-purple-500/20 p-1.5">
                      <RiTimeLine className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Operating Hours</p>
                      <p className="text-sm font-medium text-white">24/7/365</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
              >
                <span>Book Your Service Now</span>
                <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Map & Service Areas */}
          <div className="lg:col-span-2">
            <div className="flex flex-col space-y-4">
              {/* Map Container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-2xl">
                <div className="aspect-[16/9] w-full">
                  {/* Google Maps Embed */}
                  <iframe
                    src={GMB.embedMap}
                    className="h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="FixGo Car Repair Dubai Location Map"
                  />
                </div>

                {/* Map Overlay Badges */}
                <div className="absolute left-4 top-4 rounded-xl bg-neutral-900/90 px-4 py-2 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-sm font-medium text-white">
                      Active in Your Area
                    </span>
                  </div>
                </div>

                <div className="absolute right-4 bottom-4 rounded-xl bg-neutral-900/90 px-4 py-2 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2">
                    <RiCarLine className="h-4 w-4 text-red-400" />
                    <span className="text-xs text-neutral-300">
                      <span className="font-medium text-white">5-15 min</span> response
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Areas Grid */}
              {/* <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                    Areas We Serve
                  </h4>
                  <Link
                    href="/area-we-serve"
                    className="text-xs font-medium text-red-400 transition-colors hover:text-red-300"
                  >
                    View All Areas →
                  </Link>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                  {serviceAreas.map((area) => {
                    const Icon = area.icon;
                    return (
                      <Link
                        key={area.slug}
                        href={`/area-we-serve/${area.slug}`}
                        className="group flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 transition-all duration-300 hover:bg-red-500/10 hover:shadow-lg"
                      >
                        <Icon className="h-3.5 w-3.5 text-neutral-500 transition-colors group-hover:text-red-400" />
                        <span className="text-xs text-neutral-300 transition-colors group-hover:text-white">
                          {area.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2">
                  <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400" />
                  <p className="text-xs text-neutral-300">
                    <span className="font-medium text-white">100% coverage</span> in all
                    residential and commercial districts
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-red-500/20 p-2">
                <RiNavigationLine className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">GPS Location Sharing</p>
                <p className="text-xs text-neutral-400">Share your location instantly</p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-white/10 lg:block" />

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-500/20 p-2">
                <RiBusLine className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Easy Access</p>
                <p className="text-xs text-neutral-400">Major roads and landmarks</p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-white/10 lg:block" />

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-500/20 p-2">
                <RiSubwayLine className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Near Metro Stations</p>
                <p className="text-xs text-neutral-400">Convenient location</p>
              </div>
            </div>
          </div>

          {/* <Link
            href={GMB.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl"
          >
            <RiRoadMapLine className="h-5 w-5" />
            <span>Get Directions to Our Location</span>
            <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default LocationMap;