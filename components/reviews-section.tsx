"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { type TranslationKeys } from "@/lib/translations";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

interface ReviewsSectionProps {
  t: TranslationKeys;
}

type Source = "google" | "tripadvisor" | "getyourguide";

const SOURCE_CONFIG: Record<Source, { label: string; color: string; bg: string }> = {
  google: { label: "Google", color: "#4285F4", bg: "from-[#4285F4]/15 to-[#34A853]/15" },
  tripadvisor: { label: "TripAdvisor", color: "#00AF87", bg: "from-[#00AF87]/15 to-[#F2B203]/15" },
  getyourguide: { label: "GetYourGuide", color: "#F6871F", bg: "from-[#F6871F]/15 to-[#E63312]/15" },
};

/** Deterministic color avatar from name — no external image dependency */
function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const hue = name.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % 360;
  return (
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-primary/30 text-white font-bold text-lg select-none flex-shrink-0"
      style={{ background: `linear-gradient(135deg, hsl(${hue},55%,42%), hsl(${(hue + 40) % 360},60%,30%))` }}
      aria-label={`Avatar for ${name}`}
    >
      {initials}
    </div>
  );
}

function SourceLogo({ source }: { source: Source }) {
  if (source === "google") {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    );
  }
  if (source === "tripadvisor") {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
        <circle cx="12" cy="14" r="2.5" stroke="#00AF87" strokeWidth="1.5" fill="none"/>
        <circle cx="6" cy="14" r="2" stroke="#F2B203" strokeWidth="1.2" fill="none"/>
        <circle cx="18" cy="14" r="2" stroke="#F2B203" strokeWidth="1.2" fill="none"/>
        <path d="M3 10.5a3 3 0 013-3h12a3 3 0 013 3" stroke="#00AF87" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 7.5V5" stroke="#F2B203" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 7.5V5" stroke="#F2B203" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#F6871F"/>
      <path d="M2 17l10 5 10-5" stroke="#E63312" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12l10 5 10-5" stroke="#F6871F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const reviews = [
  {
    id: 1,
    name: "Maria Schmidt",
    country: "Germany",
    lang: "de",
    rating: 5,
    text: "Absolut unglaubliches Erlebnis! Das Team von Golden Horizont Egypt hat unsere Reise zur Giftun-Insel unvergesslich gemacht. Kristallklares Wasser, fantastische Korallenriffe und die professionellste Crew. Absolut empfehlenswert!",
    trip: "Giftun Island Schnorcheln",
    date: "März 2024",
    source: "google" as Source,
  },
  {
    id: 2,
    name: "Алексей Петров",
    country: "Россия",
    lang: "ru",
    rating: 5,
    text: "Лучшая экспедиция в пустыню, которую я когда-либо переживал! Катание на квадроциклах было захватывающим, а ужин бедуина под звёздами — волшебным. Великолепные виды на закате. Обязательно забронирую снова!",
    trip: "Супер Сафари",
    date: "Февраль 2024",
    source: "tripadvisor" as Source,
  },
  {
    id: 3,
    name: "Anna Kowalska",
    country: "Polska",
    lang: "pl",
    rating: 5,
    text: "Pływanie z delfinami było spełnieniem marzeń! Przewodnicy byli niezwykle kompetentni i cierpliwi. Upewnili się, że mieliśmy idealne doświadczenie. Dziękuję Golden Horizont Egypt!",
    trip: "Dolphin House Reef",
    date: "Styczeń 2024",
    source: "getyourguide" as Source,
  },
  {
    id: 4,
    name: "John Williams",
    country: "United Kingdom",
    lang: "en",
    rating: 5,
    text: "The Luxor day trip was phenomenal! Our guide knew everything about ancient Egypt. Seeing the Valley of Kings and Karnak Temple was a once-in-a-lifetime experience. Worth every penny!",
    trip: "Luxor Day Trip",
    date: "December 2023",
    source: "google" as Source,
  },
  {
    id: 5,
    name: "Sophie Laurent",
    country: "France",
    lang: "fr",
    rating: 5,
    text: "Orange Bay est un paradis sur terre! La plage était immaculée, l'eau était parfaite et le délicieux. Golden Horizont Egypt a tout organisé parfaitement. J'ai hâte d'y retourner!",
    trip: "Orange Bay Island",
    date: "Mars 2024",
    source: "tripadvisor" as Source,
  },
  {
    id: 6,
    name: "Marco Rossi",
    country: "Italia",
    lang: "it",
    rating: 5,
    text: "La mia prima esperienza di immersione è stata con Golden Horizont Egypt ed è stata fantastica! Gli istruttori erano pazienti e professionali. Mi sono sentito al sicuro per tutto il tempo. Ora sono dipendente dalle immersioni!",
    trip: "Introduzione alle Immersioni",
    date: "Febbraio 2024",
    source: "getyourguide" as Source,
  },
  {
    id: 7,
    name: "Carlos García",
    country: "España",
    lang: "es",
    rating: 5,
    text: "¡El safari por el desierto fue increíble! Los jinetes de quad fueron emocionantes y la cena beduina bajo las estrellas mágica. Las vistas al atardecer son impresionantes. ¡Definitivamente reservaré de nuevo!",
    trip: "Safari en el Desierto",
    date: "Abril 2024",
    source: "google" as Source,
  },
  {
    id: 8,
    name: "Hans van Bergen",
    country: "Nederland",
    lang: "nl",
    rating: 5,
    text: "Geweldige ervaring met Golden Horizont Egypt! De boottocht naar Giftun Island was perfect georganiseerd. Het snorkelen was fantastisch en de lunch heerlijk. Een absolute aanrader voor iedereen!",
    trip: "Giftun Island Snorkelen",
    date: "Mei 2024",
    source: "tripadvisor" as Source,
  },
  {
    id: 9,
    name: "Marie Dubois",
    country: "Suisse",
    lang: "fr",
    rating: 5,
    text: "Plongée avec les dauphins — un rêve devenu réalité! Les guides étaient passionnés et très professionnels. L'expérience était bien organisée et en toute sécurité. Merci Golden Horizont!",
    trip: "Reef des Dauphins",
    date: "Juin 2024",
    source: "getyourguide" as Source,
  },
  {
    id: 10,
    name: "Lars Eriksson",
    country: "Sverige",
    lang: "sv",
    rating: 5,
    text: "Luxor-dagen var fantastisk! Våran guide visade allt om det forntida Egypterna. Dalgången av kungarna och Karnak Templet var otroligt. Bästa resan jag någonsin gjort!",
    trip: "Luxor Dagstur",
    date: "Juli 2024",
    source: "google" as Source,
  },
];

export default function ReviewsSection({ t }: ReviewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      startAutoPlay();
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, startAutoPlay]);

  const navigate = (direction: "prev" | "next") => {
    setCurrentIndex((prev) =>
      direction === "next"
        ? (prev + 1) % reviews.length
        : (prev - 1 + reviews.length) % reviews.length
    );
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
      <div className="absolute top-20 left-10 text-primary/5">
        <Quote className="w-64 h-64" />
      </div>
      <div className="absolute bottom-20 right-10 text-primary/5 rotate-180">
        <Quote className="w-64 h-64" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <Reveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary animate-line-draw" />
            <span className="text-primary text-sm uppercase tracking-[0.3em]">
              {t.reviews.preTitle}
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

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
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

          <div className="flex items-center justify-center gap-6 px-12 min-h-[420px]">
            {getVisibleReviews().map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className={cn(
                  "transition-all duration-500 flex-shrink-0",
                  review.position === 0
                    ? "w-full md:w-[600px] opacity-100 scale-100 z-10"
                    : "hidden md:block w-[300px] opacity-40 scale-90 z-0",
                  "animate-fade-in-up"
                )}
              >
                <div
                  className={cn(
                    "bg-card rounded-2xl border border-border/50 p-8 transition-all duration-500",
                    review.position === 0 && "border-primary/30 shadow-xl shadow-primary/10"
                  )}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-10 h-10 text-primary/30" />
                    <div className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r text-xs font-semibold",
                      SOURCE_CONFIG[review.source].bg
                    )} style={{ color: SOURCE_CONFIG[review.source].color }}>
                      <SourceLogo source={review.source} />
                      {SOURCE_CONFIG[review.source].label}
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                    {review.position === 0 ? review.text : `"${review.text.slice(0, 100)}..."`}
                  </p>

                  {review.position === 0 && (
                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm mb-6">
                      {review.trip}
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <InitialsAvatar name={review.name} />
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-foreground/60">
                        {review.country} • {review.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

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

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {([
            { name: "TripAdvisor", color: "#00AF87" },
            { name: "Google Reviews", color: "#4285F4" },
            { name: "GetYourGuide", color: "#F6871F" },
          ]).map((badge, i) => (
            <div
              key={badge.name}
              className="flex items-center gap-2 group hover-lift"
              style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: `${badge.color}20` }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: badge.color }} />
              </div>
              <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors duration-300">
                {badge.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
