import { extendTheme } from '@chakra-ui/react'
import { theme as glassTheme } from '@saas-ui/theme-glass'
import { theme as baseTheme } from '@saas-ui/react'


export const FoodieBoyTheme = extendTheme(
  {
    // your overrides
  },
  baseTheme,
  glassTheme
);

export default FoodieBoyTheme;