"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/lib/use-translation"
import { WHATSAPP_NUMBER } from "@/lib/constants"
import { X, Send } from "lucide-react"

export function WhatsAppButton() {
  const { t, mounted } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [showBadge, setShowBadge] = useState(false)
  const [userMsg, setUserMsg] = useState("")
  
  useEffect(() => {
    // Show badge notification after 5 seconds to prompt user interaction
    const timer = setTimeout(() => {
      setShowBadge(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    const customMessage = encodeURIComponent(
      userMsg.trim() || "Hello Golden Horizont Egypt! I'm interested in booking some tours and excursions."
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${customMessage}`, "_blank", "noopener,noreferrer")
    setUserMsg("")
    setIsOpen(false)
  }

  const defaultMessage = encodeURIComponent(
    "Hello Golden Horizont Egypt! I'm interested in learning more about your trips and excursions across Egypt."
  )
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMessage}`

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end">
      {/* Interactive Chat Popup Window */}
      {isOpen && (
        <div className="w-[320px] sm:w-[360px] bg-background border border-primary/20 rounded-3xl overflow-hidden shadow-2xl mb-4 transition-all duration-300 animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center font-bold text-lg">
                G
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Golden Horizont Egypt</h4>
                <p className="text-xs text-white/80">Typically replies instantly</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages body */}
          <div className="p-5 max-h-[220px] overflow-y-auto bg-muted/30 space-y-4">
            <div className="bg-card border border-border p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-sm">
              <p className="text-foreground/80 leading-relaxed">
                👋 Hello! Welcome to Golden Horizont Egypt. Let us help you plan an unforgettable trip. What tours are you interested in today?
              </p>
              <span className="text-[10px] text-muted-foreground mt-2 block text-right">Just now</span>
            </div>
          </div>

          {/* Quick Input Form */}
          <form onSubmit={handleSend} className="p-4 bg-background border-t border-border flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              className="flex-1 bg-muted px-4 py-2.5 rounded-full text-sm border border-transparent focus:border-primary/30 focus:outline-none transition-all"
            />
            <button
              type="submit"
              className="p-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full transition-colors shadow-md hover:scale-105"
              aria-label="Send WhatsApp message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen)
          setShowBadge(false)
        }}
        className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group relative"
        aria-label="Open WhatsApp chat widget"
      >
        {/* Notification Badge */}
        {showBadge && !isOpen && (
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce shadow-md">
            1
          </span>
        )}
        <svg 
          className="w-6 h-6 group-hover:animate-pulse" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="hidden sm:inline">{t.nav.contact}</span>
      </button>
    </div>
  )
}

