"use client";

import { useState } from "react";
import {
  RiAddLine,
  RiSubtractLine,
  RiTimeLine,
  RiPriceTag3Line,
  RiShieldCheckLine,
  RiCarLine,
  RiCustomerService2Line,
  RiArrowRightLine,
  RiQuestionLine,
  RiInformationLine,
} from "@remixicon/react";
import Link from "next/link";

const FAQ = () => {
  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "How fast can a mechanic arrive at my location?",
      answer:
        "Our mobile mechanics are strategically deployed across Dubai and typically arrive within 5 to 15 minutes of your service request. We cover all major communities including Dubailand, Business Bay, Downtown Dubai, JVC, and Al Barsha with rapid response times.",
      category: "Response Time",
      icon: RiTimeLine,
    },
    {
      id: 2,
      question: "Do you provide upfront pricing before starting the repair?",
      answer:
        "Yes, we provide 100% transparent upfront pricing. Our mechanics will inspect your vehicle, diagnose the issue, and provide a clear itemized quote before any work begins. There are no hidden fees, surprise charges, or call-out costs.",
      category: "Pricing",
      icon: RiPriceTag3Line,
    },
    {
      id: 3,
      question: "What types of car repairs can you do on-site?",
      answer:
        "Our mobile workshops are equipped to handle up to 90% of vehicle issues on-site, including battery replacement, jump starts, computer diagnostics, AC repair, alternator repair, brake pad replacement, oil changes, transmission repair, and emergency mechanical overhauls.",
      category: "Services",
      icon: RiCarLine,
    },
    {
      id: 4,
      question: "Are your mechanics certified and insured?",
      answer:
        "All FixGo mechanics are fully certified, trained professionals with extensive experience across multiple vehicle brands. We are fully licensed and insured, providing you with complete peace of mind.",
      category: "Trust & Safety",
      icon: RiShieldCheckLine,
    },
    {
      id: 5,
      question: "Do you operate 24/7 including weekends and holidays?",
      answer:
        "Yes, we operate 24/7/365. Car breakdowns don't follow business hours, so neither do we. Our team is available round-the-clock, including weekends, public holidays, and late-night emergencies.",
      category: "Availability",
      icon: RiCustomerService2Line,
    },
    {
      id: 6,
      question: "What areas of Dubai do you cover?",
      answer:
        "We cover all major Dubai communities including Dubailand, Arabian Ranches, Dubai Silicon Oasis, Dubai Motor City, Jumeirah Village Circle, Dubai Hills Estate, Business Bay, Al Barsha, Al Quoz, Downtown Dubai, and many more residential and commercial areas.",
      category: "Coverage",
      icon: RiInformationLine,
    },
    {
      id: 7,
      question: "How do I book a service with FixGo?",
      answer:
        "You can book our service by calling our 24/7 hotline at +971 54 144 6338, sending a WhatsApp message, or using the contact form on our website. Our team will dispatch the nearest available mechanic to your location immediately.",
      category: "Booking",
      icon: RiCustomerService2Line,
    },
    {
      id: 8,
      question: "What is your service guarantee?",
      answer:
        "We stand behind our work with a comprehensive service guarantee. All repairs are performed using premium OEM-grade parts and are backed by our quality assurance. If you're not satisfied, we'll make it right.",
      category: "Trust & Safety",
      icon: RiShieldCheckLine,
    },
    {
      id: 9,
      question: "Can you handle luxury and sports cars?",
      answer:
        "Absolutely. Our certified mechanics are trained to work on all makes and models, including luxury brands like Mercedes-Benz, BMW, Audi, Porsche, and sports cars from Ferrari, Lamborghini, and more.",
      category: "Services",
      icon: RiCarLine,
    },
    {
      id: 10,
      question: "What payment methods do you accept?",
      answer:
        "We accept multiple payment methods including cash, credit/debit cards, bank transfers, and digital wallets. Payment is only required after the repair is completed to your satisfaction.",
      category: "Pricing",
      icon: RiPriceTag3Line,
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-5">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-[500px] w-[500px] rounded-full bg-orange-600/5 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/images/faq-pattern.svg')] opacity-5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 backdrop-blur-sm">
            <RiQuestionLine className="h-4 w-4" />
            Frequently Asked Questions
          </div>

          <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Got Questions?
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              We&lsquo;ve Got Answers
            </span>
          </h2>

          <p className="mt-4 text-lg text-neutral-400">
            Everything you need to know about FixGo&lsquo;s mobile car repair service
            in Dubai. Can&apos;t find what you&apos;re looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-3 w-full md:w-[80%] mx-auto">
          {faqs.map((faq) => {
            const Icon = faq.icon;
            const isOpen = openFaq === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${isOpen
                    ? "border-red-500/30 bg-white/10 shadow-lg shadow-red-500/5"
                    : "border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center gap-4 px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  {/* Icon */}
                  <div className="hidden shrink-0 items-center justify-center rounded-lg bg-red-500/10 p-2 sm:flex">
                    <Icon className="h-4 w-4 text-red-400" />
                  </div>

                  {/* Question */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white">
                        {faq.question}
                      </span>
                      <span className="hidden rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-neutral-400 sm:inline">
                        {faq.category}
                      </span>
                    </div>
                  </div>

                  {/* Toggle Icon */}
                  <div
                    className={`rounded-full p-1 transition-all duration-300 ${isOpen
                        ? "bg-red-500/20 text-red-400"
                        : "bg-white/5 text-neutral-400"
                      }`}
                  >
                    {isOpen ? (
                      <RiSubtractLine className="h-4 w-4" />
                    ) : (
                      <RiAddLine className="h-4 w-4" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="h-px bg-white/10" />
                    <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                      {faq.answer}
                    </p>

                    {/* Related Actions */}
                    {isOpen && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 text-xs text-red-400 transition-colors hover:text-red-300"
                        >
                          <span>Still have questions? Contact us</span>
                          <RiArrowRightLine className="h-3 w-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - Still Have Questions? */}
        {/* <div className="mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm">
            
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div className="flex items-center gap-4">
                <div className="hidden rounded-full bg-red-500/20 p-3 sm:block">
                  <RiCustomerService2Line className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Still Have Questions?
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Our team is here to help you 24/7. Contact us directly.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="tel:+971541446338"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
                >
                  <span>📞</span>
                  <span>Call Now</span>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
                >
                  <span>Contact Us</span>
                  <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            
            <div className="relative mt-6 flex flex-wrap items-center justify-center gap-4 border-t border-white/5 pt-6 md:justify-start">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>5-15 min response</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>100% transparent pricing</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FAQ;