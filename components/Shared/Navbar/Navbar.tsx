/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteConfig } from "@/config/siteConfig";
import Image from "next/image";
import { brandLogo } from "@/utils/assets";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const { navItems, displayNumber, numberCallLink, brandName } = SiteConfig;

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close drawer when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Check if link is active
    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300  ${isScrolled
                        ? "bg-neutral-950/95 backdrop-blur-md border-b border-white/5 shadow-lg"
                        : "bg-black"
                    }`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between lg:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-serif text-2xl font-bold text-white bg-white px-4 py-1 transition-colors hover:text-red-400 lg:text-3xl"
                        >
                            {/* Fix<span className="text-red-500">Go</span> */}
                              <Image  width={110} height={110} quality={75} src={brandLogo?.logo} alt="fix go car repair logo"/>
                            {/* <span className="hidden text-sm font-sans font-medium text-neutral-400 lg:inline-block">
                                Car Repair Dubai
                            </span> */}
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:block" aria-label="Main navigation">
                            <ul className="flex items-center gap-1">
                                {navItems.map((item) => {
                                    const active = isActive(item.href);
                                    return (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${active
                                                        ? "text-white"
                                                        : "text-neutral-400 hover:text-white"
                                                    }`}
                                            >
                                                {item.name}
                                                {active && (
                                                    <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
                                                )}
                                                <span
                                                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-center rounded-full bg-gradient-to-r from-red-500 to-red-600 transition-transform duration-300 ${active
                                                            ? "scale-x-100"
                                                            : "scale-x-0 group-hover:scale-x-100"
                                                        }`}
                                                />
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden lg:block">
                            <Link
                                href={numberCallLink}
                                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
                            >
                              
                                <span className="text-sm font-mono">{displayNumber}</span>
                                  {/* <span className="text-xs font-medium opacity-80">|</span> */}
                            </Link>
                        </div>

                        {/* Mobile Controls */}
                        <div className="flex items-center gap-3 lg:hidden">
                            {/* Mobile Call Button */}
                            <Link
                                href={numberCallLink}
                                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105"
                                aria-label="Call us"
                            >
                                <span>Call</span>
                                <span className="hidden text-xs opacity-80 sm:inline">|</span>
                                <span className="text-xs font-mono sm:inline">
                                    {displayNumber}
                                </span>
                            </Link>

                            {/* Hamburger Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-all duration-300 hover:bg-white/10"
                                aria-label="Toggle navigation menu"
                                aria-expanded={isOpen}
                            >
                                <span className="sr-only">Open menu</span>
                                <div className="flex h-5 w-5 flex-col items-center justify-between">
                                    <span
                                        className={`block h-0.5 w-full transform bg-white transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""
                                            }`}
                                    />
                                    <span
                                        className={`block h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                            }`}
                                    />
                                    <span
                                        className={`block h-0.5 w-full transform bg-white transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""
                                            }`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <div
                className={`fixed  inset-0 z-60 transition-all duration-500 lg:hidden ${isOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-neutral-950/80 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />

                {/* Drawer Panel */}
                <div
                    className={`absolute right-0 top-0 h-full w-full max-w-sm bg-neutral-900 shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex h-full flex-col">
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
                            <Link
                                href="/"
                                className="font-serif text-2xl font-bold text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {/* Fix<span className="text-red-500">Go</span> */}
                                <Image width={100} height={100} quality={75} src={brandLogo?.logo} alt="fix go car repair logo"/>
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white transition-colors hover:bg-white/10"
                                aria-label="Close menu"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Drawer Navigation */}
                        <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Mobile navigation">
                            <ul className="space-y-1">
                                {navItems.map((item) => {
                                    const active = isActive(item.href);
                                    return (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 ${active
                                                        ? "bg-gradient-to-r from-red-600/20 to-red-700/20 text-white"
                                                        : "text-neutral-400 hover:bg-white/5 hover:text-white"
                                                    }`}
                                            >
                                                {item.name}
                                                {active && (
                                                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-red-500" />
                                                )}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* Mobile Drawer Contact Info */}
                            <div className="mt-8 rounded-2xl border border-white/5 bg-white/5 p-6">
                                <p className="text-sm font-semibold text-white">Need Help?</p>
                                <Link
                                    href={numberCallLink}
                                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-red-400 transition-colors hover:text-red-300"
                                >
                                    <span>Call us 24/7</span>
                                    <span className="text-neutral-500">|</span>
                                    <span className="text-white">{displayNumber}</span>
                                </Link>
                                <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                    </span>
                                    <span>Available 24/7 • 5-15 min response</span>
                                </div>
                            </div>
                        </nav>

                        {/* Drawer Footer */}
                        <div className="border-t border-white/5 px-6 py-4">
                            <div className="flex items-center justify-between text-xs text-neutral-500">
                                <span>© {new Date().getFullYear()} FixGo Car Repair</span>
                                <span className="flex items-center gap-2">
                                    <span>Dubai, UAE</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer to prevent content from hiding behind navbar */}
            <div className="h-16 lg:h-20" />
        </>
    );
};

export default Navbar;