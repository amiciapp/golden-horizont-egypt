import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Golden Horizont Egypt. Learn how we collect, use, and protect your personal data.',
  alternates: {
    canonical: 'https://goldenhorizontegypt.com/en/privacy-policy',
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
