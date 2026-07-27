# Golden Horizont Egypt — Logo System

## Logo Variants

### 1. Primary Logo (Horizontal)
**File:** `logo.svg` (dark) / `logo-light.svg` (light)
**Usage:** Website header, business cards, letterheads, presentations

```
┌─────────────────────────────────────────────────┐
│  ☀️                                              │
│     /\    /\        GOLDEN HORIZONT             │
│    /  \  /  \  ———  EGYPT                       │
│   /____\/____\                                   │
└─────────────────────────────────────────────────┘
```

### 2. Icon Only
**File:** `logo-icon.svg`
**Usage:** Social media profiles, app icons, small spaces

```
┌─────────────┐
│      ☀️      │
│     /\  /\   │
│    /__\/__\  │
└─────────────┘
```

### 3. Favicon
**File:** `favicon.svg`
**Usage:** Browser tabs, bookmarks, saved to home screen

---

## Color Versions

| Version | Background | Sun | Pyramids | Text | Usage |
|---------|------------|-----|----------|------|-------|
| Dark | #141414 | Gold gradient | Gold | White | Default, dark backgrounds |
| Light | #F2F0ED | Gold gradient | Teal | Black | Light backgrounds, print |

---

## Minimum Sizes

| Variant | Minimum Width | Minimum Height |
|---------|---------------|----------------|
| Primary Logo | 140px | 40px |
| Icon | 28px | 28px |
| Favicon | 16px | 16px |

---

## Clear Space

Minimum clear space around the logo = height of the sun icon

```
┌──────────────────────────────────┐
│           ↕ Clear Space          │
│    ┌─────────────────────┐       │
│    │                     │ ←→    │
│    │    LOGO             │ Clear │
│    │                     │ Space │
│    └─────────────────────┘       │
│           ↕ Clear Space          │
└──────────────────────────────────┘
```

---

## Don'ts

- ❌ Don't rotate or skew the logo
- ❌ Don't change colors outside the approved palette
- ❌ Don't add shadows, gradients, or effects to the logo
- ❌ Don't crop or modify proportions
- ❌ Don't place on busy backgrounds without sufficient contrast
- ❌ Don't use the logo as a pattern or texture
- ❌ Don't animate the logo (except for loading states)

---

## File Locations

```
public/
├── logo.svg           # Primary logo (dark background)
├── logo-light.svg     # Primary logo (light background)
├── logo-icon.svg      # Icon only
└── favicon.svg        # Favicon
```

---

## Implementation

### HTML
```html
<!-- Dark background -->
<img src="/logo.svg" alt="Golden Horizont Egypt" width="140" height="40">

<!-- Light background -->
<img src="/logo-light.svg" alt="Golden Horizont Egypt" width="140" height="40">

<!-- Icon only -->
<img src="/logo-icon.svg" alt="GHE" width="28" height="28">
```

### Favicon
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

### Next.js Image Component
```jsx
import Image from 'next/image';

<Image
  src="/logo.svg"
  alt="Golden Horizont Egypt"
  width={140}
  height={40}
  priority
/>
```

---

## Brand Colors Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Golden Amber | #C9922E | Primary accent, sun, CTA |
| Deep Gold | #A67B1F | Pyramid shadows, hover |
| Light Gold | #E8B84A | Highlights, gradients |
| Rich Black | #141414 | Dark background |
| Off White | #F2F0ED | Light background |
| Deep Teal | #1A2E3B | Light version pyramids |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | July 14, 2026 | Initial logo system |
