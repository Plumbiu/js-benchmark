import { bench } from 'vitest'
import fs from 'fs/promises'
import { dirname, join } from 'node:path'

const __dirname = dirname(__filename)

const pkgPath = join(join(__dirname, '../pnpm-lock.yaml'))

bench(
  'buffer',
  async () => {
    await fs.readFile(pkgPath)
  },
  { time: 100 },
)

bench(
  'utf-8',
  async () => {
    await fs.readFile(pkgPath, 'utf-8')
  },
  { time: 100 },
)

bench(
  'buffer to string',
  async () => {
    const buf = await fs.readFile(pkgPath)
    buf.toString()
  },
  { time: 100 },
)


bench(
  'utf-16',
  async () => {
    await fs.readFile(pkgPath, 'utf16le')
  },
  { time: 100 },
)
