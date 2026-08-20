import { SiteConfig } from "@/config/siteConfig";

export const siteMetadata = {
  home: {
    title: `24/7 Mobile Car Repair Dubai | 5-15 Min Response | ${SiteConfig.brandName}`,
    description: `Stranded in Dubai? ${SiteConfig.brandName} brings 24/7 certified mobile mechanics to your location in 5–15 mins for battery replacement, jump starts, AC repair & diagnostics. Call ${SiteConfig.displayNumber}!`,
    verification: {
      google: "C8dKQPMHKO9WQWo5gAVg-QIToDXuaLsA_F1gbc2Tbmc",
    },
    alternates: {
      canonical: SiteConfig.url,
    },
    openGraph: {
      title: `24/7 Doorstep Mobile Car Repair & Roadside Assistance Dubai | ${SiteConfig.brandName}`,
      description: `Fastest 24/7 emergency roadside assistance and mobile mechanic service in Dubai. Onsite computer diagnostics, car battery replacement, and mechanical repairs within 5-15 minutes.`,
      url: SiteConfig.url,
      siteName: SiteConfig.brandName,
      images: [
        {
          url: `${SiteConfig.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `24/7 Emergency Mobile Car Repair Dubai - ${SiteConfig.brandName}`,
        },
      ],
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `24/7 Mobile Car Repair Dubai | ${SiteConfig.brandName}`,
      description: `Emergency roadside assistance and mobile mechanics anywhere in Dubai within 5-15 minutes. Call ${SiteConfig.displayNumber} now.`,
      images: [`${SiteConfig.url}/og-image.jpg`],
    },
  },

  // 2. Services Main Hub (/services) - Transactional Intent Cluster
  services: {
    title: `Mobile Car Mechanics & Auto Repair Services Dubai | ${SiteConfig.brandName}`,
    description: `Complete doorstep car repair services across Dubai: battery replacement, OBD diagnostics, AC gas refilling, alternator fix, and emergency roadside help. Upfront transparent pricing.`,
    alternates: {
      canonical: `${SiteConfig.url}/services`,
    },
    openGraph: {
      title: `Certified Mobile Auto Repair & Maintenance Services in Dubai`,
      description: `Explore fully equipped garage-on-wheels services in Dubai. Mobile mechanics available 24/7 for battery, engine, transmission, AC, and emergency car repairs.`,
      url: `${SiteConfig.url}/services`,
      siteName: SiteConfig.brandName,
      images: [{ url: `${SiteConfig.url}/og-services.jpg`, width: 1200, height: 630 }],
      type: "website",
    },
  },

  // 3. Area We Serve (/area-we-serve) - Hyper-Local GEO Footprint
  areaWeServe: {
    title: `24/7 Mobile Mechanic Near Me in Dubai | Local Service Areas`,
    description: `Fast 5–15 min roadside assistance across Dubailand, Business Bay, Downtown, Silicon Oasis, JVC, Motor City & all Dubai districts. We come directly to your home or roadside!`,
    alternates: {
      canonical: `${SiteConfig.url}/area-we-serve`,
    },
    openGraph: {
      title: `Fastest Doorstep Mobile Auto Repair Service Across All Dubai Districts`,
      description: `Strategically deployed mobile mechanic units covering Dubailand, Business Bay, JVC, Al Barsha, Downtown Dubai, and major highway corridors round-the-clock.`,
      url: `${SiteConfig.url}/area-we-serve`,
      siteName: SiteConfig.brandName,
      images: [{ url: `${SiteConfig.url}/og-areas.jpg`, width: 1200, height: 630 }],
      type: "website",
    },
  },

  // 4. Brands We Serve (/brands) - High-Intent Technical Search
  brands: {
    title: `Car Repair for All Brands in Dubai | Luxury & Japanese Specialists`,
    description: `Expert mobile repair for Toyota, Nissan, BMW, Mercedes, Audi, Porsche & Ford in Dubai. OEM parts, dealer-grade computer diagnostics, and guaranteed onsite work.`,
    alternates: {
      canonical: `${SiteConfig.url}/brands`,
    },
    openGraph: {
      title: `Multi-Brand Specialist Mobile Mechanics Dubai | Luxury & Commercial Cars`,
      description: `Certified technicians equipped with dealer-level scanners to service Japanese, European, and American vehicles directly at your home or office in Dubai.`,
      url: `${SiteConfig.url}/brands`,
      siteName: SiteConfig.brandName,
      images: [{ url: `${SiteConfig.url}/og-brands.jpg`, width: 1200, height: 630 }],
      type: "website",
    },
  },

  // 5. Gallery (/gallery) - Visual Proof & Trust Signals
  gallery: {
    title: `Mobile Car Repair Work Gallery | Onsite Service Photos Dubai`,
    description: `See real photos of our 24/7 mobile mechanics servicing vehicles onsite across Dubai: emergency battery swaps, AC repairs, computer diagnostics, and roadside recoveries.`,
    alternates: {
      canonical: `${SiteConfig.url}/gallery`,
    },
    openGraph: {
      title: `Real On-Site Mobile Auto Repair Photo Gallery Dubai | ${SiteConfig.brandName}`,
      description: `Transparent visual evidence of our certified auto technicians delivering emergency roadside repair services directly to customers in Dubai.`,
      url: `${SiteConfig.url}/gallery`,
      siteName: SiteConfig.brandName,
      images: [{ url: `${SiteConfig.url}/og-gallery.jpg`, width: 1200, height: 630 }],
      type: "website",
    },
  },

  // 6. Contact Us (/contact) - Immediate Conversion & Call Action
  contact: {
    title: `Contact 24/7 Mobile Mechanic Dubai | Call ${SiteConfig.displayNumber}`,
    description: `Need an urgent roadside repair in Dubai? Call ${SiteConfig.displayNumber} or WhatsApp ${SiteConfig.brandName} for immediate mobile mechanic dispatch in 5-15 mins.`,
    alternates: {
      canonical: `${SiteConfig.url}/contact`,
    },
    openGraph: {
      title: `Emergency Roadside Assistance Contact Dubai | 24/7 Dispatch`,
      description: `Get instant help from local mobile mechanics in Dubai. Call or WhatsApp now for 24/7 fast arrival, transparent quotes, and professional auto repair.`,
      url: `${SiteConfig.url}/contact`,
      siteName: SiteConfig.brandName,
      images: [{ url: `${SiteConfig.url}/og-contact.jpg`, width: 1200, height: 630 }],
      type: "website",
    },
  },

  // 7. About Us (/about) - EEAT & Authority Building
  about: {
    title: `About ${SiteConfig.brandName} | Trusted Mobile Car Repair Dubai`,
    description: `Founded in ${SiteConfig.foundedYear}, ${SiteConfig.brandName} operates a fleet of mobile workshops providing 24/7 certified roadside repair and diagnostics across Dubai.`,
    alternates: {
      canonical: `${SiteConfig.url}/about`,
    },
    openGraph: {
      title: `About ${SiteConfig.brandName} - Dubai's Leading 24/7 Mobile Auto Repair Fleet`,
      description: `Learn how FixGo revolutionized auto care in Dubai with 5-15 minute doorstep service, certified mechanics, transparent pricing, and zero towing hassles.`,
      url: `${SiteConfig.url}/about`,
      siteName: SiteConfig.brandName,
      images: [{ url: `${SiteConfig.url}/og-about.jpg`, width: 1200, height: 630 }],
      type: "website",
    },
  },

  // 8. Privacy Policy (/privacy) - Trust & Compliance
  privacy: {
    title: `Privacy Policy | ${SiteConfig.brandName}`,
    description: `Read the official privacy policy of ${SiteConfig.brandName}. Learn how we protect your customer data, location information, and dispatch security.`,
    alternates: {
      canonical: `${SiteConfig.url}/privacy`,
    },
    openGraph: {
      title: `Privacy Policy | ${SiteConfig.brandName}`,
      description: `Information governance and customer data protection policies for ${SiteConfig.brandName}.`,
      url: `${SiteConfig.url}/privacy`,
      siteName: SiteConfig.brandName,
      type: "website",
    },
  },

  // 9. Terms of Service (/terms) - Warranty & Policy Clarification
  terms: {
    title: `Terms of Service & Warranty Policy | ${SiteConfig.brandName}`,
    description: `Review service terms, transparent pricing commitments, warranty coverage on parts, and roadside dispatch agreements for ${SiteConfig.brandName}.`,
    alternates: {
      canonical: `${SiteConfig.url}/terms`,
    },
    openGraph: {
      title: `Terms of Service & Guarantee | ${SiteConfig.brandName}`,
      description: `Official service terms, labor warranties, and transparent pricing standards for ${SiteConfig.brandName} mobile auto repairs.`,
      url: `${SiteConfig.url}/terms`,
      siteName: SiteConfig.brandName,
      type: "website",
    },
  },
};