/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
    RiArrowRightLine,
    RiCheckboxCircleLine,
    RiTimeLine,
    RiShieldCheckLine,
    RiPriceTag3Line,
    RiMapPinLine,
    RiPhoneLine,
    RiWhatsappLine,
    RiStarLine,
    RiCustomerService2Line,
    RiToolsLine,
    RiCarLine,
    RiSettings3Line,
    RiFlashlightLine,
    RiAwardLine,
    RiThumbUpLine,
} from "@remixicon/react";
import { services } from "@/data/services/services";
import { SiteConfig } from "@/config/siteConfig";



// Generate static params for all services
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServiceDetailPage(service:any, slug:string) {


    const { displayNumber, numberCallLink, whatsappCallLink } = SiteConfig;
    if (!service) {
        notFound();
    }

    // Extract data from service object
    const {
        name,
        title,
        metaTitle,
        metaDescription,
        // popular,
        features,
        service_image,
        service_banner,
        intro,
        whyChooseUs,
        problemSignsSection,
        ourProcess,
        toolsOrProducts,
        ctaSection,
        faq,
    } = service;

    // Fallback data if sections are missing
    const displayTitle = title || intro?.heading || name;
    const displayIntro = intro?.content || `${name} service in Dubai by certified mobile mechanics.`;
    const displayFeatures = features || [
        `Professional ${name} service`,
        "24/7 mobile service availability",
        "5-15 minute response time",
        "Certified mechanics",
        "Transparent pricing",
        "100% satisfaction guarantee",
    ];
    const displayWhyChoose = whyChooseUs?.points || [
        `24/7 emergency ${name} service across Dubai`,
        "Fast response time – reach you within 5 to 15 minutes",
        "Experienced technicians for all car brands",
        "Genuine parts with manufacturer warranty",
        "Transparent pricing with no hidden charges",
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
            {/* Breadcrumb */}
            <div className="border-b border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 py-4 text-sm">
                        <Link href="/" className="text-neutral-500 hover:text-white transition-colors">
                            Home
                        </Link>
                        <span className="text-neutral-600">/</span>
                        <Link href="/services" className="text-neutral-500 hover:text-white transition-colors">
                            Services
                        </Link>
                        <span className="text-neutral-600">/</span>
                        <span className="text-white font-medium truncate">{name}</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
                <div className="absolute inset-0">
                    <div className="absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-3xl" />
                    <div className="absolute bottom-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-600/10 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        {/* Left Content */}
                        <div className="flex flex-col justify-center space-y-6">
                            {/* Badge */}
                            <div className="flex flex-wrap items-center gap-3">

                                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                    </span>
                                    24/7 Available
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                                    <RiTimeLine className="h-3.5 w-3.5" />
                                    5-15 Min Response
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                                {displayTitle}
                            </h1>

                            {/* Description */}
                            <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">
                                {displayIntro}
                            </p>

                            {/* Features List */}
                            <div className="grid gap-2 sm:grid-cols-2">
                                {displayFeatures.slice(0, 6).map((feature: any, index: number) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <RiCheckboxCircleLine className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                                        <span className="text-sm text-neutral-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-3 pt-4">
                                <Link
                                    href={numberCallLink}
                                    className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
                                >
                                    <RiPhoneLine className="h-4 w-4" />
                                    <span>Call Now</span>
                                    <span className="text-xs opacity-80">|</span>
                                    <span className="text-xs font-mono">{displayNumber}</span>
                                </Link>
                                <Link
                                    href={whatsappCallLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl"
                                >
                                    <RiWhatsappLine className="h-4 w-4 text-green-400" />
                                    <span>Chat on WhatsApp</span>
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Image */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl">
                                <div className="aspect-[4/3] w-full">
                                    {/* Service Image */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-800">
                                        <div className="text-center">
                                            <div className="text-6xl">🔧</div>
                                            <p className="mt-4 text-sm text-neutral-400">{name}</p>
                                            <p className="text-xs text-neutral-500">Mobile Service</p>
                                        </div>
                                    </div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />

                                    {/* Floating Badges */}
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
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="border-t border-white/5 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                                Why Choose Us for <span className="text-red-400">{name}</span>?
                            </h2>
                            <p className="mt-2 text-neutral-400">
                                We provide the highest quality service with convenience and transparency.
                            </p>
                            <div className="mt-6 space-y-3">
                                {displayWhyChoose.map((point: any, index: number) => (
                                    <div key={index} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
                                        <RiCheckboxCircleLine className="mt-0.5 h-5 w-5 text-emerald-400 shrink-0" />
                                        <span className="text-sm text-neutral-300">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-white/5 bg-white/5 p-6 text-center backdrop-blur-sm">
                                <div className="inline-flex rounded-full bg-emerald-500/10 p-3">
                                    <RiTimeLine className="h-6 w-6 text-emerald-400" />
                                </div>
                                <p className="mt-3 font-serif text-2xl font-bold text-white">5-15</p>
                                <p className="text-sm text-neutral-400">Minutes Response</p>
                            </div>
                            <div className="rounded-2xl border border-white/5 bg-white/5 p-6 text-center backdrop-blur-sm">
                                <div className="inline-flex rounded-full bg-blue-500/10 p-3">
                                    <RiShieldCheckLine className="h-6 w-6 text-blue-400" />
                                </div>
                                <p className="mt-3 font-serif text-2xl font-bold text-white">100%</p>
                                <p className="text-sm text-neutral-400">Satisfaction Guarantee</p>
                            </div>
                            <div className="rounded-2xl border border-white/5 bg-white/5 p-6 text-center backdrop-blur-sm">
                                <div className="inline-flex rounded-full bg-purple-500/10 p-3">
                                    <RiStarLine className="h-6 w-6 text-purple-400" />
                                </div>
                                <p className="mt-3 font-serif text-2xl font-bold text-white">4.9/5</p>
                                <p className="text-sm text-neutral-400">Google Rating</p>
                            </div>
                            <div className="rounded-2xl border border-white/5 bg-white/5 p-6 text-center backdrop-blur-sm">
                                <div className="inline-flex rounded-full bg-orange-500/10 p-3">
                                    <RiCustomerService2Line className="h-6 w-6 text-orange-400" />
                                </div>
                                <p className="mt-3 font-serif text-2xl font-bold text-white">24/7</p>
                                <p className="text-sm text-neutral-400">Support Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Signs Section */}
            {problemSignsSection && (
                <section className="border-y border-white/5 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                                {problemSignsSection.heading || "Signs You Need This Service"}
                            </h2>
                            <p className="mt-2 text-neutral-400">
                                {problemSignsSection.description || "Identifying issues early can help you avoid costly repairs."}
                            </p>
                        </div>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {(problemSignsSection.signs || [
                                "Unusual sounds or noises",
                                "Warning lights on dashboard",
                                "Reduced performance",
                                "Visible leaks or damage",
                                "Unusual vibrations",
                                "Increased fuel consumption",
                            ]).map((sign: any, index: number) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm"
                                >
                                    <div className="rounded-full bg-red-500/10 p-1.5">
                                        <RiFlashlightLine className="h-4 w-4 text-red-400" />
                                    </div>
                                    <span className="text-sm text-neutral-300">{sign}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Our Process Section */}
            {ourProcess && (
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                                {ourProcess.heading || "Our Process"}
                            </h2>
                            <p className="mt-2 text-neutral-400">
                                Simple, transparent, and efficient service delivery
                            </p>
                        </div>

                        <div className="relative mt-12">
                            {/* Timeline Line */}
                            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-red-600 to-orange-500 sm:left-1/2 sm:-translate-x-1/2" />

                            <div className="space-y-8">
                                {(ourProcess.steps || [
                                    { title: "Step 1: Book Your Service", description: "Call or WhatsApp us with your location and car details." },
                                    { title: "Step 2: Quick Arrival", description: "Our technician reaches your location in 5-15 minutes." },
                                    { title: "Step 3: Service & Repair", description: "We perform the service with precision and quality." },
                                    { title: "Step 4: Final Check & Handover", description: "We test the system and ensure everything works." },
                                ]).map((step: any, index: number) => {
                                    const isEven = index % 2 === 0;
                                    return (
                                        <div
                                            key={index}
                                            className={`relative flex items-start gap-6 ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                                                }`}
                                        >
                                            {/* Content */}
                                            <div className={`w-full sm:w-5/12 ${isEven ? "sm:text-right" : "sm:text-left"}`}>
                                                <div className="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                                                    <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                                                    <p className="mt-1 text-sm text-neutral-400">{step.description}</p>
                                                </div>
                                            </div>

                                            {/* Timeline Node */}
                                            <div className="absolute left-0 top-0 z-10 -translate-x-1/2 sm:left-1/2">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-500/50 bg-neutral-950 shadow-lg shadow-red-500/20">
                                                    <span className="text-xs font-bold text-red-400">{index + 1}</span>
                                                </div>
                                            </div>

                                            {/* Spacer */}
                                            <div className="hidden sm:block sm:w-5/12" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Tools & Products Section */}
            {toolsOrProducts && (
                <section className="border-t border-white/5 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div>
                                <h2 className="font-serif text-2xl font-bold text-white">
                                    {toolsOrProducts.heading || "Tools & Products We Use"}
                                </h2>
                                <p className="mt-2 text-neutral-400">
                                    We use only high-quality equipment and genuine parts
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {(toolsOrProducts.brands || [
                                        "AC Delco", "Amaron", "Exide", "Bosch", "Varta"
                                    ]).map((brand: any, index: number) => (
                                        <span
                                            key={index}
                                            className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-300"
                                        >
                                            {brand}
                                        </span>
                                    ))}
                                </div>
                                {toolsOrProducts.note && (
                                    <p className="mt-4 text-sm text-neutral-400">
                                        {toolsOrProducts.note}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded-2xl border border-white/5 bg-white/5 p-6 text-center backdrop-blur-sm">
                                        <RiToolsLine className="mx-auto h-8 w-8 text-red-400" />
                                        <p className="mt-2 text-sm text-neutral-300">Premium Tools</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/5 bg-white/5 p-6 text-center backdrop-blur-sm">
                                        <RiShieldCheckLine className="mx-auto h-8 w-8 text-emerald-400" />
                                        <p className="mt-2 text-sm text-neutral-300">Genuine Parts</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/5 bg-white/5 p-6 text-center backdrop-blur-sm">
                                        <RiAwardLine className="mx-auto h-8 w-8 text-yellow-400" />
                                        <p className="mt-2 text-sm text-neutral-300">Warranty</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/5 bg-white/5 p-6 text-center backdrop-blur-sm">
                                        <RiThumbUpLine className="mx-auto h-8 w-8 text-blue-400" />
                                        <p className="mt-2 text-sm text-neutral-300">Quality Guarantee</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            {faq && faq.length > 0 && (
                <section className="border-y border-white/5 py-16">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                                Frequently Asked Questions
                            </h2>
                            <p className="mt-2 text-neutral-400">
                                Common questions about our {name} service
                            </p>
                        </div>

                        <div className="mt-8 space-y-3">
                            {faq.map((item: any, index: number) => (
                                <details
                                    key={index}
                                    className="group rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                                >
                                    <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-white transition-colors hover:text-red-400">
                                        <span>{item.question}</span>
                                        <span className="ml-4 text-red-400 transition-transform duration-300 group-open:rotate-180">
                                            ▼
                                        </span>
                                    </summary>
                                    <div className="px-5 pb-5">
                                        <p className="text-sm text-neutral-400">{item.answer}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-600/10 via-red-700/5 to-transparent p-8 backdrop-blur-sm sm:p-12">
                        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />
                        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-orange-600/20 blur-3xl" />

                        <div className="relative flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
                            <div>
                                <h3 className="font-serif text-2xl font-bold text-white">
                                    {ctaSection?.heading || `Need ${name} Service in Dubai?`}
                                </h3>
                                <p className="mt-1 text-neutral-400">
                                    {ctaSection?.description || `Get professional ${name} service anywhere in Dubai. Call us for immediate assistance.`}
                                </p>
                                <div className="mt-3 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
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
                                    className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
                                >
                                    <RiPhoneLine className="h-4 w-4" />
                                    <span>Call Now</span>
                                    <span className="text-xs opacity-80">|</span>
                                    <span className="text-xs font-mono">{displayNumber}</span>
                                </Link>
                                <Link
                                    href={whatsappCallLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                                >
                                    <RiWhatsappLine className="h-4 w-4 text-green-400" />
                                    <span>Chat on WhatsApp</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services Section */}
            <section className="border-t border-white/5 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-white">
                                Other Services You Might Need
                            </h2>
                            <p className="mt-1 text-sm text-neutral-400">
                                Explore our comprehensive range of auto repair services
                            </p>
                        </div>
                        <Link
                            href="/services"
                            className="group inline-flex items-center gap-1 text-sm font-medium text-red-400 hover:text-red-300"
                        >
                            View All
                            <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                        {services
                            .filter((s) => s.slug !== slug)
                            .slice(0, 4)
                            .map((relatedService) => (
                                <Link
                                    key={relatedService.slug}
                                    href={`/services/${relatedService.slug}`}
                                    className="group rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-lg bg-red-500/10 p-2">
                                            <RiCarLine className="h-4 w-4 text-red-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">
                                                {relatedService.name}
                                            </h4>
                                            <p className="text-xs text-neutral-500 line-clamp-1">
                                                Available 24/7
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </main>
    );
}