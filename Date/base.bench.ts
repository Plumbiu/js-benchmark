import { bench } from 'vitest'
import { performance } from 'perf_hooks'

bench('Date', () => {
  for (let i = 0; i < 10; i++) {
    const begin = Date.now()
    for (let i = 0; i < 10000; i ++) {
    }
    console.log(Date.now() - begin)
  }
}, { time: 1000 })

bench('node:perf_hooks', () => {
  for (let i = 0; i < 10; i++) {
    const begin = performance.now()
    for (let i = 0; i < 10000; i ++) {
    }
    console.log(performance.now() - begin)
  }
}, { time: 1000 })
