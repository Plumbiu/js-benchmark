import { bench } from 'vitest'

bench('!! for undefined', () => {
  for (let i = 0; i < 10000; i ++) {
    !!undefined
    !!'hello'
  }
}, { time: 10 })

bench('Boolean for undefined', () => {
  for (let i = 0; i < 10000; i ++) {
    Boolean(undefined)
    Boolean('hello')
  }
}, { time: 10 })
