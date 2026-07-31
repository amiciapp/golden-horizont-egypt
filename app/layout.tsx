import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieConsent } from '@/components/cookie-consent'
import { LanguageSync } from '@/components/language-sync'
import { AIConcierge } from '@/components/ai-concierge'
import { MouseEffects } from '@/components/mouse-effects'
import { WHATSAPP_NUMBER } from '@/lib/constants'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

import { headers } from 'next/headers'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const lang = headersList.get('x-next-locale') || 'en';
  
  const siteUrl = 'https://goldenhorizontegypt.com';
  const urlWithLang = `${siteUrl}/${lang}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: 'Golden Horizont Egypt | Premium Egypt Tours & Excursions',
      template: '%s | Golden Horizont Egypt'
    },
    description: 'Discover the magic of Egypt with Golden Horizont Egypt. Premium tours to Cairo, Luxor, Aswan, and the Red Sea. Snorkeling, diving, desert safaris, historical tours, and exclusive excursions across Egypt. Book your adventure today!',
    authors: [{ name: 'Golden Horizont Egypt' }],
    creator: 'Golden Horizont Egypt',
    publisher: 'Golden Horizont Egypt',
    formatDetection: {
      telephone: true,
      email: true,
      address: true
    },
    openGraph: {
      type: 'website',
      locale: lang,
      alternateLocale: ['en_US', 'ru_RU', 'de_DE', 'pl_PL', 'ar_EG', 'fr_FR', 'es_ES', 'it_IT', 'zh_CN', 'tr_TR'],
      url: urlWithLang,
      siteName: 'Golden Horizont Egypt',
      title: 'Golden Horizont Egypt - Premium Egypt Tours & Adventures',
      description: 'Book unforgettable tours and excursions across Egypt. Cairo pyramids, Luxor temples, Red Sea snorkeling, desert safaris, and more. Best prices guaranteed!',
      images: [
        {
          url: `${siteUrl}/about-hero.webp`,
          width: 1200,
          height: 630,
          alt: 'Golden Horizont Egypt - Egypt Tours & Adventures'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Golden Horizont Egypt | Premium Egypt Tours',
      description: 'Discover the magic of Egypt. Book historical tours, Red Sea trips, desert safaris & more across Egypt!',
      images: [`${siteUrl}/about-hero.webp`]
    },
    alternates: {
      canonical: urlWithLang,
      languages: {
        'en': `${siteUrl}/en`,
        'ru': `${siteUrl}/ru`,
        'de': `${siteUrl}/de`,
        'pl': `${siteUrl}/pl`,
        'uk': `${siteUrl}/uk`,
        'cs': `${siteUrl}/cs`,
        'fr': `${siteUrl}/fr`,
        'it': `${siteUrl}/it`,
        'es': `${siteUrl}/es`,
        'ar': `${siteUrl}/ar`,
        'tr': `${siteUrl}/tr`,
        'nl': `${siteUrl}/nl`,
        'zh': `${siteUrl}/zh`,
        'pt': `${siteUrl}/pt`,
        'sv': `${siteUrl}/sv`,
        'da': `${siteUrl}/da`,
        'fi': `${siteUrl}/fi`,
        'no': `${siteUrl}/no`,
        'hu': `${siteUrl}/hu`,
        'ro': `${siteUrl}/ro`,
        'x-default': `${siteUrl}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    category: 'travel',
    icons: {
      icon: [
        { url: '/icon-dark-32x32.png', type: 'image/png' },
        { url: '/icon.svg', type: 'image/svg+xml' }
      ],
      apple: '/apple-icon.png'
    }
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ]
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelAgency',
      '@id': 'https://goldenhorizontegypt.com/#organization',
      name: 'Golden Horizont Egypt',
      description: 'Premium tours and excursions across Egypt. Historical tours to Cairo, Luxor, Aswan, and Red Sea adventures including snorkeling, diving, desert safaris, and more.',
      url: 'https://goldenhorizontegypt.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://goldenhorizontegypt.com/logo.png',
      },
      image: 'https://goldenhorizontegypt.com/logo.png',
      telephone: `+${WHATSAPP_NUMBER}`,
      email: 'info@goldenhorizontegypt.com',
      areaServed: [
        { '@type': 'City', name: 'Hurghada' },
        { '@type': 'City', name: 'Cairo' },
        { '@type': 'City', name: 'Luxor' },
        { '@type': 'City', name: 'Aswan' },
        { '@type': 'City', name: 'Marsa Alam' },
        { '@type': 'City', name: 'Sharm El Sheikh' },
        { '@type': 'City', name: 'Giza' },
        { '@type': 'Country', name: 'Egypt' }
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sheraton Street',
        addressLocality: 'Hurghada',
        addressRegion: 'Red Sea Governorate',
        postalCode: '84511',
        addressCountry: 'EG'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 27.216944,
        longitude: 33.838472
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '22:00'
      },
      sameAs: [
        'https://www.facebook.com/share/1CiQNoNdgf/?mibextid=wwXIfr',
        'https://www.instagram.com/gold.enhorizont',
        'https://www.tiktok.com/@goldenhorizontegypt8',
        'https://t.me/GoldenHorizontEgypt'
      ],
      priceRange: '€€',
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Cairo Pyramids Tours' } },
        { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Luxor Day Trips' } },
        { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Aswan Tours' } },
        { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Snorkeling Tours' } },
        { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Diving Excursions' } },
        { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Desert Safari' } },
        { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Boat Trips' } },
        { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Cultural Tours' } },
        { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Entertainment & Water Sports' } }
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://goldenhorizontegypt.com/#website',
      url: 'https://goldenhorizontegypt.com',
      name: 'Golden Horizont Egypt',
      description: 'Premium tours and excursions across Egypt. Book unforgettable experiences including Cairo pyramids, Luxor temples, Red Sea snorkeling, desert safaris, and more.',
      publisher: { '@id': 'https://goldenhorizontegypt.com/#organization' },
      inLanguage: ['en', 'ru', 'de', 'ar', 'ro', 'pl', 'fr', 'es', 'it', 'pt'],
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://goldenhorizontegypt.com/?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://goldenhorizontegypt.com/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://goldenhorizontegypt.com' },
        { '@type': 'ListItem', position: 2, name: 'Trips', item: 'https://goldenhorizontegypt.com/#trips' },
        { '@type': 'ListItem', position: 3, name: 'About', item: 'https://goldenhorizontegypt.com/en/about' }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://goldenhorizontegypt.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What types of tours does Golden Horizont Egypt offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Golden Horizont Egypt offers 31+ unique experiences including Red Sea snorkeling trips, scuba diving courses, desert safaris with quad bikes, historical tours to Cairo and Luxor, cultural excursions, boat trips to Giftun Island and Orange Bay, dolphin watching, parasailing, submarine adventures, and private yacht charters across Egypt.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can I book a tour with Golden Horizont Egypt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `You can book any tour directly through our website by browsing trips and clicking "Book via WhatsApp" or by sending a WhatsApp message to +${WHATSAPP_NUMBER}. Our team responds within minutes to confirm your booking.`
          }
        },
        {
          '@type': 'Question',
          name: 'Does Golden Horizont Egypt offer hotel pickup and drop-off?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, all our tours include complimentary hotel pickup and drop-off from Hurghada hotels. For tours to Cairo and Luxor, we arrange transportation from your hotel to the airport and provide guided services throughout.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the cancellation policy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `We offer free cancellation up to 24 hours before your scheduled tour. For last-minute cancellations, please contact us via WhatsApp at +${WHATSAPP_NUMBER} and we will do our best to accommodate changes.`
          }
        },
        {
          '@type': 'Question',
          name: 'Are meals included in the tours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most of our full-day tours include lunch, snacks, and beverages. Snorkeling and boat trips typically include an open buffet lunch on board or on the island. Desert safaris include a Bedouin dinner under the stars. Check individual trip descriptions for specific inclusions.'
          }
        },
        {
          '@type': 'Question',
          name: 'What languages do your tour guides speak?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our guides speak English, Russian, German, Arabic, and Romanian. When booking, let us know your preferred language and we will assign the appropriate guide.'
          }
        }
      ]
    }
  ]
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers();
  const lang = headersList.get('x-next-locale') || 'en';

  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Context Summary" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-transparent text-foreground relative`} suppressHydrationWarning>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        {/* Global Background Video */}
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/photo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/70" />
        </div>

        
        {children}
        <CookieConsent />
        <LanguageSync />
        <AIConcierge />
        <MouseEffects />
        <Analytics />
      </body>
    </html>
  )
}
