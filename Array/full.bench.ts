import { bench } from 'vitest'

bench('traverse', () => {
  const a: any = new Array(1000)
  for(let i = 0; i < 1000;i++) {
    a[i] = 1
  }
}, { time: 30 })

bench('ES6', () => {
  new Array(1000).fill(1)
}, { time: 30 })
