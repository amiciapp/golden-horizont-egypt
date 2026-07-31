import { trips } from "@/lib/trips"
import type { Metadata } from "next"
import { headers } from "next/headers"
import { getTranslations, type Language } from "@/lib/translations"
import { WHATSAPP_NUMBER, SITE_URL, LOCALES, localeUrl } from "@/lib/constants"
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

  const canonicalUrl = localeUrl(lang, `/trip/${trip.slug}`)

  const languages: Record<string, string> = {
    'x-default': localeUrl('en', `/trip/${trip.slug}`),
  }
  for (const locale of LOCALES) {
    languages[locale] = localeUrl(locale, `/trip/${trip.slug}`)
  }

  return {
    title: name,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
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
      canonical: canonicalUrl,
      languages,
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

  const canonicalUrl = localeUrl(lang, `/trip/${trip.slug}`)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": canonicalUrl,
        name: name,
        description: description,
        image: trip.image,
        url: canonicalUrl,
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
          url: canonicalUrl,
          seller: {
            "@type": "TravelAgency",
            name: "Golden Horizont Egypt",
            url: "https://goldenhorizontegypt.com",
          },
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
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t.nav.home,
            item: `${SITE_URL}/${lang}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t.nav.trips,
            item: `${SITE_URL}/${lang}/#trips`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: name,
            item: canonicalUrl,
          },
        ],
      },
    ],
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
