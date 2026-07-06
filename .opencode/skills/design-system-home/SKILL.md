---
name: design-system-home
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Home

## Mission
Deliver implementation-ready design-system guidance for Home that can be applied consistently across marketing site interfaces.

## Brand
- Product/brand: Home
- URL: https://chloes-diving.com/
- Audience: readers and knowledge seekers
- Product surface: marketing site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=San Francisco`, `font.family.stack=San Francisco, sans-serif`, `font.size.base=16px`, `font.weight.base=500`, `font.lineHeight.base=19.2px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=13px`, `font.size.md=15px`, `font.size.lg=15.36px`, `font.size.xl=16px`, `font.size.2xl=18px`, `font.size.3xl=21px`, `font.size.4xl=22px`
- Color palette: `color.text.primary=#333333`, `color.border.muted=#0095da`, `color.surface.base=#000000`, `color.text.inverse=#cc3366`, `color.surface.muted=#ffffff`, `color.surface.raised=#f6d563`
- Spacing scale: `space.1=5px`, `space.2=7px`, `space.3=9px`, `space.4=10px`, `space.5=12px`, `space.6=14px`, `space.7=14.4px`, `space.8=15px`
- Radius/shadow/motion tokens: `radius.xs=8px`, `radius.sm=10px`, `radius.md=12px`, `radius.lg=20px`, `radius.xl=30px`, `radius.2xl=50px` | `shadow.1=rgba(0, 0, 0, 0.1) 0px 0px 30px 0px`, `shadow.2=rgba(0, 0, 0, 0.15) 0px 0px 10px 0px`, `shadow.3=rgba(0, 0, 0, 0.62) 0px 0px 30px 0px`, `shadow.4=rgba(1, 2, 36, 0.47) 0px 0px 30px 0px` | `motion.duration.instant=200ms`, `motion.duration.fast=250ms`, `motion.duration.normal=300ms`, `motion.duration.slow=400ms`

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

# Home

## Mission
Create implementation-ready, token-driven UI guidance for Home that is optimized for consistency, accessibility, and fast delivery across marketing site.

## Brand
- Product/brand: Home
- URL: https://chloes-diving.com/
- Audience: readers and knowledge seekers
- Product surface: marketing site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=San Francisco`, `font.family.stack=San Francisco, sans-serif`, `font.size.base=16px`, `font.weight.base=500`, `font.lineHeight.base=19.2px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=13px`, `font.size.md=15px`, `font.size.lg=15.36px`, `font.size.xl=16px`, `font.size.2xl=18px`, `font.size.3xl=21px`, `font.size.4xl=22px`
- Color palette: `color.text.primary=#333333`, `color.border.muted=#0095da`, `color.surface.base=#000000`, `color.text.inverse=#cc3366`, `color.surface.muted=#ffffff`, `color.surface.raised=#f6d563`
- Spacing scale: `space.1=5px`, `space.2=7px`, `space.3=9px`, `space.4=10px`, `space.5=12px`, `space.6=14px`, `space.7=14.4px`, `space.8=15px`
- Radius/shadow/motion tokens: `radius.xs=8px`, `radius.sm=10px`, `radius.md=12px`, `radius.lg=20px`, `radius.xl=30px`, `radius.2xl=50px` | `shadow.1=rgba(0, 0, 0, 0.1) 0px 0px 30px 0px`, `shadow.2=rgba(0, 0, 0, 0.15) 0px 0px 10px 0px`, `shadow.3=rgba(0, 0, 0, 0.62) 0px 0px 30px 0px`, `shadow.4=rgba(1, 2, 36, 0.47) 0px 0px 30px 0px` | `motion.duration.instant=200ms`, `motion.duration.fast=250ms`, `motion.duration.normal=300ms`, `motion.duration.slow=400ms`

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
- Include known page component density: links (139), buttons (91), lists (16), cards (14), navigation (8).


## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.

