import { Paper, Typography } from '@mui/material'
import React from 'react'
import { footer } from '../config'

export function Footer() {
  return (
    <Paper component="footer" sx={{ height: footer.height }}>
      <Typography component="h1">FOOTER</Typography>
    </Paper>
  )
}
