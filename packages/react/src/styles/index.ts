import { createStitches, defaultThemeMap } from '@stitches/react'
import * as tokens from '@eamj/tokens'

export const {
  css,
  theme,
  reset,
  styled,
  prefix,
  config,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: tokens,

  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
})
