import { bench } from 'vitest'


bench('for(let i = 0;....)', () => {
  const a = new Array(100)

  for(let i = 0; i < a.length;i++) {
    a[i]
  }
}, { time: 500 })

bench('forEach', () => {
  const a = new Array(100)
  a.forEach((item) => {
    item
  })
}, { time: 500 })

bench('for of', () => {
  const a = new Array(100)
  for(const item of a) {
    item
  }
}, { time: 500 })
 