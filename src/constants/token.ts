export enum CHAINS {
  Ethereum = 'Ethereum',
}

export type TokenType = {
  name?: string
  symbol: string
  decimals: 6 | 8 | 18
  icon: string
}

const _tokens: TokenType[] = [
  {
    symbol: 'USDT',
    decimals: 6,
    icon: '/imgs/tokens/usdt.svg',
  },
]

export const TOKENS = _tokens.reduce((prev, next) => {
  if (!next.name) {
    next.name = next.symbol
  }
  prev[next.name] = next
  return prev
}, {} as Record<string, TokenType>)
