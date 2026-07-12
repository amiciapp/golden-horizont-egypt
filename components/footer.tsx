"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ChevronUp } from "lucide-react";
import { type TranslationKeys } from "@/lib/translations";
import Reveal from "@/components/reveal";

interface FooterProps {
  t: TranslationKeys;
}

export default function Footer({ t }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/#trips", label: t.nav.trips },
    { href: "/#gallery", label: t.nav.gallery },
    { href: "/about", label: t.nav.about },
    { href: "/#reviews", label: t.nav.reviews },
    { href: "/#contact", label: t.nav.contact },
  ];

  const trips = [
    { name: "Paradise Island Snorkeling", slug: "/trip/paradise-island-snorkeling" },
    { name: "Super Safari Adventure", slug: "/trip/super-safari" },
    { name: "Dolphin Watching Tour", slug: "/trip/dolphin-watching-tour" },
    { name: "Luxor Day Trip", slug: "/trip/luxor-bus-trip" },
    { name: "Cairo & Pyramids", slug: "/trip/cairo-bus-trip" },
    { name: "Diving Adventure", slug: "/trip/diving-trip" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1CiQNoNdgf/?mibextid=wwXIfr",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/gold.enhorizont?igsh=MWpxZXhhejNzd3NyNA%3D%3D&utm_source=qr",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@goldenhorizontegypt8",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: "https://t.me/GoldenHorizontEgypt",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/201220951483",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-transparent pt-20 pb-8 relative border-t border-border/30">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <Reveal delay={0} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center overflow-hidden group-hover:border-primary/80 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 animate-logo-glow">
                <img src="/logo.png" alt="Golden Horizont Egypt" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient-gold tracking-wider font-serif leading-tight">
                  GOLDEN
                </span>
                <span className="text-xl font-bold text-gradient-gold tracking-wider font-serif leading-tight -mt-1">
                  HORIZONT
                </span>
                <span className="text-xs text-secondary tracking-[0.3em] uppercase font-light">
                  Egypt
                </span>
              </div>
            </Link>
            <p className="text-foreground/60 mb-6 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={100}>
            <h4 className="text-foreground font-semibold mb-6 uppercase tracking-wider text-sm">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Popular Trips */}
          <Reveal delay={200}>
            <h4 className="text-foreground font-semibold mb-6 uppercase tracking-wider text-sm">
              {t.footer.popularTrips}
            </h4>
            <ul className="space-y-3">
              {trips.map((trip) => (
                <li key={trip.slug}>
                  <Link
                    href={trip.slug}
                    className="text-foreground/60 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {trip.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact */}
          <Reveal delay={300}>
            <h4 className="text-foreground font-semibold mb-6 uppercase tracking-wider text-sm">
              {t.footer.contact}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/60 text-sm">
                  {t.footer.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+353830951168" className="text-foreground/60 hover:text-primary transition-colors text-sm">+353 83 095 1168 — Ireland</a>
                  <a href="tel:+3736207698" className="text-foreground/60 hover:text-primary transition-colors text-sm">+373 62 076 98 — Moldova</a>
                  <a href="tel:+201220951483" className="text-foreground/60 hover:text-primary transition-colors text-sm">+20 122 095 1483 — Egypt (Russian + Romanian)</a>
                  <a href="tel:+201013725824" className="text-foreground/60 hover:text-primary transition-colors text-sm">+20 101 372 5824 — Egypt (English)</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@goldenhorizontegypt.com"
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  info@goldenhorizontegypt.com
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-sm flex flex-wrap items-center gap-1">
            &copy; 2026 Golden Horizont Egypt. All rights reserved. <span className="hidden sm:inline mx-1">|</span> designed by
            <span className="group relative inline-block cursor-pointer font-bold text-primary hover:text-primary-foreground hover:bg-primary px-1 rounded transition-colors duration-300">
              ROMERO&apos;S STUDIOS
              <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1 bg-black/90 backdrop-blur-md text-white px-3 py-1.5 rounded-md text-xs shadow-xl border border-primary/50 z-50 whitespace-nowrap">
                (+201224278490)
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary/50"></span>
              </span>
            </span>
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="text-foreground/40 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-foreground/40 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
