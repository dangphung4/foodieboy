import { extendTheme } from '@chakra-ui/react'
import { theme as glassTheme } from '@saas-ui/theme-glass'
import { theme as baseTheme } from '@saas-ui/react'

/**
 * FoodieBoy theme
 * This theme extends the base theme with the glass theme
 * @type {ThemeConfig}
 * @see https://chakra-ui.com/docs/theming/customize-theme
 * @see https://chakra-ui.com/docs/theming/component-style
 * @see https://chakra-ui.com/docs/theming/component-variant
 */
export const FoodieBoyTheme = extendTheme(
  {
    // your overrides
  },
  baseTheme,
  glassTheme
);

export default FoodieBoyTheme;