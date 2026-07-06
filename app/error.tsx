"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-serif text-primary mb-4">Something went wrong</h1>
        <p className="text-foreground/60 mb-8">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 bg-primary text-primary-foreground rounded-full uppercase tracking-wider text-sm hover:bg-primary/90 transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}