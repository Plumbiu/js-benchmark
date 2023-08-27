import { bench } from 'vitest'

bench('Map', () => {
  for (let i = 0; i < 10000; i ++) {
    const map = new Map()
  }
}, { time: 10 })

bench('Obj', () => {
  for (let i = 0; i < 10000; i ++) {
    const obj = {}
  }
}, { time: 10 })
