# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 starter template with Shadcn/ui components, TypeScript, and Tailwind CSS v4. It includes built-in internationalization (next-intl), Google AdSense integration, and comprehensive code quality tooling.

## Essential Commands

### Development

```bash
pnpm dev              # Start dev server with Turbopack
pnpm build            # Production build
pnpm start            # Start production server
```

### Code Quality

```bash
pnpm lint             # Run ESLint
pnpm lint:fix         # Auto-fix ESLint issues
pnpm format           # Format with Prettier
pnpm format:check     # Check Prettier formatting
pnpm type-check       # TypeScript type checking (tsc --noEmit)
```

### Other

```bash
pnpm sitemap          # Generate sitemap (next-sitemap)
```

## Architecture

### Next.js Setup

- Uses **Next.js 16 App Router** (not Pages Router)
- React Server Components (RSC) enabled by default
- Turbopack bundler for development (via `--turbopack` flag)
- TypeScript with strict mode enabled

### Shadcn/ui Configuration

- Style: **New York** preset
- Base color: **neutral**
- CSS variables enabled for theming
- Components are added via CLI: `npx shadcn@latest add <component>`
- Components install to `components/ui/`
- Icon library: **Lucide React**

### Path Aliases (tsconfig.json)

```typescript
'@/*'; // Maps to project root
```

Shadcn-specific aliases (components.json):

```typescript
'@/components'; // Components directory
'@/lib/utils'; // Utility functions
'@/ui'; // UI components (components/ui)
'@/lib'; // Lib directory
'@/hooks'; // Custom hooks
```

### Tailwind CSS

- **Tailwind CSS v4** (latest version)
- Global styles in `app/globals.css`
- Uses `tw-merge` and `clsx` for conditional classes
- Utility function: `cn()` in `lib/utils.ts` - use for combining class names

### Styling Patterns

Always use the `cn()` utility from `@/lib/utils` for conditional class names:

```typescript
import { cn } from "@/lib/utils"

<div className={cn("base-class", condition && "conditional-class", className)} />
```

### Pre-commit Hooks

Configured in `.pre-commit-config.yaml` to run automatically:

1. File checks (trailing whitespace, EOF, YAML/JSON validation)
2. ESLint with auto-fix
3. Prettier formatting
4. TypeScript type checking (via `tsc --noEmit`)

All hooks exclude `public/` directory.

## Package Manager

**Must use pnpm 10.14.0+** (enforced via packageManager field). Do not use npm or yarn.

## Prettier Configuration

Project uses specific Prettier settings (.prettierrc.json):

- Single quotes
- Semicolons enabled
- 2-space indentation
- 80 character line width
- Arrow function parens: avoid
- LF line endings

## Key Dependencies

- **next-intl**: Internationalization (configure locales as needed)
- **nextjs-google-adsense**: AdSense integration
- **class-variance-authority**: Component variants (CVA pattern)
- **tailwind-merge + clsx**: Class name utilities

## Development Notes

- Node.js 20+ required
- All TypeScript files use strict mode
- ESLint config uses flat config format (eslint.config.mjs)
- JSX transform: `react-jsx` (no need to import React in components)
