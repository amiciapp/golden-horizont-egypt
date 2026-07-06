---
name: design-system-tripadvisor-over-a-billion-reviews-contributions
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Tripadvisor: Over a billion reviews & contributions for Hotels, Attractions, Restaurants, and more

## Mission
Deliver implementation-ready design-system guidance for Tripadvisor: Over a billion reviews & contributions for Hotels, Attractions, Restaurants, and more that can be applied consistently across marketing site interfaces.

## Brand
- Product/brand: Tripadvisor: Over a billion reviews & contributions for Hotels, Attractions, Restaurants, and more
- URL: https://www.tripadvisor.com/
- Audience: readers and knowledge seekers
- Product surface: marketing site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Trip Sans VF`, `font.family.stack=Trip Sans VF, Trip Sans, Arial, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=normal`
- Typography scale: `font.size.xs=13.33px`, `font.size.sm=14px`, `font.size.md=16px`, `font.size.lg=18px`, `font.size.xl=20px`, `font.size.2xl=28px`, `font.size.3xl=32px`, `font.size.4xl=54px`
- Color palette: `color.text.primary=#002b11`, `color.text.secondary=#38443a`, `color.text.tertiary=#99aaa0`, `color.surface.muted=#ffffff`, `color.surface.base=#000000`, `color.surface.strong=#ffc56f`
- Spacing scale: `space.1=4px`, `space.2=4.5px`, `space.3=5px`, `space.4=6px`, `space.5=6.5px`, `space.6=7px`, `space.7=8px`, `space.8=9.5px`
- Radius/shadow/motion tokens: `radius.xs=8px`, `radius.sm=12px`, `radius.md=20px`, `radius.lg=28px`, `radius.xl=42px`, `radius.2xl=50px`, `radius.step7=1000px` | `motion.duration.instant=100ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Responsive behavior and edge-case handling should be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Prefer system consistency over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
