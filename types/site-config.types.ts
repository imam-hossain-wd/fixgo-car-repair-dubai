import type { ComponentType } from "react";
// import type { IconProps } from "@remixicon/react";

/* ---------------------------------------------
 * Common Types
 * --------------------------------------------- */

export interface ISiteLink {
    name: string;
    href: string;
}

export interface ISlugItem {
    name: string;
    slug: string;
}

export interface IFooterLink {
    title: string;
    href: string;
}

export interface IOperatingHour {
    day: string;
    hours: string;
}

export interface ISocialLink {
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: ComponentType<any>;
    href: string;
}

export interface IContactLink {
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: ComponentType<any>;
    href: string;
}

/* ---------------------------------------------
 * Google Business Profile / Location
 * --------------------------------------------- */

export interface IGMB {
    PlaceID: string;
    CID: string;
    BusinessProfileID: string;
    mapsLink: string;
    embedMap: string;
    latitude: string;
    longitude: string;
}

/* ---------------------------------------------
 * Site Config
 * --------------------------------------------- */

export interface ISiteConfig {
    authorName: string;

    brandName: string;

    url: string;

    email: string;

    description: string;

    displayNumber: string;

    phoneNumber: string;

    numberCallLink: string;

    whatsappCallLink: string;

    location: string;

    streetAddress: string;

    city: string;

    country: string;

    founded: number;

    responseTime: string;

    GMB: IGMB;

    services: ISlugItem[];

    serviceAreas: ISlugItem[];

    operatingHours: IOperatingHour[];

    navItems: ISiteLink[];

    footerhrefs: IFooterLink[];

    socialLinks: ISocialLink[];

    contactLinks: IContactLink[];
}

