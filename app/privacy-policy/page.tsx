"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useTranslation } from "@/lib/translations"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function PrivacyPolicyPage() {
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
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">Last updated: July 2026</p>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly, such as when you contact us via WhatsApp, fill out a form, or book a tour. This may include your name, email address, phone number, and travel preferences.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">2. How We Use Your Information</h2>
            <p>We use your information to process bookings, communicate about tours, send confirmation details, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">3. Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal information. Your data is stored securely and is only accessed by authorized team members who need it to provide our services.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">4. Cookies</h2>
            <p>Our website uses essential cookies to ensure proper functionality. We may also use analytics cookies to understand how visitors interact with our site. You can control cookie settings through your browser preferences.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">5. Third-Party Services</h2>
            <p>We use third-party services including Google Analytics and Vercel for hosting. These services may collect information sent by your browser as part of their standard functionality.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us via WhatsApp at +201 22 095 1483 or email info@goldenhorizontegypt.com.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">7. Contact</h2>
            <p>For questions about this privacy policy, contact us at:<br />
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
