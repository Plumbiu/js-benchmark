import { bench } from 'vitest'

bench('Set', () => {
  for (let i = 0; i < 10000; i ++) {
    const set = new Set()
  }
}, { time: 10 })

bench('Obj', () => {
  for (let i = 0; i < 10000; i ++) {
    const obj = {}
  }
}, { time: 10 })
