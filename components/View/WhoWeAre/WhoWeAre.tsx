"use client";

import {
  RiAwardLine,
  RiCustomerService2Line,
  RiEmotionHappyLine,
  RiMapPinLine,
  RiShieldCheckLine,
  RiToolsLine,
  RiTimeLine,
  RiFlashlightLine,
  RiArrowRightLine,
  RiBriefcase2Line,
  RiCalendar2Line,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

const WhoWeAre = () => {
  // Stats data
  const stats = [
    {
      id: 1,
      icon: RiCalendar2Line,
      value: "2020",
      label: "Founded",
      description: "Serving Dubai since inception",
    },
    {
      id: 2,
      icon: RiBriefcase2Line,
      value: "2,000+",
      label: "Repairs Done",
      description: "Successful vehicle repairs",
    },
    {
      id: 3,
      icon: RiCustomerService2Line,
      value: "4.9/5",
      label: "Rating",
      description: "Average customer rating",
    },
    {
      id: 4,
      icon: RiTimeLine,
      value: "5-15",
      label: "Min Response",
      description: "Average arrival time",
    },
  ];

  // Core values
  const coreValues = [
    {
      icon: RiShieldCheckLine,
      title: "Uncompromised Quality",
      description: "Every repair is performed by certified mechanics using premium OEM-grade parts",
      color: "from-emerald-600 to-emerald-700",
    },
    {
      icon: RiFlashlightLine,
      title: "Lightning Speed",
      description: "Strategic deployment ensures 5-15 minute response time across all Dubai communities",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: RiToolsLine,
      title: "Advanced Technology",
      description: "Dealer-grade diagnostic equipment and specialized mobile workshop tools",
      color: "from-blue-600 to-cyan-600",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-20 sm:py-24 lg:py-32">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-orange-600/5 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/images/about-pattern.svg')] opacity-5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 backdrop-blur-sm">
            <RiAwardLine className="h-4 w-4" />
            About FixGo
          </div>

          <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Who We Are
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Dubai&lsquo;s Trusted Mobile Mechanic
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Main Story */}
            <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-base leading-relaxed text-neutral-300">
                <span className="font-semibold text-red-400">Founded in 2020</span>, 
                FixGo Car Repair Dubai was built to solve a fundamental problem for 
                motorists in the UAE: the delay, expense, and stress of traditional 
                auto workshops. As a top-rated, 24/7 mobile car repair service, we 
                operate as a fully equipped garage on wheels, bringing certified 
                auto mechanics directly to your exact location—whether you are 
                stranded on the highway, parked at your office, or sitting at home.
              </p>
            </div>

            {/* Second Paragraph */}
            <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-base leading-relaxed text-neutral-300">
                From quick battery replacements and jump starts to advanced computer 
                diagnostics, AC gas refills, and complex mechanical repairs, our team 
                delivers complete auto care on the spot. Headquartered in{" "}
                <span className="font-semibold text-white">Wadi Al Safa</span> and 
                servicing every major district—including Dubailand, Business Bay, 
                Downtown Dubai, and Jumeirah Village Circle—FixGo guarantees a rapid{" "}
                <span className="font-semibold text-red-400">5-to-15-minute</span>{" "}
                response time.
              </p>
            </div>

            {/* Location Badge */}
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <div className="rounded-full bg-red-500/20 p-2">
                <RiMapPinLine className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Headquartered in Wadi Al Safa</p>
                <p className="text-xs text-neutral-400">Serving all Dubai communities</p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="group inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
            >
              <span>Learn More About Us</span>
              <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="flex flex-col space-y-6">
            {/* Main Image Card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl">
              <div className="aspect-[4/3] w-full">
                {/* Placeholder - Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-800">
                  <div className="text-center">
                    <div className="text-6xl">🔧</div>
                    <p className="mt-4 text-sm text-neutral-400">FixGo Mobile Workshop</p>
                    <p className="text-xs text-neutral-500">Image Placeholder</p>
                  </div>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />

                {/* Floating Badge - Rating */}
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-neutral-900/90 p-4 backdrop-blur-md border border-white/10 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">4.9/5</p>
                      <p className="text-xs text-neutral-400">Google Rating</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge - Response Time */}
                <div className="absolute -left-4 top-8 rounded-xl bg-neutral-900/90 p-4 backdrop-blur-md border border-white/10 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-emerald-500/20 p-2">
                      <RiTimeLine className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400">Response Time</p>
                      <p className="text-sm font-semibold text-white">5-15 Minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.id}
                    className="group rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-red-500/30 hover:bg-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-gradient-to-br from-red-600/20 to-red-700/20 p-2">
                        <Icon className="h-4 w-4 text-red-400" />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-white">{stat.value}</p>
                        <p className="text-xs font-medium text-neutral-400">{stat.label}</p>
                        <p className="mt-0.5 text-[10px] text-neutral-500">{stat.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-serif text-2xl font-bold text-white">
              Our Core Values
            </h3>
            <p className="mt-2 text-sm text-neutral-400">
              The principles that drive us to deliver exceptional service every day
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl"
                >
                  <div className={`inline-flex rounded-xl bg-gradient-to-br ${value.color} p-3`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-white">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-white/5 bg-white/5 px-6 py-6 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <RiShieldCheckLine className="h-5 w-5 text-emerald-400" />
            <span className="text-sm text-neutral-300">
              <span className="font-semibold text-white">Certified</span> Mechanics
            </span>
          </div>
          <div className="hidden h-6 w-px bg-white/10 md:block" />
          <div className="flex items-center gap-3">
            <RiAwardLine className="h-5 w-5 text-emerald-400" />
            <span className="text-sm text-neutral-300">
              <span className="font-semibold text-white">Guaranteed</span> Workmanship
            </span>
          </div>
          <div className="hidden h-6 w-px bg-white/10 md:block" />
          <div className="flex items-center gap-3">
            <RiEmotionHappyLine className="h-5 w-5 text-emerald-400" />
            <span className="text-sm text-neutral-300">
              <span className="font-semibold text-white">100%</span> Satisfaction
            </span>
          </div>
          <div className="hidden h-6 w-px bg-white/10 md:block" />
          <div className="flex items-center gap-3">
            <span className="text-sm text-neutral-300">
              ⭐ <span className="font-semibold text-white">4.9/5</span> Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;