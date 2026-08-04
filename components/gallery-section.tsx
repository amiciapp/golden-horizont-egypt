"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { type TranslationKeys } from "@/lib/translations";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

interface GallerySectionProps {
  t: TranslationKeys;
}

interface GalleryImage {
  src: string;
  alt: string;
}

const GALLERY_ALTS = [
  "Hurghada Coral Reef", "Snorkeling Adventure", "Dolphin Encounter", "Desert Safari",
  "Paradise Island", "Luxury Yacht", "Beach Sunset", "Underwater World",
  "Pyramids of Giza", "Nile River", "Luxor Temple", "Camel Ride",
  "Red Sea Diving", "Giftun Island", "Orange Bay", "Quad Biking",
  "Traditional Felucca", "Karnak Temple", "Valley of the Kings", "Mahmya Beach",
  "Submarine Tour", "Fish Aquarium", "Desert Camp", "Sunset Cruise",
];

export default function GallerySection({ t }: GallerySectionProps) {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadPhotos() {
      try {
        const res = await fetch('/api/gallery', { signal: abortController.signal });
        if (!res.ok) throw new Error('API route not ready');
        const data = await res.json();
        if (data.photos && data.photos.length > 0) {
          const images = data.photos.map((filePath: string, i: number) => ({
            // Encode each segment separately so slashes are preserved
            src: `/photos/${filePath.split('/').map(encodeURIComponent).join('/')}`,
            alt: GALLERY_ALTS[i % GALLERY_ALTS.length],
          }));
          setGalleryImages(images);
        }
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        console.error("Failed to load gallery photos:", err);
      }
    }
    loadPhotos();
    return () => abortController.abort();
  }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const pageCount = Math.max(1, Math.ceil(Math.min(galleryImages.length, 16) / visibleCount));

  useEffect(() => {
    setCurrentPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  useEffect(() => {
    if (isPaused || pageCount <= 1) return;
    autoplayRef.current = setInterval(() => {
      setCurrentPage((p) => (p + 1) % pageCount);
    }, 4500);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused, pageCount]);

  const lightboxRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number, triggerElement?: HTMLDivElement | null) => {
    if (triggerElement) triggerRef.current = triggerElement;
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
    setTimeout(() => lightboxRef.current?.focus(), 0);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
    setTimeout(() => triggerRef.current?.focus(), 0);
  };

  const focusableSelector = 'button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  const handleLightboxKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeLightbox();
      return;
    }
    if (e.key === "ArrowLeft") {
      navigateImage("prev");
      return;
    }
    if (e.key === "ArrowRight") {
      navigateImage("next");
      return;
    }
    if (e.key === "Tab" && lightboxRef.current) {
      const focusables = lightboxRef.current.querySelectorAll(focusableSelector);
      if (focusables.length === 0) return;
      const first = focusables[0] as HTMLElement;
      const last = focusables[focusables.length - 1] as HTMLElement;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex =
      direction === "next"
        ? (selectedImage + 1) % galleryImages.length
        : (selectedImage - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(newIndex);
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 bg-transparent relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <Reveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary animate-line-draw" />
            <span className="text-primary text-sm uppercase tracking-[0.3em]">
              {t.gallery.preTitle}
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary animate-line-draw" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </Reveal>

        {/* Gallery Carousel */}
        <div
          className="overflow-hidden rounded-lg"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {galleryImages.slice(0, 16).map((image, index) => (
              <div
                key={index}
                className="shrink-0 px-1.5"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div
                  className="relative overflow-hidden rounded-lg cursor-pointer group card-shine aspect-square animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={(e) => openLightbox(index, e.currentTarget as HTMLDivElement)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        {pageCount > 1 && (
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrentPage((p) => (p - 1 + pageCount) % pageCount)}
              className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    i === currentPage ? "bg-primary w-6" : "bg-foreground/30 hover:bg-foreground/50"
                  )}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((p) => (p + 1) % pageCount)}
              className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleLightboxKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-label="Image lightbox"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            className="absolute left-4 md:left-8 p-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain rounded-lg"
              sizes="100vw"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            className="absolute right-4 md:right-8 p-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === selectedImage
                    ? "bg-primary w-6"
                    : "bg-foreground/30 hover:bg-foreground/50"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
