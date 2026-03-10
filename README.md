# CDS Registry

A [shadcn registry](https://ui.shadcn.com/docs/registry) serving Chainalysis design system components and design tokens over HTTP. Designers manage tokens in Figma via Token Studio; engineers pull components into their projects via CLI.

## How It Works

```
Figma (Token Studio) → GitHub push → CI transforms tokens → Vercel auto-deploys
```

1. Designer changes tokens (colors, radius, spacing) in Figma
2. Token Studio pushes `tokens/tokens.json` to this repo
3. GitHub Actions transforms tokens into CSS and rebuilds the registry
4. Vercel auto-deploys — the registry serves updated components and theme

No engineering involvement needed for token changes.

## What's In Here

| Directory | Purpose |
|---|---|
| `registry/new-york/ui/` | Base component source files (Button, Card, Input, ~55 components) |
| `tokens/tokens.json` | Design tokens from Token Studio — **do not hand-edit** |
| `app/globals.css` | Generated CSS from tokens — **do not hand-edit** |
| `public/r/` | Generated registry JSON files — **do not hand-edit** |
| `scripts/transform-tokens.js` | Transforms tokens → CSS via Style Dictionary |
| `scripts/patch-theme.js` | Post-build patch for consumer compatibility |
| `registry.json` | Manifest declaring all distributable items |

## Local Development

```bash
pnpm install
pnpm dev                  # Run the showcase site locally
pnpm tokens               # Transform tokens.json → globals.css
pnpm registry:build       # Build registry JSON + patch theme
pnpm pipeline             # Both steps combined
```

## Consuming This Registry

See [my-product-app](https://github.com/christian-chainalysis/my-product-app) for a working example.

### 1. Add the registry to your project's `components.json`:

```json
{
  "registries": {
    "@cds": {
      "url": "https://<registry-url>/r/{name}.json"
    }
  }
}
```

### 2. Pull components:

```bash
npx shadcn@latest add @cds/button @cds/card @cds/tabs
```

### 3. Pull the theme (design tokens):

```bash
npx shadcn@latest add @cds/theme
```

### 4. When design pushes updated tokens:

```bash
npx shadcn@latest add @cds/theme --overwrite
```

Your `git diff` will show CSS variable value changes in `src/app/globals.css`. Commit, PR, merge.

## Adding or Modifying Components

1. Edit the component in `registry/new-york/ui/`
2. If new, add an entry to `registry.json` with name, type, dependencies, and file path
3. Run `pnpm registry:build`
4. Commit and push — CI will also rebuild automatically

## Architecture

| Layer | Owner | What it contains |
|---|---|---|
| **Registry** (this repo) | Design team | Base building blocks — Button, Input, Badge, Card, etc. |
| **Component Library** (TBD) | Shared | Compositions — data grids, complex cards, autocomplete |
| **Product code** | Product teams | App-specific layouts and logic |

The registry provides all the building blocks. It does not prescribe how they're composed — product teams combine them as needed.

## Tech Stack

- Next.js 15, Tailwind CSS v4, shadcn v4
- Style Dictionary v5 + @tokens-studio/sd-transforms v2
- Token Studio for Figma (GitHub sync)
- Vercel (hosting + auto-deploy from main)
- pnpm
