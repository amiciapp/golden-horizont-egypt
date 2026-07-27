import { headers } from "next/headers"
import { getTranslations, type Language } from "@/lib/translations"
import HomePage from "@/components/home-page"

export default async function Home() {
  const headersList = await headers()
  const locale = (headersList.get('x-next-locale') || 'en') as Language
  const t = getTranslations(locale)

  return (
    <main id="main-content" className="min-h-screen bg-transparent overflow-x-hidden">
      <HomePage initialLang={locale} initialT={t} />
    </main>
  )
}
