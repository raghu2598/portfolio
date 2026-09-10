# Raghavendra D C — Portfolio

A production-ready, single-page personal portfolio built with React, TypeScript, and Tailwind CSS.

## 1. Overview

This project presents Raghavendra D C's professional profile: about, skills, experience, key
projects, education, certifications, and contact information. All content is sourced from the
resume and maintained in `src/data/`.

## 2. Technologies

- React 18 + TypeScript
- Vite (build tool and dev server)
- Tailwind CSS (styling)
- Lucide React (icons)
- ESLint + Prettier (code quality)

No backend, no contact form, and no external UI framework beyond Tailwind — the project stays
lightweight and easy to maintain.

## 3. Installation

```bash
npm install
```

## 4. Development

```bash
npm run dev
```

Opens the app locally (Vite prints the local URL, typically `http://localhost:5173`).

## 5. Production build

```bash
npm run build
npm run preview
```

`npm run build` type-checks the project and outputs static files to `dist/`.
`npm run preview` serves the built `dist/` folder locally so you can verify the production build.

Lint the code with:

```bash
npm run lint
```

## 6. How to replace the profile photo

Replace `public/images/profile.jpg` with your own image.

- File name must be exactly `profile.jpg`
- Recommended: a square image, at least 500x500px
- The layout automatically crops it into a circle (`object-fit: cover`)
- If the file is missing, the Hero section automatically shows an initials placeholder instead of
  breaking the UI

## 7. How to replace the resume

Replace `public/resume/Raghavendra_DC_Resume.pdf` with your updated resume PDF, keeping the same
file name. The "Download Resume" button on the Hero section links directly to this file.

## 8. Where portfolio content is maintained

All text content lives in `src/data/` and is imported by the components — there is no duplicated
content across files:

- `src/data/profile.ts` — name, headline, summary, contact links, resume/profile image paths
- `src/data/experience.ts` — professional experience timeline
- `src/data/projects.ts` — key projects
- `src/data/skills.ts` — skill categories
- `src/data/certifications.ts` — certifications and education

To update your portfolio, edit these files — no need to touch the components.

## 9. How to deploy

### Vercel (recommended)

1. Push this repository to GitHub (see below).
2. Go to [vercel.com](https://vercel.com), import the GitHub repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. Vercel gives you a live URL immediately after the build finishes.

### Netlify

1. Push this repository to GitHub.
2. Go to [netlify.com](https://netlify.com), "Add new site" → "Import an existing project".
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

No backend or environment variables are required for either platform.

## 10. How to push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: personal portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Project structure

```
src/
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    Experience.tsx
    Projects.tsx
    Education.tsx
    Certifications.tsx
    Contact.tsx
    Footer.tsx
  data/
    profile.ts
    experience.ts
    projects.ts
    skills.ts
    certifications.ts
  App.tsx
  main.tsx
  index.css
public/
  images/
    profile.jpg   (add your own image here)
  resume/
    Raghavendra_DC_Resume.pdf
```
