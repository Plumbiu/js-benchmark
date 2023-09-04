import { bench } from 'vitest'

function startsWith(str: string, startStr: string) {
  if (str === undefined)
    return false
  if (startStr.length > str.length)
    return false
  return str?.slice(0, startStr.length) === startStr
}

bench('String.prototype.startsWith', () => {
  for (let i = 0; i < 1000; i++) {
    let str = 'hello world!hello world!hello world!hello world!hello world!'
    
    str.startsWith('hello world')
  }
}, { time: 100 })

bench('startsWith', () => {
  for (let i = 0; i < 1000; i++) {
    let str = 'hello world!hello world!hello world!hello world!hello world!'
    startsWith(str, 'hello world')
  }
}, { time: 100 })
