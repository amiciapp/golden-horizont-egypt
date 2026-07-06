---
name: design-system-recover-your-apple-account
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Recover Your Apple Account

## Mission
Deliver implementation-ready design-system guidance for Recover Your Apple Account that can be applied consistently across e-commerce storefront interfaces.

## Brand
- Product/brand: Recover Your Apple Account
- URL: https://iforgot.apple.com/
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=SF Pro Text`, `font.family.stack=SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif`, `font.size.base=17px`, `font.weight.base=400`, `font.lineHeight.base=25px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=17px`, `font.size.md=21px`, `font.size.lg=32px`
- Color palette: `color.surface.base=#000000`, `color.text.secondary=#1d1d1f`, `color.text.tertiary=#424245`, `color.text.inverse=#0066cc`, `color.surface.muted=#ffffff`, `color.surface.raised=#0071e3`, `color.surface.strong=#f5f5f7`, `color.border.strong=rgb(66, 66, 69) rgb(210, 210, 215) rgb(66, 66, 69) rgb(66, 66, 69)`
- Spacing scale: `space.1=3px`, `space.2=5px`, `space.3=6px`, `space.4=7px`, `space.5=8px`, `space.6=10px`, `space.7=15px`, `space.8=17px`
- Radius/shadow/motion tokens: `radius.xs=8px` | `motion.duration.instant=320ms`, `motion.duration.fast=500ms`

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
