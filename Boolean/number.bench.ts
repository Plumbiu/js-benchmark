import { bench } from 'vitest'

bench('!! for 0', () => {
  for (let i = 0; i < 10000; i ++) {
    !!0
    !!'hello'
  }
}, { time: 10 })

bench('Boolean for 0', () => {
  for (let i = 0; i < 10000; i ++) {
    Boolean(0)
    Boolean('hello')
  }
}, { time: 10 })
