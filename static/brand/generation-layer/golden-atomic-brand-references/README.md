# Golden Atomic Brand References (GABR)

The pillar of the brand OS. **Golden** = best-in-class example of its type. **Atomic** = a single self-contained reusable unit. **Brand Reference** = fed back into an image model as in-context reference to generate net-new on-brand assets.

A rulebook tells a model what to do; golden references show it what *good* looks like. Each reference is stored next to the exact prompt that produced it (or its SVG source) + alt text. References are generated **incrementally, with human validation** — that validation is what makes them "golden."

> Built for Exit has two GABR modes: **vector** data graphics (authored as SVG in `../../motifs/`, rendered to PNG here) and **photographic** founder-alone / industrial scenes (generated, B&W). We will have MANY — this is the seed set.

## The set

| # | GABR | Mode |
|---|------|------|
| 01 | `gabr-01-dependency-diagram` — owner dependency as THE PROBLEM | vector |
| 02 | `gabr-02-before-after` — founder job → transferable asset | vector |
| 03 | `gabr-03-exit-readiness-scorecard` — 72/100 | vector |
| 04 | `gabr-04-exit-readiness-radar` — five-pillar | vector |
| 05 | `gabr-05-progression-rail` — dependent → exit ready | vector |
| 06 | `gabr-06-founder-alone` — empty office at night | photographic |
| 07 | `gabr-07-control-room` — lone operator, wall of maps | photographic |
| 08 | `gabr-08-involuntary-exits` — 50% / 80% / the 5 Ds | vector |
| 09 | `gabr-09-the-system` — five-lever framework | vector |
| 10 | `gabr-10-valuation-uplift` — 3–4x → 7–8x EBITDA | vector |
| 11 | `gabr-11-options` — succession / CEO / scale / exit | vector |
| 12 | `gabr-12-engagement-timeline` — assess → exit ready | vector |
| 13 | `gabr-13-guarantee-badge` — money-back 100% | vector |
| 14 | `gabr-14-hollow4-watermark` — faint background tile | raster |
| 15 | `gabr-15-hangar` — founder + private jet | photographic |
| 16 | `gabr-16-warehouse` — lone operator, racks | photographic |
| 17 | `gabr-17-airport-departure` — walking away at night | photographic |
| 18 | `gabr-18-empty-boardroom` — runs without you | photographic |
| 19 | `gabr-19-process-wall` — documentation made legible | photographic |
| 20 | `gabr-20-desk-dashboard` — the score in context | photographic |

Vector GABR source SVGs are colocated here (or in `../../motifs/` for 01–05) — edit those, then re-render the PNG. The logo matrix (the Hollow 4 mark, wordmark, B4E monogram, lockup) lives in `../../logos/` — pass those as references for any asset that reuses the mark.

## Disciplines

- **Validate each** with a human before it's golden.
- **Store the prompt next to the output** (`.prompt.md`), or note the SVG source for vector GABRs.
- **Pass references in** for reused elements (the Hollow 4, a recurring figure) so style never drifts.
- **Stamp the wordmark** on finished assets; don't let the model draw the wordmark text from scratch.
- To add one, follow `../skills/create-gabr/SKILL.md`.
