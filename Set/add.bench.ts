import { bench } from 'vitest'
const set = new Set()

bench('Set', () => {
  for (let i = 0; i < 10000; i ++) {
    set.add(i)
  }
})

const obj = {}
bench('Obj', () => {
  for (let i = 0; i < 10000; i ++) {
    obj[i] = i
  }
})
