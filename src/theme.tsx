// theme.js
import { extendTheme } from '@chakra-ui/react';

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
      // baseStyle, sizes, variants, etc. can be customized here
      baseStyle: (props: { colorMode: string; }) => ({
        color: props.colorMode === 'dark' ? 'red.200' : 'purple.500',
      }),
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props: { colorMode: string; }) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.100',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.800',
      },
      a: {
        color: props.colorMode === 'dark' ? 'blue' : 'red.200', // this will style all anchor tags globally
      },
    }),
  },
});

export default MoodIndigoTheme;
