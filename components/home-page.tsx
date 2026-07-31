"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { type Language, type TranslationKeys } from "@/lib/translations";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import LoadingScreen from "@/components/loading-screen";
import { ScrollToTop } from "@/components/scroll-to-top";
import { WhatsAppButton } from "@/components/whatsapp-button";

const GallerySection = dynamic(() => import("@/components/gallery-section"), { ssr: true });
const TripsSection = dynamic(() => import("@/components/trips-section"), { ssr: true });
const ReviewsSection = dynamic(() => import("@/components/reviews-section"), { ssr: true });

const MapSection = dynamic(() => import("@/components/map-section"), { ssr: true });
const Footer = dynamic(() => import("@/components/footer"), { ssr: true });

interface HomePageProps {
  initialLang: Language;
  initialT: TranslationKeys;
}

export default function HomePage({ initialLang, initialT }: HomePageProps) {
  const [loading, setLoading] = useState(true);

  const handleLoadingFinish = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("gh_loaded")) {
      setLoading(false);
    } else {
      sessionStorage.setItem("gh_loaded", "1");
    }
  }, []);

  return (
    <>
      {/* Loading Screen overlays content but doesn't block SEO rendering */}
      {loading && <LoadingScreen onFinish={handleLoadingFinish} />}
      
      {/* We render content so crawlers see it instantly */}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
        <Header t={initialT} />
        <HeroSection t={initialT} />
        <GallerySection t={initialT} />
        <TripsSection t={initialT} lang={initialLang} />
        <ReviewsSection t={initialT} />

        <MapSection t={initialT} />
        <Footer t={initialT} />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </>
  );
}

