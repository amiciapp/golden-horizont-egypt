import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Golden Horizont Egypt — your premier travel partner for extraordinary experiences across Egypt since 2015. 31+ curated trips, 5000+ happy guests.',
  openGraph: {
    title: 'About Golden Horizont Egypt',
    description: 'Golden Horizont Egypt is a premier travel agency in Hurghada offering 31+ unique tours across Egypt since 2015.',
    url: 'https://goldenhorizontegypt.com/en/about',
  },
  alternates: {
    canonical: 'https://goldenhorizontegypt.com/en/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
