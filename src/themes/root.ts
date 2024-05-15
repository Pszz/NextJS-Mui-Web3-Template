import type { PaletteOptions, ThemeOptions } from '@mui/material'
import { ComponentOptions } from './components'
import { TypographyVariants } from './options'
import type { ThemeColor } from './options/colors'

export const RootThemes: ThemeOptions = {
  spacing: 1,
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 834,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: TypographyVariants,
  components: ComponentOptions.components,
}

export const CustomTheme = (colors: ThemeColor, extra?: PaletteOptions): ThemeOptions => {
  return {
    palette: {
      ...extra,
      background: {
        // default: colors.white,
        // paper: colors.white,
      },
      primary: {
        main: colors.black,
        contrastText: colors.white,
      },
    },
  }
}
