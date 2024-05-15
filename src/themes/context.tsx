import { deepmerge } from '@mui/utils'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React, { createContext, useContext, useMemo, useState } from 'react'
import Colors from './options/colors'
import { CustomTheme, RootThemes } from './root'

type ModeType = 'light' | 'dark'

const _useMuiThemes = () => {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const cacheTheme = localStorage.getItem('cache-theme') as ModeType | null

  const [mode, setMode] = useState<ModeType>(cacheTheme || 'light')

  const themes = useMemo(() => {
    const colors = Colors[mode]
    const theme = CustomTheme(colors, { mode, common: { ...colors } })
    return createTheme(deepmerge(theme, RootThemes))
  }, [mode])

  return {
    mode,
    themes,
    setMode: (_mode: ModeType) => {
      localStorage.setItem('cache-theme', _mode)
      setMode(_mode)
    },
  }
}

export interface ThemeModeContext {
  mode: ModeType
  setMode: (mode: ModeType) => void
}

const ThemeModeContext = createContext<ThemeModeContext | null>(null)
export const useThemeMode = (): ThemeModeContext => {
  const context = useContext(ThemeModeContext)
  if (!context) {
    throw new Error('useColorMode must be used within a ColorModeContext')
  }

  return context
}

type MuiThemeProviderProps = {
  children: React.ReactNode
}

export const MuiThemeProvider = ({ children }: MuiThemeProviderProps) => {
  const { themes, mode, setMode } = _useMuiThemes()

  return (
    <ThemeModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={themes}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export default MuiThemeProvider
