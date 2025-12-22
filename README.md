# Bheem Singh – Personal Portfolio

Modern, responsive portfolio website for **Bheem Singh (Software Engineer I, Mohali, India)** built with:

- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion
- EmailJS (client-side contact form)

The site is fully static-exportable and compatible with GitHub Pages.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Environment Variables (EmailJS)

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

These correspond to your EmailJS **service**, **template**, and **public key**. They are used in the contact form at runtime and are safe to expose as `NEXT_PUBLIC_` variables.

## Available Scripts

- `npm run dev` – start the development server
- `npm run build` – build the app for production
- `npm run start` – run the production build locally
- `npm run lint` – run ESLint

## Static Export (GitHub Pages)

This project is configured for static export using `output: "export"` in `next.config.ts`.

Generate the static site (Next.js 16 automatically exports to `out` when you build):

```bash
npm run build
```

After the build finishes, the static files will be available in the `out` directory.

### Deploying to GitHub Pages

1. Commit and push this project to a GitHub repository.
2. Build the static site:
   ```bash
   npm run build
   ```
3. Push the contents of the `out` folder to:
   - The `gh-pages` branch, and enable GitHub Pages from that branch, **or**
   - The `docs` folder on your default branch (configure GitHub Pages to serve from `/docs`).

For a **user/organization site** (e.g. `bheem-singh.github.io`), you can publish the contents of `out` directly to the default branch.

If you host this portfolio in a repository sub-path (e.g. `github.com/user/portfolio` → `https://user.github.io/portfolio`), you may optionally set `basePath` and `assetPrefix` in `next.config.ts` to match the repo name.

## Structure & Sections

Key files:

- `src/app/layout.tsx` – root layout, fonts, global styling, and theme provider
- `src/app/page.tsx` – main one-page layout (Home, About, Skills, Experience, Projects, Contact)
- `src/components/` – all UI components, including:
  - `header.tsx`, `hero.tsx`, `about.tsx`, `skills.tsx`, `experience-timeline.tsx`, `projects.tsx`, `contact.tsx`, `footer.tsx`
  - `section.tsx` – reusable animated section wrapper using Framer Motion
  - `theme-provider.tsx`, `theme-toggle.tsx` – dark mode context and toggle

## Dark Mode

Dark mode is implemented using Tailwind CSS `dark` variants with the `class` strategy:

- `tailwind.config.ts` sets `darkMode: "class"`.
- `ThemeProvider` toggles `light`/`dark` on the `<html>` element and respects system preference.
- `ThemeToggle` in the header lets visitors switch between Light, Dark, and System modes.

## Animations

Framer Motion is used for:

- Hero section entrance and staggered text/buttons.
- Section-level fade-in + slide-up on scroll.
- Project card hover effects and project detail modal transitions.

## Contact Form

The **Contact** section uses EmailJS with a client-side form:

- Fields: Name, Email, Message (all required).
- Shows loading, success, and error states.
- No custom backend is required; EmailJS handles delivery.

Make sure your EmailJS template expects the following variables:

- `from_name`
- `from_email`
- `message`

## License

This portfolio source is intended as a personal site for Bheem Singh. You can adapt the structure and code for your own portfolio if desired.
