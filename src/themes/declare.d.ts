import React from 'react'
import type { ThemeColor } from './themes/options/colors'

declare module '@mui/material/styles/createPalette' {
  interface CommonColors extends ThemeColor {
    black: string
    white: string
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    bodyLarge?: React.CSSProperties
    bodyMedium?: React.CSSProperties
    bodySmall?: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    bodyLarge?: React.CSSProperties
    bodyMedium?: React.CSSProperties
    bodySmall?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodyLarge: true
    bodyMedium: true
    bodySmall: true
  }
}
