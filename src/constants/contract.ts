import { mainnet } from 'wagmi/chains'

export const CONTRACTS = {
  [mainnet.id]: {},
} as const

export type CHINAS = keyof typeof CONTRACTS
