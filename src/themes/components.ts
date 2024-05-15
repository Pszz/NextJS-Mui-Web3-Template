import { CommonColors, ThemeOptions } from '@mui/material'
import { TypographyComponent, ButtonComponent, InputComponent } from './options'

const buildVar = function (name: string) {
  const NAMESPACE = '--v-'
  return `${NAMESPACE}${name}`
}

export const ComponentOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => {
        const common = theme.palette.common as CommonColors
        const vars = Object.keys(common).reduce((prev: any, next: string) => {
          prev[buildVar(next)] = common[next as keyof typeof common]

          return prev
        }, {} as any)

        return {
          ':root': {
            ...vars,
          },
        }
      },
    },
    ...ButtonComponent,
    ...InputComponent,
    ...TypographyComponent,
  },
} as ThemeOptions

export default ComponentOptions
