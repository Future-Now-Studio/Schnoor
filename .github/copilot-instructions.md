# Copilot Instructions for Schnoor Project

## Project Overview
This is a Nuxt 3 website for Rechtsanwalt Philipp Schnoor, a lawyer specializing in rental law, criminal law, and traffic law in Hamburg. The site includes landing pages, service pages, and contact functionality.

## Architecture
- **Framework**: Nuxt 3 with Vue 3
- **Styling**: SCSS with custom variables and mixins
- **Components**: Modular component structure in `/components` with sections, UI elements, and layouts
- **Pages**: File-based routing with pages in `/pages` directory
- **Assets**: Static assets in `/assets`, public files in `/public`
- **Contact**: Integrated contact form component with validation

## Development Workflow
- **Build**: `npm run build` - generates static site
- **Dev**: `npm run dev` - starts development server
- **Generate**: `npm run generate` - pre-renders static pages
- **Preview**: `npm run preview` - previews generated site
- **Dependencies**: Install with `npm install`, prepare with `npm run postinstall`

## Conventions
- **Components**: PascalCase naming (e.g., `UiContactForm.vue`)
- **Pages**: kebab-case for routes (e.g., `kontakt.vue` for `/kontakt`)
- **Styling**: BEM-like methodology with SCSS, custom variables in `~/assets/scss/variables`
- **Icons**: Inline SVG icons with consistent viewBox and stroke properties
- **Animations**: Scroll-triggered animations using `v-scroll-reveal` directive
- **SEO**: Meta tags managed via `useSeoMeta()` composable

## Dependencies
- **Nuxt 3**: Core framework
- **Vue 3**: Reactive framework
- **@nuxtjs/seo**: SEO utilities
- **@nuxt/image**: Image optimization
- **Sass**: CSS preprocessing

## Key Files
- `app.vue`: Root component with global styles
- `nuxt.config.ts`: Nuxt configuration
- `components/UiContactForm.vue`: Contact form with validation
- `components/sections/`: Reusable section components
- `pages/index.vue`: Homepage with hero, services, about/contact sections
- `layouts/`: Page layouts (if any)
- `assets/scss/`: Stylesheets with variables and mixins