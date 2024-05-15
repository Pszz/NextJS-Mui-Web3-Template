import React from 'react'
import { Button, Divider, Paper, Stack, Switch } from '@mui/material'
import { useAccount } from 'wagmi'
import { ConnectKitButton } from 'connectkit'
import PageLayout from '@/components/common/PageLayout'
import { setPageCache } from '@/cache'
import { useThemeMode } from '@/themes'

export default function Index() {
  const { address } = useAccount()
  const { mode, setMode } = useThemeMode()
  return (
    <PageLayout>
      <Paper sx={{ p: 32, m: 32 }}>
        <Divider textAlign="left" sx={{ pb: 32 }}>
          Wallet Demo
        </Divider>
        <Stack direction="row" spacing={32} sx={{ m: 32 }}>
          <ConnectKitButton />
          <div>Address: {address}</div>
        </Stack>
      </Paper>

      <Paper sx={{ p: 32, m: 32 }}>
        <Divider textAlign="left" sx={{ pb: 32 }}>
          Thems Demo
        </Divider>
        <Stack direction="row" spacing={24}>
          <Switch
            color="primary"
            onChange={() => {
              setMode(mode === 'light' ? 'dark' : 'light')
            }}
          />
          <Button variant="contained" onClick={() => setMode('dark')}>
            Dark
          </Button>
          <Button variant="contained" onClick={() => setMode('light')}>
            Light
          </Button>
        </Stack>
      </Paper>
    </PageLayout>
  )
}

export async function getServerSideProps({ req, res }: any) {
  setPageCache(req, res)

  return {
    props: {},
  }
}
