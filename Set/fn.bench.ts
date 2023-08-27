import { bench } from 'vitest'
  
const set = new Set()
for (let i = 0; i < 10000; i ++) {
  set.add(i)
}
const obj = {}
for (let i = 0; i < 10000; i ++) {
  obj[i] = i
}

bench('Set', () => {
  for (let i = 0; i < 20000; i ++) {
    if(set.has(i)) {}
  }
})

bench('Obj', () => {
  for (let i = 0; i < 20000; i ++) {
    if(obj[i]) {}
  }
})
