import { bench } from 'vitest'

bench('normal', () => {
  const a: any = []
  for(let i = 0; i < 1000;i++) {
    a[i] = i
  }
}, { time: 30 })

bench('push', () => {
  const a: any = []
  for(let i = 0; i < 1000;i++) {
    a.push(i)
  }
}, { time: 30 })
