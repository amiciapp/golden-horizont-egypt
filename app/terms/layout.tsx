import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Golden Horizont Egypt. Read our booking terms, cancellation policy, and liability information.',
  alternates: {
    canonical: 'https://goldenhorizontegypt.com/en/terms',
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
