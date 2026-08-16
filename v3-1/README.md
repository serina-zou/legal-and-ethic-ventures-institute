# Legal & Ethics Ventures Institute

Presentation website (Next.js + TypeScript + Tailwind CSS).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Orphan-word audit

Checks every text block at 6 viewport widths (320 → 1920) and fails if any last line has a single word :

```bash
# with the dev server running on :3000
npm run audit:orphans
```
