# Next.js Shadcn Starter

A modern, production-ready starter template for building web applications with Next.js 16, Shadcn/ui, and TypeScript.

## Features

- **Next.js 16** - Latest version with App Router and Turbopack support
- **Shadcn/ui** - Beautiful UI components with New York style preset
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS v4** - Utility-first CSS framework with latest version
- **next-intl** - Built-in internationalization support
- **Lucide React** - Beautiful and consistent icon library
- **Google AdSense** - Integrated AdSense support
- **ESLint & Prettier** - Code quality and formatting tools
- **Pre-commit Hooks** - Automated code quality checks before commits
- **next-sitemap** - Automatic sitemap generation for SEO

## Prerequisites

- Node.js 20+
- pnpm 10.14.0+

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

### Development

Run the development server with Turbopack:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

Build the application:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors automatically
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm type-check` - Run TypeScript type checking
- `pnpm sitemap` - Generate sitemap

## Project Structure

```
.
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   └── ui/             # Shadcn UI components
├── lib/                # Utility functions
│   └── utils.ts        # Helper utilities
├── public/             # Static assets
├── components.json     # Shadcn UI configuration
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Shadcn/ui Components

This project is configured with Shadcn/ui. To add new components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Components are installed to `components/ui` with the following aliases:

- `@/components` - Components directory
- `@/lib` - Utilities directory
- `@/hooks` - Custom hooks directory

## Internationalization

The project includes `next-intl` for internationalization. Configure your locales and messages as needed in your application.

## Code Quality

### ESLint

Run linting:

```bash
pnpm lint
```

Auto-fix issues:

```bash
pnpm lint:fix
```

### Prettier

Format all files:

```bash
pnpm format
```

Check formatting:

```bash
pnpm format:check
```

### Pre-commit Hooks

Pre-commit hooks are configured to automatically:

- Format code with Prettier
- Lint with ESLint
- Type-check with TypeScript

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build

### Other Platforms

Build the application:

```bash
pnpm build
```

The build output will be in the `.next` directory. You can deploy this to any platform that supports Node.js.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Shadcn/ui Documentation](https://ui.shadcn.com) - Learn about Shadcn/ui components
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
- [next-intl Documentation](https://next-intl.dev) - Learn about internationalization
