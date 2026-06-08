# Built for Exit — Visual System (SPEC)

> Status: v2 (Ron's rethink). The brand has TWO visual modes: **photographic** (founder-alone, industrial, B&W) and **vector data graphics** (dependency diagrams, scorecards, radar, before/after). NO illustration. The Golden Atomic Brand References in `../golden-atomic-brand-references/` are the canonical set; this spec defines how to add to it so every new asset lands in the same world.

## The job

A reusable visual system that carries the Built for Exit register — a private equity firm × a luxury automotive brand × an elite operating-system company — across heroes, section graphics, the blog, newsletter, social, slides, and broadcast. Generated through one funnel: the master prompt + a per-asset description + the reference set, so identity rides in stable artifacts and only the per-asset content varies.

## Inputs (the generation layer)

- **Master prompt:** `../master-prompt.md` (paste first, every render).
- **Banned terms:** `../banned-terms.md` (enforce every render).
- **Reference set:** the Hollow 4 mark (`../../logos/raster/mark-4-yellow.png`) and the nearest existing GABR. Pass these as reference images so the dark palette, the one accent, and the type stay locked.
- **Model:** OpenAI gpt-image-2 via the `chatgpt-images` skill (used to author this brand's logos), or Nano Banana Pro via `nano-banana-pro`. Both accept `--input-image` references. **Vector graphics (diagrams, scorecards, radar) are authored as SVG** for crispness — edit the source in `../../motifs/` directly rather than generating.

## Canvas + format

- **Heroes:** 1536x1024 (landscape), composed so a left scrim can carry an uppercase grotesk headline on the live site.
- **Section graphics / diagrams:** SVG source in `../../motifs/`; framed on-site with a 1px steel rule.
- **Social square:** 1:1. **Stat card:** 1:1 or 4:5 (`../../templates/stat-card.svg`).
- **Founder portraits:** black-and-white photography only, founder alone. Never colorize, never illustrate, never a smiling team.

## The asset types in this universe

1. **Founder-alone hero** (photographic): a single founder in an empty office / hangar / control room, B&W, one Exit-Yellow anchor.
2. **Dependency diagram** (vector): founder at center, every function wired back to one node.
3. **Before / after** (vector): FOUNDER JOB → TRANSFERABLE ASSET, two cards, the "after" in yellow.
4. **Scorecard** (vector): `72 / 100` Exit Readiness Score™ with five pillar bars.
5. **Radar** (vector): five-pillar Exit Readiness Index™ pentagon.
6. **Stat card / social** (vector): one mono number, one yellow accent, faint Hollow 4 watermark.
7. **Broadcast** (vector): podcast lower-third plate (`../../templates/podcast-lower-third.svg`).

## Discipline

- Version-control every prompt next to its output (`gabr-NN-*.prompt.md` for canon; an adjacent `.prompt.md` for one-offs).
- Curate golden examples: when a render nails the register, it becomes a GABR (see [`../skills/create-gabr/SKILL.md`](../skills/create-gabr/SKILL.md)) and is passed as a reference on the next render.
- Run an alignment audit after each batch: if a render sharpened the palette or motif, pull `BRAND.md` and `brand.json` up to match.
- **Stamp the real wordmark** on finished/distributed assets; never let the model draw the wordmark text from scratch.

## Done when

Handing the master prompt + reference set to an agent and asking for a hero, a diagram, and a social square returns three assets that are unmistakably one brand — dark, engineered, Exit-Yellow at the one value moment — without further direction.
