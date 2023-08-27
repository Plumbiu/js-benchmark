import { bench } from 'vitest'
  
const map = new Map()
for (let i = 0; i < 10000; i ++) {
  map.set(i, i)
}
const obj = {}
for (let i = 0; i < 10000; i ++) {
  obj[i] = i
}

bench('Map', () => {
  for (let i = 0; i < 10000; i ++) {
    map.delete(i)
  }
})

bench('Obj', () => {
  for (let i = 0; i < 10000; i ++) {
    delete obj[i]
  }
})
