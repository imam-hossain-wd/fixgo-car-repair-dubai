import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  RiAwardLine,
  RiCustomerService2Line,
  RiTimeLine,
  RiShieldCheckLine,
  RiStarLine,
  RiMapPinLine,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiRoadsterLine,
  RiToolsLine,
  RiTeamLine,
  RiCalendar2Line,
  RiBriefcase2Line,
  RiEmotionHappyLine,
  RiFlashlightLine,
  RiMedalLine,
  RiBuildingLine,
  RiCarLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { aboutUs, whyChooseUs } from "@/config/businessInfo";
// import { SiteConfig, aboutUs, whyChooseUs } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About FixGo - Dubai's Premier 24/7 Mobile Car Repair Service",
  description: "Learn about FixGo Car Repair Dubai - founded in 2020, we provide 24/7 mobile auto repair with certified mechanics, transparent pricing, and rapid 5-15 minute response across all Dubai communities.",
  keywords: "about fixgo, mobile car repair dubai, certified mechanics, 24/7 car service, dubai auto repair",
  openGraph: {
    title: "About FixGo - Dubai's Premier 24/7 Mobile Car Repair Service",
    description: "Learn about FixGo Car Repair Dubai - founded in 2020, we provide 24/7 mobile auto repair with certified mechanics.",
    type: "website",
    url: "https://www.fixgocarrepair.com/about",
  },
};

export default function AboutPage() {
  const { brandName, displayNumber, numberCallLink, founded, responseTime } = SiteConfig;

  // Company milestones
  const milestones = [
    {
      year: "2020",
      title: "FixGo Founded",
      description: "Launched with a vision to transform car repair in Dubai",
      icon: RiCalendar2Line,
    },
    {
      year: "2021",
      title: "1,000+ Repairs",
      description: "Reached milestone of 1,000 successful vehicle repairs",
      icon: RiBriefcase2Line,
    },
    {
      year: "2022",
      title: "Expanded Coverage",
      description: "Extended service to all major Dubai communities",
      icon: RiMapPinLine,
    },
    {
      year: "2023",
      title: "4.9/5 Rating",
      description: "Achieved 4.9/5 Google rating from 2,000+ customers",
      icon: RiStarLine,
    },
    {
      year: "2024",
      title: "5,000+ Happy Customers",
      description: "Served over 5,000 customers across Dubai",
      icon: RiEmotionHappyLine,
    },
  ];

  // Team values
  const teamValues = [
    {
      icon: RiShieldCheckLine,
      title: "Certified Excellence",
      description: "All mechanics are fully certified and trained professionals with multi-brand expertise.",
    },
    {
      icon: RiFlashlightLine,
      title: "Speed & Precision",
      description: "Strategic deployment ensures 5-15 minute response times without compromising quality.",
    },
    {
      icon: RiToolsLine,
      title: "Advanced Technology",
      description: "Dealer-grade diagnostic equipment and specialized mobile workshop tools.",
    },
    {
      icon: RiTeamLine,
      title: "Customer First",
      description: "Every interaction is built on transparency, honesty, and your complete satisfaction.",
    },
  ];

  // Key stats
  const stats = [
    {
      value: "2020",
      label: "Founded",
      description: "Serving Dubai since inception",
      icon: RiCalendar2Line,
    },
    {
      value: "5,000+",
      label: "Happy Customers",
      description: "Across all Dubai communities",
      icon: RiEmotionHappyLine,
    },
    {
      value: "4.9/5",
      label: "Google Rating",
      description: "Based on verified customer reviews",
      icon: RiStarLine,
    },
    {
      value: "5-15",
      label: "Min Response",
      description: "Average arrival time",
      icon: RiTimeLine,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5 py-10">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute right-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-red-600/5 blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-600/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 backdrop-blur-sm">
              <RiAwardLine className="h-4 w-4" />
              About FixGo
            </div> */}

            <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Dubai&lsquo;s Trusted
              <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Mobile Car Repair Partner
              </span>
            </h1>

            <p className="mt-4 text-lg text-neutral-400">
              Founded in {founded}, FixGo has been redefining car repair in Dubai with 
              speed, transparency, and uncompromised quality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left - Story Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-red-400">
                  Our Story
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-white">
                  Built to Solve
                  <span className="block text-red-400">A Fundamental Problem</span>
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-base leading-relaxed text-neutral-300">
                  {aboutUs.para1}
                </p>
                <p className="text-base leading-relaxed text-neutral-300">
                  {aboutUs.para2}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-sm text-emerald-400">24/7 Active</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2">
                  <RiShieldCheckLine className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-blue-400">Certified Mechanics</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-2">
                  <RiStarLine className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-yellow-400">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl">
                <div className="aspect-[4/3] w-full">
                  {/* Placeholder - Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-800">
                    <div className="text-center">
                      <div className="text-6xl">🔧</div>
                      <p className="mt-4 text-sm text-neutral-400">FixGo Team in Action</p>
                      <p className="text-xs text-neutral-500">Professional Mobile Workshop</p>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
                </div>

                {/* Stats Overlay */}
                <div className="absolute -bottom-4 left-1/2 grid w-[90%] -translate-x-1/2 grid-cols-2 gap-3 rounded-xl bg-neutral-900/90 p-4 backdrop-blur-md border border-white/10">
                  {stats.slice(0, 4).map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="text-center">
                        <div className="inline-flex rounded-lg bg-red-500/10 p-1.5">
                          <Icon className="h-3.5 w-3.5 text-red-400" />
                        </div>
                        <p className="mt-1 font-serif text-lg font-bold text-white">
                          {stat.value}
                        </p>
                        <p className="text-[10px] font-medium text-neutral-400">
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-white/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-red-500/20 p-3">
                  <RiRoadsterLine className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="mt-4 text-neutral-300">
                To provide Dubai&lsquo;s fastest, most reliable, and transparent mobile 
                car repair service—eliminating the stress and delay of traditional 
                garage visits while maintaining the highest standards of quality.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-orange-500/20 p-3">
                  <RiMedalLine className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="mt-4 text-neutral-300">
                To become the most trusted name in mobile car repair across the UAE, 
                setting the industry standard for speed, transparency, and 
                technical excellence in automotive care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Simplified */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-white">
              Why Dubai Trusts FixGo
            </h2>
            <p className="mt-2 text-neutral-400">
              The principles that drive us to deliver exceptional service every day
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item:any) => {
              // Extract key phrase from title for icon mapping
              const getIcon = (title: string) => {
                if (title.includes("Ultra-Fast") || title.includes("Arrival")) 
                  return RiFlashlightLine;
                if (title.includes("Diagnostic") || title.includes("Capabilities")) 
                  return RiToolsLine;
                if (title.includes("Pricing")) 
                  return RiCheckboxCircleLine;
                if (title.includes("24/7") || title.includes("Emergency")) 
                  return RiCustomerService2Line;
                if (title.includes("Certified") || title.includes("Guaranteed")) 
                  return RiShieldCheckLine;
                return RiStarLine;
              };

              const Icon = getIcon(item.name);
              
              return (
                <div
                  key={item.name}
                  className="group rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-red-500/10 p-3 group-hover:bg-red-500/20">
                    <Icon className="h-5 w-5 text-red-400" />
                  </div>
                  <h4 className="mt-3 text-sm font-semibold text-white">
                    {item.name.replace(/:/g, '')}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="border-y border-white/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-white">
              Our Journey
            </h2>
            <p className="mt-2 text-neutral-400">
              Milestones that shaped FixGo into Dubai&apos;s trusted mobile car repair partner
            </p>
          </div>

          <div className="relative mt-12">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-red-600 via-orange-500 to-transparent" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center gap-8 ${
                      isEven ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className={`w-5/12 ${isEven ? "text-right" : "text-left"}`}>
                      <div
                        className={`inline-block rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm ${
                          isEven ? "text-right" : "text-left"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`rounded-full bg-red-500/10 p-2 ${
                              isEven ? "order-1" : ""
                            }`}
                          >
                            <Icon className="h-4 w-4 text-red-400" />
                          </div>
                          <div>
                            <span className="text-sm font-bold text-red-400">
                              {milestone.year}
                            </span>
                            <h3 className="text-sm font-semibold text-white">
                              {milestone.title}
                            </h3>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-neutral-400">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className="absolute left-1/2 z-10 -translate-x-1/2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-500/50 bg-neutral-950 shadow-lg shadow-red-500/20">
                        <span className="text-xs font-bold text-red-400">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Empty spacer */}
                    <div className="w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-white">
              Our Core Values
            </h2>
            <p className="mt-2 text-neutral-400">
              The foundation of everything we do at FixGo
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-white/5 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-full bg-red-500/10 p-3 group-hover:bg-red-500/20">
                    <Icon className="h-6 w-6 text-red-400" />
                  </div>
                  <h4 className="mt-3 text-sm font-semibold text-white">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-sm text-neutral-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-600/10 via-red-700/5 to-transparent p-8 backdrop-blur-sm sm:p-12">
            <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Ready to Experience FixGo?
                </h3>
                <p className="mt-2 text-neutral-400">
                  Join thousands of satisfied customers who trust us for their car repair needs.
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400" />
                    <span>5-15 min response</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400" />
                    <span>Transparent pricing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400" />
                    <span>Certified mechanics</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <Link
                  href={numberCallLink}
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
                >
                  <span>📞 Call Now</span>
                  <span className="text-xs opacity-80">|</span>
                  <span className="text-xs font-mono">{displayNumber}</span>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                >
                  <span>Contact Us</span>
                  <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}