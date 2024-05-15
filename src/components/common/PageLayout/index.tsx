import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import { header } from './config'
import { Footer } from './Footer'

export type IPageLayoutProps = {
  children: React.ReactNode
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <Box sx={{ pt: header.height, minHeight: `calc(100vh - ${header.height}px)` }}>{children}</Box>
      <Footer />
    </main>
  )
}

export default PageLayout
