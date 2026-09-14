# PlantBridge

English sales site for actual used concrete batching plants from China.

Domain (not connected yet): usedbatchingplant.com

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Contact config

Edit `lib/site.ts`:

- `whatsappNumber` — international digits only, no plus sign
- `email` — published inbox only

Do not invent numbers, prices, machine photos, or extra inventory.

## Static export

```bash
npm run build
```

Output: `out/` (Cloudflare Pages compatible static files)
