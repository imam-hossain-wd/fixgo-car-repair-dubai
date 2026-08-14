"use client";

import { 
  RiMapPinLine, 
  RiCheckboxCircleLine,
  RiArrowRightLine,
  RiRoadsterLine,
  RiToolsLine,
} from "@remixicon/react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: RiMapPinLine,
      title: "Request & Locate",
      description: "Call us or book online through our website. Share your location and vehicle issue. Our dispatch team instantly identifies the nearest available mobile mechanic.",
      details: [
        "Call or book online",
        "Share your location",
        "Describe the issue",
        "Get estimated arrival time"
      ]
    },
    {
      number: "02",
      icon: RiRoadsterLine,
      title: "Rapid Onsite Response",
      description: "A certified mobile mechanic arrives at your location within 5-15 minutes, fully equipped with advanced diagnostic tools and genuine replacement parts.",
      details: [
        "5-15 min arrival",
        "Full diagnostic setup",
        "OEM-grade parts",
        "Free initial inspection"
      ]
    },
    {
      number: "03",
      icon: RiCheckboxCircleLine,
      title: "Fix & Drive",
      description: "We provide transparent upfront pricing, perform the repair on the spot, and verify your vehicle's performance before you drive away safely.",
      details: [
        "Transparent pricing",
        "On-the-spot repair",
        "Quality verification",
        "Service guarantee"
      ]
    }
  ];

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-5">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 backdrop-blur-sm">
            <RiToolsLine className="h-4 w-4" />
            Simple & Transparent Process
          </div> */}

          <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            How It Works
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Getting Your Car Fixed
            </span>
          </h2>

          <p className="mt-4 text-lg text-neutral-400">
            Three simple steps to get your vehicle back on the road. Fast, reliable,
            and hassle-free mobile car repair service across Dubai.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div
                key={step.number}
                className="group relative flex flex-col rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-red-500/30 hover:bg-white/10 hover:shadow-xl hover:shadow-red-500/5"
              >
                {/* Step Number - Top Left */}
                <div className="absolute -left-2 -top-2 text-6xl font-bold text-white/5 transition-colors duration-300 group-hover:text-red-500/20">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-700 shadow-lg shadow-red-600/20">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="mt-4 space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-xs text-neutral-400"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow Connector for Desktop */}
                {!isLast && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block">
                    <RiArrowRightLine className="h-6 w-6 text-white/10" />
                  </div>
                )}

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;