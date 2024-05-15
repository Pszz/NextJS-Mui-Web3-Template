import Head from 'next/head'
import React from 'react'
import { AppProps } from 'next/app'
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter'
import { EmotionCache } from '@emotion/react'
import { MuiThemeProvider } from '../themes'
import { Web3Context } from '@/web3/context'
import '@/assets/global.css'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function App(props: MyAppProps) {
  const { Component, pageProps } = props
  return (
    <AppCacheProvider {...props}>
      <Head>
        <title>App Title</title>
        <link rel="icon" href="favicon.svg" />
        <link rel="apple-touch-icon" href="favicon.svg" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="/imgs/preview.svg" />
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/imgs/preview.svg" />
        <meta property="og:description" content="" />
      </Head>

      <Web3Context>
        <MuiThemeProvider>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </Web3Context>
    </AppCacheProvider>
  )
}

export default App
