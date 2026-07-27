import { headers } from "next/headers"
import { getTranslations, type Language } from "@/lib/translations"
import BlogClient from "@/app/blog/blog-client"

export default async function BlogPage() {
  const headersList = await headers()
  const lang = (headersList.get('x-next-locale') || 'en') as Language
  const t = getTranslations(lang)

  return <BlogClient initialLang={lang} initialT={t} />
}
