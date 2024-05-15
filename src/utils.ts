export function formatDecimals(value: string) {
  return value.replace(/^\D*(\d*(?:\.\d*)?).*$/g, '$1')
}

export const fixZero = (n: number) => (n < 10 ? `0${n}` : n)

export function toSmallAddr(str: string, start = 6, end = 4) {
  if (!str || str.length <= 10) return str
  return `${str?.substring(0, start)}...${str?.substring(str?.length - end, end)}`
}
