import { bench } from 'vitest'

bench(
  'reduce',
  () => {
    const a = new Array(1000)
    for (let i = 0; i < 1000; i++) {
      a[i] = 1
    }
    const sum = a.reduce((pre, curr) => pre + curr)
  },
  { time: 1000 },
)

bench(
  'for loop add',
  () => {
    const a = new Array(1000)
    for (let i = 0; i < 1000; i++) {
      a[i] = 1
    }
    let sum = 0
    for (let i = 0; i < 1000; i++) {
      sum += a[i]
    }
  },
  { time: 1000 },
)
