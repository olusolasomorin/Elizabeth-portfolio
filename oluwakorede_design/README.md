# Oluwakorede Design — Portfolio

Portfolio site for a graphic designer, built with React 19, Vite, Tailwind CSS v4 and React Router.
The design comes from the "Graphic Designer Portfolio Website" canvas (desktop and mobile artboards).

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the production build
npm run lint
```

## Project structure

```
src/
  app/            router + root layout (contact dialog, scroll restoration)
  components/
    layout/       Header, MobileMenu, Footer, Logo, PageShell, navigation
    contact/      ContactDialog (modal on desktop, bottom sheet on mobile), ContactForm
    projects/     ProjectCard, ProjectCover, CoverArt (illustrated covers), FilterTabs
    services/     ServiceArt, Faq
    sections/     ProcessSection, ClientsStrip (shared page sections)
    ui/           Button, RichText, Media/Portrait, Decor (badge, sticker, marquee), Shapes, Typography
  context/        ContentProvider (site content + theme), ContactDialogProvider
  data/           seed content — the single source of truth for all copy, projects and settings
  hooks/          useContent, useContactDialog, useDialog, useProjectFilter, useCopyToClipboard
  pages/          Home, Work, Project (case study), Services, About, NotFound
  services/       contentApi (load content), contactApi (submit enquiries)
```

## Content and the future admin dashboard

All copy, projects, services, packages, FAQs, contact details, socials, uploads and brand
colours live in `src/data` and are read through `useContent()`. Nothing is hard-coded in pages,
so the admin dashboard only has to produce the same data shape.

- **Content API**: set `VITE_API_BASE_URL` and expose `GET /content` returning the shape of
  `seedContent` in `src/data/index.js`. Missing keys fall back to the seed.
- **Contact form**: set `VITE_CONTACT_ENDPOINT` to receive enquiries as a JSON `POST`.
  Without it, submissions are simulated (logged in dev).
- **Uploads**: `settings.media` (`cvUrl`, `portrait`, `aboutPortrait`, `studioPhoto`,
  `sketchbookPhoto`), `project.cover.image`, `project.caseStudy.heroImage`,
  `project.caseStudy.gallery[]`, `clients[].logo`, `home.testimonial.avatar` and
  `aboutPage.interests.items[].image` accept image URLs. While empty, the designed placeholder renders.
- **Projects**: add/remove entries in `projects`. `cover.art` picks an illustrated cover until a
  cover image is uploaded; `featured`, `showOnHome` and `layout` control placement.
- **Theme**: `settings.theme.wine` and `settings.theme.accent` recolour the whole site at runtime.
- **Emphasis**: headings accept `*word*` to render the design's italic wine-coloured word.
- **Admin routes**: mount the dashboard as a lazy `/admin/*` branch in `src/app/router.jsx` so it
  never ships with the public bundle.

## Deployment

It is a single-page app. `public/_redirects` (Netlify) and `vercel.json` (Vercel) rewrite all
routes to `index.html`; configure the equivalent on other hosts.
