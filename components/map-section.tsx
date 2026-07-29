"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { type TranslationKeys } from "@/lib/translations";
import { WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

interface MapSectionProps {
  t: TranslationKeys;
}

export default function MapSection({ t }: MapSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const contactInfo = [
    {
      icon: MapPin,
      title: t.map.locationLabel,
      details: [(t.map as any).addressLine1 || "SHERATON STREET — HEART OF HURGHADA", (t.map as any).addressLine2 || "6R8Q+Q9Q Hurghada 1"],
    },
    {
      icon: Phone,
      title: t.map.phoneLabel,
      details: ["+353 83 095 1168 — Ireland", "+373 69 207 698 — Moldova", "+201 22 095 1483 — Egypt (Russian + Romanian)"],
    },
    {
      icon: Mail,
      title: t.map.emailLabel,
      details: ["info@goldenhorizontegypt.com"],
    },
    {
      icon: Clock,
      title: t.map.workingHoursLabel,
      details: [t.map.dailyHours, t.map.whatsappSupport],
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-card relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l9.9-9.9h-2.83zM27.657 0L17.465 10.19l1.415 1.415L29.07 1.414 27.657 0zM32.972 0L21.465 11.505l1.414 1.415L34.385 1.414 32.972 0zM38.285 0L25.465 12.82l1.414 1.414L39.699 1.414 38.285 0zM43.6 0L29.466 14.134l1.414 1.414L44.0 1.414 43.6 0zM49.143 0L33.465 15.678l1.414 1.414L49.557 2.414 49.143 0z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <Reveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary animate-line-draw" />
            <span id="find-us" className="text-primary text-sm uppercase tracking-[0.3em]">
              {t.map.findUs}
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary animate-line-draw" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {t.map.locationTitle}
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {t.map.locationSubtitle}
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Cards */}
          <div
            className={cn(
              "grid sm:grid-cols-2 gap-6",
              isVisible ? "animate-slide-in-left" : "opacity-0"
            )}
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-background/40 backdrop-blur-md rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-sm text-foreground/60">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Map */}
          <div
            className={cn(
              "relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-border/50",
              isVisible ? "animate-slide-in-right" : "opacity-0"
            )}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.4267893752146!2d33.835897!3d27.216944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDEzJzAxLjAiTiAzM8KwNTAnMTguNSJF!5e1!3m2!1sen!2seg!4v1720000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Golden Horizont Egypt Location"
              className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />

            {/* Map Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 p-4 bg-background/60 backdrop-blur-md rounded-xl border border-primary/30 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    GOLDEN HORIZONT EGYPT
                  </h4>
                  <p className="text-sm text-foreground/60 mt-1">
                    {(t.map as any).addressLine1 || "SHERATON STREET — HEART OF HURGHADA"}
                  </p>
                  <a
                    href="https://maps.google.com/?q=27.216944,33.838472"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-sm text-primary hover:underline"
                  >
                    <Navigation className="w-4 h-4" />
                    {t.map.directions}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/60 mb-4">
            {t.map.whatsappCta}
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-full font-medium uppercase tracking-wider hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-600/30"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            {t.map.chatWhatsApp}
          </a>
        </div>

        {/* Contact Form */}
        <div className="mt-16 max-w-xl mx-auto">
          <div className="p-8 rounded-3xl border border-border bg-card">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">{t.map.formTitle}</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
