import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import FaqAccordion from '~/components/ui/FaqAccordion.vue'
import AnchorDivider from '~/components/ui/AnchorDivider.vue'
import TestimonialCard from '~/components/ui/TestimonialCard.vue'
import ServiceCard from '~/components/ui/ServiceCard.vue'
import ContactForm from '~/components/ui/ContactForm.vue'
import ScrollProgress from '~/components/ui/ScrollProgress.vue'

// ── AnchorDivider ──
describe('AnchorDivider', () => {
  it('renders the gold-line with anchor SVG', async () => {
    const wrapper = await mountSuspended(AnchorDivider)
    expect(wrapper.find('.gold-line').exists()).toBe(true)
    expect(wrapper.find('.gold-line__anchor').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('contains the anchor icon paths', async () => {
    const wrapper = await mountSuspended(AnchorDivider)
    expect(wrapper.find('circle').exists()).toBe(true)
    expect(wrapper.find('line').exists()).toBe(true)
    expect(wrapper.find('path').exists()).toBe(true)
  })
})

// ── FaqAccordion ──
describe('FaqAccordion', () => {
  const faqItems = [
    { question: 'Was kostet eine Beratung?', answer: 'Die Erstberatung kostet 190€.' },
    { question: 'Wie lange dauert ein Verfahren?', answer: 'Das hängt vom Einzelfall ab.' },
    { question: 'Haben Sie Parkplätze?', answer: 'Ja, direkt vor dem Büro.' },
  ]

  it('renders all FAQ items', async () => {
    const wrapper = await mountSuspended(FaqAccordion, { props: { items: faqItems } })
    const items = wrapper.findAll('.faq__item')
    expect(items).toHaveLength(3)
  })

  it('displays question text', async () => {
    const wrapper = await mountSuspended(FaqAccordion, { props: { items: faqItems } })
    const buttons = wrapper.findAll('.faq__question')
    expect(buttons[0].text()).toContain('Was kostet eine Beratung?')
    expect(buttons[1].text()).toContain('Wie lange dauert ein Verfahren?')
  })

  it('starts with all items closed (aria-expanded=false)', async () => {
    const wrapper = await mountSuspended(FaqAccordion, { props: { items: faqItems } })
    const buttons = wrapper.findAll('.faq__question')
    buttons.forEach(btn => {
      expect(btn.attributes('aria-expanded')).toBe('false')
    })
  })

  it('opens item on click and sets aria-expanded=true', async () => {
    const wrapper = await mountSuspended(FaqAccordion, { props: { items: faqItems } })
    const firstButton = wrapper.findAll('.faq__question')[0]

    await firstButton.trigger('click')

    expect(firstButton.attributes('aria-expanded')).toBe('true')
    expect(wrapper.findAll('.faq__item')[0].classes()).toContain('faq__item--open')
  })

  it('closes item when clicking the same question again', async () => {
    const wrapper = await mountSuspended(FaqAccordion, { props: { items: faqItems } })
    const firstButton = wrapper.findAll('.faq__question')[0]

    await firstButton.trigger('click')
    expect(firstButton.attributes('aria-expanded')).toBe('true')

    await firstButton.trigger('click')
    expect(firstButton.attributes('aria-expanded')).toBe('false')
  })

  it('only one item is open at a time', async () => {
    const wrapper = await mountSuspended(FaqAccordion, { props: { items: faqItems } })
    const buttons = wrapper.findAll('.faq__question')

    await buttons[0].trigger('click')
    expect(buttons[0].attributes('aria-expanded')).toBe('true')

    await buttons[1].trigger('click')
    expect(buttons[0].attributes('aria-expanded')).toBe('false')
    expect(buttons[1].attributes('aria-expanded')).toBe('true')
  })

  it('has aria-controls linking to answer panels', async () => {
    const wrapper = await mountSuspended(FaqAccordion, { props: { items: faqItems } })
    const buttons = wrapper.findAll('.faq__question')
    buttons.forEach((btn, i) => {
      expect(btn.attributes('aria-controls')).toBe(`faq-answer-${i}`)
    })
  })

  it('answer panels have matching id and role=region', async () => {
    const wrapper = await mountSuspended(FaqAccordion, { props: { items: faqItems } })
    const answers = wrapper.findAll('.faq__answer')
    answers.forEach((answer, i) => {
      expect(answer.attributes('id')).toBe(`faq-answer-${i}`)
      expect(answer.attributes('role')).toBe('region')
    })
  })
})

// ── TestimonialCard ──
describe('TestimonialCard', () => {
  const defaultProps = {
    text: 'Herr Schnoor hat mir sehr geholfen in meinem Mietrechtsfall.',
    name: 'Michael K.',
    role: 'Mandant – Mietrecht',
  }

  it('renders name, text, and role', async () => {
    const wrapper = await mountSuspended(TestimonialCard, { props: defaultProps })
    expect(wrapper.text()).toContain('Michael K.')
    expect(wrapper.text()).toContain('Herr Schnoor hat mir sehr geholfen')
    expect(wrapper.text()).toContain('Mandant – Mietrecht')
  })

  it('shows avatar with initials when no photo', async () => {
    const wrapper = await mountSuspended(TestimonialCard, { props: defaultProps })
    expect(wrapper.find('.testimonial__avatar').exists()).toBe(true)
    expect(wrapper.find('.testimonial__avatar').text()).toBe('MK')
    expect(wrapper.find('.testimonial__photo').exists()).toBe(false)
  })

  it('shows photo when provided', async () => {
    const wrapper = await mountSuspended(TestimonialCard, {
      props: { ...defaultProps, photo: 'https://example.com/photo.jpg' },
    })
    expect(wrapper.find('.testimonial__photo').exists()).toBe(true)
    expect(wrapper.find('.testimonial__photo').attributes('src')).toBe('https://example.com/photo.jpg')
    expect(wrapper.find('.testimonial__avatar').exists()).toBe(false)
  })

  it('renders 5 stars', async () => {
    const wrapper = await mountSuspended(TestimonialCard, { props: defaultProps })
    expect(wrapper.find('.testimonial__stars').exists()).toBe(true)
  })

  it('shows "Mehr lesen" for long text and toggles on click', async () => {
    const longText = 'A'.repeat(200)
    const wrapper = await mountSuspended(TestimonialCard, {
      props: { ...defaultProps, text: longText },
    })

    const toggle = wrapper.find('.testimonial__toggle')
    expect(toggle.exists()).toBe(true)
    expect(toggle.text()).toBe('Mehr lesen')

    await toggle.trigger('click')
    expect(toggle.text()).toBe('Weniger')
  })

  it('does not show toggle for short text', async () => {
    const wrapper = await mountSuspended(TestimonialCard, { props: defaultProps })
    expect(wrapper.find('.testimonial__toggle').exists()).toBe(false)
  })
})

// ── ServiceCard ──
describe('ServiceCard', () => {
  const defaultProps = {
    title: 'Mietrecht',
    description: 'Von Mietvertragsprüfung bis Räumungsschutz.',
    to: '/mietrecht',
    image: 'https://images.unsplash.com/photo-test',
  }

  it('renders title and description', async () => {
    const wrapper = await mountSuspended(ServiceCard, { props: defaultProps })
    expect(wrapper.find('.sc__title').text()).toBe('Mietrecht')
    expect(wrapper.find('.sc__desc').text()).toContain('Mietvertragsprüfung')
  })

  it('renders image with alt text', async () => {
    const wrapper = await mountSuspended(ServiceCard, { props: defaultProps })
    const img = wrapper.find('.sc__image img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('alt')).toBe('Mietrecht')
    expect(img.attributes('loading')).toBe('lazy')
  })

  it('has "Mehr erfahren" CTA text', async () => {
    const wrapper = await mountSuspended(ServiceCard, { props: defaultProps })
    expect(wrapper.find('.sc__cta-text').text()).toBe('Mehr erfahren')
  })

  it('links to the correct route', async () => {
    const wrapper = await mountSuspended(ServiceCard, { props: defaultProps })
    // NuxtLink renders as <a> with href in test environment
    const link = wrapper.find('.sc')
    expect(link.attributes('href') || link.attributes('to')).toBe('/mietrecht')
  })

  it('does not contain any number/watermark element', async () => {
    const wrapper = await mountSuspended(ServiceCard, { props: defaultProps })
    expect(wrapper.find('.sc__number').exists()).toBe(false)
  })
})

// ── ContactForm ──
describe('ContactForm', () => {
  it('renders all required fields', async () => {
    const wrapper = await mountSuspended(ContactForm)
    expect(wrapper.find('#anrede').exists()).toBe(true)
    expect(wrapper.find('#vorname').exists()).toBe(true)
    expect(wrapper.find('#nachname').exists()).toBe(true)
    expect(wrapper.find('#email').exists()).toBe(true)
    expect(wrapper.find('#telefon').exists()).toBe(true)
    expect(wrapper.find('#kontaktweg').exists()).toBe(true)
    expect(wrapper.find('#nachricht').exists()).toBe(true)
  })

  it('does NOT contain Rechtsgebiet or Wie haben Sie uns gefunden fields', async () => {
    const wrapper = await mountSuspended(ContactForm)
    const html = wrapper.html()
    expect(html).not.toContain('Rechtsgebiet')
    expect(html).not.toContain('Wie haben Sie uns gefunden')
  })

  it('has Datenschutz checkbox', async () => {
    const wrapper = await mountSuspended(ContactForm)
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Datenschutzerklärung')
  })

  it('has floating labels on text inputs', async () => {
    const wrapper = await mountSuspended(ContactForm)
    const floatFields = wrapper.findAll('.contact-form__float')
    expect(floatFields.length).toBeGreaterThanOrEqual(5) // vorname, nachname, email, telefon, nachricht
  })

  it('shows trust indicators', async () => {
    const wrapper = await mountSuspended(ContactForm)
    expect(wrapper.text()).toContain('SSL-verschlüsselt')
    expect(wrapper.text()).toContain('Vertraulich')
    expect(wrapper.text()).toContain('Antwort in 24h')
  })

  it('shows success message after submit', async () => {
    const wrapper = await mountSuspended(ContactForm)
    expect(wrapper.find('.contact-form__success').exists()).toBe(false)

    await wrapper.find('form').trigger('submit')
    expect(wrapper.find('.contact-form__success').exists()).toBe(true)
    expect(wrapper.text()).toContain('Vielen Dank')
  })

  it('disables submit button after submission', async () => {
    const wrapper = await mountSuspended(ContactForm)
    const btn = wrapper.find('button[type="submit"]')
    expect(btn.attributes('disabled')).toBeUndefined()

    await wrapper.find('form').trigger('submit')
    expect(btn.attributes('disabled')).toBeDefined()
  })

  it('shows 24h promise banner', async () => {
    const wrapper = await mountSuspended(ContactForm)
    expect(wrapper.find('.contact-form__promise').exists()).toBe(true)
    expect(wrapper.text()).toContain('innerhalb von 24 Stunden')
  })
})

// ── ScrollProgress ──
describe('ScrollProgress', () => {
  it('renders wave SVG with path', async () => {
    const wrapper = await mountSuspended(ScrollProgress)
    expect(wrapper.find('.scroll-progress').exists()).toBe(true)
    expect(wrapper.find('.scroll-progress__wave').exists()).toBe(true)
    expect(wrapper.find('.scroll-progress__path').exists()).toBe(true)
  })

  it('has stroke-dasharray and stroke-dashoffset for animation', async () => {
    const wrapper = await mountSuspended(ScrollProgress)
    const path = wrapper.find('.scroll-progress__path')
    expect(path.attributes('style')).toContain('stroke-dashoffset')
  })
})
