---
name: design-system-elva
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Elva

## Mission
Deliver implementation-ready design-system guidance for Elva that can be applied consistently across documentation site interfaces.

## Brand
- Product/brand: Elva
- URL: https://elvalabs.ai/
- Audience: developers and technical teams
- Product surface: documentation site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Neue Haas Grotesk Display Pro`, `font.family.stack=Neue Haas Grotesk Display Pro, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=20.8px`
- Typography scale: `font.size.xs=16px`, `font.size.sm=42px`, `font.size.md=43px`, `font.size.lg=107.52px`, `font.size.xl=122.88px`
- Color palette: `color.text.primary=#ffffff`, `color.text.secondary=#b3b3b3`, `color.text.tertiary=#0000ee`, `color.surface.base=#000000`, `color.surface.muted=#131313`
- Spacing scale: `space.1=8px`, `space.2=16px`, `space.3=17px`, `space.4=20px`, `space.5=28.68px`, `space.6=42px`, `space.7=310.71px`, `space.8=310.73px`
- Radius/shadow/motion tokens: `radius.xs=16px` | `motion.duration.instant=200ms`

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

# Elva

## Mission
Create implementation-ready, token-driven UI guidance for Elva that is optimized for consistency, accessibility, and fast delivery across documentation site.

## Brand
- Product/brand: Elva
- URL: https://elvalabs.ai/
- Audience: developers and technical teams
- Product surface: documentation site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Neue Haas Grotesk Display Pro`, `font.family.stack=Neue Haas Grotesk Display Pro, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=20.8px`
- Typography scale: `font.size.xs=16px`, `font.size.sm=42px`, `font.size.md=43px`, `font.size.lg=107.52px`, `font.size.xl=122.88px`
- Color palette: `color.text.primary=#ffffff`, `color.text.secondary=#b3b3b3`, `color.text.tertiary=#0000ee`, `color.surface.base=#000000`, `color.surface.muted=#131313`
- Spacing scale: `space.1=8px`, `space.2=16px`, `space.3=17px`, `space.4=20px`, `space.5=28.68px`, `space.6=42px`, `space.7=310.71px`, `space.8=310.73px`
- Radius/shadow/motion tokens: `radius.xs=16px` | `motion.duration.instant=200ms`

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
- Include known page component density: links (20), cards (6), lists (6), buttons (4).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.

