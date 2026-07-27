import { headers } from "next/headers"
import { getTranslations, type Language } from "@/lib/translations"
import AboutClient from "@/app/about/about-client"

export default async function AboutPage() {
  const headersList = await headers()
  const lang = (headersList.get('x-next-locale') || 'en') as Language
  const t = getTranslations(lang)

  return <AboutClient initialLang={lang} initialT={t} />
}
