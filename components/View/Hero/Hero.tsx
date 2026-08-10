"use client";

import { RiArrowRightLine, RiFlashlightFill, RiShieldCheckLine, RiTimeLine, RiWhatsappLine } from "@remixicon/react";
import Link from "next/link";

// We'll use placeholder images - you'll replace with actual images
const Hero = () => {
  return (
    <section className="relative h-auto overflow-hidden bg-linear-to-br from-neutral-950 via-neutral-900 to-red-950/90">
      {/* Background Overlay with Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/hero-bg-pattern.svg')] opacity-10" />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent" />
      </div>

      {/* Animated Blobs - Subtle Background Elements */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-orange-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[100vh] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 py-12 lg:py-0">
            {/* Trust Badge */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-400 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available 24/7 • 5-15 Min Response
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Dubai&lsquo;s Premier
                <span className="block bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Mobile Car Repair
                </span>
                <span className="block">At Your Doorstep</span>
              </h1>

              <p className="max-w-xl text-base text-neutral-300">
                Certified mechanics arrive in <span className="font-semibold text-white">5–15 minutes</span> with
                advanced diagnostic tools. Transparent pricing, no hidden fees, and
                guaranteed work — available 24/7 across all Dubai communities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-red-600 to-red-700 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
              >
                <RiWhatsappLine className="h-5 w-5" />
                Get Quick Help
                <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="tel:+971541446338"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <RiFlashlightFill className="h-5 w-5" />
                Call Now
              </Link>
            </div>

            {/* Stats / Trust Indicators */}
            {/* <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-9 w-9 rounded-full border-2 border-neutral-800 bg-gradient-to-br from-neutral-700 to-neutral-600"
                    />
                  ))}
                </div>
                <div className="text-sm text-neutral-300">
                  <span className="font-semibold text-white">2,000+</span> repairs done
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <RiTimeLine className="h-4 w-4 text-red-400" />
                <span>Response in <span className="font-semibold text-white">5-15 min</span></span>
              </div>

              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <RiShieldCheckLine className="h-4 w-4 text-emerald-400" />
                <span>100% <span className="font-semibold text-white">Guaranteed</span></span>
              </div>
            </div> */}

            {/* Service Area Tags */}
            <div className="flex flex-wrap gap-2">
              {["Dubailand", "Business Bay", "Downtown Dubai", "JVC", "Al Barsha"].map(
                (area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur-sm"
                  >
                    {area}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Main Image Container */}
            <div className="relative w-full max-w-lg">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-linear-to-br from-neutral-800 to-neutral-900 shadow-2xl">
                {/* Placeholder - Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🔧</div>
                    <p className="text-sm text-neutral-400">Mobile Repair Service</p>
                    <p className="text-xs text-neutral-500 mt-1">Image Placeholder</p>
                  </div>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/50 via-transparent to-transparent" />

                {/* Floating Card - Response Time */}
                <div className="absolute -bottom-6 -left-6 rounded-xl bg-neutral-900/90 p-4 backdrop-blur-md border border-white/10 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-emerald-500/20 p-2">
                      <RiTimeLine className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400">Avg. Response</p>
                      <p className="font-semibold text-white">5-15 Minutes</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card - Rating */}
                <div className="absolute -right-4 top-8 rounded-xl bg-neutral-900/90 p-4 backdrop-blur-md border border-white/10 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <span className="text-xs font-medium text-white">4.9/5</span>
                  </div>
                  <p className="text-xs text-neutral-400">Rating on Google</p>
                </div>

                {/* Floating Card - 24/7 */}
                <div className="absolute -bottom-6 -right-6 rounded-xl bg-neutral-900/90 p-4 backdrop-blur-md border border-white/10 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-red-500/20 p-2">
                      <RiFlashlightFill className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400">Available</p>
                      <p className="font-semibold text-white">24/7/365</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-red-500/30 to-transparent" />
    </section>
  );
};

export default Hero;