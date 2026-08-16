"use client";

import Link from "next/link";
import { RiAirplayLine, RiArrowRightLine, RiBracketsLine } from "@remixicon/react";
import {
    RiBattery2Line,
    RiFlashlightLine,
    RiComputerLine,
    RiOilLine,
    //   RiAirConditioningLine,
    RiCarLine,
    //   RiBLine,
    RiSettings3Line,
    RiDashboardLine,
    RiGradienterLine,
    RiSnowflakeLine,
    RiSteering2Line,
    RiWifiLine,
    RiSunLine,
    RiShieldCheckLine,
    RiRoadsterLine,
    RiToolsLine,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";


// Icon mapping for services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
    "Car Battery Replacement": RiBattery2Line,
    "Jump Start Car": RiFlashlightLine,
    "Car Computer Diagnostic": RiComputerLine,
    "Car Alternator Repair": RiDashboardLine,
    "Car Fuel Pump Repair": RiGradienterLine,
    "Car Starter Motor Repair": RiSettings3Line,
    "Car AC Repair": RiAirplayLine,
    "Car Window Motor Repair": RiWifiLine,
    "Radiator Replacement": RiSunLine,
    "ABS System Repair": RiShieldCheckLine,
    "Brake Pad Repair": RiBracketsLine,
    "Car Detailing Service": RiRoadsterLine,
    "Emergency Car Repair": RiFlashlightLine,
    "Car Mechanic Service": RiToolsLine,
    "Oil Change Service": RiOilLine,
    "Car AC Gas Refill Service": RiSnowflakeLine,
    "Car Transmission Repair": RiSteering2Line,
    "Car Service Dubai": RiCarLine,
    "Car Repair Dubai": RiCarLine,
};



interface ServiceCardProps {
    name: string;
    slug: string;
    description?: string;
    features?: string[];
    popular?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    service_image?: any;
}

export const ServiceCard = ({
    name,
    slug,
    // description,
    features,
    popular,
    // service_image,

}: ServiceCardProps) => {
    const Icon = iconMap[name] || RiSettings3Line;
  

    return (
        <Link
            href={`/services/${slug}`}
            className="group relative flex flex-col rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-red-500/5"
        >
            {/* Popular Badge */}
            {popular && (
                <div className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-2.5 py-0.5 text-[10px] font-semibold text-white shadow-lg shadow-yellow-500/20">
                    Popular
                </div>
            )}

            {/* Card Background Hover Effect */}
            {/* <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-5`} /> */}

            {/* Icon */}
            <div className="relative mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 transition-all duration-300 group-hover:scale-110">

                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40`} />

                <Icon className="relative h-7 w-7 text-white transition-colors duration-300 group-hover:text-red-400" />
            </div>

            {/* <Icon className="relative h-7 w-7 text-white transition-colors duration-300 group-hover:text-red-400" /> */}

            {/* Content */}
            <div className="relative flex flex-1 flex-col">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-red-400">
                            {name}
                        </h3>
                    </div>
                    {/* <span className="mt-1 text-xs font-medium text-emerald-400">On-Site</span> */}
                </div>

                {/* <p className="mt-2 text-sm leading-relaxed text-neutral-400 line-clamp-2">
          {displayDescription}
        </p> */}

                {/* Features Preview */}
                {features && features.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                        {features.slice(0, 4).map((feature) => (
                            <li
                                key={feature}
                                className="rounded-full mb-1 bg-white/5 px-2 py-0.5 text-[10px] text-white"
                            >
                                {feature.length > 20 ? `${feature.substring(0, 50)}` : feature}
                            </li>
                        ))}
                    </div>
                )}

                {/* Learn More Link */}
                <div className="flex justify-center items-center gap-3 mt-2">
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-red-400 transition-all duration-300 ">
                        <span>Learn More</span>
                        <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    <Button className="mt-3 px-6 py-4 rounded">
                        Call Now
                    </Button>

                </div>

            </div>

            {/* Bottom Border Accent */}
            <div className={`absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r bg-primary transition-all duration-500 `} />
        </Link>
    );
};

export default ServiceCard;