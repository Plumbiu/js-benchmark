import { bench, describe } from 'vitest'

describe('two', () => {
  bench('!! for false null', () => {
    for (let i = 0; i < 10000; i ++) {
      !!false
      !!null
      !!'hello'
    }
  }, { time: 10 })
  
  bench('Boolean for false null', () => {
    for (let i = 0; i < 10000; i ++) {
      Boolean(false)
      Boolean(null)
      Boolean('hello')
    }
  }, { time: 10 })
})

describe('three', () => {
  bench('!! for undefined null', () => {
    for (let i = 0; i < 10000; i ++) {
      !!undefined
      !!null
      !!'hello'
    }
  }, { time: 10 })
  
  bench('Boolean for undefined null', () => {
    for (let i = 0; i < 10000; i ++) {
      Boolean(undefined)
      Boolean(null)
      Boolean('hello')
    }
  }, { time: 10 })
})

describe('four', () => {
  bench('!! for undefined null string', () => {
    for (let i = 0; i < 10000; i ++) {
      !!undefined
      !!null
      !!''
      !!'hello'
    }
  }, { time: 10 })

  bench('Boolean for undefined null', () => {
    for (let i = 0; i < 10000; i ++) {
      Boolean(undefined)
      Boolean(null)
      Boolean('')
      Boolean('hello')
    }
  }, { time: 10 })
})

describe('five', () => {
  bench('!! for undefined null string 0', () => {
    for (let i = 0; i < 10000; i ++) {
      !!undefined
      !!null
      !!''
      !!0
      !!'hello'
    }
  }, { time: 10 })

  bench('Boolean for undefined null 0', () => {
    for (let i = 0; i < 10000; i ++) {
      Boolean(undefined)
      Boolean(null)
      Boolean('')
      Boolean(0)
      Boolean('hello')
    }
  }, { time: 10 })
})