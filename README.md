# Romy Salon &amp; Spa — Website

> Production website for Romy Salon &amp; Spa, Old Town Fairfax VA. Built with [Astro](https://astro.build), deployed on [Vercel](https://vercel.com), developed with [Claude Code](https://docs.claude.com/en/docs/claude-code).

---

## Setup walkthrough (first time, Windows)

You'll do this once. Takes about 15 minutes.

### 1. Install Node.js (if not already installed)

Node.js is the runtime that Astro runs on. Get the **LTS version**.

- Go to [nodejs.org](https://nodejs.org) and download the Windows installer (LTS, ~22.x.x)
- Run the installer — accept all defaults
- Open a new PowerShell or Command Prompt window
- Verify:
  ```
  node --version
  npm --version
  ```
  You should see version numbers. If you get an error, restart your computer and try again.

### 2. Install Claude Code

Claude Code is the CLI tool you'll use to develop this site with AI assistance.

```
npm install -g @anthropic-ai/claude-code
```

Then log in (opens your browser to authenticate):
```
claude login
```

Full docs: [docs.claude.com/en/docs/claude-code](https://docs.claude.com/en/docs/claude-code)

### 3. Install the project dependencies

Open PowerShell, navigate into this folder, and run:

```
cd "C:\Users\LATITUDE-7400\Documents\Claude\Projects\Romy Salon\romy-salon-site"
npm install
```

This downloads Astro and a few other packages into `node_modules/`. Takes ~30 seconds.

### 4. Start the dev server

```
npm run dev
```

Astro will start a local server. Open the URL it shows (usually `http://localhost:4321`) — you should see the Romy Salon homepage live, with hot-reload as you edit.

To stop: Ctrl+C in the terminal.

### 5. Open Claude Code in the project

Open a new terminal in the same folder (keep `npm run dev` running in the other one) and run:

```
claude
```

Claude Code will start, read `CLAUDE.md`, and have full context about the project. Try this first prompt:

> *"Convert the remaining four mockup pages to Astro. The mockups are in `../Website Mockup/`. Use the same approach we used for the homepage — wrap content in BaseLayout, scope page-specific CSS, port everything else as-is. Start with the About page."*

Claude Code will work file by file. Verify each in the browser as it goes.

---

## Daily development

Once everything is set up, your loop is:

```
# Terminal 1 — keep running
npm run dev

# Terminal 2 — Claude Code
claude
```

Edit, ask Claude Code to make changes, see updates instantly in the browser.

---

## Project structure

```
romy-salon-site/
├── CLAUDE.md                 ← Project context — Claude Code reads this on every session
├── README.md                 ← This file (Frederick's setup guide)
├── package.json              ← Dependencies
├── astro.config.mjs          ← Astro config (sitemap, site URL)
├── tsconfig.json             ← TypeScript config
├── public/                   ← Static files (favicon, robots.txt, images)
│   └── robots.txt
└── src/
    ├── layouts/
    │   └── BaseLayout.astro  ← Page wrapper: &lt;head&gt;, header, footer, Schema.org
    ├── components/
    │   ├── TopBar.astro
    │   ├── Header.astro
    │   └── Footer.astro
    ├── pages/                ← Each .astro file = a page
    │   ├── index.astro       ✅ Homepage built
    │   ├── about.astro       ⏳ To build (mockup in ../Website Mockup/about.html)
    │   ├── services.astro    ⏳ To build
    │   ├── bridal.astro      ⏳ To build
    │   └── contact.astro     ⏳ To build
    └── styles/
        └── global.css        ← Shared design system (palette, type, components)
```

---

## Deploy to Vercel

When you're ready to put the site live:

### One-time setup

1. Push the project to a GitHub repo:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/romy-salon-site.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub (free).
3. Click **Add New Project** → select the `romy-salon-site` repo → click **Deploy**.
4. Vercel auto-detects Astro and deploys. Takes ~1 minute.
5. You get a free URL like `romy-salon-site.vercel.app`.

### Add Romy's custom domain (romysalon.com)

1. In Vercel → Project Settings → Domains → add `romysalon.com` and `www.romysalon.com`.
2. Vercel shows you DNS records to set at Romy's domain registrar (likely GoDaddy, Namecheap, or Google Domains based on where she bought the domain).
3. Update the DNS — usually takes 10–60 minutes to propagate.
4. Done — `romysalon.com` now points to your Astro site.

### Future deploys

Every `git push origin main` triggers an automatic deploy. No manual steps.

---

## Useful Claude Code prompts

Once the project is open, things you might ask:

- *"Convert ../Website Mockup/about.html into src/pages/about.astro using BaseLayout."*
- *"Add a /journal blog using Astro content collections with 3 starter posts on color trends."*
- *"Generate a brand-correct favicon as an SVG monogram (R) in champagne gold on cream."*
- *"Audit the homepage for accessibility — fix anything that isn't WCAG 2.2 AA."*
- *"Download the images from romysalon.com into public/images/ and switch from hotlinks to Astro's &lt;Image&gt; component."*
- *"Add a gift card landing page at /gift with the Mangomint eGift embed."*
- *"Set up Google Analytics 4 with the measurement ID I'll provide."*
- *"Build a 404 page that matches the brand."*

---

## Reference files in the parent folder

These are in `C:\Users\LATITUDE-7400\Documents\Claude\Projects\Romy Salon\`:

| File | What it is |
|------|-----------|
| `Romy_Salon_Marketing_Plan_Interactive.html` | Full audit + 12-month strategy. Open in browser. |
| `Romy_Salon_Audit_Strategy_Report.pdf` | Printable version of the strategy doc |
| `Website Mockup/index.html` | Homepage mockup — source of truth for the Astro homepage |
| `Website Mockup/about.html` | About page mockup |
| `Website Mockup/services.html` | Services page mockup |
| `Website Mockup/bridal.html` | Bridal page mockup |
| `Website Mockup/contact.html` | Contact page mockup |

---

## Questions while developing

If something isn't clear, check `CLAUDE.md` first — it has the brand voice, palette, content guidelines, and "things to verify with Romy" list. If still stuck, ask Claude Code:

> *"Look at CLAUDE.md and tell me what we should do about [specific question]."*
