# CS Arora website handoff

Static marketing website for CS ARORA, Prayagraj. It uses Next.js App Router and builds to a static `out/` folder. All website copy, SEO copy and structured-data values live in `src/content/site.ts`.

No deployment has been performed. No form endpoint has been chosen or configured.

## Setup, build and static preview

```bash
npm install
npm run dev
```

Quality checks and static build:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

`npm run build` writes the deployable static site to `out/`. Preview it with any static file server, for example:

```bash
python -m http.server 4173 --bind 127.0.0.1 --directory out
```

Then open `http://127.0.0.1:4173/`. `npm run start` is not required for the exported `out/` folder.

## Environment variables

Copy `.env.example` to `.env.local` for local development. `NEXT_PUBLIC_*` values are embedded in the browser bundle at build time, so rebuild after changing any of them. Never put secrets in a `NEXT_PUBLIC_*` variable.

| Variable | Current example value | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | empty in `.env.example` | Canonical base URL used by metadata, canonical tags, Open Graph, sitemap and robots. A blank value builds with the internal `https://example.invalid` fallback, but a real production URL is a launch blocker. |
| `NEXT_PUBLIC_FORM_ENDPOINT` | empty in `.env.example` | Optional JSON `POST` endpoint for all three forms. When blank, or when a POST fails, each form shows a WhatsApp fallback link. No endpoint is selected or configured. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `919473595944` | Digits-only number used for `wa.me` links and form fallbacks. Change only if Mr Arora supplies a different number. |
| `NEXT_PUBLIC_PREVIEW_TODO_COURSES` | `false` | Preview-only flag for local layout review of placeholder courses. Keep `false`/unset for production. Do not enable it on a live site. |

### Form endpoint contract

All forms `POST` JSON to `NEXT_PUBLIC_FORM_ENDPOINT` with `Content-Type: application/json`, `Accept: application/json`, a 12-second timeout, and a 2xx response treated as success. The endpoint must allow CORS from the production origin. Payloads include:

- `source: "contact"` — `name`, `mobile`, `message`, `consent`, `submittedAt`
- `source: "courses-waitlist"` — `name`, `mobile`, `courseInterest`, `submittedAt`
- `source: "project-finance"` — qualification answers, `name`, `mobile`, optional `email`, `callTime`, `consent`, computed `priority`, `submittedAt`

### Form endpoint options

| Option | Pros | Cons |
| --- | --- | --- |
| Static form service such as Formspree, Getform, FormSubmit or Web3Forms | Fast to set up; no server to maintain; email notifications available. | Third-party quotas, spam filtering and privacy terms; endpoint is public; limited custom validation. Avoid secret-bearing URLs because the endpoint is embedded in the client bundle. |
| Serverless function on Netlify, Vercel or Cloudflare Pages | Full control over validation, spam checks and routing; email/CRM secrets can stay server-side. | More setup and ongoing maintenance; provider limits and cold starts. |
| WhatsApp-only fallback, which is the current behavior when the endpoint is blank | Uses the verified number; no backend or vendor needed. | Manual triage; opens a pop-up; no server-side record or notification; less reliable than a real endpoint. |
| Direct browser-to-email/CRM API calls | Can integrate directly with a chosen tool. | Usually exposes API keys in the browser; not recommended for this static site. |

No option above has been chosen or configured.

## Editing content

Edit `src/content/site.ts` only for website copy, SEO copy, structured-data values and TODO placeholders. `hindiEnabled` is currently `false`; most `hi` fields still contain `[[TODO: Hindi]]`.

A `[[TODO: ...]]` marker is intentionally literal text and is a launch blocker. Optional URLs containing a TODO marker are suppressed from links, but they still need real values before launch. Keep the loan-sanction disclaimer visible and do not add invented numbers, testimonials, logos, ratings, reviews or guarantees.

## Publishing courses

Both sample courses in `courses` have `published: false`. `getPublishedCourses()` in `src/lib/content.ts` only returns courses that are published and free of placeholder slug/title/price/payment values. `getCoursesForDisplay()` only adds placeholder courses when `NEXT_PUBLIC_PREVIEW_TODO_COURSES=true`.

To publish a course:

1. Replace every `[[TODO: ...]]` value for that course, including title, subtitle, audience, outcomes, modules, format, duration, language, price, certificate, next batch and payment URL.
2. Set a real stable `slug` and set `published: true`.
3. Rebuild and verify that its detail route appears in `out/`, `sitemap.xml` and navigation.
4. Keep the preview flag false/unset in production.

No `Course` structured data is present because no course is published. Do not add `aggregateRating`, `Review` or `Course` schema without a separate verified-data review.

## Static hosting options

No deploy has been made. Any of these can serve `out/`:

| Host | Pros | Cons |
| --- | --- | --- |
| Netlify | Simple Git integration, preview deploys, easy redirects/headers; serverless functions available if a form endpoint is added. | Vendor-specific workflow and build limits. |
| Vercel | Strong Next.js workflow, preview deploys, easy custom domains; serverless functions available. | Vendor-specific workflow and usage limits. |
| Cloudflare Pages | Static hosting on a global edge network; simple custom domains. | Forms/functions need separate configuration. |
| GitHub Pages | Free and simple for a public static site. | Limited headers/functions; custom domain and HTTPS setup are manual. |
| S3/CloudFront or another object-host CDN | Full control over caching, headers and access. | More infrastructure and maintenance. |

Before hosting, set `NEXT_PUBLIC_SITE_URL` to the real production origin and rebuild so canonical URLs, Open Graph URLs, sitemap and robots use the correct domain.

## TODO inventory

Launch is blocked while any visible `[[TODO: ...]]` remains in the built site. The last static build had visible TODO text on `/`, `/book/`, `/privacy/`, `/project-finance/`, `/refund-policy/`, `/terms/` and `/`. Social URL placeholders are hidden from rendering but remain in source and must also be supplied.

### Items Mr Arora / the client needs to supply or confirm

- Google review URL. Do not derive ratings or reviews from this.
- Prices for all six services.
- Full content for both sample courses: title, subtitle, audience, outcomes, modules, format, duration, language, price, certificate, next batch and real payment links.
- Consultation process answer.
- Service area outside Prayagraj.
- Course delivery format answer.
- Facebook, Instagram, YouTube, Justdial and Goodreads URLs.
- Document checklist for the project-finance page.
- Confirmed chapter list for *Business Plan and Project Report*.
- Refund terms.
- Course access terms.
- Legal review before launch of privacy policy, terms of use and refund policy.
- Hindi translations for all `hi` fields currently marked `[[TODO: Hindi]]`.
- High-resolution professional portrait, at least 1200x1500.
- Approved client logo for replacing the unused `logo.svg` placeholder and the interim favicon and apple-touch icon.

### Items for the developer

- Set `NEXT_PUBLIC_SITE_URL`, rebuild, and verify canonical URLs, sitemap, robots and Open Graph URLs.
- Choose/configure `NEXT_PUBLIC_FORM_ENDPOINT`, test all three forms including success and failure paths, and confirm CORS.
- Keep `NEXT_PUBLIC_PREVIEW_TODO_COURSES=false`/unset and `getPublishedCourses()` empty until real courses are approved.
- Replace the interim `favicon.ico`, `apple-touch-icon.png` and unused `logo.svg` only when the client logo is supplied. Do not design a logo or add invented branding.
- After every content change, rerun `npm run lint`, `npx tsc --noEmit`, `npm run build`, the internal link/hash check, mobile Lighthouse, keyboard/responsive checks and the forbidden-token scan.
- Verify that `aggregateRating`, `Review`, `Course`, gold/cream/yellow tokens and invented numbers are absent from source and built pages.
- Deploy the static `out/` folder to the chosen host and verify the live domain, 404 behavior, sitemap, robots, structured data and forms.

## Launch checklist

- [ ] No visible `[[TODO: ...]]` text remains in `out/`.
- [ ] All source TODO values, including hidden social URLs and Hindi placeholders, are replaced or explicitly removed with client approval.
- [ ] Real `NEXT_PUBLIC_SITE_URL` is set and the site is rebuilt.
- [ ] Form endpoint is configured and all three forms are tested end to end.
- [ ] Preview course flag is false/unset; only approved published courses appear.
- [ ] Client logo replaces the interim favicon, apple-touch icon and unused logo placeholder.
- [ ] High-resolution portrait replaces the low-resolution supplied portrait.
- [ ] Legal pages are reviewed by the client.
- [ ] Loan-sanction disclaimer remains visible.
- [ ] No `aggregateRating`, `Review`, `Course`, invented numbers, testimonials, logos or guarantees.
- [ ] Lint, typecheck, build, link/hash, Lighthouse, keyboard and responsive checks pass.
- [ ] Static site is deployed and verified on the real domain.
