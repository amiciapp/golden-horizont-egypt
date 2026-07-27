import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found | Golden Horizont Egypt",
  description: "The page you are looking for could not be found. Browse our Egypt tours or return to the homepage.",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="relative text-center max-w-lg mx-auto">
        <div className="mb-4">
          <span
            className="text-[140px] leading-none font-serif font-bold select-none block"
            style={{
              background: "linear-gradient(135deg, oklch(0.78 0.12 85), oklch(0.55 0.10 85))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Lost at Sea</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
        </div>

        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-foreground/60 mb-10 leading-relaxed">
          This page has drifted off into the Red Sea.<br />Let us guide you back to shore.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold uppercase tracking-wider hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Back to Homepage
          </Link>
          <Link
            href="/#trips"
            className="px-8 py-4 border border-primary/40 text-primary rounded-full font-semibold uppercase tracking-wider hover:bg-primary/10 transition-all duration-300"
          >
            Browse Tours
          </Link>
        </div>
      </div>
    </main>
  )
}
