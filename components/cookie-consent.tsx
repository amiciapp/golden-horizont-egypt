"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/lib/use-translation"

export function CookieConsent() {
  const { mounted } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({ necessary: true, analytics: true, marketing: true })
    )
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({ necessary: true, analytics: false, marketing: false })
    )
    setIsVisible(false)
  }

  if (!mounted || !isVisible) return null

  if (showPreferences) {
    return (
      <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
        <div className="bg-card w-full max-w-lg rounded-3xl border border-primary/20 shadow-2xl p-6 md:p-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Cookie Preferences
          </h2>
          <p className="text-foreground/60 text-sm mb-6">
            Customize how we use cookies. We use cookies to improve your experience and for marketing purposes.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-background/50 border border-border/50">
              <div>
                <h3 className="font-semibold text-sm mb-1">Strictly Necessary</h3>
                <p className="text-xs text-foreground/50">
                  Required for the website to function properly. Cannot be disabled.
                </p>
              </div>
              <div className="relative inline-flex h-5 w-9 shrink-0 cursor-not-allowed items-center justify-center rounded-full bg-primary">
                <span className="translate-x-2 inline-block h-4 w-4 rounded-full bg-background transition-transform" />
              </div>
            </div>

            <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-background/50 border border-border/50">
              <div>
                <h3 className="font-semibold text-sm mb-1">Analytics</h3>
                <p className="text-xs text-foreground/50">
                  Helps us understand how visitors interact with the website.
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={preferences.analytics}
                onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors ${
                  preferences.analytics ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <span className={`${preferences.analytics ? 'translate-x-2' : '-translate-x-2'} inline-block h-4 w-4 rounded-full bg-background transition-transform`} />
              </button>
            </div>

            <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-background/50 border border-border/50">
              <div>
                <h3 className="font-semibold text-sm mb-1">Marketing</h3>
                <p className="text-xs text-foreground/50">
                  Used to deliver relevant advertisements to you across the internet.
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={preferences.marketing}
                onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors ${
                  preferences.marketing ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <span className={`${preferences.marketing ? 'translate-x-2' : '-translate-x-2'} inline-block h-4 w-4 rounded-full bg-background transition-transform`} />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSavePreferences}
              className="flex-1 py-3 px-4 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Save Preferences
            </button>
            <button
              onClick={() => setShowPreferences(false)}
              className="flex-1 py-3 px-4 bg-muted text-foreground rounded-full font-semibold text-sm hover:bg-muted/80 transition-colors"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-card/95 backdrop-blur-md border border-primary/20 shadow-2xl rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-lg font-serif font-bold text-foreground mb-2">
              We Value Your Privacy
            </h2>
            <p className="text-sm text-foreground/70 leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => setShowPreferences(true)}
              className="px-6 py-2.5 rounded-full border border-border/50 text-foreground text-sm font-medium hover:bg-muted transition-colors"
            >
              Preferences
            </button>
            <button
              onClick={handleRejectAll}
              className="px-6 py-2.5 rounded-full border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
