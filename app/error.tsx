"use client"

import { useEffect } from "react"
import Link from "next/link"
import { WHATSAPP_LINK } from "@/lib/constants"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[Error boundary]", error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-destructive/5 blur-3xl pointer-events-none" />

      <div className="relative text-center max-w-md">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>

        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
          <span className="text-primary text-xs uppercase tracking-[0.3em]">System Error</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
        </div>

        <h1 className="text-3xl font-serif font-bold text-foreground mb-3">Something Went Wrong</h1>
        <p className="text-foreground/60 mb-2 leading-relaxed">
          An unexpected error occurred. Our team has been notified.
        </p>
        {error.digest && (
          <p className="text-foreground/30 text-xs mb-8 font-mono">Error ID: {error.digest}</p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={reset}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold uppercase tracking-wider hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20 w-full sm:w-auto"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 border border-primary/40 text-primary rounded-full font-semibold uppercase tracking-wider hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
          >
            Go Home
          </Link>
        </div>

        <p className="text-foreground/40 text-sm">
          Need help?{" "}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Contact us on WhatsApp
          </a>
        </p>
      </div>
    </div>
  )
}
