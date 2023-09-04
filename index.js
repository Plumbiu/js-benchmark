function startsWith(s, startStr) {
  if (startStr.length > s.length)
    return false
  return s.slice(0, startStr.length) === startStr
}

console.log(startsWith('hello', 'hello'))
