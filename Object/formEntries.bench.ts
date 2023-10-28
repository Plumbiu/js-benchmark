import { bench } from 'vitest'
import obj from './relations.json'

export function fromEntries<T extends string | number | object>(
  value: [string, T][],
) {
  const result: Record<string, T> = {}
  for (const [key, val] of value) {
    result[key] = val
  }

  return result
}

const arr = Object.entries(obj)

bench(
  'Object.fromEntries',
  () => {
    Object.fromEntries(arr)
  },

  { time: 1000 },
)

bench(
  'Origin Object',
  () => {
    fromEntries(arr)
  },
  { time: 1000 },
)
