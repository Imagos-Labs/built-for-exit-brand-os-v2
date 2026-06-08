# Golden Atomic Brand References (GABR)

The pillar of the brand OS. **Golden** = best-in-class example of its type. **Atomic** = a single self-contained reusable unit. **Brand Reference** = fed back into an image model as in-context reference to generate net-new on-brand assets.

A rulebook tells a model what to do; golden references show it what *good* looks like. Each reference is stored next to the exact prompt that produced it (or its SVG source) + alt text. References are generated **incrementally, with human validation** — that validation is what makes them "golden."

> Built for Exit has two GABR modes: **vector** data graphics (authored as SVG in `../../motifs/`, rendered to PNG here) and **photographic** founder-alone / industrial scenes (generated, B&W). We will have MANY — this is the seed set.

## The seed set

| # | GABR | Mode |
|---|------|------|
| 01 | `gabr-01-dependency-diagram` | vector |
| 02 | `gabr-02-before-after` | vector |
| 03 | `gabr-03-exit-readiness-scorecard` | vector |
| 04 | `gabr-04-exit-readiness-radar` | vector |
| 05 | `gabr-05-progression-rail` | vector |
| 06 | `gabr-06-founder-alone` | photographic (gpt-image-2) |
| 07 | `gabr-07-control-room` | photographic (gpt-image-2) |

The logo matrix (the Hollow 4 mark, wordmark, B4E monogram, lockup) lives in `../../logos/` — pass those as references for any asset that reuses the mark.

## Disciplines

- **Validate each** with a human before it's golden.
- **Store the prompt next to the output** (`.prompt.md`), or note the SVG source for vector GABRs.
- **Pass references in** for reused elements (the Hollow 4, a recurring figure) so style never drifts.
- **Stamp the wordmark** on finished assets; don't let the model draw the wordmark text from scratch.
- To add one, follow `../skills/create-gabr/SKILL.md`.
