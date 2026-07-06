---
name: design-system-egyptra-travel
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Egyptra Travel

## Mission
Deliver implementation-ready design-system guidance for Egyptra Travel that can be applied consistently across marketing site interfaces.

## Brand
- Product/brand: Egyptra Travel
- URL: https://egyptra.pro/
- Audience: online shoppers and consumers
- Product surface: marketing site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=-apple-system`, `font.family.stack=-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji`, `font.size.base=13.12px`, `font.weight.base=400`, `font.lineHeight.base=19.68px`
- Typography scale: `font.size.xs=10.05px`, `font.size.sm=12.48px`, `font.size.md=13px`, `font.size.lg=13.12px`, `font.size.xl=13.6px`, `font.size.2xl=14px`, `font.size.3xl=14.08px`, `font.size.4xl=14.4px`
- Color palette: `color.text.primary=#ffffff`, `color.text.secondary=#475569`, `color.border.default=#22487c`, `color.text.inverse=#1a202c`, `color.surface.base=#000000`, `color.surface.raised=#f1f5f9`
- Spacing scale: `space.1=4px`, `space.2=6px`, `space.3=8px`, `space.4=10px`, `space.5=12px`, `space.6=13px`, `space.7=13.6px`, `space.8=14px`
- Radius/shadow/motion tokens: `radius.xs=8px`, `radius.sm=10px`, `radius.md=12px`, `radius.lg=50px`, `radius.xl=100px`, `radius.2xl=999px`, `radius.step7=9999px` | `shadow.1=rgba(0, 0, 0, 0.06) 0px 1px 3px 0px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px`, `shadow.2=rgba(212, 165, 116, 0.35) 0px 6px 20px 0px`, `shadow.3=rgba(212, 169, 108, 0.5) 0px 6px 18px 0px`, `shadow.4=rgba(201, 168, 76, 0.35) 0px 8px 30px 0px` | `motion.duration.instant=150ms`, `motion.duration.fast=180ms`, `motion.duration.normal=200ms`, `motion.duration.slow=250ms`, `motion.duration.slower=300ms`, `motion.duration.step6=800ms`

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
