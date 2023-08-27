import { bench } from 'vitest'
import obj from './relations.json'

bench('key in', () => {
  for(const key in obj) {
    obj[key]
  }
}, { time: 100 })

bench('Object.values', () => {
  for(const val of Object.values(obj)) {
    val
  }
}, { time: 100 })
