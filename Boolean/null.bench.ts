import { bench } from 'vitest'

bench('!! for null', () => {
  for (let i = 0; i < 10000; i ++) {
    !!null
    !!'hello'
  }
}, { time: 10 })

bench('Boolean for null', () => {
  for (let i = 0; i < 10000; i ++) {
    Boolean(null)
    Boolean('hello')
  }
}, { time: 10 })
