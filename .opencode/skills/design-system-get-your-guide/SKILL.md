---
name: design-system-book-things-to-do-attractions-and-tours
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Book Things To Do, Attractions, and Tours

## Mission
Deliver implementation-ready design-system guidance for Book Things To Do, Attractions, and Tours that can be applied consistently across marketing site interfaces.

## Brand
- Product/brand: Book Things To Do, Attractions, and Tours
- URL: https://www.getyourguide.com/?cmp=brand&campaign_id=6656899609&adgroup_id=78792541373&target_id=kwd-299607439662&loc_physical_ms=9112340&match_type=e&ad_id=508913319731&keyword=getyourguide&ad_position=&feed_item_id=&placement=&device=c&partner_id=CD951&gad_source=1&gad_campaignid=6656899609&gbraid=0AAAAADmzJCNd8gIYTUSBrWDTKeTrh9nV3&gclid=EAIaIQobChMI8vepv4LplAMVuzwGAB1JYiwoEAAYASAAEgKpf_D_BwE
- Audience: readers and knowledge seekers
- Product surface: marketing site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=GT Eesti`, `font.family.stack=GT Eesti, fallback for GT Eesti, android fallback for GT Eesti, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=22px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=14px`, `font.size.md=16px`, `font.size.lg=20px`, `font.size.xl=24px`, `font.size.2xl=36px`
- Color palette: `color.text.primary=#1a2b49`, `color.text.secondary=#0071eb`, `color.text.tertiary=#ffffff`, `color.text.inverse=#63687a`, `color.surface.base=#000000`
- Spacing scale: `space.1=4px`, `space.2=6px`, `space.3=8px`, `space.4=9.51px`, `space.5=10px`, `space.6=12px`, `space.7=13px`, `space.8=16px`
- Radius/shadow/motion tokens: `radius.xs=12px`, `radius.sm=50px`, `radius.md=80px` | `shadow.1=rgba(0, 0, 0, 0.06) 0px 0px 32px 0px, rgba(0, 0, 0, 0.16) 0px 4px 8px 0px` | `motion.duration.instant=200ms`, `motion.duration.fast=300ms`, `motion.duration.normal=500ms`

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
