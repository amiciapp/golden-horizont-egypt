import { trips } from "@/lib/trips"
import type { Metadata } from "next"
import { headers } from "next/headers"
import { getTranslations, type Language } from "@/lib/translations"
import { WHATSAPP_NUMBER, SITE_URL } from "@/lib/constants"
import TripPageClient from "./trip-client"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const trip = trips.find(t => t.slug === slug)

  if (!trip) {
    return { title: "Trip Not Found" }
  }

  const headersList = await headers()
  const lang = (headersList.get('x-next-locale') || 'en') as Language

  const name = trip.name[lang] || trip.name.en
  const description = trip.description[lang] || trip.description.en

  const title = `${name} | Golden Horizont Egypt`

  return {
    title: name,
    description,
    openGraph: {
      title,
      description,
      images: [{ 
        url: trip.image.startsWith('http') ? trip.image : `${SITE_URL}${trip.image}`,
        width: 1200, 
        height: 630, 
        alt: name 
      }],
    },
    twitter: {
      title,
      description,
      images: [trip.image.startsWith('http') ? trip.image : `${SITE_URL}${trip.image}`],
    },
    alternates: {
      canonical: `${SITE_URL}/trip/${trip.slug}`,
    },
  }
}

export default async function TripPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const trip = trips.find(t => t.slug === slug)

  if (!trip) {
    return <div>Trip not found</div>
  }

  const headersList = await headers()
  const lang = (headersList.get('x-next-locale') || 'en') as Language
  const t = getTranslations(lang)

  const name = trip.name[lang] || trip.name.en
  const description = trip.description[lang] || trip.description.en

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `https://goldenhorizontegypt.com/trip/${trip.slug}`,
    name: name,
    description: description,
    image: trip.image,
    url: `https://goldenhorizontegypt.com/trip/${trip.slug}`,
    touristType: [trip.category],
    itinerary: {
      "@type": "ItemList",
      itemListElement: trip.highlights.map((h, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: h[lang] || h.en,
      })),
    },
    offers: {
      "@type": "Offer",
      price: trip.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: `${new Date().getFullYear()}-01-01`,
      url: `https://goldenhorizontegypt.com/trip/${trip.slug}`,
      seller: {
        "@type": "TravelAgency",
        name: "Golden Horizont Egypt",
        url: "https://goldenhorizontegypt.com",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: trip.rating,
      bestRating: "5",
      worstRating: "1",
      reviewCount: "47",
    },
    provider: {
      "@type": "TravelAgency",
      "@id": `${SITE_URL}/#organization`,
      name: "Golden Horizont Egypt",
      url: SITE_URL,
      telephone: `+${WHATSAPP_NUMBER}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sheraton Street",
        addressLocality: "Hurghada",
        addressCountry: "EG",
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TripPageClient initialLang={lang} initialT={t} />
    </>
  )
}
