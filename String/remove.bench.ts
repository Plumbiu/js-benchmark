import { bench, describe } from 'vitest'

describe('str length 11', () => {
  bench('slice', () => {
    let str = 'hello world!'
    for (let i = 0; i < str.length; i++) {
      str = str.slice(0, -1)
    }
  }, { time: 100 })
  
  bench('substring', () => {
    let str = 'hello world!'
    for (let i = 0; i < str.length; i++) {
      str = str.substring(0, str.length - 1)
    }
  }, { time: 100 })
})

describe('str length 22', () => {
  bench('slice', () => {
    let str = 'hello world!hello world!'
    for (let i = 0; i < str.length; i++) {
      str = str.slice(0, -1)
    }
  }, { time: 100 })
  
  bench('substring', () => {
    let str = 'hello world!hello world!'
    for (let i = 0; i < str.length; i++) {
      str = str.substring(0, str.length - 1)
    }
  }, { time: 100 })
})

describe('str length 33', () => {
  bench('slice', () => {
    let str = 'hello world!hello world!hello world!'
    for (let i = 0; i < str.length; i++) {
      str = str.slice(0, -1)
    }
  }, { time: 100 })
  
  bench('substring', () => {
    let str = 'hello world!hello world!hello world!'
    for (let i = 0; i < str.length; i++) {
      str = str.substring(0, str.length - 1)
    }
  }, { time: 100 })
})

describe('str length 66', () => {
  bench('slice', () => {
    let str = 'hello world!hello world!hello world!hello world!hello world!hello world!'
    for (let i = 0; i < str.length; i++) {
      str = str.slice(0, -1)
    }
  }, { time: 100 })
  
  bench('substring', () => {
    let str = 'hello world!hello world!hello world!hello world!hello world!hello world!'
    for (let i = 0; i < str.length; i++) {
      str = str.substring(0, str.length - 1)
    }
  }, { time: 100 })
})