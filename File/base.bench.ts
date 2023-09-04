import { bench } from 'vitest'
import fs from 'fs/promises'

bench('read', async () => {
  const result = await fs.readFile('./relations.json')
}, { time: 15 })


bench('import', async () => {
  const result = await import('./relations.json')
}, { time: 15 })
const result = await import('./relations.json')
console.log(result);
