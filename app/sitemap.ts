import { trips } from "@/lib/trips"
import { blogPosts } from "@/lib/blog"
import type { MetadataRoute } from "next"

const locales = ['en', 'ru', 'de', 'pl', 'uk', 'cs', 'fr', 'it', 'es', 'ar', 'tr', 'nl', 'zh', 'pt', 'sv', 'da', 'fi', 'no', 'hu', 'ro']
const baseUrl = "https://goldenhorizontegypt.com"

export default function sitemap(): MetadataRoute.Sitemap {
  // Main pages — one entry per locale
  const mainPages: MetadataRoute.Sitemap = locales.flatMap((locale) => [
    {
      url: locale === 'en' ? baseUrl : `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: locale === 'en' ? `${baseUrl}/about` : `${baseUrl}/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: locale === 'en' ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ])

  // Legal pages (English only is fine)
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ]

  // Trip pages — one entry per locale per trip, with images
  const tripPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    trips.map((trip) => ({
      url: locale === 'en'
        ? `${baseUrl}/trip/${trip.slug}`
        : `${baseUrl}/${locale}/trip/${trip.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
      images: trip.image.startsWith('http')
        ? [trip.image]
        : [`${baseUrl}${trip.image}`],
    }))
  )

  // Blog post pages
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...mainPages, ...legalPages, ...tripPages, ...blogPages]
}
