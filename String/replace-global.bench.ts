// related to vite
import { bench } from 'vitest'

bench('replaceAll', () => {
  const id = '2023-3-3-21-11-05-12-231-23-12-132-1-31-23-21-2-12-12-2-12-1-3-21-231-321-23-132-1-23-123-132-23-132-123-32-132-1-132-13-23-312-123'

  for (let i = 0; i < 10000; i++) {
    id.replaceAll('-', '')
  }
}, { time: 100 })

bench('regexp', () => {
  const id = '2023-3-3-21-11-05-12-231-23-12-132-1-31-23-21-2-12-12-2-12-1-3-21-231-321-23-132-1-23-123-132-23-132-123-32-132-1-132-13-23-312-123'
  for (let i = 0; i < 10000; i++) {
    id.replace(/-/g, '')
  }
}, { time: 100 })