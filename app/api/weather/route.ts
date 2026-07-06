import { NextResponse } from "next/server"

// Cache weather data for 6 hours
let cachedWeather: { data: WeatherData; timestamp: number } | null = null
const CACHE_DURATION = 6 * 60 * 60 * 1000 // 6 hours in milliseconds

interface WeatherData {
  temp: number
  description: string
  icon: string
  humidity: number
  windSpeed: number
}

export async function GET() {
  const now = Date.now()
  
  // Return cached data if still valid
  if (cachedWeather && (now - cachedWeather.timestamp) < CACHE_DURATION) {
    return NextResponse.json(cachedWeather.data)
  }

  try {
    // Using Open-Meteo API (free, no API key required)
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=27.2579&longitude=33.8116&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Africa%2FCairo",
      { next: { revalidate: 21600 } } // Revalidate every 6 hours
    )

    if (!response.ok) {
      throw new Error("Weather API failed")
    }

    const data = await response.json()
    
    // Map weather codes to descriptions and icons
    const weatherCodeMap: Record<number, { description: string; icon: string }> = {
      0: { description: "Clear sky", icon: "01d" },
      1: { description: "Mainly clear", icon: "01d" },
      2: { description: "Partly cloudy", icon: "02d" },
      3: { description: "Overcast", icon: "03d" },
      45: { description: "Foggy", icon: "50d" },
      48: { description: "Depositing rime fog", icon: "50d" },
      51: { description: "Light drizzle", icon: "09d" },
      53: { description: "Moderate drizzle", icon: "09d" },
      55: { description: "Dense drizzle", icon: "09d" },
      61: { description: "Slight rain", icon: "10d" },
      63: { description: "Moderate rain", icon: "10d" },
      65: { description: "Heavy rain", icon: "10d" },
      80: { description: "Slight showers", icon: "09d" },
      81: { description: "Moderate showers", icon: "09d" },
      82: { description: "Violent showers", icon: "09d" },
    }

    const weatherCode = data.current.weather_code
    const weatherInfo = weatherCodeMap[weatherCode] || { description: "Clear", icon: "01d" }

    const weatherData: WeatherData = {
      temp: Math.round(data.current.temperature_2m),
      description: weatherInfo.description,
      icon: weatherInfo.icon,
      humidity: data.current.relative_humidity_2m,
      windSpeed: Math.round(data.current.wind_speed_10m),
    }

    // Update cache
    cachedWeather = { data: weatherData, timestamp: now }

    return NextResponse.json(weatherData)
  } catch (error) {
    console.error("Weather fetch error:", error)
    
    // Return fallback data for Hurghada (typical weather)
    const fallbackData: WeatherData = {
      temp: 28,
      description: "Sunny",
      icon: "01d",
      humidity: 45,
      windSpeed: 12,
    }
    
    return NextResponse.json(fallbackData)
  }
}
