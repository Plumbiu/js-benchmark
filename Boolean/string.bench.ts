import { bench } from 'vitest'

bench('!! for string', () => {
  for (let i = 0; i < 10000; i ++) {
    !!''
    !!'hello'
  }
}, { time: 10 })

bench('Boolean for string', () => {
  for (let i = 0; i < 10000; i ++) {
    Boolean('')
    Boolean('hello')
  }
}, { time: 10 })
