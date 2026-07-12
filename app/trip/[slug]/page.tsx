import { trips } from "@/lib/trips"
import type { Metadata } from "next"
import TripPageClient from "./trip-client"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const trip = trips.find(t => t.slug === slug)

  if (!trip) {
    return { title: "Trip Not Found" }
  }

  const title = `${trip.name.en} | Golden Horizont Egypt`
  const description = trip.description.en

  return {
    title: trip.name.en,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: trip.image, width: 1200, height: 630, alt: trip.name.en }],
    },
    twitter: {
      title,
      description,
      images: [trip.image],
    },
    alternates: {
      canonical: `https://goldenhorizontegypt.com/trip/${trip.slug}`,
    },
  }
}

export default function TripPage() {
  return <TripPageClient />
}
