"use client"
import { RiArrowRightLine } from "@remixicon/react";

export default function FloatingButton() {
    return (
        <div className="relative">

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="absolute right-8 bottom-40 rounded-full bg-red-600 p-3 text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-110 hover:shadow-red-600/50"
                aria-label="Back to top"
            >
                <RiArrowRightLine className="h-4 w-4 rotate-[-90deg]" />
            </button>
        </div>
    )
}
