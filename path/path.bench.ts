import { bench } from 'vitest'
import path from 'path'

bench('join', () => {
  for(let i = 0; i < 10000;i++) {
    path.join('node_modules', 'package.json')
  }
}, { time: 30 })

bench('resolve', () => {
  for(let i = 0; i < 10000;i++) {
    path.resolve('node_modules', 'package.json')

  }
}, { time: 30 })

bench('string', () => {
  for(let i = 0; i < 10000;i++) {
    `node_modules/package.json`

  }
}, { time: 30 })