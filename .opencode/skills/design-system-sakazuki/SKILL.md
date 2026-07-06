---
name: design-system-sakazuki
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# SAKAZUKI

## Mission
Deliver implementation-ready design-system guidance for SAKAZUKI that can be applied consistently across marketing site interfaces.

## Brand
- Product/brand: SAKAZUKI
- URL: https://sakazuki.io/
- Audience: online shoppers and consumers
- Product surface: marketing site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=hagrid-text`, `font.family.stack=hagrid-text, serif`, `font.size.base=158.118px`, `font.weight.base=400`, `font.lineHeight.base=158.118px`
- Typography scale: `font.size.xs=14.68px`, `font.size.sm=15.81px`, `font.size.md=18.07px`, `font.size.lg=22.59px`, `font.size.xl=32.26px`, `font.size.2xl=33.88px`, `font.size.3xl=36.14px`, `font.size.4xl=56.47px`
- Color palette: `color.surface.base=#000000`, `color.text.secondary=#e1d6ce`, `color.text.tertiary=#ffffff`
- Spacing scale: `space.1=13.55px`, `space.2=14.75px`, `space.3=18.07px`, `space.4=67.76px`, `space.5=135.53px`, `space.6=564.71px`
- Radius/shadow/motion tokens: manual token definitions required

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

# SAKAZUKI

## Mission
Create implementation-ready, token-driven UI guidance for SAKAZUKI that is optimized for consistency, accessibility, and fast delivery across marketing site.

## Brand
- Product/brand: SAKAZUKI
- URL: https://sakazuki.io/
- Audience: online shoppers and consumers
- Product surface: marketing site

## Style Foundations
- Visual style: minimal, utility-first, accessibility-prioritized
- Main font style: `font.family.primary=hagrid-text`, `font.family.stack=hagrid-text, serif`, `font.size.base=158.118px`, `font.weight.base=400`, `font.lineHeight.base=158.118px`
- Typography scale: `font.size.xs=14.68px`, `font.size.sm=15.81px`, `font.size.md=18.07px`, `font.size.lg=22.59px`, `font.size.xl=32.26px`, `font.size.2xl=33.88px`, `font.size.3xl=36.14px`, `font.size.4xl=56.47px`
- Color palette: `color.surface.base=#000000`, `color.text.secondary=#e1d6ce`, `color.text.tertiary=#ffffff`
- Spacing scale: `space.1=13.55px`, `space.2=14.75px`, `space.3=18.07px`, `space.4=67.76px`, `space.5=135.53px`, `space.6=564.71px`
- Radius/shadow/motion tokens: No reliable extraction yet; motion and shape tokens should be defined manually.

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
- Include known page component density: links (33), lists (5), buttons (3), navigation (3).

- Extraction diagnostics: Limited color diversity detected; color token inference confidence is low. Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.

