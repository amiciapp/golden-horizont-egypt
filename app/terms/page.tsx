"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useTranslation } from "@/lib/translations"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function TermsPage() {
  const { t, lang, mounted, setLang } = useTranslation()

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse-gold w-16 h-16 rounded-full border-2 border-primary" />
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header t={t} lang={lang} onLanguageChange={setLang} />
      
      <section className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-6">Last updated: July 2026</p>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">1. Booking & Payment</h2>
            <p>Tours can be booked via WhatsApp or our website. A deposit may be required to confirm your booking. Full payment is due before or on the day of the tour, unless otherwise agreed.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">2. Cancellation Policy</h2>
            <p>Free cancellation is available up to 24 hours before the scheduled tour. Cancellations within 24 hours may be subject to a fee. No-shows will be charged in full.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">3. Tour Modifications</h2>
            <p>We reserve the right to modify tour itineraries due to weather conditions, safety concerns, or unforeseen circumstances. Alternative arrangements will be provided when possible.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">4. Liability</h2>
            <p>While we take every precaution to ensure your safety, Golden Horizont Egypt is not liable for injuries, losses, or damages resulting from force majeure, participant negligence, or circumstances beyond our control.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">5. Travel Insurance</h2>
            <p>We strongly recommend obtaining comprehensive travel insurance before your trip. This should cover trip cancellation, medical expenses, and personal liability.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">6. Intellectual Property</h2>
            <p>All content on this website, including text, images, and logos, is the property of Golden Horizont Egypt and may not be reproduced without permission.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">7. Governing Law</h2>
            <p>These terms are governed by the laws of Egypt. Any disputes shall be resolved in the courts of Hurghada, Egypt.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">8. Contact</h2>
            <p>For questions about these terms, contact us at:<br />
            Golden Horizont Egypt<br />
            Sheraton Street, Hurghada, Egypt<br />
            Email: info@goldenhorizontegypt.com<br />
            WhatsApp: +201 22 095 1483</p>
          </div>
        </div>
      </section>

      <Footer t={t} />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
