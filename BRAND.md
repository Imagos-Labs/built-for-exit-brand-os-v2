# Built for Exit — Brand OS (v2)

> BUILT FOR EXIT · **Transferability creates freedom.**

This file is the human front door. Read it first. It names the brand, the aesthetic posture, the components, and the path to every usable artifact. This repo is a Docusaurus portal (`pnpm install && pnpm start`); the brand asset package lives under [`static/brand/`](./static/brand/) and is served at `/brand/...`.

> **v2 supersedes v1.** This is Ron Roberts's complete 2026-06-08 rethink. It replaces the original `../brand/` direction (navy + gold + doorway, "serious premium financial publication") wholesale. The original is kept intact next door as a sibling. v2 is the canonical Built for Exit brand.

**Three surfaces, one brand** (different contexts, not redundant):

- **[`brand.json`](./brand.json)** — the structured **data** (source of truth for facts).
- **`BRAND.md`** (this file) — the human **front door**: prose + how to consume.
- **`/brand.txt`** — the generated, served **prime**: essentials inlined + absolute asset URLs; the one link to paste into any agent harness ([what is brand.txt](https://www.appliedai.wiki/reference/standards/brand-txt)).

Plus [`tokens.css`](./tokens.css) for color + type + space + shape.

## What Built for Exit is

Built for Exit transforms founder-dependent businesses into transferable assets. A transferable business is one that can be handed to another person — a successor, a CEO, a management team, a family member, a buyer, or simply your future self after a month away — and keep operating successfully. Most founders think "exit" means selling. It doesn't. Selling is one form of transfer. The objective is optionality: the freedom to step back, scale, or sell on your terms, whether or not you ever do.

The thesis: most founders don't own a business — they own a job with overhead. For decades, removing founder dependency was slow, expensive, and difficult. AI changed the equation. Documentation, systems, operational visibility, and delegation that once existed only inside large enterprises are now affordable. Built for Exit uses that to engineer dependency out of a company in months.

- **Domain:** builtforexit.ai
- **Core idea:** Transferability creates freedom.
- **Mission:** Transform founder-dependent businesses into transferable assets.
- **Audience:** founders and operators who have become the system their company runs on.
- **Archetype:** **Architect** (structured, systematic, deliberate, engineered) + **Operator** (practical, execution-focused, outcomes-driven).
- **Operators / founders:** Gary Sheng and Ron Roberts II. HQ: Dallas.
- **Trademarks:** Transferable™ · The System™ · Exit Readiness Index™ / Exit Readiness Score™ · Built For Exit Approved™.

## Aesthetic posture

**The register: a private equity firm, a luxury automotive brand, and an elite operating-system company had a child.** Should feel like Porsche, Blackstone, Anduril, Palantir, Linear, Stripe Press. Should NOT feel like a startup guru, business coach, consultant, marketing agency, or SaaS startup.

Dark mode is canonical. Near-black ground (`#050505`), Soft White text (`#F3F3F3`), and **one acid accent — Exit Yellow (`#DFFF00`)** used sparingly, at value moments only. Generous whitespace, never cramped. 1px steel borders. **No shadows, ever.** Headlines are heavy grotesk, uppercase, tight. Every number is set in IBM Plex Mono. Icons are outlined, geometric, minimal — no gradients, no filled icons, no illustration. Photography is **founder-alone and industrial** (airports, private hangars, empty offices, documentation, process maps, manufacturing, warehouses, control rooms), B&W or heavily desaturated — never smiling teams, stock photos, or conference rooms. Motion is engineered: fade, reveal, connect, count-up. Never bouncy, elastic, or flashy. Full render brief: [`static/brand/generation-layer/master-prompt.md`](./static/brand/generation-layer/master-prompt.md).

**Final rule:** if someone removed the logo from the page, the design should still feel like that PE × luxury-auto × elite-OS child.

## The components

| # | Component | Path |
|---|-----------|------|
| 1 | **Logo matrix** (incl. the Hollow 4) | [`static/brand/logos/`](./static/brand/logos/) — `svg/`, `raster/`, `crops/` |
| 2 | **Color** | [`tokens.css`](./tokens.css) · `brand.json#tokens.color` |
| 3 | **Type** | [`tokens.css`](./tokens.css) · Neue Haas Grotesk Display + Inter + IBM Plex Mono |
| 4 | **Motif** | the **Hollow 4** + dependency diagram + before/after + scorecard + radar (`static/brand/motifs/`) |
| 5 | **Golden Atomic Brand References** | [`static/brand/generation-layer/golden-atomic-brand-references/`](./static/brand/generation-layer/golden-atomic-brand-references/) |
| 6 | **Generation layer** | [`static/brand/generation-layer/`](./static/brand/generation-layer/) |
| 7 | **Templates** | [`static/brand/templates/`](./static/brand/templates/) — invoice, lower-third, stat card, web sections |
| 8 | **Source references** | [`static/brand/brand-source/ron-rethink-2026-06-08/`](./static/brand/brand-source/) — Ron's docs + mockups |

Plus the **voice** slice: [portal `/voice`](./docs/voice.mdx) · `brand.json#voice`.

## Identity essentials

- **Logo:** the **Hollow 4** mark (negative-space numeral 4 — the "for" in B4E) works alone at small sizes; horizontal lockup (mark + BUILT FOR EXIT) for navs; stacked lockup for covers/footers; **B4E** monogram for compact contexts + merch. Wordmark is heavy grotesk, all caps. Used sparingly — never overuse the 4.
- **Palette:** black `#050505` (ground) · carbon `#0F0F10` (sections) · graphite `#1A1A1D` (cards) · steel `#2D2D31` (borders) · soft white `#F3F3F3` (text) · muted gray `#9A9A9F` (secondary) · **Exit Yellow `#DFFF00`** / hover `#C6E900` (accent, sparing).
- **Type:** Neue Haas Grotesk Display (display/headlines, uppercase Bold/Black; fallback Inter Tight), Inter (body), IBM Plex Mono (scores, valuations, statistics, dashboards).
- **Motto:** Transferability creates freedom. Supporting: "Can your business survive 90 days without you?" · "Exit is not the goal. Optionality is." · "Freedom is a system."
- **Always stamp the real wordmark** on finished assets; never let an image model draw it.

## Structural canon

- **The System™ — five levers:** 01 Documentation · 02 Systems · 03 Operations · 04 Revenue · 05 Financial & Diligence.
- **Progression:** DEPENDENT → DOCUMENTED → SYSTEMIZED → TRANSFERABLE → EXIT READY.
- **Engagement timeline:** ASSESS → DOCUMENT → SYSTEMIZE → DE-RISK → OPTIMIZE → EXIT READY.
- **Options transferability creates:** Succession · Management Transition · Scale · Exit.
- **Key stats:** 50% of exits are involuntary (the 5 Ds: Death, Disability, Divorce, Disagreement, Distress) · 80% of owners have no transition plan · 3x–4x → 7x–8x EBITDA at exit.

## How to consume this (for an agent)

1. Read this file + [`brand.json`](./brand.json).
2. Pull color/type/space/shape from [`tokens.css`](./tokens.css).
3. For new visuals: prepend [`master-prompt.md`](./static/brand/generation-layer/master-prompt.md), pass the relevant [Golden Atomic Brand References](./static/brand/generation-layer/golden-atomic-brand-references/) as image references, follow [`illustrations/SPEC.md`](./static/brand/generation-layer/illustrations/SPEC.md), honor [`banned-terms.md`](./static/brand/generation-layer/banned-terms.md), then stamp the wordmark.
4. Or just follow the hosted skill [`create-on-brand-image`](./static/brand/generation-layer/skills/create-on-brand-image/SKILL.md).
5. Store every new prompt next to its output.

## Success test

Hand only this repo to an agent with no designer and ask for a landing page, a deck, and a social set. If the three come back unmistakably one brand — dark, engineered, Exit-Yellow at the value moments, the Hollow 4 quietly present — the OS is real.

---

*Generated via the `generate-a-brand-os` recipe (full brand-os-wiki form). v2 — Ron Roberts's complete rethink, 2026-06-08. Supersedes the navy/gold v1 in `../brand/`.*
