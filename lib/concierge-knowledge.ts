import { trips, type Trip } from "./trips"
import { blogPosts, type BlogPost } from "./blog"
import { WHATSAPP_LINK } from "./constants"

export interface IndexedTrip {
  id: string
  slug: string
  name: string
  description: string
  duration: string
  price: number
  category: string
  popular: boolean
  rating: number
  image: string
  highlights: string[]
  included: string[]
}

export interface IndexedBlog {
  slug: string
  title: string
  excerpt: string
  category: string
}

interface SearchResult {
  trip: IndexedTrip
  score: number
}

let tripIndex: IndexedTrip[] = []
let blogIndex: IndexedBlog[] = []
let lastTrained = 0

const TRIP_KEYWORDS = new Map<string, string[]>()
const CATEGORY_TRIPS = new Map<string, IndexedTrip[]>()

function indexTrips(): IndexedTrip[] {
  return trips.map((t) => ({
    id: t.id,
    slug: t.slug,
    name: t.name.en,
    description: t.description.en,
    duration: t.duration.en,
    price: t.price,
    category: t.category,
    popular: t.popular,
    rating: t.rating,
    image: t.image,
    highlights: t.highlights.map((h) => h.en),
    included: t.included.map((i) => i.en),
  }))
}

function indexBlogs(): IndexedBlog[] {
  return blogPosts.map((b) => ({
    slug: b.slug,
    title: b.title.en,
    excerpt: b.excerpt.en,
    category: b.category,
  }))
}

function buildTripKeywords(trips: IndexedTrip[]) {
  TRIP_KEYWORDS.clear()
  CATEGORY_TRIPS.clear()

  for (const t of trips) {
    const words = new Set<string>()
    const add = (s: string) =>
      s
        .toLowerCase()
        .split(/[\s,.-]+/)
        .filter((w) => w.length > 2)
        .forEach((w) => words.add(w))
    add(t.name)
    add(t.description)
    add(t.category)
    t.highlights.forEach((h) => add(h))
    t.included.forEach((i) => add(i))
    TRIP_KEYWORDS.set(t.id, [...words])

    const cat = t.category
    if (!CATEGORY_TRIPS.has(cat)) CATEGORY_TRIPS.set(cat, [])
    CATEGORY_TRIPS.get(cat)!.push(t)
  }
}

export function train(): { tripsIndexed: number; blogsIndexed: number } {
  tripIndex = indexTrips()
  blogIndex = indexBlogs()
  buildTripKeywords(tripIndex)
  lastTrained = Date.now()
  return { tripsIndexed: tripIndex.length, blogsIndexed: blogIndex.length }
}

train()

export function getLastTrained(): number {
  return lastTrained
}

export function findTripBySlug(slug: string): IndexedTrip | undefined {
  return tripIndex.find((t) => t.slug === slug)
}

export function findTripsByCategory(category: string): IndexedTrip[] {
  const cat = category.toLowerCase()
  return tripIndex.filter(
    (t) =>
      t.category.toLowerCase() === cat ||
      t.category.toLowerCase().includes(cat) ||
      cat.includes(t.category.toLowerCase())
  )
}

export function getPopularTrips(limit = 3): IndexedTrip[] {
  return tripIndex.filter((t) => t.popular).slice(0, limit)
}

export function getCheapestTrips(limit = 3): IndexedTrip[] {
  return [...tripIndex].sort((a, b) => a.price - b.price).slice(0, limit)
}

export function searchTrips(query: string, limit = 4): SearchResult[] {
  const q = query.toLowerCase().trim()
  if (!q) return []

  const scored: SearchResult[] = []

  for (const t of tripIndex) {
    let score = 0
    const nameL = t.name.toLowerCase()
    const descL = t.description.toLowerCase()
    const catL = t.category.toLowerCase()

    if (nameL.includes(q)) score += 50
    if (nameL === q) score += 100
    if (q.split(" ").every((w) => w.length > 2 && nameL.includes(w))) score += 40

    if (descL.includes(q)) score += 20
    if (catL.includes(q)) score += 15

    const keywords = TRIP_KEYWORDS.get(t.id) || []
    for (const k of keywords) {
      if (q.includes(k) || k.includes(q)) score += 5
    }

    if (t.popular) score += 3
    scored.push({ trip: t, score })
  }

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

export function searchBlogs(query: string, limit = 2): IndexedBlog[] {
  const q = query.toLowerCase()
  return blogIndex
    .filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q)
    )
    .slice(0, limit)
}

export function formatTripCard(t: IndexedTrip): string {
  const highlights = t.highlights.slice(0, 3).join(", ")
  const included = t.included.slice(0, 3).join(", ")
  return (
    `🌟 ${t.name}\n` +
    `💰 €${t.price} pp | ⏱ ${t.duration} | ⭐ ${t.rating}/5\n` +
    `📂 ${t.category}\n` +
    `✨ Highlights: ${highlights}\n` +
    `✅ Includes: ${included}`
  )
}

const WHATSAPP_CTA = `\n\n📲 Ready to book, darling? Just tap here and I'll connect you with my team on WhatsApp — we'll confirm your spot in minutes! 💕 👉 ${WHATSAPP_LINK}`;

export function salesResponse(text: string, suggestions?: string[]): { text: string; suggestions: string[] } {
  return {
    text: text + WHATSAPP_CTA,
    suggestions: suggestions || ["Show popular tours", "What's the cheapest trip?", "Do you offer pickup?"],
  }
}

const CATEGORY_ALIASES: Record<string, string[]> = {
  cairo: ["cairo", "pyramid", "giza", "sphinx", "egyptian museum", "gem", "capital"],
  luxor: ["luxor", "valley of the kings", "karnak", "hatshepsut", "colossi", "west bank"],
  aswan: ["aswan", "philae", "nubian", "nile felucca", "high dam", "abul simple"],
  "marsa alam": ["marsa alam", "abu dabbab", "dugong", "dolphin house", "elphinstone"],
  "sea adventures": ["sea", "boat", "snorkel", "diving", "submarine", "beach", "island", "swim", "dolphin", "coral", "reef", "yacht", "cruise", "fishing", "parasailing", "banana"],
  "desert safari": ["desert", "safari", "quad", "buggy", "sandboard", "bedouin", "star", "sunset", "dune", "camel"],
  entertainment: ["entertainment", "show", "night", "aquarium", "museum", "city tour", "shopping", "spa", "hammam"],
}
