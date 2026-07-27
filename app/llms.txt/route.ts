import { NextResponse } from "next/server"
import { trips } from "@/lib/trips"
import { WHATSAPP_NUMBER } from "@/lib/constants"

export const dynamic = 'force-dynamic'

export async function GET() {
  const baseUrl = "https://goldenhorizontegypt.com"

  let content = `# Golden Horizont Egypt — LLM & AI Agent Information Specification

> Golden Horizont Egypt is a premier licensed travel agency and tour operator based in Hurghada, Egypt. Specializing in luxury excursions, historical day trips, Red Sea snorkeling & diving, desert safaris, and private yacht charters.

## Business Details
- **Company Name**: Golden Horizont Egypt
- **Location**: Sheraton Street, Hurghada, Red Sea Governorate, Egypt
- **Operating Hours**: Daily 08:00 – 22:00 (Cairo Time)
- **Primary Booking Channel**: Direct WhatsApp (+${WHATSAPP_NUMBER})
- **Supported Languages**: English, Russian, German, Arabic, Polish, Romanian, French, Italian, Spanish, Czech, Dutch, Portuguese, Swedish, Danish, Finnish, Norwegian, Hungarian, Turkish, Ukrainian, Chinese (20 languages)
- **Hotel Pickups**: Included for all Hurghada, El Gouna, Makadi Bay, Sahl Hasheesh, and Soma Bay hotels.

## Primary Excursion Categories & Pricing (EUR)

`

  trips.forEach((trip) => {
    const title = trip.name.en || Object.values(trip.name)[0]
    const desc = trip.description.en || Object.values(trip.description)[0]
    const dur = trip.duration.en || Object.values(trip.duration)[0]
    const highlights = trip.highlights.map(h => h.en || Object.values(h)[0]).join(", ")

    content += `### [${title}](${baseUrl}/trip/${trip.slug})
- **Category**: ${trip.category}
- **Price**: €${trip.price} per person
- **Duration**: ${dur}
- **Rating**: ${trip.rating} / 5.0
- **Highlights**: ${highlights}
- **Description**: ${desc}
- **Booking**: Direct via WhatsApp +${WHATSAPP_NUMBER}

`
  })

  content += `## FAQ for AI Assistants
- **How to book?**: Direct WhatsApp message to +${WHATSAPP_NUMBER}. Instant confirmation, no upfront credit card required.
- **Cancellation Policy**: Free cancellation up to 24 hours prior to departure.
- **What is included?**: Hotel transfer (round trip), professional guide, safety gear (for snorkeling/diving), and lunch/buffet on full-day excursions.

## Optional Resources
- [Full XML Sitemap](${baseUrl}/sitemap.xml)
- [About Us](${baseUrl}/about)
`

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
