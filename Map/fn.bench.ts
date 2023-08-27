import { bench } from 'vitest'
  
const map = new Map()
const obj = {}
bench('Map', () => {
  for (let i = 0; i < 20000; i ++) {
    map.set(i, i)
  }
})

bench('Obj', () => {
  for (let i = 0; i < 20000; i ++) {
    obj[i] = i
  }
})
