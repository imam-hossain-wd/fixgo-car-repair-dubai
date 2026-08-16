import { RiFacebookCircleFill, RiInstagramFill, RiMailLine, RiMapPinLine, RiPhoneLine, RiPinterestFill, RiYoutubeFill } from "@remixicon/react";

export const SiteConfig = {
    authorName: "Md Jahangir Alam",
    brandName: "FixGo Car Repair Dubai",
    url: "https://www.fixgocarrepair.com",
    email: "fixgocarrepair@gmail.com",
    description: "FixGo Car Repair Dubai delivers 24/7 fast, reliable mobile car repair and emergency roadside assistance anywhere in Dubai within 5 to 15 minutes. Our certified mobile mechanics come directly to your home, office, or breakdown location with transparent pricing, advanced diagnostics, and guaranteed work.",
    displayNumber: "+971 54 144 6338",
    ogImage:"/",
    foundedYear:"2020",
    phoneNumber: "+971541446338",
    numberCallLink: "tel:+971541446338",
    whatsappCallLink: "https://wa.me/971541446338",
    location: "Wadi Al Safa",
    streetAddress: "19A Street",
    city: "Dubai",
    country: "UAE",
    founded: 2020,
    responseTime: "5-15 min",

    GMB: {
        PlaceID: "",
        CID: "",
        BusinessProfileID: "",
        mapsLink: "https://maps.app.goo.gl/mX9HtpwjDYfwUec78",
        embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.2808138850198!2d55.37459066951078!3d25.097688713096932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f651829fc1351%3A0xc74cb694093bed2d!2s39XG%2B33H%20-%20Wadi%20Al%20Safa%205%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1786375625585!5m2!1sen!2sbd",
        latitude: "25.0976887",
        longitude: "55.3745907",
    },

    services: [
        {
            "name": "Car Battery Replacement",
            "slug": "car-battery-replacement"
        },
        {
            "name": "Jump Start Car",
            "slug": "jump-start-car"
        },
        {
            "name": "Car Computer Diagnostic",
            "slug": "car-computer-diagnostic"
        },
        {
            "name": "Car Alternator Repair",
            "slug": "car-alternator-repair"
        },
        {
            "name": "Car Fuel Pump Repair",
            "slug": "car-fuel-pump-repair"
        },
        {
            "name": "Car Starter Motor Repair",
            "slug": "car-starter-motor-repair"
        },
        {
            "name": "Car AC Repair",
            "slug": "car-ac-repair"
        },
        {
            "name": "Car Window Motor Repair",
            "slug": "car-window-motor-repair"
        },
        {
            "name": "Radiator Replacement",
            "slug": "radiator-replacement"
        },
        {
            "name": "ABS System Repair",
            "slug": "abs-system-repair"
        },
        {
            "name": "Brake Pad Repair",
            "slug": "brake-pad-repair"
        },
        {
            "name": "Car Detailing Service",
            "slug": "car-detailing-service"
        },
        {
            "name": "Emergency Car Repair",
            "slug": "emergency-car-repair"
        },
        {
            "name": "Car Mechanic Service",
            "slug": "car-mechanic-service"
        },
        {
            "name": "Oil Change Service",
            "slug": "oil-change-service"
        },
        {
            "name": "Car AC Gas Refill Service",
            "slug": "car-ac-gas-refill-service"
        },
        {
            "name": "Car Transmission Repair",
            "slug": "car-transmission-repair"
        },
        {
            "name": "Car Service Dubai",
            "slug": "car-service-dubai"
        },
        {
            "name": "Car Repair Dubai",
            "slug": "car-repair-dubai"
        }
    ],
    serviceAreas: [
        {
            "name": "Dubailand",
            "slug": "dubailand"
        },
        {
            "name": "Arabian Ranches",
            "slug": "arabian-ranches"
        },
        {
            "name": "Dubai Silicon Oasis",
            "slug": "dubai-silicon-oasis"
        },
        {
            "name": "Dubai Motor City",
            "slug": "dubai-motor-city"
        },
        {
            "name": "Jumeirah Village Circle",
            "slug": "jumeirah-village-circle"
        },
        {
            "name": "Dubai Hills Estate",
            "slug": "dubai-hills-estate"
        },
        {
            "name": "Business Bay",
            "slug": "business-bay"
        },
        {
            "name": "Al Barsha",
            "slug": "al-barsha"
        },
        {
            "name": "Al Quoz",
            "slug": "al-quoz"
        },
        {
            "name": "Downtown Dubai",
            "slug": "downtown-dubai"
        }
    ],

    operatingHours: [
        { day: "Saturday", hours: "24 Hours" },
        { day: "Sunday", hours: "24 Hours" },
        { day: "Monday", hours: "24 Hours" },
        { day: "Tuesday", hours: "24 Hours" },
        { day: "Wednesday", hours: "24 Hours" },
        { day: "Thursday", hours: "24 Hours" },
        { day: "Friday", hours: "24 Hours" },
    ],

    navItems: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Areas We Serve", href: "/area-we-serve" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
    ],

    footerhrefs: [
        { title: "About Us", href: "/about" },
        { title: "Contact", href: "/contact" },
        { title: "Services", href: "/services" },
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
        { title: "Sitemap", href: "/sitemap.xml" }
    ],

    socialLinks: [
        { name: "Facebook", icon: RiFacebookCircleFill, href: "" },
        { name: "Instagram", icon: RiInstagramFill, href: "" },
        { name: "Pinterest", icon: RiPinterestFill, href: "" },
        { name: "YouTube", icon: RiYoutubeFill, href: "" }
    ],

    contactLinks: [
        { name: "Map", icon: RiMapPinLine, href: "" },
        { name: "Phone", icon: RiPhoneLine, href: "tel:+" },
        { name: "Email", icon: RiMailLine, href: "mailto:fixgocarrepair@gmail.com" }
    ]
};

export const {
    contactLinks,
    socialLinks,
    footerhrefs,
    navItems,
    serviceAreas,
    location,
    streetAddress,
    GMB,
    numberCallLink,
    whatsappCallLink,
    operatingHours,
    displayNumber,
    description,
    email,
    url,
    brandName,
    authorName,
    city,
    country
} = SiteConfig;