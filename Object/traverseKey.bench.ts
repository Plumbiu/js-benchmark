import { bench } from 'vitest'
import obj from './relations.json'

bench('key in', () => {
  for(const key in obj) {
    key
  }
}, { time: 100 })

bench('Object.keys', () => {
  for(const key of Object.keys(obj)) {
    key
  }
}, { time: 100 })
