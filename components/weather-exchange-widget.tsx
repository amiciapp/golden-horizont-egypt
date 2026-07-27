"use client";

import { useEffect, useState, useCallback } from "react";
import { Cloud, Sun, Wind, Droplets, RefreshCw, TrendingUp, Euro, Moon, CloudMoon, CloudSun } from "lucide-react";
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

function isDaytime(): boolean {
  const now = new Date();
  const cairoHour = parseInt(
    new Intl.DateTimeFormat("en-EG", {
      hour: "numeric",
      hour12: false,
      timeZone: "Africa/Cairo",
    }).format(now)
  );
  return cairoHour >= 6 && cairoHour < 19;
}

export default function WeatherExchangeWidget({ t }: WeatherExchangeWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [exchange, setExchange] = useState<ExchangeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [daytime, setDaytime] = useState(true);

  const fetchWithTimeout = async (resource: string, options = {}) => {
    const { timeout = 5000 } = options as any;
    
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    
    return response;
  };

  const fetchWeather = useCallback(async () => {
    try {
      const response = await fetchWithTimeout(
        "https://api.open-meteo.com/v1/forecast?latitude=27.2579&longitude=33.8116&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=Africa%2FCairo",
        { timeout: 5000 }
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
        82: "Violent rain showers",
      };

      const code = data.current.weather_code;
      let icon = "sun";
      if (code >= 45) icon = "cloud";
      else if (code >= 2) icon = "partly";

      setWeather({
        temp: Math.round(data.current.temperature_2m),
        feelsLike: Math.round(data.current.apparent_temperature),
        humidity: data.current.relative_humidity_2m,
        windSpeed: Math.round(data.current.wind_speed_10m),
        description: weatherCodes[code] || "Clear",
        icon,
      });
    } catch (err) {
      console.error("Failed to fetch weather:", err);
      setWeather({
        temp: 28,
        feelsLike: 30,
        humidity: 45,
        windSpeed: 15,
        description: "Sunny",
        icon: "sun",
      });
    }
  }, []);

  const fetchExchange = useCallback(async () => {
    try {
      const response = await fetchWithTimeout(
        "https://api.exchangerate-api.com/v4/latest/EUR",
        { timeout: 5000 }
      );
      const data = await response.json();

      setExchange({
        rate: data.rates.EGP || 32.50,
        lastUpdated: new Date().toLocaleTimeString(),
      });
    } catch (err) {
      console.error("Failed to fetch exchange rate:", err);
      setExchange({
        rate: 32.50,
        lastUpdated: new Date().toLocaleTimeString(),
      });
    }
  }, []);

  const refreshData = useCallback(async (silent = false) => {
    if (!silent) setIsLoading(true);
    setDaytime(isDaytime());
    await Promise.all([fetchWeather(), fetchExchange()]);
    setIsLoading(false);
  }, [fetchWeather, fetchExchange]);

  useEffect(() => {
    refreshData();
    const interval = setInterval(() => refreshData(true), 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [refreshData]);

  const renderWeatherIcon = () => {
    if (isLoading) {
      return <RefreshCw className="w-10 h-10 text-primary animate-spin" />;
    }

    const isDay = daytime;
    const iconClass = "w-10 h-10";

    if (weather?.icon === "cloud") {
      return (
        <div className="relative">
          <Cloud className={cn(iconClass, "text-secondary/80 animate-cloud-drift")} />
        </div>
      );
    }

    if (weather?.icon === "partly") {
      return isDay ? (
        <div className="relative">
          <CloudSun className={cn(iconClass, "text-primary animate-float")} />
        </div>
      ) : (
        <div className="relative">
          <CloudMoon className={cn(iconClass, "text-secondary/80 animate-float")} />
        </div>
      );
    }

    if (isDay) {
      return (
        <div className="relative">
          <Sun className={cn(iconClass, "text-primary animate-sun-spin")} />
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-sun-pulse" />
        </div>
      );
    }

    return (
      <div className="relative">
        <Moon className={cn(iconClass, "text-primary animate-moon-glow")} />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary/40 rounded-full animate-twinkle" />
      </div>
    );
  };

  return (
    <section className="pt-28 pb-12 bg-card border-y border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Weather Widget */}
          <Reveal
            delay={0}
            className="flex items-center gap-6 p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift min-w-[300px]"
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                {renderWeatherIcon()}
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                {weather?.temp ?? "--"}
              </div>
            </div>

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
          <Reveal
            delay={200}
            className="flex items-center gap-6 p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift min-w-[300px]"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              {isLoading ? (
                <RefreshCw className="w-10 h-10 text-primary animate-spin" />
              ) : (
                <Euro className="w-10 h-10 text-primary" />
              )}
            </div>

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

              <div className="flex items-center gap-2 mt-3 text-xs text-foreground/50">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span>Updated: {exchange?.lastUpdated ?? "--:--"}</span>
              </div>
            </div>
          </Reveal>

          {/* Refresh Button */}
          <button
            onClick={() => refreshData()}
            disabled={isLoading}
            className={cn(
              "p-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300",
              isLoading && "opacity-50 cursor-not-allowed"
            )}
            aria-label="Refresh data"
          >
            <RefreshCw
              className={cn("w-5 h-5", isLoading && "animate-spin")}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
