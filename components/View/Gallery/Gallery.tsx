/* eslint-disable react-hooks/immutability */
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  RiCameraLine,
  RiCloseLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiZoomInLine,
  RiCheckboxCircleLine,
  RiTimeLine,
  RiShieldCheckLine,
} from "@remixicon/react";
import { projects } from "@/utils/assets";


const {one, two, three, four, five, six, seven, eight, nine}= projects;
// Gallery data - Replace with actual images
const galleryItems = [
  {
    id: 1,
    title: "BMW Battery Replacement",
    category: "Battery Service",
    description: "Quick battery replacement for BMW X5 in Business Bay",
    image: one,
    service: "Battery Replacement",
    location: "Business Bay",
    date: "2024-01-15",
    tags: ["Battery", "BMW", "Luxury"],
  },
  {
    id: 2,
    title: "Mercedes AC Repair",
    category: "AC Service",
    description: "Complete AC system repair for Mercedes S-Class",
    image: two,
    service: "AC Repair",
    location: "Downtown Dubai",
    date: "2024-01-20",
    tags: ["AC", "Mercedes", "Luxury"],
  },
  {
    id: 3,
    title: "Porsche Diagnostic",
    category: "Diagnostics",
    description: "Advanced computer diagnostics for Porsche 911",
    image: three,
    service: "Computer Diagnostic",
    location: "Dubai Marina",
    date: "2024-01-25",
    tags: ["Diagnostic", "Porsche", "Sports"],
  },
  {
    id: 4,
    title: "Range Rover Brake Repair",
    category: "Brake Service",
    description: "Complete brake pad replacement for Range Rover",
    image: four,
    service: "Brake Pad Repair",
    location: "Dubai Hills",
    date: "2024-02-01",
    tags: ["Brakes", "Range Rover", "SUV"],
  },
  {
    id: 5,
    title: "Toyota Oil Change",
    category: "Maintenance",
    description: "Premium oil change service for Toyota Land Cruiser",
    image: five,
    service: "Oil Change",
    location: "Al Barsha",
    date: "2024-02-05",
    tags: ["Oil Change", "Toyota", "SUV"],
  },
  {
    id: 6,
    title: "Audi Transmission Repair",
    category: "Transmission",
    description: "Transmission repair for Audi Q7 in JVC",
    image: six,
    service: "Transmission Repair",
    location: "Jumeirah Village Circle",
    date: "2024-02-10",
    tags: ["Transmission", "Audi", "Luxury"],
  },
  {
    id: 7,
    title: "Nissan Jump Start",
    category: "Emergency",
    description: "Emergency jump start service for Nissan Patrol",
    image: seven,
    service: "Jump Start",
    location: "Dubailand",
    date: "2024-02-15",
    tags: ["Emergency", "Nissan", "SUV"],
  },
  {
    id: 8,
    title: "Lexus AC Gas Refill",
    category: "AC Service",
    description: "AC gas refill and system check for Lexus LX",
    image: eight,
    service: "AC Gas Refill",
    location: "Dubai Silicon Oasis",
    date: "2024-02-20",
    tags: ["AC", "Lexus", "Luxury"],
  },
  {
    id: 9,
    title: "Ford Starter Motor Repair",
    category: "Mechanical",
    description: "Starter motor replacement for Ford Mustang",
    image: nine,
    service: "Starter Motor Repair",
    location: "Motor City",
    date: "2024-02-25",
    tags: ["Mechanical", "Ford", "Sports"],
  },
  {
    id: 10,
    title: "Chevrolet Alternator Repair",
    category: "Mechanical",
    description: "Alternator repair for Chevrolet Camaro",
    image: one,
    service: "Alternator Repair",
    location: "Al Quoz",
    date: "2024-03-01",
    tags: ["Mechanical", "Chevrolet", "Sports"],
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open lightbox
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  // Navigate through images
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-5">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-[400px] w-[400px] rounded-full bg-orange-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Recent Projects
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              See Our Work in Action
            </span>
          </h2>

          <p className="mt-4 text-lg text-neutral-400">
            Browse through our recent projects showcasing our expertise in mobile
            car repair across Dubai.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10"
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <div className="relative h-full w-full">
                {/* Placeholder - Replace with actual images */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-800">
                  {/* <div className="text-center">
                    <div className="text-4xl">🔧</div>
                    <p className="mt-2 text-xs text-neutral-400">{item.title}</p>
                  </div> */}
                  <Image className="w-full h-full" src={item?.image} width={300} height={200} quality={75} alt={item?.title}/>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-1">
                    {item.category}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] text-red-400">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-red-600/90 p-3 shadow-lg backdrop-blur-sm">
                  <RiZoomInLine className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute left-3 top-3 rounded-full bg-neutral-900/80 px-2.5 py-1 backdrop-blur-sm">
                <span className="text-[10px] font-medium text-neutral-300">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              // Scroll to first image or implement "load more"
              document.querySelector(".gallery-grid")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl"
          >
            <span>View All Projects</span>
            <span className="text-neutral-500">|</span>
            <span className="text-xs font-mono text-red-400">
              {galleryItems.length} images
            </span>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && currentItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/95 backdrop-blur-xl"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery viewer"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 lg:right-8 lg:top-8"
            aria-label="Close gallery"
          >
            <RiCloseLine className="h-6 w-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 lg:left-8"
            aria-label="Previous image"
          >
            <RiArrowLeftSLine className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 lg:right-8"
            aria-label="Next image"
          >
            <RiArrowRightSLine className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div
            className="relative mx-4 max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full max-w-4xl bg-neutral-800">
              {/* Placeholder - Replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-800">
                <div className="text-center">
                  <div className="text-6xl">🔧</div>
                  <p className="mt-4 text-sm text-neutral-400">{currentItem.title}</p>
                  <p className="text-xs text-neutral-500">{currentItem.category}</p>
                </div>
              </div>

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-950/90 to-transparent p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {currentItem.title}
                    </h3>
                    <p className="text-sm text-neutral-300">
                      {currentItem.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-400">
                        {currentItem.service}
                      </span>
                      <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
                        {currentItem.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-neutral-400">
                      {new Date(currentItem.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <div className="mt-1 flex gap-1">
                      {currentItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-neutral-900/80 px-4 py-1.5 text-xs text-white backdrop-blur-sm">
              {currentIndex + 1} / {galleryItems.length}
            </div>
          </div>

          {/* Thumbnails Strip */}
          <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 gap-2 lg:flex">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`h-12 w-12 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "border-red-500"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <div className="h-full w-full bg-neutral-700" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;