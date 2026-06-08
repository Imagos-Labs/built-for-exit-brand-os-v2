# Built for Exit — Brand OS (v2)

The Built for Exit brand as a machine-consumable system: near-black + Exit Yellow, the Hollow 4, the master prompt, and the Golden Atomic Brand References. Built with the [`generate-a-brand-os`](https://www.appliedai.wiki/playbooks/generate-a-brand-os) recipe (full brand-os-wiki form).

> **v2 — Ron Roberts's complete rethink (2026-06-08).** Supersedes the navy/gold/door v1 (kept intact next door at `../brand/`). Source material in [`static/brand/brand-source/ron-rethink-2026-06-08/`](./static/brand/brand-source/).

- **Read first:** [`BRAND.md`](./BRAND.md) (human front door) · [`brand.json`](./brand.json) (structured data) · [`tokens.css`](./tokens.css) (color + type + space + shape).
- **Prime any agent with one link:** `/brand.txt` (auto-generated at build time from `brand.json` + assets).
- **Asset package:** [`static/brand/`](./static/brand/) (served at `/brand/...`) — logos, motifs, templates, generation layer, GABRs.
- **Live human surface:** the landing page at [builtforexit.ai](https://builtforexit.ai) (separate repo, `../landing-page/`; still on v1 — rebuild to v2 is a follow-on).

## Run the portal

```bash
pnpm install
pnpm start      # dev; pnpm build for production
```

`prebuild`/`prestart` regenerate `static/brand.txt` from `brand.json`. Set `brand.json#site_url` (or `BRAND_BASE_URL`) once deployed so its absolute asset URLs are correct.

## Maintenance

This is a living brand OS, not a one-time scaffold. To add a new GABR to the canon, follow the hosted [`create-gabr`](./static/brand/generation-layer/skills/create-gabr/SKILL.md) skill. To make a one-off on-brand asset, follow [`create-on-brand-image`](./static/brand/generation-layer/skills/create-on-brand-image/SKILL.md). The logos were generated with gpt-image-2 from Ron's brand sheet; vector motifs are authored SVGs in `static/brand/motifs/`. Do not re-run the full `generate-a-brand-os` recipe; edit the repo directly.
