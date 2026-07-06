"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { type TranslationKeys } from "@/lib/translations";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

interface ReviewsSectionProps {
  t: TranslationKeys;
}

const reviews = [
  {
    id: 1,
    name: "Maria Schmidt",
    country: "Germany",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5,
    text: "Absolutely incredible experience! The team at Golden Horizont Egypt made our trip to Giftun Island unforgettable. Crystal clear waters, amazing coral reefs, and the most professional crew. Highly recommend!",
    trip: "Giftun Island Snorkeling",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Alexei Petrov",
    country: "Russia",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    text: "Best desert safari I have ever experienced! The quad biking was thrilling, and the Bedouin dinner under the stars was magical. The sunset views were breathtaking. Will definitely book again!",
    trip: "Super Safari Adventure",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Anna Kowalska",
    country: "Poland",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    text: "Swimming with dolphins was a dream come true! The guides were so knowledgeable and patient. They made sure we had the perfect experience. Thank you Golden Horizont Egypt!",
    trip: "Dolphin House Reef",
    date: "January 2024"
  },
  {
    id: 4,
    name: "John Williams",
    country: "United Kingdom",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    rating: 5,
    text: "The Luxor day trip was phenomenal! Our guide knew everything about ancient Egypt. Seeing the Valley of Kings and Karnak Temple was a once-in-a-lifetime experience. Worth every penny!",
    trip: "Luxor Day Trip",
    date: "December 2023"
  },
  {
    id: 5,
    name: "Sophie Laurent",
    country: "France",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    rating: 5,
    text: "Orange Bay is paradise on earth! The beach was pristine, the water was perfect, and the lunch was delicious. Golden Horizont Egypt organized everything perfectly. Cannot wait to return!",
    trip: "Orange Bay Island",
    date: "March 2024"
  },
  {
    id: 6,
    name: "Marco Rossi",
    country: "Italy",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    rating: 5,
    text: "My first diving experience was with Golden Horizont Egypt and it was amazing! The instructors were patient and professional. I felt safe the entire time. Now I am hooked on diving!",
    trip: "Introduction to Diving",
    date: "February 2024"
  }
];

export default function ReviewsSection({ t }: ReviewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

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

  // Auto-play carousel
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 5000);
    };

    if (!isPaused) {
      startAutoPlay();
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [isPaused, lastInteraction]);

  const navigate = (direction: "prev" | "next") => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    setCurrentIndex((prev) =>
      direction === "next"
        ? (prev + 1) % reviews.length
        : (prev - 1 + reviews.length) % reviews.length
    );
    setLastInteraction(Date.now());
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + reviews.length) % reviews.length;
      visible.push({ ...reviews[index], position: i });
    }
    return visible;
  };

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-24 bg-transparent relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 text-primary/5">
        <Quote className="w-64 h-64" />
      </div>
      <div className="absolute bottom-20 right-10 text-primary/5 rotate-180">
        <Quote className="w-64 h-64" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <Reveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary animate-line-draw" />
            <span className="text-primary text-sm uppercase tracking-[0.3em]">
              Testimonials
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary animate-line-draw" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {t.reviews.title}
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {t.reviews.subtitle}
          </p>
        </Reveal>

        {/* Reviews Carousel */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={() => navigate("prev")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all bg-background/80 backdrop-blur-sm hidden md:flex items-center justify-center"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigate("next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all bg-background/80 backdrop-blur-sm hidden md:flex items-center justify-center"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Reviews */}
          <div className="flex items-center justify-center gap-6 px-12 min-h-[400px]">
            {getVisibleReviews().map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className={cn(
                  "transition-all duration-500 flex-shrink-0",
                  review.position === 0
                    ? "w-full md:w-[600px] opacity-100 scale-100 z-10"
                    : "hidden md:block w-[300px] opacity-40 scale-90 z-0",
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                )}
              >
                <div
                  className={cn(
                    "bg-card rounded-2xl border border-border/50 p-8 transition-all duration-500",
                    review.position === 0 && "border-primary/30 shadow-xl shadow-primary/10"
                  )}
                >
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                    {review.position === 0 ? review.text : `"${review.text.slice(0, 100)}..."`}
                  </p>

                  {/* Trip Badge */}
                  {review.position === 0 && (
                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm mb-6">
                      {review.trip}
                    </div>
                  )}

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {review.name}
                      </h4>
                      <p className="text-sm text-foreground/60">
                        {review.country} • {review.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-foreground/20 hover:bg-foreground/40"
                )}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {["TripAdvisor", "Google Reviews", "Booking.com", "Viator", "GetYourGuide"].map(
            (badge, i) => (
              <div
                key={badge}
                className="flex items-center gap-2 group hover-lift"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`
                }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300">
                  <Star className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors duration-300">{badge}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
