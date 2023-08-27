import { bench } from 'vitest'

bench('[]', () => {
  for(let i = 0; i < 1000;i++) {
    const a = []
  }
}, { time: 50 })

bench('new Array()', () => {
  for(let i = 0; i < 1000;i++) {
    const a: any = new Array()
  }
}, { time: 50 })
