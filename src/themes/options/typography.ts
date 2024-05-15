import type { ThemeOptions } from '@mui/material'
import type { TypographyOptions } from '@mui/material/styles/createTypography'

const variants = {
  // CUSTOM Typography variant (add type to declare.d.ts)
  bodyLarge: { fontWeight: 400, fontSize: 16, lineHeight: 24 / 16 },
  bodyMedium: { fontWeight: 400, fontSize: 14, lineHeight: 20 / 14 },
  bodySmall: { fontWeight: 400, fontSize: 12, lineHeight: 16 / 12 },
} as TypographyOptions

export type ITypographyVariants = keyof typeof variants

export const TypographyVariants = {
  // CUSTOM FontFamily
  fontFamily: ['Space Grotesk', 'sans-serif'].join(','),
  ...variants,
} as TypographyOptions

const theme = {
  components: {
    defaultProps: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h2',
        subtitle2: 'h3',
        body1: 'span',
        body2: 'span',
      },
    },
  },
} as ThemeOptions

export const TypographyComponent = theme.components
