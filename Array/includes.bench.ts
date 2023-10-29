import { bench } from 'vitest'

bench(
  'inlucdes',
  () => {
    const str = 'dafsasddfadfdasfadsfadsfasdfdasfasdfasdfadfsadsfadsfasdfad'
    str.includes('asf')
  },
  { time: 100 },
)

bench(
  'indexOf',
  () => {
    const str = 'dafsasddfadfdasfadsfadsfasdfdasfasdfasdfadfsadsfadsfasdfad'
    str.indexOf('asf') !== -1
  },
  { time: 100 },
)
