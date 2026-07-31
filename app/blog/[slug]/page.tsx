import { blogPosts, getRelatedPosts, getBlogPost } from "@/lib/blog"
import type { Metadata } from "next"
import { headers } from "next/headers"
import { SITE_URL, localeUrl } from "@/lib/constants"
import { type Language } from "@/lib/translations"
import BlogPostClient from "./blog-post-client"

const BLOG_LOCALES = ['en', 'ru', 'de', 'ar'] as const

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) return { title: "Post Not Found" }

  const headersList = await headers()
  const lang = (headersList.get('x-next-locale') || 'en') as Language

  const title = post.title[lang] || post.title.en
  const description = post.excerpt[lang] || post.excerpt.en

  const canonicalUrl = localeUrl(lang, `/blog/${slug}`)

  const languages: Record<string, string> = {
    'x-default': localeUrl('en', `/blog/${slug}`),
  }
  for (const locale of BLOG_LOCALES) {
    languages[locale] = localeUrl(locale, `/blog/${slug}`)
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      url: canonicalUrl,
      images: [{ url: post.image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.image],
    },
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  const related = getRelatedPosts(slug, 3)

  const headersList = await headers()
  const lang = (headersList.get('x-next-locale') || 'en') as Language

  const canonicalUrl = localeUrl(lang, `/blog/${slug}`)

  // Article JSON-LD for Google News / rich results
  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": canonicalUrl,
        headline: post.title[lang] || post.title.en,
        description: post.excerpt[lang] || post.excerpt.en,
        image: post.image,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: {
          "@type": "Organization",
          name: "Golden Horizont Egypt",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "Golden Horizont Egypt",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
      }
    : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogPostClient post={post ?? null} related={related} />
    </>
  )
}
