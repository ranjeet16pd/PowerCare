# PowerCare Services — marketing site

Responsive single-page website for an electrical panel and generator service business in India. Built with **React**, **Vite**, **Tailwind CSS**, **shadcn/ui-style components**, **Hono** on **Cloudflare Workers**, and the official **`@cloudflare/vite-plugin`**.

Primary goal: drive **phone** and **WhatsApp** service enquiries (no payments or accounts in v1).

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (Vite + Worker run together on one origin).

### Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Local dev (SPA + `/api/*` on same domain) |
| `npm run build` | Typecheck and production build |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build and deploy to Cloudflare Workers |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript project references |

### Health check

After deploy or in dev:

```bash
curl -s http://localhost:5173/api/health
```

## Configure business details

Edit **`src/config/business.ts`** (single source of truth):

| Field | Purpose |
|-------|---------|
| `name` | Business name shown across the site |
| `serviceArea` | Optional city / region (hidden until you fill it in) |
| `phoneDisplay` / `phoneTel` | Visible label and `tel:` link digits |
| `whatsappDisplay` / `whatsappNumber` | Label and `wa.me` number (10-digit or with `91`) |
| `businessHours` | Footer contact block |
| `heroImage` | Path under `public/` and alt text |
| `meta` | Page title and meta description |
| `offers` | Promotional offers (free inspection visit, estimate-before-repair) |

Leave `serviceArea` empty until you have a city to list — it will not show on the site. Replace sample reviews in `src/data/reviews.ts` with customer-approved quotes when you have them.

### Images

Licensed Unsplash/Pexels photos live in `public/images/`:

| File | Used on |
|------|---------|
| `hero-electrical-panel.jpg` | Hero + panel upgrades card |
| `electrician-at-work.jpg` | Hero inset + Why choose us |
| `service-panel-repair.jpg` | Panel inspection card |
| `service-generator.jpg` | Generator card |
| `service-amf.jpg` | AMF/ATS card |
| `service-amc.jpg` | Annual maintenance + How it works |
| `segment-*.jpg` | Who we serve tiles |

Replace any file with your own licensed site photo (keep the same filename) — no code change needed for most of them. Hero/technician paths are in `business.ts`.

### Sample reviews

Demo testimonials live in **`src/data/reviews.ts`** with `isDemo: true`. Replace with real, customer-approved quotes when ready. Keep the demo banner logic or remove `isDemo` entries as you migrate.

## Project layout

```text
src/           React UI, sections, config, data
worker/        Hono API (`GET /api/health`)
shared/        Enquiry types and Indian mobile validation
public/        Static images and favicon
wrangler.jsonc Cloudflare Worker + SPA asset routing
```

## Production URL

**Live site:** [https://powercare-services.powercare-prod.workers.dev](https://powercare-services.powercare-prod.workers.dev)

Health check: `https://powercare-services.powercare-prod.workers.dev/api/health`

## Auto-deploy from GitHub (recommended)

Every push to **`main`** on [github.com/ranjeet16pd/PowerCare](https://github.com/ranjeet16pd/PowerCare) runs `.github/workflows/deploy.yml` and updates production.

### One-time setup (GitHub secret)

1. In [Cloudflare](https://dash.cloudflare.com/profile/api-tokens), create an API token:
   - **Use template:** “Edit Cloudflare Workers”
   - Or custom permissions: **Account → Workers Scripts → Edit**, **Account → Workers KV Storage → Edit** (if prompted), **Account → Account Settings → Read**
2. In GitHub: **PowerCare → Settings → Secrets and variables → Actions → New repository secret**
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: paste the token from step 1
3. Push any commit to `main` (or re-run the workflow under **Actions**).

After the secret is set, you only need to **push code** — no manual `npm run deploy` on your laptop.

## Manual deployment (Cloudflare Workers)

1. Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/) and log in: `npx wrangler login`
2. Optionally change the Worker name in `wrangler.jsonc` (`name` field).
3. Deploy:

```bash
npm run deploy
```

Routing:

- Static assets and SPA fallback: Vite build output
- `/api/*` handled by the Worker first (`run_worker_first` in `wrangler.jsonc`)
- Client routes fall back to `index.html` without swallowing API routes

No database or separate VPS — enquiries open **WhatsApp** with a pre-filled message.

## Customisation notes

- **Services / FAQs / copy**: section components under `src/components/`; service list in `business.ts`.
- **Colours**: navy + amber theme in `tailwind.config.js` and `src/index.css`.
- **Reduced motion**: hero uses `motion-safe:` animation utilities; global `prefers-reduced-motion` adjusts scroll behaviour.

## Licence

Use and adapt for your business. Replace placeholder content and images before going live.
