"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { detectLanguage, getTranslations, type Language, type TranslationKeys } from "@/lib/translations";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import LoadingScreen from "@/components/loading-screen";
import { ScrollToTop } from "@/components/scroll-to-top";
import { WhatsAppButton } from "@/components/whatsapp-button";

const GallerySection = dynamic(() => import("@/components/gallery-section"), { ssr: false });
const TripsSection = dynamic(() => import("@/components/trips-section"), { ssr: false });
const ReviewsSection = dynamic(() => import("@/components/reviews-section"), { ssr: false });
const WeatherExchangeWidget = dynamic(() => import("@/components/weather-exchange-widget"), { ssr: false });
const MapSection = dynamic(() => import("@/components/map-section"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [t, setT] = useState<TranslationKeys>(getTranslations("en"));
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleLoadingFinish = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const detectedLang = detectLanguage();
    setLang(detectedLang);
    setT(getTranslations(detectedLang));
    setMounted(true);
  }, []);

  if (!mounted || loading) {
    return <LoadingScreen onFinish={handleLoadingFinish} />;
  }

  return (
    <main className="min-h-screen bg-transparent overflow-x-hidden">
      <Header t={t} lang={lang} onLanguageChange={(l) => { setLang(l); setT(getTranslations(l)); }} />
      <HeroSection t={t} />
      <GallerySection t={t} />
      <TripsSection t={t} lang={lang} />
      <ReviewsSection t={t} />
      <WeatherExchangeWidget t={t} />
      <MapSection t={t} />
      <Footer t={t} />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  );
}
