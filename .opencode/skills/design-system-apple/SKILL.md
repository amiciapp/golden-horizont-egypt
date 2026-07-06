---
name: design-system-apple
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Apple

## Mission
Deliver implementation-ready design-system guidance for Apple that can be applied consistently across e-commerce storefront interfaces.

## Brand
- Product/brand: Apple
- URL: https://www.apple.com/
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=SF Pro Text`, `font.family.stack=SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif`, `font.size.base=17px`, `font.weight.base=400`, `font.lineHeight.base=25px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=14px`, `font.size.md=17px`, `font.size.lg=18px`, `font.size.xl=21px`, `font.size.2xl=28px`, `font.size.3xl=34px`, `font.size.4xl=40px`
- Color palette: `color.surface.base=#000000`, `color.text.secondary=#1d1d1f`, `color.text.tertiary=#ffffff`, `color.text.inverse=#0066cc`, `color.surface.muted=#0071e3`, `color.surface.raised=#f5f5f7`
- Spacing scale: `space.1=3px`, `space.2=4px`, `space.3=6px`, `space.4=8px`, `space.5=9px`, `space.6=9.6px`, `space.7=11px`, `space.8=11.73px`
- Radius/shadow/motion tokens: `radius.xs=8px`, `radius.sm=50px`, `radius.md=980px` | `motion.duration.instant=100ms`, `motion.duration.fast=240ms`, `motion.duration.normal=250ms`, `motion.duration.slow=320ms`, `motion.duration.slower=1000ms`

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
