"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Euro, Star, Image as ImageIcon } from "lucide-react";
import { type TranslationKeys, type Language } from "@/lib/translations";
import { trips, categories, generateWhatsAppLink, type Trip } from "@/lib/trips";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

interface TripsSectionProps {
  t: TranslationKeys;
  lang?: Language;
}

const WHATSAPP_NUMBER = "201220951483";

export default function TripsSection({ t, lang = "en" }: TripsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  const filteredTrips =
    activeCategory === "all"
      ? trips
      : trips.filter((trip) => trip.category === activeCategory);

  // Observe trip card elements as they enter the viewport
  useEffect(() => {
    setVisibleCards(new Set());
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = (entry.target as HTMLElement).dataset.tripId || "";
          setVisibleCards(prev => { const next = new Set(prev); next.add(id); return next; });
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "300px" });

    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".trip-card");
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [activeCategory]);

  const handleImageError = useCallback((tripId: string) => {
    setFailedImages(prev => new Set(prev).add(tripId));
  }, []);

  const handleBooking = (trip: Trip) => {
    const whatsappUrl = generateWhatsAppLink(trip, WHATSAPP_NUMBER, t.whatsapp.greeting, lang);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="trips"
      ref={sectionRef}
      className="py-24 bg-card relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <Reveal className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary animate-line-draw" />
            <span className="text-primary text-sm uppercase tracking-[0.3em]">
              Excursions
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary animate-line-draw" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {t.trips.title}
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {t.trips.subtitle}
          </p>
        </Reveal>

        {/* Category Filter */}
        <Reveal delay={150} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm uppercase tracking-wider transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-muted text-foreground/70 hover:bg-muted/80 hover:text-foreground"
              )}
            >
              {(category.name as Record<string, string>)[lang] || category.name.en}
            </button>
          ))}
        </Reveal>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTrips.map((trip) => {
            const tripName = trip.name[lang] || trip.name.en;
            const tripDescription = trip.description[lang] || trip.description.en;
            const tripDuration = trip.duration[lang] || trip.duration.en;
            const isVisible = visibleCards.has(trip.id);
            
            return (
              <div
                key={trip.id}
                data-trip-id={trip.id}
                className="trip-card group relative bg-background/40 backdrop-blur-md rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 card-shine hover-lift"
                style={visibleCards.has(trip.id) ? {} : { minHeight: "420px" }}
              >
                {isVisible ? (
                  <>
                {/* Image */}
                <Link href={`/trip/${trip.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    {failedImages.has(trip.id) ? (
                      <div className="absolute inset-0 flex items-center justify-center text-foreground/30">
                        <ImageIcon className="w-12 h-12" />
                      </div>
                    ) : (
                      <Image
                        src={trip.image}
                        alt={tripName}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        onError={() => handleImageError(trip.id)}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                    {/* Popular Badge */}
                    {trip.popular && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-wider rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {t.trips.popular}
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 bg-background/80 backdrop-blur-sm text-foreground/80 text-xs uppercase tracking-wider rounded-full">
                      {trip.category}
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5">
                  <Link href={`/trip/${trip.slug}`}>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {tripName}
                    </h3>
                  </Link>
                  <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                    {tripDescription}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {trip.highlights.slice(0, 3).map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-muted text-foreground/70 text-xs rounded"
                      >
                        {highlight[lang] || highlight.en}
                      </span>
                    ))}
                  </div>

                  {/* Info Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5 text-foreground/60">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span className="text-sm">{tripDuration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-foreground/50">{t.trips.price}</span>
                      <Euro className="w-4 h-4 text-primary" />
                      <span className="text-xl font-bold text-gradient-gold">
                        {trip.price}
                      </span>
                    </div>
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={() => handleBooking(trip)}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 group/btn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {t.trips.bookNow}
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
                  </>
                ) : (
                  <div className="animate-pulse p-5 space-y-4">
                    <div className="h-48 bg-muted rounded-lg" />
                    <div className="h-5 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                    <div className="flex gap-2">
                      <div className="h-6 bg-muted rounded w-16" />
                      <div className="h-6 bg-muted rounded w-20" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 bg-muted rounded w-24" />
                      <div className="h-4 bg-muted rounded w-16" />
                    </div>
                    <div className="h-10 bg-muted rounded-lg w-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: `${trips.length}+`, label: "Unique Trips" },
            { value: "5000+", label: "Happy Tourists" },
            { value: "10+", label: "Years Experience" },
            { value: "4.9", label: "Average Rating" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 cursor-default"
            >
              <div className="text-3xl md:text-4xl font-serif font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
