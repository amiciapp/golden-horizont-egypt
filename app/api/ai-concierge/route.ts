import { NextResponse } from "next/server"
import {
  searchTrips,
  getPopularTrips,
  getCheapestTrips,
  findTripsByCategory,
  formatTripCard,
  salesResponse,
  searchBlogs,
  train,
  getLastTrained,
} from "@/lib/concierge-knowledge"
import { WHATSAPP_LINK } from "@/lib/constants"
import { conciergeTranslations, ConciergeLang } from "@/lib/concierge-translations"

function s(lang: ConciergeLang, key: string): string {
  const ct = conciergeTranslations[lang]?.suggestions || conciergeTranslations.en.suggestions
  return (ct as any)[key] || key
}

function t(lang: ConciergeLang, key: string, ...args: string[]): string {
  const ct = conciergeTranslations[lang] || conciergeTranslations.en
  const keys = key.split(".")
  let val: any = ct
  for (const k of keys) {
    val = val?.[k]
  }
  if (typeof val === "string" && args.length > 0) {
    let i = 0
    return val.replace(/\{}/g, () => args[i++] || "")
  }
  return typeof val === "string" ? val : ""
}

function findAnswer(query: string, lang: ConciergeLang): string | null {
  const q = query.toLowerCase()
  const ct = conciergeTranslations[lang] || conciergeTranslations.en
  const map: Record<string, string> = {
    cancel: ct.faq.cancel,
    pickup: ct.faq.pickup,
    meal: ct.faq.meal,
    language: ct.faq.language,
    payment: ct.faq.payment,
    duration: ct.faq.duration,
    family: ct.faq.family,
    "best time": ct.faq.bestTime,
    solo: ct.faq.solo,
    private: ct.faq.private,
  }
  for (const [key, answer] of Object.entries(map)) {
    if (q.includes(key)) return answer
  }
  return null
}

function detectIntent(message: string): {
  type: "greeting" | "faq" | "trip_detail" | "category_search" | "price_search" | "general_search" | "blog_search" | "booking" | "thank_you" | "goodbye" | "unclear"
  query: string
} {
  const msg = message.toLowerCase().trim()

  if (/^(hi|hello|hey|good morning|good evening|assalam|morning|evening|howdy)\b/.test(msg)) {
    return { type: "greeting", query: msg }
  }

  if (/^(thanks|thank you|thx|perfect|awesome|great|amazing)\b/.test(msg)) {
    return { type: "thank_you", query: msg }
  }

  if (/^(bye|goodbye|see you|talk later|thanks.*bye)\b/.test(msg)) {
    return { type: "goodbye", query: msg }
  }

  if (/book|reserve|booking|how.*book|i want.*book|make.*reservation|check.*availab/.test(msg)) {
    return { type: "booking", query: msg }
  }

  if (/cancel|pickup|meal|lunch|food|language|guide.*speak|payment|pay|duration|how long|family|child|kid|best time|solo|single|private|exclusive/.test(msg)) {
    return { type: "faq", query: msg }
  }

  const priceMatch = msg.match(/(\d+)\s*€?euro?|€\s*(\d+)|cheap|cheapest|expensive|under\s*(\d+)|budget|price/)
  if (priceMatch || /\bhow much\b/.test(msg) || /\bcost\b/.test(msg)) {
    return { type: "price_search", query: msg }
  }

  const categoryMatch = msg.match(
    /(cairo|luxor|aswan|marsa alam|sea adventure|desert safari|entertainment)/i
  )
  if (categoryMatch && !msg.includes("tell me about")) {
    return { type: "category_search", query: categoryMatch[0] }
  }

  const detailMatch = msg.match(/tell me about|about\s+(the\s+)?["']?([a-z\s]+?)["']?$|details?\s+(on|about|for)|more\s+about/i)
  if (detailMatch) {
    return { type: "trip_detail", query: msg }
  }

  if (
    /recommend|popular|best|top|favorite|must.do|highly.rated|what.*do|what.*see|activity|things.*do|suggest/i.test(msg)
  ) {
    return { type: "general_search", query: msg }
  }

  if (msg.length > 10) {
    return { type: "general_search", query: msg }
  }

  return { type: "unclear", query: msg }
}

function handleGreeting(lang: ConciergeLang) {
  const text = t(lang, "greeting")
  return salesResponse(text, [s(lang, "showPopular"), s(lang, "whatCanIDo"), s(lang, "needHelp"), s(lang, "howToBook")])
}

function handleThankYou(lang: ConciergeLang) {
  return salesResponse(t(lang, "thankYou"), [s(lang, "showPopular"), s(lang, "readyToBook"), s(lang, "tellMeRedSea")])
}

function handleGoodbye(lang: ConciergeLang) {
  return {
    text: t(lang, "goodbye") + "\n\n" + t(lang, "whatsappCta") + "\n" + WHATSAPP_LINK,
    suggestions: [s(lang, "showPopular"), s(lang, "openWhatsApp"), s(lang, "backToMenu")],
  }
}

function handleBooking(lang: ConciergeLang) {
  return salesResponse(t(lang, "booking"), [s(lang, "showPopular"), s(lang, "seaAdventures"), s(lang, "cairoTrips"), s(lang, "desertSafaris")])
}

function handleFAQ(query: string, lang: ConciergeLang) {
  const answer = findAnswer(query, lang)
  const heading = answer || t(lang, "faq.cancel").split(". ")[0] + "!"

  const tips = [
    "✅ " + (lang === "en" ? "All tours include free hotel pickup & drop-off" : t(lang, "faq.pickup").split(".")[0] + "."),
    "✅ " + (lang === "en" ? "Best price guaranteed" : "Лучшая цена гарантирована"),
    "✅ " + (lang === "en" ? "Free cancellation up to 24 hours before" : t(lang, "faq.cancel").split(".")[0].toLowerCase() + "."),
  ]

  return salesResponse(
    `${heading}\n\n${t(lang, "whatsappCta")}`,
    [s(lang, "showPopular"), s(lang, "whatsIncluded"), s(lang, "exploreCairo")]
  )
}

function handleCategorySearch(category: string, lang: ConciergeLang) {
  const catName = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
  const results = findTripsByCategory(catName)

  if (results.length === 0) {
    return salesResponse(
      `I couldn't find that exact category — but we have 31 amazing tours across 7 wonderful categories.\n\n` +
        `Let me tell you what we have:\n` +
        `Cairo — Pyramids, Sphinx, museums\n` +
        `Luxor — Valley of the Kings, temples\n` +
        `Aswan — Nile felucca, Nubian culture\n` +
        `Marsa Alam — Dolphins, turtles, dugongs\n` +
        `Sea Adventures — Snorkeling, islands, submarines\n` +
        `Desert Safari — Quad bikes, Bedouin dinners\n` +
        `Entertainment — City tours, aquarium, shows\n\n` +
        t(lang, "whatsappCta"),
      ["Cairo tours", "Sea Adventures", "Desert Safari", "Show popular tours"]
    )
  }

  const text = `${catName} — wonderful choice! We have ${results.length} lovely tours in this category:\n\n${results
    .slice(0, 5)
    .map((t) => `${t.name} — €${t.price} pp — ${t.duration}`)
    .join("\n")}\n\n${results.length > 5 ? `...and ${results.length - 5} more!` : ""}\n\n${t(lang, "whatsappCta")}`

  const suggestions = results.slice(0, 3).map((t) => `Tell me about ${t.name}`)
  suggestions.push("Show all categories")

  return salesResponse(text, suggestions)
}

function handlePriceSearch(query: string, lang: ConciergeLang) {
  const q = query.toLowerCase()

  const priceMatch = q.match(/under\s*(\d+)|(\d+)\s*€?euro?|€\s*(\d+)/)
  let budget: number | null = null
  if (priceMatch) {
    budget = parseInt(priceMatch[1] || priceMatch[2] || priceMatch[3])
  }

  if (budget) {
    const affordable = (getCheapestTrips(31) as any[])
      .filter((t: any) => t.price <= budget)
      .slice(0, 5)

    if (affordable.length === 0) {
      const cheapest = getCheapestTrips(3)
      return salesResponse(
        `Our most affordable tours start from just €${cheapest[0]?.price || 20}. I couldn't find anything under €${budget}, but here are our most budget-friendly options:\n\n` +
          cheapest.map((t: any) => `${t.name} — only €${t.price} pp`).join("\n") + "\n\n" + t(lang, "whatsappCta"),
        cheapest.map((t: any) => `Tell me about ${t.name}`)
      )
    }

    return salesResponse(
      `Here are our lovely tours under €${budget}:\n\n` +
        affordable
          .map(
            (t: any) =>
              `${t.name} — €${t.price} pp — ${t.duration}\n   ⭐ ${t.rating}/5 — ${t.category}`
          )
          .join("\n\n") + "\n\n" + t(lang, "whatsappCta"),
      affordable.slice(0, 3).map((t: any) => `Tell me about ${t.name}`)
    )
  }

  if (/cheap|cheapest|budget|affordable|low.?price/i.test(q)) {
    const cheapest = getCheapestTrips(5)
    return salesResponse(
      `Looking for something budget-friendly? Our most affordable tours start from just €${cheapest[cheapest.length - 1]?.price || 20}:\n\n` +
        cheapest
          .map(
            (t: any) =>
              `${t.name} — €${t.price} pp — ${t.duration}\n   ⭐ ${t.rating}/5`
          )
          .join("\n\n") + "\n\n" + t(lang, "whatsappCta"),
      cheapest.slice(0, 3).map((t: any) => `Tell me about ${t.name}`)
    )
  }

  if (/expensive|premium|luxury|best|luxurious/i.test(q)) {
    const sorted = [...getPopularTrips(31) as any[]].sort(
      (a: any, b: any) => b.price - a.price
    )
    const premium = sorted.slice(0, 3)
    return salesResponse(
      `Here are our most luxurious premium experiences:\n\n` +
        premium
          .map(
            (t: any) =>
              `${t.name} — €${t.price} pp — ${t.duration}\n   ⭐ ${t.rating}/5 — ${t.category}`
          )
          .join("\n\n") + "\n\n" + t(lang, "whatsappCta"),
      premium.map((t: any) => `Tell me about ${t.name}`)
    )
  }

  const prices = getCheapestTrips(31) as any[]
  const min = Math.min(...prices.map((t: any) => t.price))
  const max = Math.max(...prices.map((t: any) => t.price))
  return salesResponse(
    `Our tours range from just €${min} to €${max} per person.\n\n` +
      `Budget-friendly: Quick experiences from €${min}\n` +
      `Full-day adventures: €40–€100\n` +
      `Multi-day packages: From €100 to €${max}\n\n` +
      t(lang, "whatsappCta"),
    ["Show cheapest tours", "Show premium tours", "Sea adventures under €50"]
  )
}

function handleTripDetail(query: string, lang: ConciergeLang) {
  const q = query.toLowerCase()

  const tripNames = (getPopularTrips(31) as any[]).map((t: any) => t.name.toLowerCase())

  let matchedTrip: any = null
  for (const name of tripNames) {
    if (q.includes(name) || name.includes(q.replace(/tell me about|about|more about|details?\s*(on|about|for)/g, "").trim())) {
      matchedTrip = (getPopularTrips(31) as any[]).find((t: any) => t.name.toLowerCase() === name)
      break
    }
  }

  if (!matchedTrip) {
    const results = searchTrips(q.replace(/tell me about|about|more about|details?\s*(on|about|for)/g, "").trim(), 1)
    matchedTrip = results[0]?.trip
  }

  if (matchedTrip) {
    const text =
      `${matchedTrip.name}\n\n` +
      `${matchedTrip.description}\n\n` +
      `€${matchedTrip.price} per person\n` +
      `${matchedTrip.duration}\n` +
      `⭐ ${matchedTrip.rating}/5\n` +
      `${matchedTrip.category}\n\n` +
      `Highlights:\n${matchedTrip.highlights.map((h: string) => `   ${h}`).join("\n")}\n\n` +
      `What's included:\n${matchedTrip.included.map((i: string) => `   ${i}`).join("\n")}\n\n` +
      t(lang, "whatsappCta")

    return salesResponse(text, [
      `Book ${matchedTrip.name}`,
      "Show more tours like this",
      "Do you offer pickup?",
    ])
  }

  return null
}

function handleGeneralSearch(query: string, lang: ConciergeLang) {
  const q = query.toLowerCase()

  if (/recommend|popular|best|top|favorite|must.do/i.test(q)) {
    const popular = getPopularTrips(5)
    return salesResponse(
      `Here are our absolute favorites — the tours our guests rave about!\n\n` +
        popular
          .map(
            (t, i) =>
              `${i + 1}. ${t.name}\n` +
              `   €${t.price} pp | ${t.duration} | ⭐ ${t.rating}/5\n` +
              `   ${t.category}`
          )
          .join("\n\n") + "\n\n" + t(lang, "whatsappCta"),
      popular.slice(0, 3).map((t) => `Tell me about ${t.name}`)
    )
  }

  if (/hurghada|what to do|things to do|activities/i.test(q)) {
    const blog = searchBlogs("hurghada", 1)
    const trips = findTripsByCategory("Sea Adventures").slice(0, 3)
    const desert = findTripsByCategory("Desert Safari").slice(0, 2)

    return salesResponse(
      `Hurghada is absolutely magical! Let me tell you all about it!\n\n` +
        `Red Sea Adventures:\n${trips
          .map((t) => `   ${t.name} — €${t.price} (${t.duration})`)
          .join("\n")}\n\n` +
        `Desert Delights:\n${desert
          .map((t) => `   ${t.name} — €${t.price} (${t.duration})`)
          .join("\n")}\n\n` +
        `Day Trips: Fancy seeing the Pyramids? Or exploring Luxor's temples? We do all of that from Hurghada too!\n\n` +
        (blog.length > 0
          ? `I wrote a little guide about this: "${blog[0].title}"\n\n`
          : "") + t(lang, "whatsappCta"),
      [...trips.slice(0, 2).map((t) => `Tell me about ${t.name}`), "Cairo day trip", "Desert safari"]
    )
  }

  if (/cairo|pyramid|giza|sphinx/i.test(q)) {
    const cairoTrips = findTripsByCategory("Cairo").slice(0, 3)
    return salesResponse(
      `The Pyramids! What a dream!\n\n` +
        `Here are our Cairo tours from Hurghada:\n\n` +
        cairoTrips
          .map(
            (t, i) =>
              `${i + 1}. ${t.name}\n   €${t.price} pp | ${t.duration} | ⭐ ${t.rating}/5`
          )
          .join("\n\n") + "\n\n" + t(lang, "whatsappCta"),
      cairoTrips.slice(0, 3).map((t) => `Tell me about ${t.name}`)
    )
  }

  if (/luxor|valley.*king|karnak/i.test(q)) {
    const luxorTrips = findTripsByCategory("Luxor").slice(0, 3)
    return salesResponse(
      `Luxor — the history, the beauty!\n\n` +
        `They call it the world's greatest open-air museum. Here are our Luxor tours:\n\n` +
        luxorTrips
          .map(
            (t, i) =>
              `${i + 1}. ${t.name}\n   €${t.price} pp | ${t.duration} | ⭐ ${t.rating}/5`
          )
          .join("\n\n") + "\n\n" + t(lang, "whatsappCta"),
      luxorTrips.slice(0, 3).map((t) => `Tell me about ${t.name}`)
    )
  }

  if (/sea|snorkel|beach|dolphin|submarine|boat|island|swim|red sea/i.test(q)) {
    const seaTrips = findTripsByCategory("Sea Adventures").slice(0, 4)
    return salesResponse(
      `The Red Sea! The water is so clear and turquoise. Here are our sea adventures:\n\n` +
        seaTrips
          .map(
            (t, i) =>
              `${i + 1}. ${t.name}\n   €${t.price} pp | ${t.duration} | ⭐ ${t.rating}/5`
          )
          .join("\n\n") + "\n\n" + t(lang, "whatsappCta"),
      seaTrips.slice(0, 3).map((t) => `Tell me about ${t.name}`)
    )
  }

  if (/desert|safari|quad|buggy|sandboard|camel|bedouin/i.test(q)) {
    const desertTrips = findTripsByCategory("Desert Safari").slice(0, 4)
    return salesResponse(
      `The desert at sunset is pure magic!\n\n` +
        `Here are our desert adventures:\n\n` +
        desertTrips
          .map(
            (t, i) =>
              `${i + 1}. ${t.name}\n   €${t.price} pp | ${t.duration} | ⭐ ${t.rating}/5`
          )
          .join("\n\n") + "\n\n" + t(lang, "whatsappCta"),
      desertTrips.slice(0, 3).map((t) => `Tell me about ${t.name}`)
    )
  }

  if (/aswan|nile|nubian|philae/i.test(q)) {
    const aswanTrips = findTripsByCategory("Aswan").slice(0, 3)
    return salesResponse(
      `Aswan — the soul of Egypt!\n\n` +
        `Escape to the magical south, where the Nile flows gently:\n\n` +
        aswanTrips
          .map(
            (t, i) =>
              `${i + 1}. ${t.name}\n   €${t.price} pp | ${t.duration} | ⭐ ${t.rating}/5`
          )
          .join("\n\n") + "\n\n" + t(lang, "whatsappCta"),
      aswanTrips.slice(0, 3).map((t) => `Tell me about ${t.name}`)
    )
  }

  if (/marsa alam|abu dabbab|dugong|dolphin house|elphinstone/i.test(q)) {
    const marsaTrips = findTripsByCategory("Marsa Alam").slice(0, 3)
    return salesResponse(
      `Marsa Alam is my little secret paradise! It's Egypt's last unspoiled coast:\n\n` +
        marsaTrips
          .map(
            (t, i) =>
              `${i + 1}. ${t.name}\n   €${t.price} pp | ${t.duration} | ⭐ ${t.rating}/5`
          )
          .join("\n\n") + "\n\n" + t(lang, "whatsappCta"),
      marsaTrips.slice(0, 3).map((t) => `Tell me about ${t.name}`)
    )
  }

  const results = searchTrips(q, 4)
  if (results.length > 0) {
    return salesResponse(
      `Here's what I found for you!\n\n` +
        results
          .map(
            (r, i) =>
              `${i + 1}. ${r.trip.name}\n   €${r.trip.price} pp | ${r.trip.duration} | ⭐ ${r.trip.rating}/5`
          )
          .join("\n\n") + "\n\n" + t(lang, "whatsappCta"),
      results.slice(0, 3).map((r) => `Tell me about ${r.trip.name}`)
    )
  }

  return null
}

function generateResponse(message: string, lang: ConciergeLang) {
  const intent = detectIntent(message)

  switch (intent.type) {
    case "greeting":
      return handleGreeting(lang)
    case "thank_you":
      return handleThankYou(lang)
    case "goodbye":
      return handleGoodbye(lang)
    case "booking":
      return handleBooking(lang)
    case "faq":
      return handleFAQ(intent.query, lang)
    case "category_search":
      return handleCategorySearch(intent.query, lang)
    case "price_search":
      return handlePriceSearch(intent.query, lang)
    case "trip_detail": {
      const detail = handleTripDetail(intent.query, lang)
      if (detail) return detail
      const results = searchTrips(intent.query, 1)
      if (results.length > 0) {
        return handleTripDetail(`Tell me about ${results[0].trip.name}`, lang)
      }
      break
    }
    case "general_search": {
      const result = handleGeneralSearch(intent.query, lang)
      if (result) return result
      break
    }
  }

  const popular = getPopularTrips(3)
  return salesResponse(
    `I want to make sure I help you perfectly!\n\n` +
      `Here's a little taste of what we offer:\n\n` +
      `Our most loved tours:\n` +
      popular
        .map((t, i) => `${i + 1}. ${t.name} — €${t.price}`)
        .join("\n") +
      `\n\nOr you can:\n` +
      `Browse by category — Cairo, Luxor, Aswan, Sea Adventures, Desert Safari\n` +
      `Ask me about prices, booking, pickup — anything at all!\n` +
      t(lang, "whatsappCta"),
    [s(lang, "showPopular"), "Sea Adventures", "Cairo trips", s(lang, "howToBook")]
  )
}

export async function POST(request: Request) {
  const { message, lang } = await request.json()
  const language: ConciergeLang = (lang && conciergeTranslations[lang as ConciergeLang] ? lang : "en") as ConciergeLang

  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "Message is required" }, { status: 400 })
  }

  const response = generateResponse(message.slice(0, 500), language)
  return NextResponse.json(response)
}
