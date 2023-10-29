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

bench(
  'Object.fromEntries',
  () => {
    const arr = Object.entries(obj)
    Object.fromEntries(arr)
  },

  { time: 1000 },
)

bench(
  'Origin Object',
  () => {
    const arr = Object.entries(obj)
    fromEntries(arr)
  },
  { time: 1000 },
)

bench(
  'key in Object',
  () => {
    for (const key in obj) {
      (obj as any)[key]
    }
  },
  { time: 1000 },
)
