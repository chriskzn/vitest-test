import { test, expect } from 'vitest'
import { deepMerge } from '../src'

test('shallow merge', () => {
  const merged = deepMerge(
    {
      name: 'Anthony'
    },
    {
      github: 'antfu'
    }
  )

  expect(merged).toEqual({
    name: 'Anthony',
    github: 'antfu'
  })
})

test('shallow merge with overlaps', () => {
  const merged = deepMerge(
    {
      name: 'Anthony',
      github: 'unknown'
    },
    {
      github: 'antfu',
      twitter: 'antfu7'
    }
  )

  expect(merged).toEqual({
    name: 'Anthony',
    github: 'antfu',
    twitter: 'antfu7'
  })
})


test('shallow merge with arrays', () => {
  const merged = deepMerge(
    ['vue', 'react'],
    ['svelte', 'solid']
  )

  expect(merged).toEqual([
    'vue', 'react', 'svelte', 'solid'
  ])
})

test('deep merge with overlaps', () => {
  const merged = deepMerge(
    {
      name: 'Anthony',
      accounts: {
        github: 'unknown'
      },
      languages: ['js']
    },
    {
      accounts: {
        twitter: 'antfu7'
      },
      languages: ['ts', 'vue']
    }
  )

  expect(merged).toMatchInlineSnapshot(`
    {
      "accounts": {
        "github": "unknown",
        "twitter": "antfu7",
      },
      "languages": [
        "js",
        "ts",
        "vue",
      ],
      "name": "Anthony",
    }
  `)

  expect(Math.sqrt(2)).toMatchInlineSnapshot('1.4142135623730951')
})

test('throws errors on merging two different types', () => {
  expect(() => deepMerge(
    ['foo', 'bar'],
    { foo: 'bar' }
  )).toThrowError('Can not merge two differnet types')
})