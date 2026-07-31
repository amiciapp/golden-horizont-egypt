"use client"

import { useState, useEffect, useRef } from "react"
import { type Language, type TranslationKeys } from "@/lib/translations"
import { WHATSAPP_LINK } from "@/lib/constants"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Shield, Users, Ship, Star, MapPin, Award, Sun, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AboutClientProps {
  initialLang: Language
  initialT: TranslationKeys
}

function FadeInSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={cn(visible ? "animate-fade-in-up" : "opacity-0", className)} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState("0")
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect() } }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const num = parseFloat(value)
    if (isNaN(num)) { setCount(value); return }
    const isDecimal = value.includes(".")
    const steps = 30
    let i = 0
    const interval = setInterval(() => {
      i++
      const current = (num / steps) * i
      if (i >= steps) { setCount(value); clearInterval(interval); return }
      setCount(isDecimal ? current.toFixed(1) : Math.floor(current).toString())
    }, 40)
    return () => clearInterval(interval)
  }, [started, value])

  return <div ref={ref} className="inline">{count}{suffix}</div>
}

export default function AboutClient({ initialLang, initialT }: AboutClientProps) {
  const t = initialT

  const values = [
    { icon: Star, title: t.about.value1Title, desc: t.about.value1Desc },
    { icon: Shield, title: t.about.value2Title, desc: t.about.value2Desc },
    { icon: Users, title: t.about.value3Title, desc: t.about.value3Desc },
    { icon: Ship, title: t.about.value4Title, desc: t.about.value4Desc }
  ]

  const milestones = [
    { year: "2015", title: t.about.milestone2015Title, desc: t.about.milestone2015Desc },
    { year: "2018", title: t.about.milestone2018Title, desc: t.about.milestone2018Desc },
    { year: "2021", title: t.about.milestone2021Title, desc: t.about.milestone2021Desc },
    { year: "2024", title: t.about.milestone2024Title, desc: t.about.milestone2024Desc }
  ]

  const stats = [
    { value: "31", suffix: "+", label: t.about.uniqueTrips },
    { value: "5000", suffix: "+", label: t.about.happyTourists },
    { value: "10", suffix: "+", label: t.about.yearsExperience },
    { value: "4.9", suffix: "", label: t.about.averageRating }
  ]

  const destinations = [
    { name: "Cairo", desc: t.about.cairoDesc },
    { name: "Luxor", desc: t.about.luxorDesc },
    { name: "Aswan", desc: t.about.aswanDesc },
    { name: "Marsa Alam", desc: t.about.marsaAlamDesc },
    { name: "Hurghada", desc: t.about.hurghadaDesc },
    { name: "Giza", desc: t.about.gizaDesc }
  ]

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Header t={t} />

      {/* JSON-LD for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            '@id': 'https://goldenhorizontegypt.com/en/about',
            name: 'About Golden Horizont Egypt',
            description: 'Golden Horizont Egypt is a premier travel agency in Hurghada offering 31+ unique tours across Egypt since 2015. Specializing in Red Sea snorkeling, diving, desert safaris, and historical tours.',
            mainEntity: {
              '@type': 'Organization',
              name: 'Golden Horizont Egypt',
              slogan: 'Your Gateway to Egypt Adventures',
            }
          })
        }}
      />

      {/* === Hero === */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg"
            alt="Golden Horizont Egypt - About Us"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0">
          <Image
            src="/about-overlay.webp"
            alt=""
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-primary/10 animate-float opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-secondary/10 animate-float opacity-30" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 rounded-full bg-secondary/5 blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center pt-24">
          <FadeInSection delay={0.1}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
              <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">{t.about.heroLabel}</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
            </div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-none">
              <span className="text-gradient-gold">GOLDEN</span>
              <br />
              <span className="text-gradient-gold">HORIZONT</span>
              <br />
              <span className="text-foreground/80">EGYPT</span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.3}>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              {t.about.heroDescription}
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-xs uppercase tracking-[0.3em] text-foreground/40">{t.about.discoverStory}</span>
              <div className="w-8 h-px bg-primary/40" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* === Our Story === */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">{t.about.ourStoryLabel}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">{(t.about.storyTitle || "").split('\n').map((line: string, i: number) => (<span key={i}>{line}{i === 0 && <br />}</span>))}</h2>
              <div className="space-y-5 text-foreground/60 leading-relaxed text-base">
                <p className="text-foreground/70">
                  {t.about.storyP1}
                </p>
                <p>
                  {t.about.storyP2}
                </p>
                <p>
                  {t.about.storyP3}
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <Image src="/about-hero.webp" alt="Golden Horizont Egypt" width={500} height={500} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center backdrop-blur-xl p-4 animate-logo-glow">
                  <Image src="/logo.png" alt="Golden Horizont Egypt" width={80} height={80} className="w-full h-full object-contain" />
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                  <Award className="w-10 h-10 text-primary/60" />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* === Stats === */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 text-center overflow-hidden cursor-default">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold mb-2">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-foreground/60 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* === Timeline === */}
      <section className="py-28 bg-card relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
                <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">{t.about.milestonesLabel}</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">{t.about.milestonesTitle}</h2>
            </div>
          </FadeInSection>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            {milestones.map((m, i) => (
              <FadeInSection key={i} delay={i * 0.15}>
                <div className="relative pl-20 pb-16 last:pb-0 group">
                  <div className="absolute left-4 top-1 w-9 h-9 rounded-full border-2 border-primary bg-background flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <div className="p-6 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift">
                    <span className="text-sm text-gradient-gold font-semibold tracking-wider">{m.year}</span>
                    <h3 className="text-xl font-serif font-bold text-foreground mt-1 mb-2">{m.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* === Values === */}
      <section className="py-28 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
                <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">{t.about.valuesLabel}</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">{t.about.valuesTitle}</h2>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeInSection key={i} delay={i * 0.12}>
                <div className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <v.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">{v.title}</h3>
                    <p className="text-foreground/60 leading-relaxed text-sm">{v.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* === Destinations === */}
      <section className="py-28 bg-card relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
                <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">{t.about.destinationsLabel}</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">{t.about.destinationsTitle}</h2>
              <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
                {t.about.destinationsSubtitle}
              </p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {destinations.map((city, i) => (
              <FadeInSection key={i} delay={i * 0.08}>
                <div className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 text-center cursor-pointer hover-lift">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-1">{city.name}</h3>
                  <p className="text-foreground/50 text-xs uppercase tracking-wider">{city.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full border border-primary/10 animate-float opacity-30" />
        <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full border border-secondary/10 animate-float opacity-20" style={{ animationDelay: "1s" }} />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center p-12 md:p-16 rounded-3xl border border-primary/30 bg-gradient-to-br from-background via-background to-primary/5 gold-glow relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
              <div className="relative">
                <Sun className="w-12 h-12 text-primary/40 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">{(t.about.ctaTitle || "").split('\n').map((line: string, i: number) => (<span key={i}>{line}{i === 0 && <br />}</span>))}</h2>
                <p className="text-foreground/60 mb-10 text-lg max-w-lg mx-auto">
                  {t.about.ctaDescription}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/#trips"
                    className="group px-10 py-4 bg-primary text-primary-foreground rounded-full font-medium uppercase tracking-wider hover:bg-primary/90 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-primary/20"
                  >
                    {t.about.exploreTrips}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-10 py-4 border border-secondary/40 text-secondary rounded-full font-medium uppercase tracking-wider hover:bg-secondary/10 hover:border-secondary transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {t.about.chatWhatsApp}
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer t={t} />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
