import { WagmiProvider, createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { createClient } from 'viem'
import React, { useMemo } from 'react'
import { ConnectKitProvider } from 'connectkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useClient } from '@/hooks/useClient'

export type Web3ContextProps = {
  children: React.ReactNode
}

const config = createConfig({
  chains: [mainnet],
  client({ chain }) {
    return createClient({ chain, transport: http() })
  },
})

export const Web3Context: React.FC<Web3ContextProps> = ({ children }) => {
  const { isClient } = useClient()

  const queryClient = useMemo(() => new QueryClient(), [])

  if (!isClient) return null
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
