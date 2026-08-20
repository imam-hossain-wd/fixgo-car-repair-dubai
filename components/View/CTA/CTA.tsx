"use client";

import { Button } from "@/components/ui/button";
import { SiteConfig } from "@/config/siteConfig";
import {
  RiWhatsappLine,
  RiPhoneLine,
  RiArrowRightLine,
  RiShieldCheckLine,
  RiTimeLine,
  RiStarLine,
  RiThumbUpLine,
} from "@remixicon/react";
import Link from "next/link";

const CTA = () => {
  // Trust indicators
  const trustIndicators = [
    {
      icon: RiShieldCheckLine,
      label: "Certified Mechanics",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: RiTimeLine,
      label: "5-15 Min Response",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: RiStarLine,
      label: "4.9/5 Rating",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: RiThumbUpLine,
      label: "100% Guaranteed",
      color: "from-purple-500 to-pink-500",
    },
  ];

  // Service highlights
  const highlights = [
    "24/7 Emergency Roadside Assistance",
    "Free Initial Vehicle Inspection",
    "Transparent Upfront Pricing",
    "OEM-Grade Replacement Parts",
    "Certified Multi-Brand Mechanics",
    "No Hidden Charges or Fees",
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-5">
      {/* Background Decorations */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/cta-bg-pattern.svg')] opacity-10" />
        <div className="absolute left-1/3 top-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-orange-600/5 blur-3xl" />
        <div className="absolute left-0 top-0 h-100 w-100 rounded-full bg-purple-600/5 blur-3xl" />
      </div> */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-red-600/10 via-red-700/5 to-transparent backdrop-blur-sm shadow-2xl shadow-red-600/20">
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-linear-to-br from-red-600/5 via-transparent to-transparent" />

          <div className="relative px-10 py-12">
            <div className="flex flex-col">
              {/* Left Content */}
              <div className="text-center">
                <h2 className="mt- font-serif text-3xl md:text-4xl font-bold tracking-tight text-white ">
                  Need Emergency Car Repair?
                  <span className="block mt-2 bg-linear-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    We&lsquo;re Here to Help
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl mx-auto mb-2 text-sm md:text-md text-neutral-300 text-center">
                  Don&lsquo;t let car trouble ruin your day. Our certified mechanics are
                  ready to assist you 24/7 with fast, reliable, and transparent
                  mobile car repair services across Dubai.
                </p>

              </div>

                <div className="flex h-full gap-3 justify-center space-y-4 mt-4">
                  <Link
                    href={SiteConfig?.whatsappCallLink}

                  >
                    <Button className="w-full flex items-center justify-center gap-3 bg-linear-to-r from-green-500 to-emerald-500 rounded-xl  px-6 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl"> <RiWhatsappLine className="h-5 w-5 text-" />
                      <span>Whatsapp Us</span></Button>
                  </Link>
                  <Link
                    href={SiteConfig?.numberCallLink}

                  >
                    <Button className="w-full bg-red-500 flex items-center justify-center gap-3 rounded-xl  px-6 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl"> <RiPhoneLine className="h-5 w-5 text-" />
                      <span>{SiteConfig?.displayNumber}</span></Button>
                  </Link>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;