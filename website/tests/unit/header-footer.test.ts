import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

// ── AppHeader ──
describe('AppHeader', () => {
  it('renders logo with correct alt text', async () => {
    const wrapper = await mountSuspended(AppHeader)
    const logo = wrapper.find('.header__logo-mark')
    expect(logo.exists()).toBe(true)
    expect(logo.attributes('alt')).toBe('Kanzlei Schnoor')
  })

  it('renders navigation items', async () => {
    const wrapper = await mountSuspended(AppHeader)
    const navLinks = wrapper.findAll('.header__nav-link')
    expect(navLinks.length).toBe(4) // Startseite, Mietrecht, Strafrecht, Verkehrsrecht
    expect(navLinks[0].text()).toBe('Startseite')
    expect(navLinks[1].text()).toBe('Mietrecht')
    expect(navLinks[2].text()).toBe('Strafrecht')
    expect(navLinks[3].text()).toBe('Verkehrsrecht')
  })

  it('renders Kontakt CTA button', async () => {
    const wrapper = await mountSuspended(AppHeader)
    const ctaBtn = wrapper.find('.btn--nav')
    expect(ctaBtn.exists()).toBe(true)
    expect(ctaBtn.text()).toBe('Kontakt aufnehmen')
  })

  it('has burger menu with correct initial aria-expanded', async () => {
    const wrapper = await mountSuspended(AppHeader)
    const burger = wrapper.find('.header__burger')
    expect(burger.exists()).toBe(true)
    expect(burger.attributes('aria-expanded')).toBe('false')
    expect(burger.attributes('aria-label')).toBe('Menü öffnen')
  })

  it('toggles burger menu on click and updates aria-expanded', async () => {
    const wrapper = await mountSuspended(AppHeader)
    const burger = wrapper.find('.header__burger')

    await burger.trigger('click')
    expect(burger.attributes('aria-expanded')).toBe('true')
    expect(burger.attributes('aria-label')).toBe('Menü schließen')
    expect(burger.classes()).toContain('header__burger--active')

    await burger.trigger('click')
    expect(burger.attributes('aria-expanded')).toBe('false')
    expect(burger.attributes('aria-label')).toBe('Menü öffnen')
  })

  it('has logo name and sub text', async () => {
    const wrapper = await mountSuspended(AppHeader)
    expect(wrapper.find('.header__logo-name').text()).toBe('Philipp Schnoor')
    expect(wrapper.find('.header__logo-sub').text()).toContain('Rechtsanwalt')
  })
})

// ── AppFooter ──
describe('AppFooter', () => {
  it('renders accent bar', async () => {
    const wrapper = await mountSuspended(AppFooter)
    expect(wrapper.find('.footer__accent-bar').exists()).toBe(true)
  })

  it('renders logo with name and subtitle', async () => {
    const wrapper = await mountSuspended(AppFooter)
    expect(wrapper.find('.footer__logo-name').text()).toBe('Philipp Schnoor')
    expect(wrapper.find('.footer__logo-sub').text()).toContain('Rechtsanwalt')
  })

  it('renders navigation columns with correct links', async () => {
    const wrapper = await mountSuspended(AppFooter)
    const links = wrapper.findAll('.footer__links a')
    const hrefs = links.map(l => l.attributes('href') || l.attributes('to'))
    expect(hrefs).toContain('/mietrecht')
    expect(hrefs).toContain('/strafrecht')
    expect(hrefs).toContain('/verkehrsrecht')
    expect(hrefs).toContain('/impressum')
    expect(hrefs).toContain('/datenschutz')
    expect(hrefs).toContain('/kontakt')
  })

  it('renders contact info with correct address', async () => {
    const wrapper = await mountSuspended(AppFooter)
    expect(wrapper.text()).toContain('Papenreye 61, 22453 Hamburg')
  })

  it('renders consistent email', async () => {
    const wrapper = await mountSuspended(AppFooter)
    expect(wrapper.text()).toContain('kontakt@schnoor-rechtsanwalt.de')
  })

  it('renders business hours', async () => {
    const wrapper = await mountSuspended(AppFooter)
    expect(wrapper.text()).toContain('Mo – Fr')
    expect(wrapper.text()).toContain('09:00 – 18:00')
    expect(wrapper.text()).toContain('geschlossen')
  })

  it('renders CTA button linking to kontakt', async () => {
    const wrapper = await mountSuspended(AppFooter)
    const cta = wrapper.find('.footer__cta a')
    expect(cta.exists()).toBe(true)
    expect(cta.text()).toContain('Erstberatung vereinbaren')
    expect(cta.attributes('href') || cta.attributes('to')).toBe('/kontakt')
  })

  it('renders copyright with current year', async () => {
    const wrapper = await mountSuspended(AppFooter)
    const year = new Date().getFullYear().toString()
    expect(wrapper.find('.footer__bottom').text()).toContain(year)
    expect(wrapper.find('.footer__bottom').text()).toContain('Philipp Schnoor')
  })
})
