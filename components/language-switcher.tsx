"use client"

import { useState, useRef, useEffect } from "react"
import { detectLanguage, type Language } from "@/lib/translations"
import { Globe } from "lucide-react"

const LANG_NAMES: Record<string, string> = {
  en: "English", ru: "Русский", de: "Deutsch", pl: "Polski",
  uk: "Українська", cs: "Čeština", nl: "Nederlands", it: "Italiano",
  fr: "Français", es: "Español", ar: "العربية", zh: "中文",
  pt: "Português", sv: "Svenska", da: "Dansk", fi: "Suomi",
  no: "Norsk", hu: "Magyar", ro: "Română", tr: "Türkçe",
}

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState<Language>("en")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCurrentLang(detectLanguage())
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const changeLanguage = (lang: Language) => {
    setCurrentLang(lang)
    setIsOpen(false)
    localStorage.setItem("language", lang)
    document.cookie = `language=${lang}; path=/; max-age=31536000; SameSite=Lax`
    window.dispatchEvent(new CustomEvent("languageChange", { detail: lang }))
    
    const pathname = window.location.pathname
    const pathParts = pathname.split('/').filter(Boolean)
    const locales = ["en","ru","de","pl","uk","cs","nl","it","fr","es","ar","zh","pt","sv","da","fi","no","hu","ro","tr"]
    
    let newPath = pathname
    if (pathParts.length > 0 && locales.includes(pathParts[0])) {
      pathParts[0] = lang
      newPath = '/' + pathParts.join('/')
    } else {
      newPath = `/${lang}${pathname === '/' ? '' : pathname}`
    }
    
    window.location.href = newPath + window.location.search + window.location.hash
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-border/40 text-foreground/70 hover:text-primary hover:border-primary/40 transition-all duration-300 text-xs"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{LANG_NAMES[currentLang] || currentLang}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 max-h-72 overflow-y-auto rounded-xl border border-border/50 bg-card/95 backdrop-blur-2xl shadow-2xl z-50 p-1.5">
          {(Object.entries(LANG_NAMES) as [Language, string][]).map(([lang, name]) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                lang === currentLang
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
