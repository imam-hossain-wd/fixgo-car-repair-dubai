"use client";

import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiPinterestFill,
  RiYoutubeFill,
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiWhatsappLine,
  RiArrowRightLine,
  RiShieldCheckLine,
  RiTimeLine,
  RiStarLine,
  RiCarLine,
  RiRoadsterLine,
  RiBuildingLine,
  RiGlobalLine,
  RiTwitterXFill,
  RiLinkedinFill,
} from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";
import { SiteConfig } from "@/config/siteConfig";
import { brandLogo } from "@/utils/assets";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {
    brandName,
    description,
    displayNumber,
    email,
    location,
    streetAddress,
    city,
    country,
    navItems,
    footerhrefs,
    socialLinks,
    serviceAreas,
    operatingHours,
    GMB,
    services,
  } = SiteConfig;

  // Quick links from navItems (excluding Home and Blog)
  //@ts-nocheck
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const quickLinks = navItems.filter(item => item.name !== "Home" && item.name !== "Blog");

  // Popular services (first 6 from services)


  return (
    <footer className="relative overflow-hidden bg-neutral-950 border-t border-white/5">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute left-0 top-1/2 h-[300px] w-[300px] rounded-full bg-orange-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            {/* Logo/Brand */}
            <Link href="/" className="inline-block bg-white px-6 py-2 ">
                <Image  width={180} height={180} quality={75} src={brandLogo?.logo} alt="fix go car repair logo"/>
            </Link>

            <p className="text-sm leading-relaxed text-neutral-400">
              {description}
              {/* {description.substring(0, 120)}... */}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs text-emerald-400">24/7 Active</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1.5">
                <RiShieldCheckLine className="h-3 w-3 text-blue-400" />
                <span className="text-xs text-blue-400">Certified</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-3 py-1.5">
                <RiStarLine className="h-3 w-3 text-yellow-400" />
                <span className="text-xs text-yellow-400">4.9/5</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <Link
                href={`tel:${SiteConfig.numberCallLink}`}
                className="flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-red-400"
              >
                <RiPhoneLine className="h-4 w-4 shrink-0" />
                <span>{displayNumber}</span>
              </Link>
              <Link
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-red-400"
              >
                <RiMailLine className="h-4 w-4 shrink-0" />
                <span>{email}</span>
              </Link>
              <div className="flex items-start gap-3 text-sm text-neutral-400">
                <RiMapPinLine className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  {streetAddress}, {location}, {city}, {country}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social: any) => {
                const Icon = social.icon;
                if (!social.href) return null;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white/5 p-2.5 text-neutral-400 transition-all duration-300 hover:bg-red-500/20 hover:text-red-400 hover:shadow-lg hover:shadow-red-500/10"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
              {/* WhatsApp */}
              <Link
                href={SiteConfig.whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/5 p-2.5 text-neutral-400 transition-all duration-300 hover:bg-green-500/20 hover:text-green-400 hover:shadow-lg hover:shadow-green-500/10"
                aria-label="WhatsApp"
              >
                <RiWhatsappLine className="h-4 w-4" />
              </Link>
            </div>
          </div>


          {/* Column 2: Our Services */}


          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    <RiCarLine className="h-3 w-3 transition-colors group-hover:text-red-400" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
              {/* <li>
                <Link
                  href="/services"
                  className="group flex items-center gap-2 text-sm font-medium text-red-400 transition-colors hover:text-red-300"
                >
                  <span>View All Services</span>
                  <RiArrowRightLine className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/area-we-serve/${area.slug}`}
                    className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    <RiBuildingLine className="h-3 w-3 transition-colors group-hover:text-red-400" />
                    <span>{area.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        
          {/* Column 4: Quick Links*/}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((item: any) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    <RiArrowRightLine className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-red-400" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              {footerhrefs.map((item: any) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    <RiArrowRightLine className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-red-400" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>


            {/* Operating Hours */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Operating Hours
              </h4>
              <div className="mt-3 space-y-1">
                {operatingHours.map((day) => (
                  <div
                    key={day.day}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="text-neutral-500">{day.day}</span>
                    <span className="text-emerald-400">{day.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Copyright */}
            <div className="text-center text-xs text-neutral-500 sm:text-left">
              © {currentYear} {brandName}. All rights reserved.
              <span className="mx-2 hidden sm:inline">|</span>
              <span className="block sm:inline">
                Built with in Dubai, UAE
              </span>
            </div>


            {/* Language / Region */}
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <RiGlobalLine className="h-3.5 w-3.5" />
              <span>Dubai, UAE</span>
            </div>
          </div>

          {/* Additional Trust Signals */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 border-t border-white/5 pt-4 text-[10px] text-neutral-500">
            <span className="flex items-center gap-1.5">
              <RiShieldCheckLine className="h-3 w-3 text-emerald-400" />
              Licensed & Insured
            </span>
            <span className="flex items-center gap-1.5">
              <RiTimeLine className="h-3 w-3 text-emerald-400" />
              24/7/365 Service
            </span>
            <span className="flex items-center gap-1.5">
              <RiStarLine className="h-3 w-3 text-yellow-400" />
              Google 4.9/5 Rating
            </span>
            <span className="flex items-center gap-1.5">
              <RiRoadsterLine className="h-3 w-3 text-emerald-400" />
              5-15 Min Response
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;