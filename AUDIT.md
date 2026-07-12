# Golden Horizont Egypt — Comprehensive Website Audit

**Date**: July 2026
**URL**: https://goldenhorizontegypt.com
**Stack**: Next.js 16.2.0, Tailwind CSS, Radix UI (shadcn), Lucide Icons
**Languages**: en, ru, de, ar, pl, uk, cs, nl, it, fr, es, zh, pt, sv, da, fi, no, hu, ro, tr (20 defined, 5 in switcher)

---

## Executive Summary

| Category | Score | Critical | Moderate | Low |
|----------|-------|----------|----------|-----|
| Code Quality | 5/10 | 7 | 6 | 4 |
| SEO | 6/10 | 4 | 5 | 3 |
| i18n | 4/10 | 6 | 4 | 2 |
| Performance | 3/10 | 6 | 4 | 1 |
| UX/Accessibility | 4/10 | 6 | 4 | 2 |
| Security | 6/10 | 2 | 4 | 3 |
| Data Integrity | 7/10 | 2 | 3 | 1 |
| Feature Completeness | 4/10 | 8 | 5 | 2 |
| **Overall** | **4.9/10** | **41** | **35** | **18** |

---

## 1. CODE QUALITY (5/10)

### Critical Issues

#### 1.1 TypeScript Errors Silently Suppressed
**File**: `next.config.mjs:3-5`
```js
typescript: { ignoreBuildErrors: true },
```
**Impact**: All type errors are hidden at build time. Real bugs ship to production undetected.
**Fix**: Remove `ignoreBuildErrors`, fix all TS errors.

#### 1.2 Video API Reads Entire File Into Memory
**File**: `app/api/video/route.ts:13`
```ts
const fileBuffer = fs.readFileSync(filePath);
```
**Impact**: Loads the entire MP4 (potentially 50-200MB) into a single Node.js buffer on every request. Will cause OOM crashes under load.
**Fix**: Stream the file using `fs.createReadStream` with proper Range header support.

#### 1.3 Hardcoded WhatsApp Number in 8+ Locations
The number `201220951483` appears in:
- `app/layout.tsx:114,215-216,231`
- `components/header.tsx:120,190`
- `components/hero-section.tsx:63`
- `components/footer.tsx:74,172`
- `components/whatsapp-button.tsx:11`
- `components/trips-section.tsx:17`
- `components/map-section.tsx:172`
- `app/trip/[slug]/trip-client.tsx:53`

**Fix**: Create `lib/constants.ts` with `WHATSAPP_NUMBER` and import everywhere.

#### 1.4 Duplicate Translation Hook Logic
**File**: `app/page.tsx:20-34` reimplements `useTranslation()` from `lib/translations.ts:1151-1168`.
Also duplicated in `app/about/page.tsx:60-69`.
**Fix**: Use `useTranslation()` from `lib/translations.ts` everywhere.

#### 1.5 Gallery API Non-Deterministic Shuffle
**File**: `app/api/gallery/route.ts:19`
```ts
.sort(() => 0.5 - Math.random())
```
**Impact**: Returns different results each call, uncacheable, poor UX.
**Fix**: Use seeded shuffle or return fixed order.

#### 1.6 Unused API Routes
- `app/api/weather/route.ts` — widget fetches directly from Open-Meteo
- `app/api/exchange/route.ts` — widget fetches from exchangerate-api.com
**Fix**: Remove unused routes or wire up the widget to use them.

#### 1.7 Unused React Imports in translations.ts
**File**: `lib/translations.ts:2`
```ts
import { useState, useEffect } from 'react'
```
Only used in the `useTranslation` hook at the bottom. Makes a library file depend on React.
**Fix**: Move `useTranslation` to a separate file like `lib/use-translation.ts`.

### Moderate Issues

| # | File | Line | Issue |
|---|------|------|-------|
| 1.8 | `hero-section.tsx` | 12 | `isLoaded` state initialized `true`, never toggled — dead code |
| 1.9 | `about/page.tsx` | 221,224 | Raw `<img>` instead of Next.js `<Image>` |
| 1.10 | `header.tsx` | 65 | Raw `<img>` for logo |
| 1.11 | `footer.tsx` | 104 | Raw `<img>` for logo |
| 1.12 | `trip-client.tsx` | 176-180 | Gallery hardcodes 5 Unsplash URLs, not real trip photos |
| 1.13 | `reviews-section.tsx` | 14-75 | All reviews hardcoded with Unsplash avatars |
| 1.14 | `trips-section.tsx` | 239-242 | Stats "5000+", "10+", "4.9" hardcoded |

### Low Issues

| # | File | Line | Issue |
|---|------|------|-------|
| 1.15 | `weather-exchange-widget.tsx` | 113 | Empty `catch {}` swallows localStorage errors |
| 1.16 | `weather-exchange-widget.tsx` | 39-41 | Client-side fetch bypasses own API route |
| 1.17 | `lib/utils.ts` | 1-6 | `cn()` utility — only used in `reveal.tsx` |
| 1.18 | `package.json` | 2 | Project name still `"my-project"` |

---

## 2. SEO (6/10)

### Good
- JSON-LD structured data: `TravelAgency`, `WebSite`, `BreadcrumbList`, `FAQPage` (`app/layout.tsx:100-253`)
- About page has `AboutPage` schema (`app/about/page.tsx:114-130`)
- Trip pages have dynamic `generateMetadata` with OG/Twitter tags (`app/trip/[slug]/page.tsx:5-33`)
- `sitemap.ts` generates sitemap for all 31 trips + main pages
- `robots.ts` allows search/AI bots, blocks training bots
- Open Graph `alternateLocale` for 9 languages

### Critical Issues

#### 2.1 `lang="en"` Hardcoded — Never Updates
**File**: `app/layout.tsx:261`
```tsx
<html lang="en" className="...">
```
This is always English regardless of the user's detected language. Devastating for Arabic SEO (Google expects `lang="ar"` for Arabic content).
**Fix**: Pass detected language to layout and set dynamically.

#### 2.2 All Pages Client-Side Rendered
**File**: `app/page.tsx:12-17`
```ts
const HeroSection = dynamic(() => import(...), { ssr: false })
// ... all 6 components
```
**Impact**: Homepage HTML is empty on initial load. Googlebot sees no content.
**Fix**: Enable SSR for all components, or at minimum for text-heavy ones.

#### 2.3 No Canonical URLs on Homepage/About
Only trip detail pages have `rel="canonical"`. Homepage and about page are missing canonical tags.
**Fix**: Add canonical to layout metadata.

#### 2.4 OG Image Uses Relative Path
**File**: `app/layout.tsx:52`
```ts
images: ['/logo.png']
```
Social platforms require absolute URLs. This will fail to render on Facebook/Twitter.
**Fix**: Use `https://goldenhorizontegypt.com/logo.png`.

### Moderate Issues

| # | File | Line | Issue |
|---|------|------|-------|
| 2.5 | `about/page.tsx` | 80-107 | All about page content hardcoded English — no translations |
| 2.6 | `map-section.tsx` | 37-54 | Contact info section fully English |
| 2.7 | `reviews-section.tsx` | 163 | "Testimonials" header not translated |
| 2.8 | `trips-section.tsx` | 81 | "Excursions" label not translated |
| 2.9 | `gallery-section.tsx` | 151 | "Gallery" header not translated |
| 2.10 | `trip-client.tsx` | 37,106,124-159 | Trip detail page strings not translated |
| 2.11 | `footer.tsx` | 27-33 | Trip names in footer hardcoded English |
| 2.12 | `footer.tsx` | 226-235 | Privacy Policy / Terms link to `/` |
| 2.13 | `about/page.tsx` | 94 | Stats "32" wrong — only 31 trips exist |
| 2.14 | `layout.tsx` | 207 | FAQ JSON-LD says "32+" — should be "31+" |
| 2.15 | `trips-section.tsx` | 84 | No `<h1>` on homepage — hero has it but headings hierarchy broken |

---

## 3. i18n (4/10)

### Translation Coverage

**Fully translated** (20 languages): nav, hero, trips, gallery, reviews, weather, exchange, footer, whatsapp

**NOT translated** (hardcoded English in components):

| Component | Lines | Text |
|-----------|-------|------|
| `about/page.tsx` | 80-84 | Values: "Premium Quality", "Safety First", etc. |
| `about/page.tsx` | 86-91 | Milestones: "Founded", "Expanded", etc. |
| `about/page.tsx` | 93-98 | Stats labels: "Unique Trips", etc. |
| `about/page.tsx` | 100-107 | Destinations: "Pyramids & History", etc. |
| `about/page.tsx` | 164-165 | "About Us" badge |
| `about/page.tsx` | 179 | Hero description paragraph |
| `about/page.tsx` | 203-215 | Story section paragraphs |
| `about/page.tsx` | 265-268 | "Milestones", "Our Journey" |
| `about/page.tsx` | 298-301 | "Why Choose Us", "Our Core Values" |
| `about/page.tsx` | 333-337 | "Explore All of Egypt" |
| `about/page.tsx` | 369-373 | CTA section |
| `trip-client.tsx` | 37 | "Trip Not Found" |
| `trip-client.tsx` | 106 | "Back to Trips" |
| `trip-client.tsx` | 124,130 | "Group Size", "Location" |
| `trip-client.tsx` | 136,144,159 | "About This Trip", "Highlights", "What's Included" |
| `trip-client.tsx` | 209 | "/ person" |
| `trip-client.tsx` | 219-228 | "Category", "Rating" |
| `trip-client.tsx` | 246 | "Instant confirmation via WhatsApp" |
| `map-section.tsx` | 37-54 | All contact details |
| `map-section.tsx` | 79,84,87 | "Find Us", "Our Location", address |
| `reviews-section.tsx` | 14-75 | All review text (names, comments, ratings) |
| `reviews-section.tsx` | 163 | "Testimonials" |
| `trips-section.tsx` | 81 | "Excursions" |
| `gallery-section.tsx` | 151 | "Gallery" |
| `footer.tsx` | 27-33 | Trip names |
| `footer.tsx` | 215-222 | Copyright, designer credit |

### Language Switcher Gap
- 20 languages defined in `translations.ts`
- Only 5 shown in header: EN, RU, DE, AR, RO
- 15 languages inaccessible

### Arabic (RTL) Support
- `globals.css:336-339` — RTL support for gradient text only
- `app/layout.tsx:261` — `lang="en"` hardcoded, never updates

---

## 4. PERFORMANCE (3/10)

### Critical Issues

#### 4.1 Background Video on Every Page
**File**: `app/layout.tsx:272-283`
```tsx
<video autoPlay muted loop playsInline className="fixed ...">
  <source src="/api/video" type="video/mp4" />
</video>
```
- Video loads on EVERY page (homepage, about, trip detail)
- API reads entire file into memory per request
- No preload hints, no lazy loading

#### 4.2 All Images Unoptimized
**File**: `next.config.mjs:7-8`
```js
images: { unoptimized: true }
```
No Next.js Image optimization. All images served at original size.

#### 4.3 External Images Not Configured
**File**: `next.config.mjs`
No `images.remotePatterns` for `images.unsplash.com` or `goldenhorizontegypt.com`. Next.js `<Image>` with external URLs fails in production.

#### 4.4 Entire Homepage Client-Side Rendered
**File**: `app/page.tsx:12-17`
All 6 components use `dynamic(..., { ssr: false })`. HTML is empty on initial load.

#### 4.5 60+ Unused UI Components
**Dir**: `components/ui/`
60+ shadcn/ui components installed (accordion, alert-dialog, calendar, carousel, chart, command, etc.) but only `button.tsx` is actually used.

#### 4.6 Large Unused Dependencies
**File**: `package.json`
`recharts`, `embla-carousel-react`, `react-day-picker`, `date-fns`, `input-otp`, `react-resizable-panels`, `vaul`, `sonner`, `cmdk`, `zod`, `react-hook-form`, `@hookform/resolvers` — none used.

### Moderate Issues

| # | File | Issue |
|---|------|-------|
| 4.7 | `app/layout.tsx:6-16` | Loads 2 Google Fonts (Playfair Display + Inter) |
| 4.8 | `gallery-section.tsx` | No lazy loading strategy for gallery images |
| 4.9 | `reviews-section.tsx:103-120` | Carousel auto-plays every 5s even when not visible |
| 4.10 | `weather-exchange-widget.tsx:116-135` | Polls every 30 min even if widget never scrolled to |

---

## 5. UX / ACCESSIBILITY (4/10)

### Critical Issues

#### 5.1 No Skip-to-Content Link
**File**: `app/layout.tsx`
Keyboard users must tab through entire header to reach content.

#### 5.2 Mobile Menu Not Accessible
**File**: `components/header.tsx:146-202`
- No focus trap when menu is open
- Escape key doesn't close menu
- No `aria-expanded` on toggle button (line 132)

#### 5.3 Gallery Lightbox Focus Not Managed
**File**: `components/gallery-section.tsx:191-267`
Focus stays outside lightbox when opened. Screen readers can't navigate it.

#### 5.4 No `prefers-reduced-motion` Support
**File**: `app/globals.css`
All animations run even for users with motion sensitivity. No media query check.

#### 5.5 No Error Boundary
**File**: `app/layout.tsx`
No `error.tsx` or `not-found.tsx`. Runtime errors crash entire page.

#### 5.6 `lang="en"` Never Updates
**File**: `app/layout.tsx:261`
Always English regardless of user's language setting.

### Moderate Issues

| # | File | Line | Issue |
|---|------|------|-------|
| 5.7 | `trip-client.tsx:102` | Uses `window.location.href` for "Back to Trips" — full reload |
| 5.8 | `header.tsx:27` | Navigation uses `window.location.href` — full reload |
| 5.9 | `whatsapp-button.tsx:20` | Fixed button overlaps content on mobile |
| 5.10 | `globals.css:19` | `--muted-foreground` contrast ~4.5:1 — borderline WCAG AA |

---

## 6. SECURITY (6/10)

| # | Severity | File | Issue |
|---|----------|------|-------|
| 6.1 | HIGH | `app/api/*/route.ts` | No rate limiting on any API route |
| 6.2 | MEDIUM | `app/api/video/route.ts:13` | `readFileSync` entire file — potential DoS |
| 6.3 | MEDIUM | `app/api/gallery/route.ts:13` | `fs.readdirSync` — directory listing if path is wrong |
| 6.4 | MEDIUM | `next.config.mjs` | No Content Security Policy headers |
| 6.5 | MEDIUM | `app/api/weather/route.ts` | No AbortController timeout on external fetch |
| 6.6 | LOW | `app/layout.tsx:52` | OG image relative path — social spoofing |
| 6.7 | LOW | 8+ files | WhatsApp number exposed client-side |
| 6.8 | LOW | API routes | No CORS configuration |

---

## 7. DATA INTEGRITY (7/10)

### Trip Count Mismatch
- **Actual trips in `trips.ts`**: **31** (IDs: 1,2,4,6,7,13,14,15,24,25,32,33,39,40,41,43,47,50,51,52,53,54,57,58,60,63,64,65,67,68,69)
- **Claimed in about page**: `about/page.tsx:94` — `value: "32"` → **WRONG**
- **Claimed in FAQ**: `layout.tsx:207` — "32+ unique experiences" → **WRONG**
- **Dynamic in trips section**: `trips-section.tsx:239` — `${trips.length}+` → "31+" ✓ correct

### Empty Category
- "Cultural Tours" defined in categories but **0 trips** have this category

### Duplicate Images
| Trip IDs | Shared Image |
|----------|-------------|
| 1, 53, 54 | `5339557389700904/...` (Aswan) |
| 4, 43 | `4949158956986758/...` (Cairo) |
| 6, 69 | `4949158956986758/...` (Cairo) |
| 39, 41 | `2739001077057199/...` (Marsa Alam) |
| 57, 58, 65 | `2753700365766598/...` (Dolphin) |

### Broken Links
- `footer.tsx:226-235` — Privacy Policy and Terms of Service both link to `/`

---

## 8. MISSING FEATURES (4/10)

### Critical for Tourism Business

| # | Feature | Impact |
|---|---------|--------|
| 8.1 | Online booking/reservation system | Only WhatsApp — no form, calendar, or payment |
| 8.2 | Payment processing | No Stripe, PayPal, or any payment integration |
| 8.3 | Contact form | Only WhatsApp — no traditional contact method |
| 8.4 | Cookie consent banner | No GDPR/EU compliance |
| 8.5 | Privacy Policy page | Link exists but page doesn't |
| 8.6 | Terms of Service page | Link exists but page doesn't |
| 8.7 | Real customer reviews | Hardcoded fake reviews with Unsplash avatars |
| 8.8 | Email newsletter signup | No email collection anywhere |

### Important for Engagement

| # | Feature | Impact |
|---|---------|--------|
| 8.9 | Blog / travel guides | No content marketing |
| 8.10 | Search by date/price | Category filter exists but no price range |
| 8.11 | Trip detail photo gallery | Only 5 Unsplash placeholders per trip |
| 8.12 | Breadcrumb navigation | JSON-LD exists but no visible breadcrumbs |
| 8.13 | Multi-currency display | Only EUR, no USD/GBP/RUB switcher |
| 8.14 | WhatsApp chat widget | Only link — no embedded widget |
| 8.15 | Structured data for trips | No `TouristTrip` schema on trip pages |
| 8.16 | Language-specific URLs | No `/ru/`, `/de/` route prefixes |
| 8.17 | Image sitemap | No image sitemap |
| 8.18 | FAQ page | Only in JSON-LD, not visible |
| 8.19 | Google Reviews widget | Just text badges, no embedded reviews |
| 8.20 | Social proof (live activity) | Hardcoded "5000+" |

### Nice to Have

| # | Feature | Impact |
|---|---------|--------|
| 8.21 | Gift cards / vouchers | Not available |
| 8.22 | Travel insurance option | Not mentioned |
| 8.23 | Weather forecast (multi-day) | Only current weather |
| 8.24 | Interactive trip map | Only Google Maps embed for office |
| 8.25 | Accessibility statement | Not present |
| 8.26 | OpenGraph video | Background video not in OG tags |
| 8.27 | Analytics beyond Vercel | No GA, GTM, or Facebook Pixel |
