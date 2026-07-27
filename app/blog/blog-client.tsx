"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, BookOpen, Search } from "lucide-react"
import { blogPosts } from "@/lib/blog"
import { type Language, type TranslationKeys } from "@/lib/translations"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Reveal from "@/components/reveal"
import { useState, useMemo } from "react"

interface BlogClientProps {
  initialLang: Language
  initialT: TranslationKeys
}

export default function BlogClient({ initialLang, initialT }: BlogClientProps) {
  const t = initialT
  const lang = initialLang
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = useMemo(() => {
    const cats = [...new Set(blogPosts.map((p) => p.category))]
    return ["All", ...cats]
  }, [])

  const filtered = useMemo(() => {
    if (activeCategory === "All") return blogPosts
    return blogPosts.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Header t={t} />

      {/* Hero */}
      <section className="relative pt-40 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
              <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Travel Guides
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gradient-gold mb-6 leading-tight">
              Egypt Travel Blog
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Insider guides, destination deep-dives, and expert tips from Golden Horizont Egypt —
              your local experts on the Red Sea, the Nile, and everything in between.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-card border border-border/50 text-foreground/60 hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-foreground/20 mx-auto mb-4" />
              <p className="text-foreground/40 text-lg">No posts in this category yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <Reveal key={post.slug} delay={i * 80}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block h-full rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 bg-card hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 flex flex-col"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title[lang] || post.title.en}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-lg font-serif font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title[lang] || post.title.en}
                      </h2>
                      <p className="text-foreground/60 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt[lang] || post.excerpt.en}
                      </p>
                      <div className="flex items-center justify-between text-xs text-foreground/40 pt-4 border-t border-border/30 mt-auto">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readingTime} min
                        </span>
                      </div>
                    </div>
                    {/* Hover indicator */}
                    <div className="h-0.5 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer t={t} />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
