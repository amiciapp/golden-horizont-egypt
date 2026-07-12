"use client"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { trips } from "@/lib/trips"
import { useTranslation, type Language } from "@/lib/translations"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WeatherExchangeWidget from "@/components/weather-exchange-widget"
import { Clock, Users, MapPin, Star, Check, ArrowLeft, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function TripPageClient() {
  const params = useParams()
  const router = useRouter()
  const { t, lang, mounted, setLang } = useTranslation()
  const slug = params.slug as string
  const [imgFailed, setImgFailed] = useState(false)
  
  const trip = trips.find(tr => tr.slug === slug)

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse-gold w-16 h-16 rounded-full border-2 border-primary" />
      </div>
    )
  }
  
  if (!trip) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-primary mb-4">Trip Not Found</h1>
          <Button onClick={() => router.push("/")} className="gold-gradient text-background">
            Go Home
          </Button>
        </div>
      </div>
    )
  }

  const tripName = trip.name[lang] || trip.name.en
  const tripDescription = trip.description[lang] || trip.description.en
  const tripDuration = trip.duration[lang] || trip.duration.en

  const whatsappMessage = encodeURIComponent(
    `${t.whatsapp.greeting}: ${tripName}\n\nDuration: ${tripDuration}\nPrice: €${trip.price}`
  )
  const whatsappLink = `https://wa.me/201220951483?text=${whatsappMessage}`

  return (
    <main className="min-h-screen bg-background">
      <Header t={t} lang={lang} onLanguageChange={setLang} />
      <WeatherExchangeWidget t={t} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background z-10" />
        {imgFailed ? (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <ImageIcon className="w-24 h-24 text-foreground/20" />
          </div>
        ) : (
          <Image
            src={trip.image}
            alt={tripName}
            fill
            className="object-cover"
            priority
            onError={() => setImgFailed(true)}
          />
        )}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-background/50 backdrop-blur-sm mb-6 animate-fade-in">
              <span className="text-primary font-medium">{trip.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4 animate-slide-up">
              {tripName}
            </h1>
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.floor(trip.rating) ? "fill-primary text-primary" : "text-muted"}`} 
                />
              ))}
              <span className="ml-2 text-muted-foreground">({trip.rating})</span>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button 
          variant="ghost" 
          onClick={() => { window.location.href = "/#trips"; }}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Trips
        </Button>
      </div>

      {/* Trip Details */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl border border-border bg-card text-center group hover:border-primary/50 transition-all duration-300">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground mb-1">{t.trips.duration}</p>
                <p className="text-lg font-semibold text-foreground">{tripDuration}</p>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-card text-center group hover:border-primary/50 transition-all duration-300">
                <Users className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground mb-1">Group Size</p>
                <p className="text-lg font-semibold text-foreground">2-15</p>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-card text-center group hover:border-primary/50 transition-all duration-300">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-lg font-semibold text-foreground">Egypt</p>
              </div>
            </div>

            {/* Description */}
            <div className="p-8 rounded-3xl border border-border bg-card">
              <h2 className="text-2xl font-serif text-foreground mb-6">About This Trip</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {tripDescription}
              </p>
            </div>

            {/* Highlights */}
            <div className="p-8 rounded-3xl border border-border bg-card">
              <h2 className="text-2xl font-serif text-foreground mb-6">Highlights</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {trip.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full gold-gradient flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-background" />
                    </div>
                    <span className="text-muted-foreground">{highlight[lang] || highlight.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div className="p-8 rounded-3xl border border-border bg-card">
              <h2 className="text-2xl font-serif text-foreground mb-6">What&apos;s Included</h2>
              <ul className="space-y-3">
                {trip.included.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{item[lang] || item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Placeholder */}
            <div className="p-8 rounded-3xl border border-border bg-card">
              <h2 className="text-2xl font-serif text-foreground mb-6">{t.gallery.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: trip.image, alt: `${tripName} - Main` },
                  { src: `https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80`, alt: `${tripName} - Red Sea` },
                  { src: `https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80`, alt: `${tripName} - Adventure` },
                  { src: `https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400&q=80`, alt: `${tripName} - Experience` },
                  { src: `https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&q=80`, alt: `${tripName} - Safari` },
                  { src: `https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&q=80`, alt: `${tripName} - Paradise` },
                ].map((img, i) => (
                  <div 
                    key={i} 
                    className="aspect-square rounded-xl bg-muted/30 border border-border flex items-center justify-center overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                More photos coming soon...
              </p>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-8 rounded-3xl border border-primary/30 bg-card gold-glow">
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground mb-2">{t.trips.price}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-primary">€{trip.price}</span>
                  <span className="text-muted-foreground">/ person</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">{t.trips.duration}</span>
                  <span className="text-foreground font-medium">{tripDuration}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Category</span>
                  <span className="text-foreground font-medium">{trip.category}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Rating</span>
                  <span className="text-foreground font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    {trip.rating}
                  </span>
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 px-6 rounded-xl gold-gradient text-background font-semibold text-center text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t.trips.bookNow}
                </span>
              </a>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Instant confirmation via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer t={t} />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
