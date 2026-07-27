import { blogPosts, getRelatedPosts, getBlogPost } from "@/lib/blog"
import type { Metadata } from "next"
import BlogPostClient from "./blog-post-client"

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

  return {
    title: post.title.en,
    description: post.excerpt.en,
    openGraph: {
      title: post.title.en,
      description: post.excerpt.en,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title.en }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.en,
      description: post.excerpt.en,
      images: [post.image],
    },
    alternates: {
      canonical: `https://goldenhorizontegypt.com/blog/${slug}`,
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

  // Article JSON-LD for Google News / rich results
  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `https://goldenhorizontegypt.com/blog/${slug}`,
        headline: post.title.en,
        description: post.excerpt.en,
        image: post.image,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: {
          "@type": "Organization",
          name: "Golden Horizont Egypt",
          url: "https://goldenhorizontegypt.com",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://goldenhorizontegypt.com/#organization",
          name: "Golden Horizont Egypt",
          logo: {
            "@type": "ImageObject",
            url: "https://goldenhorizontegypt.com/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://goldenhorizontegypt.com/blog/${slug}`,
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
