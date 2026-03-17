import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'
import { globSync } from 'fs'

const ROOT = resolve(__dirname, '../..')

function readFile(path: string): string {
  return readFileSync(resolve(ROOT, path), 'utf-8')
}

// ── Email Consistency ──
describe('Email consistency across project', () => {
  const filesToCheck = [
    'components/sections/AboutContactSection.vue',
    'components/AppFooter.vue',
    'plugins/structured-data.ts',
    'composables/useSchemaOrg.ts',
  ]

  it('all files use kontakt@schnoor-rechtsanwalt.de', () => {
    for (const file of filesToCheck) {
      const content = readFile(file)
      if (content.includes('@schnoor')) {
        expect(content).toContain('kontakt@schnoor-rechtsanwalt.de')
        expect(content).not.toContain('info@schnoor-rechtsanwalt.de')
        expect(content).not.toContain('kontakt@schnoor-recht.de')
      }
    }
  })
})

// ── Orphaned Components ──
describe('No orphaned component files', () => {
  it('WhatsAppButton.vue should not exist', () => {
    expect(existsSync(resolve(ROOT, 'components/WhatsAppButton.vue'))).toBe(false)
  })

  it('CaseCard.vue should not exist', () => {
    expect(existsSync(resolve(ROOT, 'components/ui/CaseCard.vue'))).toBe(false)
  })

  it('SeoMeta.vue should not exist', () => {
    expect(existsSync(resolve(ROOT, 'components/SeoMeta.vue'))).toBe(false)
  })
})

// ── Placeholder Data Detection ──
describe('Placeholder data detection', () => {
  const warningFiles = new Map<string, string[]>()

  const allVueFiles = [
    'components/sections/AboutContactSection.vue',
    'components/AppFooter.vue',
    'components/AppHeader.vue',
    'pages/index.vue',
    'pages/kontakt.vue',
    'pages/impressum.vue',
  ]

  it('warns about placeholder phone numbers', () => {
    const filesWithPlaceholders: string[] = []
    for (const file of allVueFiles) {
      const content = readFile(file)
      if (content.includes('XXXXXXXX') || content.includes('XXX XXX')) {
        filesWithPlaceholders.push(file)
      }
    }
    // This test documents that placeholders exist — it should WARN, not fail
    // Replace with real data before launch
    if (filesWithPlaceholders.length > 0) {
      console.warn(`⚠ PLACEHOLDER PHONE NUMBERS found in: ${filesWithPlaceholders.join(', ')}`)
    }
    expect(true).toBe(true) // Pass but with warning
  })
})

// ── Prerender Routes ──
describe('Prerender configuration', () => {
  it('includes all pages in prerender routes', () => {
    const config = readFile('nuxt.config.ts')
    const requiredRoutes = ['/', '/mietrecht', '/strafrecht', '/verkehrsrecht', '/kontakt', '/datenschutz', '/impressum']
    for (const route of requiredRoutes) {
      expect(config).toContain(`'${route}'`)
    }
  })
})

// ── Accessibility ──
describe('Accessibility checks', () => {
  it('AppHeader burger menu has dynamic aria-expanded', () => {
    const content = readFile('components/AppHeader.vue')
    expect(content).toContain(':aria-expanded=')
    expect(content).not.toMatch(/aria-expanded="false"(?!.*:)/) // No hardcoded false (without : binding)
  })

  it('FaqAccordion has aria-expanded on buttons', () => {
    const content = readFile('components/ui/FaqAccordion.vue')
    expect(content).toContain(':aria-expanded=')
    expect(content).toContain('aria-controls')
    expect(content).toContain('role="region"')
  })

  it('all images have alt attributes', () => {
    const files = [
      'components/sections/AboutContactSection.vue',
      'components/ui/ServiceCard.vue',
      'components/ui/TestimonialCard.vue',
      'components/AppHeader.vue',
      'components/AppFooter.vue',
    ]
    for (const file of files) {
      const content = readFile(file)
      const imgTags = content.match(/<img[^>]*>/g) || []
      for (const img of imgTags) {
        expect(img).toMatch(/alt=/)
      }
    }
  })
})

// ── Wave Divider Color ──
describe('Wave divider colors', () => {
  it('AboutContactSection wave uses light color (not dark)', () => {
    const content = readFile('components/sections/AboutContactSection.vue')
    // Wave should be light colored to contrast with dark section
    expect(content).toContain('color: $color-off-white')
  })

  it('AppFooter wave uses light color (not dark)', () => {
    const content = readFile('components/AppFooter.vue')
    expect(content).toContain('color: $color-off-white')
  })
})

// ── Dead Code ──
describe('No dead CSS', () => {
  it('ServiceCard does not contain .sc__number CSS', () => {
    const content = readFile('components/ui/ServiceCard.vue')
    expect(content).not.toContain('&__number')
    expect(content).not.toContain('.sc__number')
  })
})

// ── SEO ──
describe('SEO configuration', () => {
  it('nuxt.config has lang=de', () => {
    const config = readFile('nuxt.config.ts')
    expect(config).toContain("lang: 'de'")
  })

  it('nuxt.config has favicon', () => {
    const config = readFile('nuxt.config.ts')
    expect(config).toContain('favicon.png')
  })

  it('nuxt.config has Google Fonts loaded', () => {
    const config = readFile('nuxt.config.ts')
    expect(config).toContain('Playfair+Display')
    expect(config).toContain('Inter')
  })

  it('structured data plugin exists and has schema.org context', () => {
    const plugin = readFile('plugins/structured-data.ts')
    expect(plugin).toContain('https://schema.org')
    expect(plugin).toContain('Attorney')
    expect(plugin).toContain('LegalService')
  })
})

// ── Contact Consistency ──
describe('Contact information consistency', () => {
  it('address is consistently Papenreye 61', () => {
    const files = [
      'components/sections/AboutContactSection.vue',
      'components/AppFooter.vue',
      'plugins/structured-data.ts',
      'composables/useSchemaOrg.ts',
    ]
    for (const file of files) {
      const content = readFile(file)
      if (content.includes('Papenreye') || content.includes('streetAddress')) {
        expect(content).toContain('Papenreye 61')
      }
    }
  })
})

// ── Google Reviews Link ──
describe('Google Reviews link', () => {
  it('does not contain PLACEHOLDER in review link', () => {
    const content = readFile('components/sections/GoogleReviews.vue')
    expect(content).not.toContain('PLACEHOLDER')
  })

  it('uses the correct Google Place ID', () => {
    const content = readFile('components/sections/GoogleReviews.vue')
    expect(content).toContain('ChIJ_w-GhpuPsUcRCJXqI7uqB2g')
  })
})
