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

const fallbackImages = [
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    alt: "Red Sea Coral Reef"
  },
  {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    alt: "Snorkeling Adventure"
  },
  {
    src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&q=80",
    alt: "Dolphin Encounter"
  },
  {
    src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=80",
    alt: "Desert Safari"
  },
  {
    src: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&q=80",
    alt: "Paradise Island"
  },
  {
    src: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80",
    alt: "Luxury Yacht"
  },
  {
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
    alt: "Beach Sunset"
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=600&q=80",
    alt: "Underwater World"
  },
  {
    src: "https://images.unsplash.com/photo-1518182170546-0766de6b6aad?w=600&q=80",
    alt: "Pyramids"
  },
  {
    src: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&q=80",
    alt: "Nile River"
  },
  {
    src: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80",
    alt: "Luxor Temple"
  },
  {
    src: "https://images.unsplash.com/photo-1600521605613-3b10b0e5138a?w=600&q=80",
    alt: "Camel Ride"
  }
];

export default function GallerySection({ t }: GallerySectionProps) {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(fallbackImages);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadPhotos() {
      try {
        const res = await fetch('/api/gallery', { signal: abortController.signal });
        if (!res.ok) throw new Error('API route not ready');
        const data = await res.json();
        if (data.photos && data.photos.length > 0) {
          const images = data.photos.map((filename: string) => ({
            src: `/api/photo/${encodeURIComponent(filename)}`,
            alt: filename.replace(/\.[^/.]+$/, "").replace(/-/g, " ")
          }));
          setGalleryImages(images);
        }
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        console.error("Failed to load gallery photos, using fallbacks:", err);
      }
    }
    loadPhotos();
    return () => abortController.abort();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
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
              Gallery
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-lg cursor-pointer group card-shine aspect-square",
                isVisible ? "animate-scale-in" : "opacity-0"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-foreground font-medium text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-primary/50 text-primary rounded-full uppercase tracking-wider text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            View All Photos
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateImage('prev');
            if (e.key === 'ArrowRight') navigateImage('next');
          }}
          tabIndex={0}
          role="dialog"
          aria-label="Image lightbox"
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
