"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const AIConcierge = dynamic(() => import("@/components/ai-concierge").then(m => m.AIConcierge), { ssr: false })
const MouseEffects = dynamic(() => import("@/components/mouse-effects").then(m => m.MouseEffects), { ssr: false })
const CookieConsent = dynamic(() => import("@/components/cookie-consent").then(m => m.CookieConsent), { ssr: false })

export function DeferredWidgets() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <>
      <AIConcierge />
      <MouseEffects />
      <CookieConsent />
    </>
  )
}
