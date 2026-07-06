---
name: design-system-zoe-feel-healthier-in-weeks
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# ZOE — Feel healthier. In weeks.

## Mission
Deliver implementation-ready design-system guidance for ZOE — Feel healthier. In weeks. that can be applied consistently across e-commerce storefront interfaces.

## Brand
- Product/brand: ZOE — Feel healthier. In weeks.
- URL: https://zoe.com/en-gb
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=LotaGrotesqueAlt1-Regular`, `font.family.stack=LotaGrotesqueAlt1-Regular`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=normal`
- Typography scale: `font.size.xs=14px`, `font.size.sm=16px`, `font.size.md=18px`, `font.size.lg=20px`, `font.size.xl=24px`, `font.size.2xl=30px`, `font.size.3xl=40px`, `font.size.4xl=46px`
- Color palette: `color.text.primary=#2e3348`, `color.text.secondary=#ffffff`, `color.text.tertiary=#5755ce`, `color.surface.base=#000000`, `color.surface.muted=#ffd000`
- Spacing scale: `space.1=1px`, `space.2=2px`, `space.3=4px`, `space.4=6px`, `space.5=8px`, `space.6=16px`, `space.7=32px`
- Radius/shadow/motion tokens: `radius.xs=8px`, `radius.sm=50px` | `motion.duration.instant=100ms`, `motion.duration.fast=200ms`, `motion.duration.normal=300ms`

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

# ZOE — Feel healthier. In weeks.

## Mission
Create implementation-ready, token-driven UI guidance for ZOE — Feel healthier. In weeks. that is optimized for consistency, accessibility, and fast delivery across e-commerce storefront.

## Brand
- Product/brand: ZOE — Feel healthier. In weeks.
- URL: https://zoe.com/en-gb
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=LotaGrotesqueAlt1-Regular`, `font.family.stack=LotaGrotesqueAlt1-Regular`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=normal`
- Typography scale: `font.size.xs=14px`, `font.size.sm=16px`, `font.size.md=18px`, `font.size.lg=20px`, `font.size.xl=24px`, `font.size.2xl=30px`, `font.size.3xl=40px`, `font.size.4xl=46px`
- Color palette: `color.text.primary=#2e3348`, `color.text.secondary=#ffffff`, `color.text.tertiary=#5755ce`, `color.surface.base=#000000`, `color.surface.muted=#ffd000`
- Spacing scale: `space.1=1px`, `space.2=2px`, `space.3=4px`, `space.4=6px`, `space.5=8px`, `space.6=16px`, `space.7=32px`
- Radius/shadow/motion tokens: `radius.xs=8px`, `radius.sm=50px` | `motion.duration.instant=100ms`, `motion.duration.fast=200ms`, `motion.duration.normal=300ms`

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
- Include known page component density: links (43), buttons (10), navigation (3), lists (3), inputs (2).


## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.

