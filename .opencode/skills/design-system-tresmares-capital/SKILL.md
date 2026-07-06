---
name: design-system-untitled-page
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Untitled page

## Mission
Deliver implementation-ready design-system guidance for Untitled page that can be applied consistently across e-commerce storefront interfaces.

## Brand
- Product/brand: Untitled page
- URL: https://www.tresmarescapital.com/
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=PP Neue Montreal`, `font.family.stack=PP Neue Montreal, Helvetica, Arial, sans-serif`, `font.size.base=10.2451px`, `font.weight.base=400`, `font.lineHeight.base=10.2451px`
- Typography scale: `font.size.xs=10.25px`, `font.size.sm=11.52px`, `font.size.md=14.09px`, `font.size.lg=15.36px`, `font.size.xl=25.61px`, `font.size.2xl=57.6px`, `font.size.3xl=179.21px`
- Color palette: `color.text.primary=#2b2b2b`, `color.text.secondary=#aaaaaa`, `color.text.tertiary=#ffffff`, `color.surface.base=#000000`, `color.surface.muted=#e5e5e5`, `color.border.muted=#d5d5d5`, `color.border.strong=rgb(43, 43, 43) rgb(43, 43, 43) rgba(0, 0, 0, 0)`
- Spacing scale: `space.1=1.92px`, `space.2=6.41px`, `space.3=12.79px`, `space.4=38.4px`, `space.5=51.19px`, `space.6=153.6px`, `space.7=179.21px`, `space.8=204.8px`
- Radius/shadow/motion tokens: `radius.xs=6.41px` | `motion.duration.instant=400ms`, `motion.duration.fast=600ms`, `motion.duration.normal=800ms`

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

# Untitled page

## Mission
Create implementation-ready, token-driven UI guidance for Untitled page that is optimized for consistency, accessibility, and fast delivery across e-commerce storefront.

## Brand
- Product/brand: Untitled page
- URL: https://www.tresmarescapital.com/
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=PP Neue Montreal`, `font.family.stack=PP Neue Montreal, Helvetica, Arial, sans-serif`, `font.size.base=10.2451px`, `font.weight.base=400`, `font.lineHeight.base=10.2451px`
- Typography scale: `font.size.xs=10.25px`, `font.size.sm=11.52px`, `font.size.md=14.09px`, `font.size.lg=15.36px`, `font.size.xl=25.61px`, `font.size.2xl=57.6px`, `font.size.3xl=179.21px`
- Color palette: `color.text.primary=#2b2b2b`, `color.text.secondary=#aaaaaa`, `color.text.tertiary=#ffffff`, `color.surface.base=#000000`, `color.surface.muted=#e5e5e5`, `color.border.muted=#d5d5d5`, `color.border.strong=rgb(43, 43, 43) rgb(43, 43, 43) rgba(0, 0, 0, 0)`
- Spacing scale: `space.1=1.92px`, `space.2=6.41px`, `space.3=12.79px`, `space.4=38.4px`, `space.5=51.19px`, `space.6=153.6px`, `space.7=179.21px`, `space.8=204.8px`
- Radius/shadow/motion tokens: `radius.xs=6.41px` | `motion.duration.instant=400ms`, `motion.duration.fast=600ms`, `motion.duration.normal=800ms`

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
- Include known page component density: links (39), buttons (16), lists (13), cards (8), inputs (2), navigation (1).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.

