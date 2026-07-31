import { headers } from "next/headers"
import type { Metadata } from "next"
import { getTranslations, type Language } from "@/lib/translations"
import { SITE_URL, LOCALES, localeUrl } from "@/lib/constants"
import AboutClient from "@/app/about/about-client"

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const lang = (headersList.get('x-next-locale') || 'en') as Language
  const t = getTranslations(lang)

  const title = t.nav.about
  const description = t.about.heroDescription

  const languages: Record<string, string> = {
    'x-default': `${SITE_URL}/about`,
  }
  for (const locale of LOCALES) {
    languages[locale] = localeUrl(locale, '/about')
  }

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/about`,
      languages,
    },
  }
}

export default async function AboutPage() {
  const headersList = await headers()
  const lang = (headersList.get('x-next-locale') || 'en') as Language
  const t = getTranslations(lang)

  return <AboutClient initialLang={lang} initialT={t} />
}
