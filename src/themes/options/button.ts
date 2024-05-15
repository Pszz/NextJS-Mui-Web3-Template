import type { ThemeOptions } from '@mui/material'

const theme = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
} as ThemeOptions

export const ButtonComponent = theme.components
