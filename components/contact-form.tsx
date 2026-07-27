"use client"

import { useState } from "react"
import { useTranslation } from "@/lib/use-translation"
import { WHATSAPP_NUMBER } from "@/lib/constants"
import { Send, MessageSquare, Mail } from "lucide-react"

const POPULAR_TOURS = [
  { id: "general", name: { en: "General Inquiry", ru: "Общий вопрос", de: "Allgemeine Anfrage", ar: "استفسار عام" } },
  { id: "cairo-pyramids", name: { en: "Cairo Pyramids Tour", ru: "Тур к Пирамидам Каира", de: "Kairo Pyramiden Tour", ar: "رحلة أهرامات القاهرة" } },
  { id: "luxor-temples", name: { en: "Luxor Temples Tour", ru: "Тур по храмам Луксора", de: "Luxor Tempel Tour", ar: "رحلة معابد الأقصر" } },
  { id: "orange-bay", name: { en: "Orange Bay Snorkeling", ru: "Снорклинг на Оранж Бей", de: "Orange Bay Schnorcheln", ar: "رحلة أورانج باي سنوركلنج" } },
  { id: "super-safari", name: { en: "Super Safari Desert Adventure", ru: "Супер Сафари в пустыне", de: "Super Wüstensafari", ar: "مغامرة سوبر سفاري الصحراء" } },
  { id: "diving", name: { en: "Diving Adventure Hurghada", ru: "Дайвинг в Хургаде", de: "Tauchabenteuer Hurghada", ar: "مغامرة الغوص بالغردقة" } },
  { id: "paradise-island", name: { en: "Paradise Island Snorkeling", ru: "Снорклинг на Парадайс Айленд", de: "Paradise Island Schnorcheln", ar: "رحلة جزيرة بارادايس" } }
]

export function ContactForm() {
  const { t, mounted } = useTranslation()
  const lang = (typeof window !== "undefined" ? window.location.pathname.split("/")[1] : "en") || "en"
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedTour, setSelectedTour] = useState("general")
  const [message, setMessage] = useState("")

  if (!mounted) return null

  const getTourName = (tourId: string) => {
    const tour = POPULAR_TOURS.find(t => t.id === tourId)
    if (!tour) return "General Inquiry"
    return (tour.name as any)[lang] || tour.name.en
  }

  const formatMessageText = () => {
    const tourName = getTourName(selectedTour)
    return `Booking Request / Inquiry:
-------------------------
Name: ${name}
Email: ${email || "Not provided"}
Phone/WhatsApp: ${phone || "Not provided"}
Tour: ${tourName}
Message: ${message}`
  }

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    const text = encodeURIComponent(formatMessageText())
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer")
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    const subject = encodeURIComponent(`Booking Inquiry from ${name} - ${getTourName(selectedTour)}`)
    const body = encodeURIComponent(formatMessageText())
    window.open(`mailto:info@goldenhorizontegypt.com?subject=${subject}&body=${body}`)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="sr-only">Name</label>
          <input
            id="contact-name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/50 text-foreground placeholder:text-foreground/40 focus:border-primary/50 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="sr-only">Phone / WhatsApp</label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="Phone / WhatsApp (e.g. +1...)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/50 text-foreground placeholder:text-foreground/40 focus:border-primary/50 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-email" className="sr-only">Email</label>
          <input
            id="contact-email"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/50 text-foreground placeholder:text-foreground/40 focus:border-primary/50 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="contact-tour" className="sr-only">Select Tour</label>
          <select
            id="contact-tour"
            value={selectedTour}
            onChange={(e) => setSelectedTour(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/50 text-foreground focus:border-primary/50 focus:outline-none transition-colors"
          >
            {POPULAR_TOURS.map((tour) => (
              <option key={tour.id} value={tour.id} className="bg-background text-foreground">
                {(tour.name as any)[lang] || tour.name.en}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">Message</label>
        <textarea
          id="contact-message"
          placeholder="Write details like dates, number of people, or questions..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/50 text-foreground placeholder:text-foreground/40 focus:border-primary/50 focus:outline-none transition-colors resize-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <button
          type="button"
          onClick={handleWhatsAppSubmit}
          className="py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md"
        >
          <MessageSquare className="w-5 h-5" />
          Send via WhatsApp
        </button>

        <button
          type="button"
          onClick={handleEmailSubmit}
          className="py-3.5 px-6 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md"
        >
          <Mail className="w-5 h-5" />
          Send via Email
        </button>
      </div>
    </div>
  )
}

