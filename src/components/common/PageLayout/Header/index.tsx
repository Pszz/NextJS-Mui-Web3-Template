import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { header } from '../config'

const Header: React.FC = () => {
  return (
    <AppBar sx={{ height: header.height }} enableColorOnDark>
      <Toolbar>
        <Typography component="h1">HEADER</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
