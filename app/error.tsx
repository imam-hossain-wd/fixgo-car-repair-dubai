"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  RiArrowRightLine,
  RiHomeLine,
  RiRefreshLine,
  RiRoadsterLine,
  RiPhoneLine,
  RiWhatsappLine,
  RiAlertLine,
  RiCustomerService2Line,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";


interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const { displayNumber, numberCallLink, whatsappCallLink } = SiteConfig;

  // Log error for monitoring
  useEffect(() => {
    console.error("Application Error:", error);
    // You can send error to your monitoring service here
    // Example: Sentry.captureException(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center px-4 py-20">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-orange-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        {/* Error Icon */}
        <div className="relative inline-block">
          <div className="font-serif text-[100px] font-bold leading-none tracking-tight text-white sm:text-[120px] lg:text-[140px]">
            500
          </div>
          <div className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
        </div>

        {/* Icon */}
        <div className="mt-6 flex justify-center">
          <div className="rounded-full bg-red-500/10 p-4">
            <RiAlertLine className="h-10 w-10 text-red-400" />
          </div>
        </div>

        {/* Message */}
        <h2 className="mt-6 font-serif text-2xl font-bold text-white sm:text-3xl">
          Something Went Wrong
        </h2>
        <p className="mt-3 text-base text-neutral-400">
          We're experiencing technical difficulties. Our team has been notified 
          and is working to resolve the issue. Please try again in a few minutes.
        </p>

        {/* Error Details (Hidden from users) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-left">
            <p className="text-xs font-mono text-red-400">{error.message}</p>
            {error.digest && (
              <p className="mt-1 text-xs font-mono text-neutral-500">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          {/* Try Again Button */}
          <button
            onClick={reset}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
          >
            <RiRefreshLine className="h-4 w-4" />
            <span>Try Again</span>
          </button>

          {/* Home Button */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl"
          >
            <RiHomeLine className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Contact Options */}
        <div className="mt-10 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2">
            <RiCustomerService2Line className="h-5 w-5 text-emerald-400" />
            <p className="text-sm font-medium text-white">Need immediate assistance?</p>
          </div>
          <p className="mt-1 text-xs text-neutral-400">
            Our team is available 24/7 to help with emergency car repair
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={numberCallLink}
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              <RiPhoneLine className="h-4 w-4 text-red-400" />
              <span>Call Now</span>
              <span className="text-xs text-neutral-500">|</span>
              <span className="text-xs font-mono text-neutral-300">
                {displayNumber}
              </span>
            </Link>
            <Link
              href={whatsappCallLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400 transition-colors hover:bg-green-500/20"
            >
              <RiWhatsappLine className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs">
          <Link
            href="/"
            className="text-neutral-500 transition-colors hover:text-neutral-300"
          >
            Home
          </Link>
          <span className="text-neutral-700">|</span>
          <Link
            href="/services"
            className="text-neutral-500 transition-colors hover:text-neutral-300"
          >
            Services
          </Link>
          <span className="text-neutral-700">|</span>
          <Link
            href="/area-we-serve"
            className="text-neutral-500 transition-colors hover:text-neutral-300"
          >
            Areas We Serve
          </Link>
          <span className="text-neutral-700">|</span>
          <Link
            href="/contact"
            className="text-neutral-500 transition-colors hover:text-neutral-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}