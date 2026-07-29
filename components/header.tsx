"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { type TranslationKeys } from "@/lib/translations";
import { WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/language-switcher";

interface HeaderProps {
  t: TranslationKeys;
}

export default function Header({ t }: HeaderProps) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navigate = useCallback((href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#") && window.location.pathname === "/") {
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    // Focus trap: collect all focusable elements inside the mobile menu
    const menu = mobileMenuRef.current;
    if (!menu) return;

    const focusableSelectors =
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';
    const focusableEls = Array.from(
      menu.querySelectorAll<HTMLElement>(focusableSelectors)
    );
    const first = focusableEls[0];
    const last = focusableEls[focusableEls.length - 1];

    // Move focus into menu on open
    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      if (focusableEls.length === 0) { e.preventDefault(); return; }
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/#trips", label: t.nav.trips },
    { href: "/#gallery", label: t.nav.gallery },
    { href: "/blog", label: t.nav.blog || "Blog" },
    { href: "/about", label: t.nav.about },
    { href: "/#find-us", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-primary/20 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-background/50 backdrop-blur-sm overflow-hidden group-hover:border-primary/80 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 animate-logo-glow">
                <Image src="/logo.png" alt="Golden Horizont Egypt" width={48} height={48} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full animate-pulse-gold group-hover:scale-125 group-hover:bg-secondary transition-all duration-500" />
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
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => navigate(link.href)}
                  className="relative text-sm uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors duration-300 py-2 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* Language Switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
          <a
                href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm uppercase tracking-wider hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
          </div>


          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className={cn(
            "lg:hidden fixed inset-x-0 top-[72px] bg-background/98 backdrop-blur-lg border-b border-primary/20 transition-all duration-500 overflow-hidden",
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <ul className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => navigate(link.href)}
                  className="block w-full text-left py-3 text-lg uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors border-b border-border/30"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
            href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium uppercase tracking-wider"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </li>
            <li className="pb-2">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
