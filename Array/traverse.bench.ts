import { bench } from 'vitest'

const a = new Array(1000)

bench('for(let i = 0;....)', () => {
  for(let i = 0; i < a.length;i++) {
    a[i]
  }
}, { time: 10 })

bench('forEach', () => {
  a.forEach((item) => {
    item
  })
}, { time: 10 })
