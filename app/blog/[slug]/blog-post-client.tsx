"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft, ArrowRight, BookOpen } from "lucide-react"
import { type BlogPost } from "@/lib/blog"
import { useTranslation } from "@/lib/use-translation"
import { type Language } from "@/lib/translations"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WHATSAPP_LINK } from "@/lib/constants"

interface Props {
  post: BlogPost | null
  related: BlogPost[]
}

export default function BlogPostClient({ post, related }: Props) {
  const { t, lang, mounted } = useTranslation()

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse-gold w-16 h-16 rounded-full border-2 border-primary" />
      </div>
    )
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
        <Header t={t} />
        <h1 className="text-4xl font-serif text-primary mt-32">Post Not Found</h1>
        <Link href="/blog" className="text-foreground/60 hover:text-primary transition-colors flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </main>
    )
  }

  const title = post.title[lang] ?? post.title.en
  const content = post.content[lang] ?? post.content.en

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Header t={t} />

      {/* Hero image */}
      <section className="relative h-[55vh] min-h-[400px] mt-0">
        <Image
          src={post.image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 lg:px-8 pb-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                {title}
              </h1>
              <div className="flex items-center gap-6 mt-4 text-sm text-foreground/50">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} min read
                </span>
                <span className="text-foreground/30">Golden Horizont Egypt</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_320px] gap-16 max-w-6xl mx-auto">
            {/* Main content */}
            <article>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors text-sm mb-8"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>

              {/* Prose article body — rendered from HTML string */}
              <div
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:font-serif prose-headings:text-foreground
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-primary/20 prose-h2:pb-3
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-primary/90
                  prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2
                  prose-p:text-foreground/70 prose-p:leading-relaxed
                  prose-li:text-foreground/70
                  prose-strong:text-foreground
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-table:w-full prose-thead:bg-primary/10 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-td:px-4 prose-td:py-2 prose-td:border-b prose-td:border-border/30
                  prose-ul:list-none prose-ul:pl-0"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {/* WhatsApp CTA at end of article */}
              <div className="mt-16 p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                  Ready to Experience Egypt?
                </h3>
                <p className="text-foreground/60 mb-6">
                  Book any of these experiences directly with Golden Horizont Egypt — instant WhatsApp confirmation, hotel pickup included.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Book via WhatsApp
                  </a>
                  <Link
                    href="/#trips"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-primary/40 text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors duration-300"
                  >
                    Browse All Tours <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8 lg:pt-12">
              {/* Related posts */}
              <div className="p-6 rounded-2xl border border-border/50 bg-card">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/60 mb-5">
                  More Guides
                </h3>
                <div className="space-y-5">
                  {related.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="flex gap-3 group"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={rp.image}
                          alt={rp.title.en}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                          {rp.title.en}
                        </p>
                        <p className="text-xs text-foreground/40 mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {rp.readingTime} min
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Book CTA sidebar card */}
              <div className="p-6 rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-transparent text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h4 className="font-serif font-bold text-foreground mb-2">Plan Your Trip</h4>
                <p className="text-foreground/60 text-sm mb-4">
                  Our experts respond within minutes on WhatsApp.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                >
                  Chat Now
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer t={t} />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
