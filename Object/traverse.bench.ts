import { bench } from 'vitest'
import obj from './relations.json'

bench('key in', () => {
  for(const key in obj) {
    key;
    (obj as any)[key];
  }
}, { time: 1000 })

bench('Object.keys', () => {
  for(const key of Object.keys(obj)) {
    key;
    (obj as any)[key];
  }
}, { time: 1000 })

bench('Object.entries', () => {
  for(const [key, value] of Object.entries(obj)) {
    key;
    value;
  }
}, { time: 1000 })

bench('Object.fff', () => {
  for(const value of Object.values(obj)) {
    value.name;
    value;
  }
}, { time: 1000 })
