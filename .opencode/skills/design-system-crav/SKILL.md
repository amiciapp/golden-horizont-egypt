---
name: design-system-crav
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# CRAV

## Mission
Deliver implementation-ready design-system guidance for CRAV that can be applied consistently across e-commerce storefront interfaces.

## Brand
- Product/brand: CRAV
- URL: https://www.cravburgers.shop/
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Mouse Memoirs`, `font.family.stack=Mouse Memoirs, Mouse Memoirs Fallback`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=13.52px`, `font.size.sm=13.82px`, `font.size.md=14.75px`, `font.size.lg=16px`, `font.size.xl=19.97px`, `font.size.2xl=27.65px`, `font.size.3xl=36.86px`, `font.size.4xl=43.01px`
- Color palette: `color.text.primary=#1b1b1b`, `color.text.secondary=#f91814`, `color.text.tertiary=#f5e3cd`, `color.text.inverse=#f4a804`, `color.surface.base=#000000`, `color.surface.raised=#ffd750`
- Spacing scale: `space.1=6.6px`, `space.2=7.68px`, `space.3=15.36px`, `space.4=21.5px`, `space.5=23.04px`, `space.6=24.58px`, `space.7=30.72px`, `space.8=38.4px`
- Radius/shadow/motion tokens: `radius.xs=26843500px` | `motion.duration.instant=150ms`, `motion.duration.fast=200ms`, `motion.duration.normal=300ms`, `motion.duration.slow=400ms`

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

# CRAV

## Mission
Create implementation-ready, token-driven UI guidance for CRAV that is optimized for consistency, accessibility, and fast delivery across e-commerce storefront.

## Brand
- Product/brand: CRAV
- URL: https://www.cravburgers.shop/
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Mouse Memoirs`, `font.family.stack=Mouse Memoirs, Mouse Memoirs Fallback`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=13.52px`, `font.size.sm=13.82px`, `font.size.md=14.75px`, `font.size.lg=16px`, `font.size.xl=19.97px`, `font.size.2xl=27.65px`, `font.size.3xl=36.86px`, `font.size.4xl=43.01px`
- Color palette: `color.text.primary=#1b1b1b`, `color.text.secondary=#f91814`, `color.text.tertiary=#f5e3cd`, `color.text.inverse=#f4a804`, `color.surface.base=#000000`, `color.surface.raised=#ffd750`
- Spacing scale: `space.1=6.6px`, `space.2=7.68px`, `space.3=15.36px`, `space.4=21.5px`, `space.5=23.04px`, `space.6=24.58px`, `space.7=30.72px`, `space.8=38.4px`
- Radius/shadow/motion tokens: `radius.xs=26843500px` | `motion.duration.instant=150ms`, `motion.duration.fast=200ms`, `motion.duration.normal=300ms`, `motion.duration.slow=400ms`

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
- Include known page component density: links (13), buttons (3), navigation (2).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.

