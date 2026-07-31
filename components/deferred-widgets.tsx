"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"
import { CookieConsent } from "@/components/cookie-consent"

const AIConcierge = dynamic(() => import("@/components/ai-concierge").then(m => m.AIConcierge), { ssr: false })
const MouseEffects = dynamic(() => import("@/components/mouse-effects").then(m => m.MouseEffects), { ssr: false })

export function DeferredWidgets() {
  const [chatOpen, setChatOpen] = useState(false)
  const [mouseReady, setMouseReady] = useState(false)

  useEffect(() => {
    const onFirstMove = () => setMouseReady(true)
    window.addEventListener("pointermove", onFirstMove, { once: true })
    return () => window.removeEventListener("pointermove", onFirstMove)
  }, [])

  return (
    <>
      {chatOpen ? (
        <AIConcierge initialOpen />
      ) : (
        <button
          type="button"
          onClick={() => setChatOpen(true)}
          aria-label="Open AI travel concierge"
          className="fixed bottom-24 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-gold-dark text-primary-foreground shadow-xl shadow-primary/30 flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
      {mouseReady && <MouseEffects />}
      <CookieConsent />
    </>
  )
}
