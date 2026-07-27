"use client";

import { ChevronDown } from "lucide-react";
import { type TranslationKeys } from "@/lib/translations";
import { WHATSAPP_LINK } from "@/lib/constants";

interface HeroSectionProps {
  t: TranslationKeys;
}

export default function HeroSection({ t }: HeroSectionProps) {
  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Gradient Overlay for bottom transition */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float opacity-30 hidden lg:block" />


        {/* Main Content */}
        <div
          className="max-w-4xl mx-auto transition-all duration-1000 opacity-100 translate-y-0"
        >
          {/* Pre-title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary animate-line-draw" />
            <span className="text-secondary text-sm uppercase tracking-[0.3em] font-medium">
              GOLDEN HORIZONT EGYPT
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary animate-line-draw" style={{ animationDelay: "0.3s" }} />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            <span className="text-gradient-gold">{t.hero.title.split(" ").slice(0, 2).join(" ")}</span>
            <br />
            <span className="text-foreground">{t.hero.title.split(" ").slice(2).join(" ")}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#trips"
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            >
              <span className="relative z-10">{t.hero.cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 border border-secondary/50 text-secondary rounded-full font-medium uppercase tracking-wider hover:bg-secondary/10 hover:border-secondary transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs uppercase tracking-widest text-foreground/50">
            {t.hero.scroll}
          </span>
          <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
