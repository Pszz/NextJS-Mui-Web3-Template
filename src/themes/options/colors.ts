export const LightColor = {
  white: '#FFF',
  black: '#000',
}

export const DarkColor = {
  white: '#000',
  black: '#FFF',
}

export type ThemeColor = typeof DarkColor & typeof LightColor

export default {
  light: LightColor,
  dark: DarkColor,
}
