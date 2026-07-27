# Brand Guidelines v1.0

> Golden Horizont Egypt — Premium Egypt Tourism
> Last updated: July 14, 2026
> Status: Active

## Quick Reference

| Element | Value |
|---------|-------|
| Primary Color | Golden Amber `#C9922E` |
| Secondary Color | Deep Teal `#1A2E3B` |
| Primary Font | Playfair Display (serif) |
| Secondary Font | Inter (sans-serif) |
| Voice | Warm, Luxurious, Authentic |
| Website | goldenhorizontegypt.com |

---

## 1. Color Palette

### Primary Colors

| Name | Hex | RGB | HSL | Usage |
|------|-----|-----|-----|-------|
| Golden Amber | #C9922E | rgb(201,146,46) | hsl(38,64%,48%) | CTAs, headings, accents, logo |
| Deep Gold | #A67B1F | rgb(166,123,31) | hsl(38,69%,39%) | Hover states, emphasis |
| Light Gold | #E8B84A | rgb(232,184,74) | hsl(38,79%,60%) | Highlights, badges, stars |

### Secondary Colors

| Name | Hex | RGB | HSL | Usage |
|------|-----|-----|-----|-------|
| Deep Teal | #1A2E3B | rgb(26,46,59) | hsl(200,39%,17%) | Headers, dark sections |
| Ocean Blue | #2A5F7A | rgb(42,95,122) | hsl(200,49%,32%) | Links, secondary CTAs |
| Sandy Beige | #F5E6C8 | rgb(245,230,200) | hsl(38,70%,87%) | Backgrounds, cards |

### Neutral Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Rich Black | #141414 | rgb(20,20,20) | Page background (dark mode) |
| Dark Gray | #1F1F1F | rgb(31,31,31) | Card backgrounds |
| Medium Gray | #3A3A3A | rgb(58,58,58) | Borders, dividers |
| Muted Gray | #7A7A7A | rgb(122,122,122) | Secondary text |
| Light Gray | #E8E8E8 | rgb(232,232,232) | Subtle backgrounds |
| Off White | #F2F0ED | rgb(242,240,237) | Light backgrounds |
| Pure White | #FFFFFF | rgb(255,255,255) | Text on dark, cards |

### Semantic Colors

| State | Hex | Usage |
|-------|-----|-------|
| Success | #2ECC71 | Confirmations, available dates |
| Warning | #F39C12 | Limited availability |
| Error | #E74C3C | Errors, sold out |
| Info | #3498DB | Informational messages |

### Color Accessibility

- White text on Deep Teal: **12.5:1** contrast ratio (AAA)
- Golden Amber on Rich Black: **6.8:1** contrast ratio (AA)
- White text on Golden Amber: **3.2:1** — use Deep Gold for better contrast
- All interactive elements meet WCAG 2.1 AA standards

---

## 2. Typography

### Font Stack

```css
--font-heading: 'Playfair Display', 'Georgia', 'Times New Roman', serif;
--font-body: 'Inter', system-ui, -apple-system, sans-serif;
--font-accent: 'Playfair Display', serif;
```

### Font Personality

| Font | Role | Character |
|------|------|-----------|
| Playfair Display | Headlines, hero text, quotes | Elegant, luxurious, classic |
| Inter | Body text, UI elements, captions | Clean, modern, highly readable |

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Font | Weight | Line Height |
|---------|----------------|---------------|------|--------|-------------|
| Hero H1 | 64px | 36px | Playfair | 700 | 1.1 |
| Section H2 | 48px | 32px | Playfair | 700 | 1.15 |
| Section H3 | 36px | 28px | Playfair | 600 | 1.2 |
| Card Title | 24px | 20px | Playfair | 600 | 1.3 |
| Body Large | 18px | 16px | Inter | 400 | 1.6 |
| Body | 16px | 16px | Inter | 400 | 1.5 |
| Small | 14px | 14px | Inter | 400 | 1.5 |
| Caption | 12px | 12px | Inter | 400 | 1.4 |
| Label | 12px | 12px | Inter | 600 | 1.3 |

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 3. Logo Usage

### Brand Name Treatment

- **Primary:** "Golden Horizont Egypt" in Playfair Display
- **Tagline:** "Premium Egypt Tourism" in Inter (optional)
- **Short form:** "GHE" (internal use only)

### Logo Variants

| Variant | Use Case |
|---------|----------|
| Full name + icon | Website header, business cards |
| Name only | Footer, documents |
| Icon only | Favicon, social media profile |

### Clear Space

Minimum clear space = height of the capital "G" in the logo

### Minimum Size

| Context | Minimum Width |
|---------|---------------|
| Digital - Full Logo | 140px |
| Digital - Icon | 28px |
| Print - Full Logo | 40mm |
| Print - Icon | 12mm |

### Don'ts

- Don't rotate or skew the logo
- Don't use colors outside the approved palette
- Don't add shadows, gradients, or effects
- Don't crop or modify proportions
- Don't place on busy backgrounds without contrast overlay
- Don't use the logo as a pattern or texture

---

## 4. Voice & Tone

### Brand Personality

| Trait | Description |
|-------|-------------|
| **Warm** | Welcoming, friendly, like a trusted local friend |
| **Luxurious** | Premium feel without being pretentious |
| **Authentic** | Real Egypt, real experiences, real people |
| **Knowledgeable** | Expert guidance, insider tips |
| **Inviting** | Encourages exploration, inspires adventure |

### Voice Chart

| Trait | We Are | We Are Not |
|-------|--------|------------|
| Warm | Friendly, personal, hospitable | Overly casual, unprofessional |
| Luxurious | Premium, refined, quality-focused | Pretentious, exclusionary |
| Authentic | Real, genuine, trustworthy | Generic, touristy, fake |
| Knowledgeable | Expert, insightful, helpful | Condescending, technical |
| Inviting | Encouraging, inspiring, open | Pushy, salesy, desperate |

### Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| Hero section | Inspiring, aspirational | "Discover the Egypt you've always dreamed of" |
| Trip descriptions | Detailed, exciting, vivid | "Sail the Nile at sunset as ancient temples glide by" |
| Reviews | Trustworthy, social proof | "Join 2,000+ travelers who explored with us" |
| Contact | Helpful, responsive | "Ready to plan your adventure? We're here to help" |
| Error messages | Calm, solution-focused | "Something went wrong. Let's get you back on track" |
| WhatsApp | Quick, friendly, actionable | "Hi! Interested in our Red Sea diving trip?" |

### Prohibited Terms

| Avoid | Reason | Use Instead |
|-------|--------|-------------|
| Once in a lifetime | Cliché | "Unforgettable" |
| Hidden gem | Overused | "Local favorite" |
| Paradise | Generic | "Pristine", "stunning" |
| Best price guarantee | Empty claim | "Competitive pricing" |
| Seamless | Jargon | "Smooth", "easy" |
| Bucket list | Cliché | "Must-see", "iconic" |

### Writing Rules

1. **Lead with benefits, not features** — "Swim with dolphins" not "Dolphin encounter trip available"
2. **Use vivid sensory language** — "Feel the warm desert breeze" not "Experience the desert"
3. **Keep it concise** — Short sentences, punchy headlines
4. **Use active voice** — "We guide you" not "You will be guided"
5. **Include CTAs** — Every section should inspire action

---

## 5. Imagery Guidelines

### Photography Style

- **Lighting:** Golden hour preferred (sunrise/sunset), natural warm tones
- **Subjects:** Real travelers, authentic moments, local culture
- **Color treatment:** Warm, golden tones; rich blues for sea/sky
- **Composition:** Clean, focused subjects with negative space
- **Mood:** Inviting, adventurous, serene

### Photo Categories

| Category | Style | Usage |
|----------|-------|-------|
| Landmarks | Grand, majestic, iconic | Hero sections, trip headers |
| Underwater | Vibrant, clear, colorful | Red Sea trips, diving |
| Desert | Warm, vast, dramatic | Safari, camel rides |
| Culture | Authentic, intimate, real | Local experiences, food |
| Lifestyle | Candid, joyful, relaxed | Travel moments, groups |

### Photo Don'ts

- Don't use overly saturated or HDR-processed images
- Don't use stock photos with visible watermarks
- Don't use images with text overlays (except for promotional banners)
- Don't use low-resolution or blurry images
- Don't use images that feel staged or artificial

### Illustrations

- Style: Modern, clean, minimal
- Colors: Brand palette only
- Line weight: 2px consistent stroke
- Corners: 4px rounded
- Usage: Icons, infographics, decorative elements only

### Icons

- Style: Outlined, 24px base grid
- Stroke: 1.5px consistent
- Corner radius: 2px
- Fill: None (outline only)
- Source: Lucide Icons (consistent with UI)

---

## 6. Design Components

### Buttons

| Type | Background | Text | Border | Radius | Usage |
|------|------------|------|--------|--------|-------|
| Primary | Golden Amber | Rich Black | none | 8px | Main CTAs |
| Secondary | Transparent | Golden Amber | 1px Golden Amber | 8px | Secondary actions |
| Ghost | Transparent | White | none | 8px | Navigation, links |
| WhatsApp | #25D366 | White | none | 8px | WhatsApp contact |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight spacing, icon gaps |
| sm | 8px | Compact elements |
| md | 16px | Standard spacing |
| lg | 24px | Section spacing |
| xl | 32px | Large gaps |
| 2xl | 48px | Section dividers |
| 3xl | 64px | Hero sections |

### Border Radius

| Element | Radius |
|---------|--------|
| Buttons | 8px |
| Cards | 12px |
| Images | 8px |
| Modals | 16px |
| Pills/Tags | 9999px |

### Shadows

```css
/* Subtle elevation */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

/* Card hover */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

/* Modal */
box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
```

---

## 7. Website Design System

### Dark Mode (Default)

| Element | Color |
|---------|-------|
| Background | Rich Black #141414 |
| Card Background | Dark Gray #1F1F1F |
| Text Primary | Pure White #FFFFFF |
| Text Secondary | Muted Gray #7A7A7A |
| Accent | Golden Amber #C9922E |
| Border | Medium Gray #3A3A3A |

### Layout Patterns

- **Max content width:** 1200px
- **Section padding:** 96px vertical (desktop), 64px (mobile)
- **Card padding:** 24px
- **Grid:** 4 columns (desktop), 2 columns (tablet), 1 column (mobile)

### Animation Style

- **Duration:** 300ms standard, 500ms complex
- **Easing:** ease-out for entrances, ease-in for exits
- **Scroll reveals:** Fade up with slight scale
- **Hover effects:** Subtle lift (translateY(-4px)) + shadow increase
- **Reduced motion:** All animations respect `prefers-reduced-motion`

---

## 8. Messaging Framework

### Mission Statement

Golden Horizont Egypt delivers authentic, premium Egyptian travel experiences that connect travelers with the real Egypt — its ancient wonders, vibrant culture, and breathtaking natural beauty.

### Vision Statement

To be the most trusted and loved Egypt tourism brand, known for creating unforgettable memories through authentic experiences and exceptional service.

### Value Proposition

For travelers who want more than just a vacation, Golden Horizont Egypt is a premium tourism operator that delivers authentic, curated Egyptian experiences. Unlike mass-market tour companies, we combine local expertise with personalized service to create journeys that feel both magical and real.

### Positioning Statement

Golden Horizont Egypt is the premium Egypt tourism brand for discerning travelers who want authentic experiences because we combine deep local knowledge with world-class service.

### Key Messages

| Message | Audience Need | Proof Point |
|---------|---------------|-------------|
| Authentic Egypt | Avoid tourist traps | Local guides, hidden spots, real culture |
| Premium Experience | Quality matters | 5-star partners, personalized itineraries |
| Expert Knowledge | Trust & confidence | 10+ years, 2,000+ happy travelers |
| Seamless Journey | Stress-free travel | WhatsApp support, all-inclusive options |
| Real Connections | Meaningful travel | Meet locals, cultural immersion |

### Elevator Pitches

**10-second:**
"Golden Horizont Egypt — premium, authentic Egyptian travel experiences."

**30-second:**
"Golden Horizont Egypt curates authentic, premium travel experiences across Egypt. From the Pyramids to the Red Sea, we combine local expertise with personalized service to create unforgettable journeys."

**60-second:**
"Golden Horizont Egypt is a premium tourism operator specializing in authentic Egyptian experiences. We offer curated trips across Egypt — from Cairo's pyramids to Hurghada's coral reefs, from Luxor's temples to the Sahara's stars. What sets us apart? Deep local knowledge, personalized service, and a commitment to real experiences over tourist traps. With 2,000+ happy travelers and 4.9-star ratings, we're the trusted choice for travelers who want more than just a vacation."

---

## 9. Social Media Guidelines

### Platform Presence

| Platform | Tone | Content Focus |
|----------|------|---------------|
| Instagram | Visual, inspiring | Stunning photos, reels, stories |
| Facebook | Community, engaging | Reviews, updates, offers |
| WhatsApp | Quick, helpful | Direct bookings, support |
| Website | Professional, comprehensive | Full info, booking flow |

### Hashtag Strategy

**Primary:**
- #GoldenHorizontEgypt
- #ExploreEgypt
- #EgyptTravel

**Secondary:**
- #RedSeaDiving
- #PyramidsOfGiza
- #NileRiver
- #Hurghada
- #LuxorTemple

### Content Pillars

1. **Stunning Visuals** — Photos and videos of Egypt's beauty
2. **Travel Tips** — Insider knowledge and practical advice
3. **Cultural Stories** — History, traditions, local life
4. **Guest Experiences** — Reviews, testimonials, user-generated content
5. **Behind the Scenes** — Team, guides, local partners

---

## 10. Brand Application

### Business Cards

- **Front:** Logo + name + title
- **Back:** Contact info + tagline
- **Paper:** 350gsm matte with spot UV on logo

### Email Signatures

```
Best regards,
[Name]
[Title] | Golden Horizont Egypt
[Phone] | [Email]
goldenhorizontegypt.com
```

### WhatsApp Business

- **Profile photo:** Logo icon
- **Business name:** Golden Horizont Egypt
- **About:** "Premium Egypt Tourism | Pyramids | Red Sea | Nile"
- **Response time:** Within 1 hour during business hours

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | July 14, 2026 | Initial brand guidelines |
