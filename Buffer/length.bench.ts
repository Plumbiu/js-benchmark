import { bench } from 'vitest'
import fs from 'fs/promises'
import { dirname, join } from 'node:path'

const __dirname = dirname(__filename)

const pkgPath = join(join(__dirname, '../pnpm-lock.yaml'))

bench(
  'buffer',
  async () => {
    const a = await fs.readFile(pkgPath)
    Buffer.byteLength(a) === 0
  },
  { time: 1000 },
)

bench(
  'utf-8',
  async () => {
    const a = await fs.readFile(pkgPath, 'utf-8')
    a.length === 0
  },
  { time: 1000 },
)
