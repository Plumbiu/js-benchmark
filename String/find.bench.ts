import { bench } from 'vitest'

bench('indexOf', () => {
  let str = 'hello world!hello world!hello world!hello world!hello world!'
  for (let i = 0; i < 10000; i++) {
    if (str.indexOf('h') !== -1) {}
  }
}, { time: 100 })

bench('include', () => {
  let str = 'hello world!hello world!hello world!hello world!hello world!'
  for (let i = 0; i < 10000; i++) {
    if(str.includes('h')) {}
  }
}, { time: 100 })

bench('reg', () => {
  let str = 'hello world!hello world!hello world!hello world!hello world!'
  for (let i = 0; i < 10000; i++) {
    if(/h/.test(str)) {}
  }
}, { time: 100 })

bench('traverse', () => {
  let str = 'hello world!hello world!hello world!hello world!hello world!'
  for (let i = 0; i < 10000; i++) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'h') {}
    }
  }
}, { time: 100 })
