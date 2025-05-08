export function capitalize(str: string): string {
    if (typeof str !== 'string') return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function hyphenate(str) {
  if (typeof str !== 'string') return ''
  return str.split('').join('-')
}
