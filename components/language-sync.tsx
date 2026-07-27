"use client"

import { useEffect } from "react"
import { type Language } from "@/lib/translations"

const LANGUAGE_MAP: Record<Language, string> = {
  en: "en",
  ru: "ru",
  de: "de",
  pl: "pl",
  uk: "uk",
  cs: "cs",
  nl: "nl",
  it: "it",
  fr: "fr",
  es: "es",
  ar: "ar",
  zh: "zh",
  pt: "pt",
  sv: "sv",
  da: "da",
  fi: "fi",
  no: "no",
  hu: "hu",
  ro: "ro",
  tr: "tr",
}

const RTL_LANGUAGES = new Set(["ar"])

export function LanguageSync() {
  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null
    if (stored && LANGUAGE_MAP[stored]) {
      document.documentElement.lang = LANGUAGE_MAP[stored]
      document.documentElement.dir = RTL_LANGUAGES.has(stored) ? "rtl" : "ltr"
    }
  }, [])

  useEffect(() => {
    const handleLanguageChange = (e: CustomEvent<Language>) => {
      const lang = LANGUAGE_MAP[e.detail]
      if (lang) {
        document.documentElement.lang = lang
        document.documentElement.dir = RTL_LANGUAGES.has(e.detail) ? "rtl" : "ltr"
      }
    }

    window.addEventListener("languageChange" as string, handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener("languageChange" as string, handleLanguageChange as EventListener)
    }
  }, [])

  return null
}
