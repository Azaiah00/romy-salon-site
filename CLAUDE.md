# Romy Salon &amp; Spa — Production Website

This file is your project brief. When you open Claude Code in this directory, it will read this file first so it has full context. Update it as the project evolves.

---

## The business

**Romy Salon &amp; Spa** is a master-stylist-led luxury hair color, facial, and full-service salon &amp; spa in Old Town Fairfax, Virginia. Founded 2025. Owner: Romy (master stylist, color theorist).

- **Address:** 3950 University Drive, Suite 211, Fairfax, VA 22030
- **Phone:** 571.407.5801 (call) · 571.682.8482 (text/WhatsApp)
- **Email:** info@romysalon.com
- **Hours:** Mon–Thu 10a–7p · Fri–Sat 9a–7p · Sun 12p–5p
- **Booking:** Mangomint — `https://booking.mangomint.com/romysalonandspa`
- **Social:** [@romy_salonandspa](https://www.instagram.com/romy_salonandspa/) (IG) · [@romysalonandspa](https://www.tiktok.com/@romysalonandspa) (TikTok) · [@Romyhairandmakeup](https://www.facebook.com/Romyhairandmakeup/) (FB) · [Yelp](https://www.yelp.com/biz/romy-salon-and-spa-fairfax)

---

## Goal of the rebuild

The current site at `romysalon.com` is a Next.js template clone with unfinished demo pages (`/index2`, `/index3` containing Lorem Ipsum), broken footer links, no SEO, no Schema markup, and a generic look. We are rebuilding from scratch to support a 12-month strategy of becoming the #1 salon in Fairfax County (vs. Dante, Roy Salon, Jon David, Salon Simis, Ersin Seçilmiş).

**Success looks like:** Top-3 ranking for "hair salon Fairfax VA" within 12 months, 250+ Google reviews by month 12, 6,000+ monthly organic visitors, NoVA Magazine 2027 nomination.

---

## Tech stack

- **Framework:** Astro 5 (chosen for content-site performance + SEO)
- **Hosting:** Vercel (free tier, auto-deploy on git push to main)
- **CMS:** None yet — content is in component data files. Phase 2 may add Sanity if Romy wants to self-edit.
- **Booking:** Mangomint (do not replace — it's already working)
- **Analytics:** Add Google Analytics 4 + Meta Pixel once deployed (don't add during dev)
- **Fonts:** Cormorant Garamond (display, serif) + Montserrat (UI) + Open Sans (body) — all from Google Fonts

---

## Brand &amp; voice

**Positioning statement:** *"Romy Salon &amp; Spa is the only master-stylist-led luxury color &amp; transformation studio in Old Town Fairfax — where every appointment is personally crafted, not chair-rented."*

**Voice:**
- Warm, confident, quietly luxurious
- Editorial — think Vogue Beauty, Sézane, Goop (but tasteful)
- Specific, not generic ("Olaplex-certified" not "high-quality products")
- Romy as a master craftsperson, not a chain CEO
- A note of humor when appropriate ("the part everyone secretly comes for")

**Color palette (locked in `src/styles/global.css`):**
- `--bg` `#FDF8F4` warm ivory (page background)
- `--bg-soft` `#FAF0EC` blush wash
- `--bg-cream` `#F6EBE4` deeper cream
- `--paper` `#FFFFFF` cards
- `--gold` `#D6B981` champagne (Romy's actual brand color from old site)
- `--gold-deep` `#B8975B`
- `--rose` `#E8B4B8` dusty blush pink
- `--rose-pale` `#FCE9EB` lightest blush
- `--mauve` `#A67F8E` dusty mauve (gradients only)
- `--ink` `#000000` all body text (kept black for readability per client direction)

**Typography:**
- Headlines: Cormorant Garamond, weight 400-500, with italic accents on key words
- UI/buttons/eyebrows: Montserrat, weight 500-700, wide letter-spacing, uppercase
- Body text: Open Sans, weight 400, 1.7 line-height

**Decorative touches:**
- ❀ floral character used as bullet, divider ornament, badge separator
- Box-shadow offsets (`25px 25px 0 var(--rose-pale)`) for editorial photo treatment
- Italic on key words inside otherwise-roman headlines

---

## Site architecture

Five priority pages at launch (Phase 1). 15+ SEO landing pages in Phase 2 (months 4-6).

### Phase 1 — must launch with

| Page | Route | Status | Purpose |
|------|-------|--------|---------|
| Home | `/` | ✅ Built (`src/pages/index.astro`) | Hero · services preview · master story · signature ritual · lookbook · reviews · bridal teaser · location |
| About / The Studio | `/about` | ⏳ Not built — convert from `../Website Mockup/about.html` | Romy's full story · philosophy · credentials · studio photos · what to expect |
| Services | `/services` | ⏳ Not built — convert from `../Website Mockup/services.html` | Full pricing menu · 6 categories · 3 signature packages |
| Bridal | `/bridal` | ⏳ Not built — convert from `../Website Mockup/bridal.html` | Hero · 3 packages · gallery · 4-step process · testimonials · inquiry form |
| Contact / Visit | `/contact` | ⏳ Not built — convert from `../Website Mockup/contact.html` | Info · hours · parking · map · Mangomint embed · FAQ |

The complete HTML for all four remaining pages is in `../Website Mockup/`. To convert each one:
1. Read the source HTML (e.g. `../Website Mockup/about.html`)
2. Extract the body content (drop the `<head>`, `<header>`, `<footer>`, top bar — those are now in `BaseLayout.astro`)
3. Wrap the content in `<BaseLayout title="..." description="..." activePage="about">...</BaseLayout>`
4. Move any page-specific `<style>` block into a scoped `<style>` block at the bottom of the `.astro` file
5. Convert relative paths (`about.html` → `/about`)
6. Verify it renders in `npm run dev`

### Phase 2 — SEO landing pages (months 4-6)

After Phase 1 launches, add ~15 location/service landing pages following the Roy Salon playbook (executed better):

- `/balayage-fairfax-va`
- `/hair-color-fairfax-va`
- `/balayage-vienna-va`
- `/bridal-hair-oakton`
- `/hair-color-fairfax-station`
- `/quinceanera-fairfax` (Spanish-language)
- `/head-spa-massage-northern-virginia`
- `/facial-old-town-fairfax`
- `/color-correction-fairfax`
- `/fantasy-hair-color-dmv`
- ...etc

Each follows the same template: hero, dedicated service description (~600 words), FAQ, gallery, pricing, related services, "Book this service" CTA. Use Astro content collections for these.

---

## Logo handling

The header and footer use Romy's actual logo from her current site:
- **Header:** hotlinks `https://romysalon.com/assets/images/logos/logo5.png` (dark-on-light, full color)
- **Footer:** hotlinks `https://romysalon.com/assets/images/logos/white-logo.png` (white-on-transparent for the dark footer)
- **Favicon:** also hotlinks `logo5.png` from the current site

**To swap to local files** (preferred for production):
1. Drop the high-res logo files into `public/`:
   - `public/logo.png` (full-color version for header)
   - `public/logo-white.png` (white version for footer)
   - `public/favicon.png` (square crop ~512×512 for favicon)
2. Update `src/components/Header.astro` — change `LOGO_URL` constant from the romysalon.com URL to `/logo.png`
3. Update `src/components/Footer.astro` — change the `<img src>` from the romysalon.com URL to `/logo-white.png`
4. Update `src/layouts/BaseLayout.astro` — change the favicon `href` to `/favicon.png`
5. The `/favicon.svg` (champagne-gold R monogram) stays as the alternate icon fallback

When Romy provides a higher-quality original (ideally SVG vector format), use that instead.

## Image strategy

**Current state:** Images hotlink from `romysalon.com/assets/images/...` — works in dev, will work in production but isn't optimal.

**Production path:**
1. Romy has photos downloaded — get them, drop into `public/images/`
2. Use Astro's `<Image>` component from `astro:assets` for auto-optimization (AVIF/WebP, srcset, lazy loading)
3. Replace hotlinks with local optimized images
4. Aim for hero images &lt;200KB, gallery thumbs &lt;80KB

Until then, hotlinks are fine. The strategy doc recommended a real editorial photoshoot for Phase 2 — those photos will replace everything when they're ready.

---

## SEO requirements (non-negotiable)

Every page must have:
- Unique `<title>` (page-specific keyword + brand)
- Unique `<meta name="description">` (155 chars max)
- `<link rel="canonical">`
- Open Graph + Twitter Card tags
- Schema.org JSON-LD (HairSalon on all pages, plus FAQPage on contact, Service on service pages)
- Proper heading hierarchy (one `<h1>`, then `<h2>`, etc.)
- Alt text on every image

The `BaseLayout.astro` handles most of this — just pass the right props. LocalBusiness Schema is included once site-wide.

---

## How Mangomint integrates

Right now: "Book Now" buttons link out to `https://booking.mangomint.com/romysalonandspa` in a new tab.

Better (when we want it): Mangomint supports inline embed via iframe. The contact page mockup has a placeholder where the iframe should go — replace with the actual embed code Mangomint provides in their dashboard. Mangomint's docs: search "Mangomint embed booking widget."

---

## Things to verify with Romy before publishing

These are educated guesses I made in the mockup. Before launch:

- Package pricing (`Color Journey $375`, `Reset Day $485`, `Bride Suite $625`) — confirm
- "15+ years experience" credential — confirm
- "Olaplex certified" claim — confirm she carries Olaplex
- "Free parking + Old Town Hall lot" — verify with Romy
- Two bridal testimonials (Sarah K. at Westwood, Isabella R. quinceañera) — these are placeholders, replace with real testimonials
- "Established 2025" — confirm year
- All service prices in `services.html` — confirm against her real Mangomint menu

---

## Deployment

Vercel.

```bash
# First time setup
npm install -g vercel
vercel login
vercel link        # link this directory to a Vercel project

# Deploy
vercel             # preview deploy
vercel --prod      # production deploy
```

Or connect the GitHub repo in Vercel's dashboard and every `git push origin main` will auto-deploy. The custom domain (`romysalon.com`) is configured by adding it in Project Settings → Domains and updating DNS to point to Vercel.

---

## What to work on next

When Frederick opens this project in Claude Code, the natural first prompts are:

1. **"Convert the remaining 4 mockup pages to Astro."** — Read `../Website Mockup/about.html` (and services, bridal, contact), port each to `src/pages/<name>.astro` using `BaseLayout`. Following the conversion steps in this file.
2. **"Run the dev server and verify the homepage renders."** — `npm install &amp;&amp; npm run dev`
3. **"Add the favicon."** — Generate a brand mark, save as `public/favicon.svg`
4. **"Download the images locally and switch from hotlinks to `<Image>`."** — once Romy provides the asset folder
5. **"Add a 404 page that matches the brand."**
6. **"Add a blog/journal at `/journal` with Astro content collections."**
7. **"Add the gift card landing page at `/gift`."** — Pull from the strategy doc, embed Mangomint eGift flow

---

## Reference materials in this folder structure

- **`/Romy Salon/`** (parent)
  - **`Romy_Salon_Marketing_Plan_Interactive.html`** — the full audit + 12-month strategy with competitor analysis
  - **`Romy_Salon_Audit_Strategy_Report.pdf`** — printable version
  - **`Website Mockup/`** — five static HTML mockups (`index.html`, `about.html`, `services.html`, `bridal.html`, `contact.html`) — these are the source-of-truth designs to port from
  - **`romy-salon-site/`** — this Astro project (you are here)

The mockups are the design spec. Match them visually and functionally. The strategy doc is the why.
