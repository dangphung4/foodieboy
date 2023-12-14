// theme.js
import { extendTheme, type ThemeConfig  } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}
const MoodIndigoTheme = extendTheme({
  colors: {
    indigo: {
      50: '#ebefff',  
      100: '#c2c6ff',
      200: '#999dff',
      300: '#7073ff',
      400: '#474aff',
      500: '#1e20ff', 
      600: '#1819cc', 
      700: '#121399',
      800: '#0c0d66',
      900: '#060733',
    },
  },
  components: {
    Link: {
      baseStyle: (props: { colorMode: string; }) => ({
        color: props.colorMode === 'dark' ? 'red.200' : 'purple.500',
      }),
    },
    Flex: {
      baseStyle: (props: { colorMode: string; }) => ({
        bg: props.colorMode === 'dark' ? 'red.200' : 'purple.500',
      }),
  },
  config: config,
  styles: {
    global: (props: { colorMode: string; }) => ({
      body: {
      },
      a: {
        color: props.colorMode === 'dark' ? 'green' : 'red.200', // this will style all anchor tags globally
      },
    }),
  },
}
});


export default MoodIndigoTheme;




