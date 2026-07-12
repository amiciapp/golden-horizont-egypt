"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieConsent() {
  const { t, mounted } = useTranslation()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setShow(true)
  }, [])

  if (!mounted || !show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="p-6 rounded-2xl border border-border bg-card shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <p className="text-foreground text-sm leading-relaxed">
                We use cookies to improve your experience. By continuing, you agree to our{" "}
                <Link href="/privacy-policy" className="text-primary underline hover:text-primary/80">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => { localStorage.setItem("cookie-consent", "declined"); setShow(false) }}
                className="border-border text-foreground/60 hover:text-foreground"
              >
                Decline
              </Button>
              <Button
                size="sm"
                onClick={() => { localStorage.setItem("cookie-consent", "accepted"); setShow(false) }}
                className="gold-gradient text-background"
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
