---
name: design-system-sohub-creative-digital-experiences
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# SOHub — Creative Digital Experiences

## Mission
Deliver implementation-ready design-system guidance for SOHub — Creative Digital Experiences that can be applied consistently across e-commerce storefront interfaces.

## Brand
- Product/brand: SOHub — Creative Digital Experiences
- URL: https://sohub.digital/
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Inter`, `font.family.stack=Inter, Inter Fallback`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=16px`, `font.size.sm=20px`, `font.size.md=24px`, `font.size.lg=48px`, `font.size.xl=56px`, `font.size.2xl=72px`, `font.size.3xl=96px`, `font.size.4xl=144px`
- Color palette: `color.text.primary=#11181c`, `color.text.secondary=#ffffff`, `color.text.tertiary=#f0f6f8`, `color.text.inverse=#0c1016`, `color.surface.base=#000000`, `color.surface.muted=#d9e0e3`, `color.surface.strong=#1e232c`, `color.border.default=lab(91.6229 -0.159115 -2.26791)`
- Spacing scale: `space.1=4.8px`, `space.2=16px`, `space.3=24px`, `space.4=40px`, `space.5=48px`, `space.6=64px`, `space.7=80px`, `space.8=96px`
- Radius/shadow/motion tokens: `radius.xs=16px`, `radius.sm=26843500px` | `motion.duration.instant=200ms`, `motion.duration.fast=300ms`, `motion.duration.normal=500ms`

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

# SOHub — Creative Digital Experiences

## Mission
Create implementation-ready, token-driven UI guidance for SOHub — Creative Digital Experiences that is optimized for consistency, accessibility, and fast delivery across e-commerce storefront.

## Brand
- Product/brand: SOHub — Creative Digital Experiences
- URL: https://sohub.digital/
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: structured, tokenized, content-first
- Main font style: `font.family.primary=Inter`, `font.family.stack=Inter, Inter Fallback`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=16px`, `font.size.sm=20px`, `font.size.md=24px`, `font.size.lg=48px`, `font.size.xl=56px`, `font.size.2xl=72px`, `font.size.3xl=96px`, `font.size.4xl=144px`
- Color palette: `color.text.primary=#11181c`, `color.text.secondary=#ffffff`, `color.text.tertiary=#f0f6f8`, `color.text.inverse=#0c1016`, `color.surface.base=#000000`, `color.surface.muted=#d9e0e3`, `color.surface.strong=#1e232c`, `color.border.default=lab(91.6229 -0.159115 -2.26791)`
- Spacing scale: `space.1=4.8px`, `space.2=16px`, `space.3=24px`, `space.4=40px`, `space.5=48px`, `space.6=64px`, `space.7=80px`, `space.8=96px`
- Radius/shadow/motion tokens: `radius.xs=16px`, `radius.sm=26843500px` | `motion.duration.instant=200ms`, `motion.duration.fast=300ms`, `motion.duration.normal=500ms`

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
- Include known page component density: links (21), buttons (7), navigation (2).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.

