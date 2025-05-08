export function hyphenate(str) {
  if (typeof str !== 'string') return ''
  return str.split('').join('-')
}
