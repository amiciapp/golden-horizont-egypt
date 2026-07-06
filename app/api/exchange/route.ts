import { NextResponse } from "next/server"

// Cache exchange rate for 30 minutes
let cachedRate: { rate: number; timestamp: number } | null = null
const CACHE_DURATION = 30 * 60 * 1000 // 30 minutes in milliseconds

export async function GET() {
  const now = Date.now()
  
  // Return cached data if still valid
  if (cachedRate && (now - cachedRate.timestamp) < CACHE_DURATION) {
    return NextResponse.json({ 
      rate: cachedRate.rate,
      cached: true,
      lastUpdate: new Date(cachedRate.timestamp).toISOString()
    })
  }

  try {
    // Using exchangerate-api.com (free tier available)
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/EUR",
      { next: { revalidate: 1800 } } // Revalidate every 30 minutes
    )

    if (!response.ok) {
      throw new Error("Exchange rate API failed")
    }

    const data = await response.json()
    const egpRate = data.rates.EGP

    // Update cache
    cachedRate = { rate: egpRate, timestamp: now }

    return NextResponse.json({ 
      rate: egpRate,
      cached: false,
      lastUpdate: new Date().toISOString()
    })
  } catch (error) {
    console.error("Exchange rate fetch error:", error)
    
    // Return approximate rate as fallback (update this periodically)
    const fallbackRate = 32.50
    
    return NextResponse.json({ 
      rate: fallbackRate,
      cached: true,
      fallback: true,
      lastUpdate: new Date().toISOString()
    })
  }
}
