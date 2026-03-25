# Smart-Fisher Uganda UI Conventions

## File & component conventions
- Component filenames use PascalCase and `.jsx` unless the file already uses `.js`.
- Sections in `src/pages/*` should render a single top-level `<section>` with the matching `id` used by the navbar.
- Prefer small, focused components over deeply nested JSX.

## Tailwind usage (landing UI)
- Prefer Tailwind utility classes for layout/spacing/typography.
- Keep className order consistent: `layout -> spacing -> sizing -> typography -> colors -> effects`.
- For “world-class” UI, use:
  - `max-w-7xl mx-auto px-6 lg:px-8` containers
  - `py-24` / `lg:py-32` for major vertical spacing
  - `rounded-lg` / `rounded-xl` for standard controls, and larger radii for hero/feature panels.

## Motion (Framer Motion via `motion`)
- Import motion primitives from `motion`:
  - `import { motion } from "motion";`
- For scroll-reveal on major sections:
  - `initial={{ opacity: 0, y: 20 }}`
  - `whileInView={{ opacity: 1, y: 0 }}`
  - `viewport={{ once: true, amount: 0.25 }}`
  - `transition={{ duration: 0.6, ease: "easeOut" }}`
- Respect `prefers-reduced-motion` automatically via Framer defaults; avoid extra looping.

## Theming
- Use a `data-theme="light|dark"` attribute on the root element (set by `ThemeProvider`).
- When styling varies by theme, prefer explicit theme-aware classes or CSS variables rather than relying on Tailwind `dark:` variants.

