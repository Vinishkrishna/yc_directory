This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
yc_directory
├─ app
│  ├─ (root)
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ api
│  │  └─ auth
│  │     └─ [...nextauth]
│  │        └─ route.ts
│  ├─ favicon.ico
│  ├─ fonts
│  │  ├─ WorkSans-Black.ttf
│  │  ├─ WorkSans-Bold.ttf
│  │  ├─ WorkSans-ExtraBold.ttf
│  │  ├─ WorkSans-ExtraLight.ttf
│  │  ├─ WorkSans-Light.ttf
│  │  ├─ WorkSans-Medium.ttf
│  │  ├─ WorkSans-Regular.ttf
│  │  ├─ WorkSans-SemiBold.ttf
│  │  └─ WorkSans-Thin.ttf
│  ├─ global.d.ts
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ studio
│  │  └─ [[...tool]]
│  │     └─ page.tsx
│  └─ Y
│     └─ [[...tool]]
│        └─ page.tsx
├─ assets
├─ auth.ts
├─ cd
├─ components
│  ├─ favicon.ico
│  ├─ Navbar.tsx
│  ├─ SearchForm.tsx
│  ├─ SearchFormReset.tsx
│  ├─ StartupCard.tsx
│  └─ ui
│     └─ button.tsx
├─ components.json
├─ create-sanity
├─ eslint.config.mjs
├─ lib
│  └─ utils.ts
├─ my-project
│  ├─ eslint.config.mjs
│  ├─ next.config.ts
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.mjs
│  ├─ public
│  │  ├─ file.svg
│  │  ├─ globe.svg
│  │  ├─ next.svg
│  │  ├─ vercel.svg
│  │  └─ window.svg
│  ├─ README.md
│  ├─ src
│  │  └─ app
│  │     ├─ favicon.ico
│  │     ├─ globals.css
│  │     ├─ layout.tsx
│  │     └─ page.tsx
│  └─ tsconfig.json
├─ next.config.ts
├─ npm
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  └─ logo.png
├─ README.md
├─ sanity
│  ├─ env.ts
│  ├─ lib
│  │  ├─ client.ts
│  │  ├─ image.ts
│  │  └─ live.ts
│  ├─ schemaTypes
│  │  ├─ author.ts
│  │  ├─ index.ts
│  │  └─ startup.ts
│  └─ structure.ts
├─ sanity.cli.ts
├─ sanity.config.ts
├─ tailwind.config.js
├─ tailwind.config.ts
└─ tsconfig.json

```