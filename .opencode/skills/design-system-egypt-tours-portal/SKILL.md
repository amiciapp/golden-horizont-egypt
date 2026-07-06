---
name: design-system-egypt-tours-portal-best-egypt-tours-travel-agenc
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Egypt Tours Portal: Best Egypt Tours Travel Agency Since 1987

## Mission
Deliver implementation-ready design-system guidance for Egypt Tours Portal: Best Egypt Tours Travel Agency Since 1987 that can be applied consistently across documentation site interfaces.

## Brand
- Product/brand: Egypt Tours Portal: Best Egypt Tours Travel Agency Since 1987
- URL: https://www.egypttoursportal.com/
- Audience: developers and technical teams
- Product surface: documentation site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Oxygen`, `font.family.stack=Oxygen, sans-serif`, `font.size.base=16px`, `font.weight.base=700`, `font.lineHeight.base=28px`
- Typography scale: `font.size.xs=11px`, `font.size.sm=12px`, `font.size.md=15px`, `font.size.lg=16px`, `font.size.xl=17px`, `font.size.2xl=18px`, `font.size.3xl=19px`, `font.size.4xl=22px`
- Color palette: `color.text.primary=#0062b1`, `color.text.secondary=#0d233e`, `color.text.tertiary=#ffffff`, `color.text.inverse=#464445`, `color.surface.base=#000000`, `color.surface.raised=#128c7e`, `color.surface.strong=#a53a37`
- Spacing scale: `space.1=2px`, `space.2=4px`, `space.3=4.2px`, `space.4=5px`, `space.5=6.9px`, `space.6=7px`, `space.7=7.8px`, `space.8=8px`
- Radius/shadow/motion tokens: `radius.xs=4px`, `radius.sm=25px`, `radius.md=50px` | `shadow.1=rgba(30, 30, 30, 0.3) 1px 2px 5px 2px`, `shadow.2=rgba(2, 130, 156, 0.25) 0px 8px 25px 0px`, `shadow.3=rgba(228, 116, 42, 0.55) 0px 0px 0px 0.0206041px` | `motion.duration.instant=200ms`, `motion.duration.fast=300ms`, `motion.duration.normal=400ms`

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
