import { describe, it, expect } from 'vitest'
import { useFaqSchema } from '~/composables/useFaqSchema'

describe('useFaqSchema', () => {
  it('is a function', () => {
    expect(typeof useFaqSchema).toBe('function')
  })
})
