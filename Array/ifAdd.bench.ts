import { bench } from 'vitest'

bench('for', () => {
  const a: number[] = []
  for(let i = 0; i < 10000;i++) {
    a[i] = i
  }
  const b: number[] = []
  for(let i = 0; i < 10000;i++) {
    if (i % 7 == 0)
      b.push(i)
  }
}, { time: 300 })

bench('filter', () => {
  const a: number[] = []
  for(let i = 0; i < 10000;i++) {
    a[i] = i
  }
  const b: number[] = []
  b.push(...a.filter(n => n % 7 === 0))
}, { time: 300 })
