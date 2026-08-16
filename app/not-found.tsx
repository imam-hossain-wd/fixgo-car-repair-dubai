import Link from "next/link";
import {
  RiArrowRightLine,
  RiHomeLine,
  RiSearchLine,
  RiRoadsterLine,
} from "@remixicon/react";


export default function NotFound() {


  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 flex  justify-center px-4 py-20">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-orange-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        {/* Error Code */}
               {/* Icon */}
        <div className=" flex justify-center">
          <div className="rounded-full bg-red-500/10 p-4">
            <RiRoadsterLine className="h-10 w-10 text-red-400" />
          </div>
        </div>

        <div className="relative inline-block">
          <h1 className="font-serif text-7xl font-bold leading-none tracking-tight text-white ">
            404
          </h1>
          <div className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
        </div>

        {/* Message */}
        <h2 className="mt-6 font-serif text-2xl font-bold text-white sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-3 text-base text-neutral-400">
          Oops! The page you're looking for doesn't exist or has been moved.
          Don't worry, we'll help you get back on track.
        </p>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          {/* Home Button */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
          >
            <RiHomeLine className="h-4 w-4" />
            <span>Back to Home</span>
            <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Search Button */}
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl"
          >
            <RiSearchLine className="h-4 w-4" />
            <span>Browse Services</span>
          </Link>
        </div>
      </div>
    </main>
  );
}