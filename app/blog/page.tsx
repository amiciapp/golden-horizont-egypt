import { headers } from "next/headers"
import type { Metadata } from "next"
import { getTranslations, type Language } from "@/lib/translations"
import { localeUrl } from "@/lib/constants"
import BlogClient from "@/app/blog/blog-client"

const BLOG_LOCALES = ['en', 'ru', 'de', 'ar'] as const

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const lang = (headersList.get('x-next-locale') || 'en') as Language
  const t = getTranslations(lang)

  const canonicalUrl = localeUrl(lang, '/blog')

  const languages: Record<string, string> = {
    'x-default': localeUrl('en', '/blog'),
  }
  for (const locale of BLOG_LOCALES) {
    languages[locale] = localeUrl(locale, '/blog')
  }

  return {
    title: t.nav.blog,
    description: `${t.nav.blog} - Golden Horizont Egypt`,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
  }
}

export default async function BlogPage() {
  const headersList = await headers()
  const lang = (headersList.get('x-next-locale') || 'en') as Language
  const t = getTranslations(lang)

  return <BlogClient initialLang={lang} initialT={t} />
}
