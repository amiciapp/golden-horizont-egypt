---
name: design-system-5-tales-of-being
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# 5 tales of being

## Mission
Deliver implementation-ready design-system guidance for 5 tales of being that can be applied consistently across e-commerce storefront interfaces.

## Brand
- Product/brand: 5 tales of being
- URL: https://indigo-laboratory.it/
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Hanken Grotesk`, `font.family.stack=Hanken Grotesk, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=19.2px`
- Typography scale: `font.size.xs=14px`, `font.size.sm=14.93px`, `font.size.md=16px`, `font.size.lg=17.07px`, `font.size.xl=19.2px`, `font.size.2xl=23.47px`, `font.size.3xl=32px`, `font.size.4xl=53.33px`
- Color palette: `color.text.primary=#030303`, `color.text.secondary=#ffffff`, `color.surface.base=#000000`, `color.text.inverse=#b1b3c3`, `color.surface.strong=#f4f3eb`
- Spacing scale: `space.1=2.13px`, `space.2=8.53px`, `space.3=12.8px`, `space.4=16px`, `space.5=17.07px`, `space.6=21.33px`, `space.7=25.6px`, `space.8=42.67px`
- Radius/shadow/motion tokens: `radius.xs=4px` | `shadow.1=rgba(0, 0, 0, 0.15) 0px 0px 0px 1px` | `motion.duration.instant=400ms`, `motion.duration.fast=750ms`

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


## Design Details

# 5 tales of being

## Mission
Create implementation-ready, token-driven UI guidance for 5 tales of being that is optimized for consistency, accessibility, and fast delivery across e-commerce storefront.

## Brand
- Product/brand: 5 tales of being
- URL: https://indigo-laboratory.it/
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Hanken Grotesk`, `font.family.stack=Hanken Grotesk, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=19.2px`
- Typography scale: `font.size.xs=14px`, `font.size.sm=14.93px`, `font.size.md=16px`, `font.size.lg=17.07px`, `font.size.xl=19.2px`, `font.size.2xl=23.47px`, `font.size.3xl=32px`, `font.size.4xl=53.33px`
- Color palette: `color.text.primary=#030303`, `color.text.secondary=#ffffff`, `color.surface.base=#000000`, `color.text.inverse=#b1b3c3`, `color.surface.strong=#f4f3eb`
- Spacing scale: `space.1=2.13px`, `space.2=8.53px`, `space.3=12.8px`, `space.4=16px`, `space.5=17.07px`, `space.6=21.33px`, `space.7=25.6px`, `space.8=42.67px`
- Radius/shadow/motion tokens: `radius.xs=4px` | `shadow.1=rgba(0, 0, 0, 0.15) 0px 0px 0px 1px` | `motion.duration.instant=400ms`, `motion.duration.fast=750ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: buttons (86), links (62), lists (12), navigation (1).


## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.

