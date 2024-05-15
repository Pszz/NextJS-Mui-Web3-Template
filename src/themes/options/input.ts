import type { ThemeOptions } from '@mui/material'

const theme = {
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {},
      },
    },
  },
} as ThemeOptions

export const InputComponent = theme.components
