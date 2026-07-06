"use client";

import { useEffect, useState, useCallback } from "react";
import { Cloud, Sun, Wind, Droplets, RefreshCw, TrendingUp, Euro } from "lucide-react";
import { type TranslationKeys } from "@/lib/translations";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

interface WeatherExchangeWidgetProps {
  t: TranslationKeys;
}

interface WeatherData {
  temp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
}

interface ExchangeData {
  rate: number;
  lastUpdated: string;
}

// Cache duration: 30 minutes in milliseconds
const CACHE_DURATION = 30 * 60 * 1000;

export default function WeatherExchangeWidget({ t }: WeatherExchangeWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [exchange, setExchange] = useState<ExchangeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const fetchWeather = useCallback(async () => {
    try {
      // Using Open-Meteo API (free, no API key required)
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=27.2579&longitude=33.8116&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=Africa%2FCairo"
      );
      const data = await response.json();
      
      const weatherCodes: Record<number, string> = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Foggy",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers"
      };

      setWeather({
        temp: Math.round(data.current.temperature_2m),
        feelsLike: Math.round(data.current.apparent_temperature),
        humidity: data.current.relative_humidity_2m,
        windSpeed: Math.round(data.current.wind_speed_10m),
        description: weatherCodes[data.current.weather_code] || "Clear",
        icon: data.current.weather_code <= 3 ? "sun" : "cloud"
      });
    } catch {
      // Fallback data for Hurghada (typical weather)
      setWeather({
        temp: 28,
        feelsLike: 30,
        humidity: 45,
        windSpeed: 15,
        description: "Sunny",
        icon: "sun"
      });
    }
  }, []);

  const fetchExchange = useCallback(async () => {
    try {
      // Using a free exchange rate API
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/EUR"
      );
      const data = await response.json();
      
      setExchange({
        rate: data.rates.EGP || 32.50,
        lastUpdated: new Date().toLocaleTimeString()
      });
    } catch {
      // Fallback rate
      setExchange({
        rate: 32.50,
        lastUpdated: new Date().toLocaleTimeString()
      });
    }
  }, []);

  const refreshData = useCallback(async (silent = false) => {
    if (!silent) setIsLoading(true);
    await Promise.all([fetchWeather(), fetchExchange()]);
    setLastRefresh(new Date());
    setIsLoading(false);
    
    const now = Date.now();
    try {
      localStorage.setItem("golden_horizont_egypt_data_timestamp", now.toString());
    } catch {}
  }, [fetchWeather, fetchExchange]);

  useEffect(() => {
    const init = async () => {
      try {
        const cachedTimestamp = localStorage.getItem("golden_horizont_egypt_data_timestamp");
        const now = Date.now();
        if (!cachedTimestamp || now - parseInt(cachedTimestamp) > CACHE_DURATION) {
          await refreshData();
        } else {
          setIsLoading(false);
        }
      } catch {
        await refreshData();
      }
    };

    init();

    const interval = setInterval(() => refreshData(true), CACHE_DURATION);
    return () => clearInterval(interval);
  }, [refreshData]);

  return (
    <section className="pt-28 pb-12 bg-card border-y border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Weather Widget */}
          <Reveal delay={0} className="flex items-center gap-6 p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift min-w-[300px]">
            {/* Icon */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                {isLoading ? (
                  <RefreshCw className="w-10 h-10 text-primary animate-spin" />
                ) : weather?.icon === "sun" ? (
                  <Sun className="w-10 h-10 text-primary" />
                ) : (
                  <Cloud className="w-10 h-10 text-secondary" />
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                {weather?.temp ?? "--"}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="text-sm text-foreground/60 uppercase tracking-wider mb-1">
                {t.weather.title}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-serif font-bold text-gradient-gold">
                  {weather?.temp ?? "--"}°C
                </span>
              </div>
              <p className="text-foreground/60 text-sm mt-1">
                {weather?.description || "Loading..."}
              </p>
              
              {/* Additional Info */}
              <div className="flex items-center gap-4 mt-3 text-xs text-foreground/50">
                <div className="flex items-center gap-1">
                  <Droplets className="w-3 h-3" />
                  <span>{weather?.humidity ?? "--"}%</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wind className="w-3 h-3" />
                  <span>{weather?.windSpeed ?? "--"} km/h</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Divider */}
          <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-border to-transparent" />

          {/* Exchange Widget */}
          <Reveal delay={200} className="flex items-center gap-6 p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift min-w-[300px]">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              {isLoading ? (
                <RefreshCw className="w-10 h-10 text-primary animate-spin" />
              ) : (
                <Euro className="w-10 h-10 text-primary" />
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="text-sm text-foreground/60 uppercase tracking-wider mb-1">
                {t.exchange.title}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-serif font-bold text-gradient-gold">
                  {exchange ? exchange.rate.toFixed(2) : "--"}
                </span>
                <span className="text-foreground/60 text-sm">EGP</span>
              </div>
              <p className="text-foreground/60 text-sm mt-1">
                {t.exchange.eurToEgp}
              </p>
              
              {/* Trend Indicator */}
              <div className="flex items-center gap-2 mt-3 text-xs text-foreground/50">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span>Updated: {exchange?.lastUpdated ?? "--:--"}</span>
              </div>
            </div>
          </Reveal>

          {/* Refresh Button */}
          <button
            onClick={refreshData}
            disabled={isLoading}
            className={cn(
              "p-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300",
              isLoading && "opacity-50 cursor-not-allowed"
            )}
            aria-label="Refresh data"
          >
            <RefreshCw className={cn("w-5 h-5", isLoading && "animate-spin")} />
          </button>
        </div>

        {/* Last Refresh Note */}
        {lastRefresh && (
          <p className="text-center text-xs text-foreground/40 mt-4">
            Data refreshes automatically every 30 minutes
          </p>
        )}
      </div>
    </section>
  );
}
