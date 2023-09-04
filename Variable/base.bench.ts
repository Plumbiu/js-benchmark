import { bench } from 'vitest'

bench('var', () => {
  for(let i = 0; i < 10000; i++) {
    var a = 1
  }
}, { time: 1000 })

bench('const', () => {
  for(let i = 0; i < 10000; i++) {
    const a = 1
  }
}, { time: 1000 })

bench('let', () => {
  for(let i = 0; i < 10000; i++) {
    let a = 1
  }
}, { time: 1000 })
