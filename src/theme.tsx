// theme.js
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const FoodieBoyTheme = extendTheme({
  colors: {
    github: {
      dark: {
        bg: '#0d1117',
        text: '#c9d1d9',
        link: '#58a6ff',
        border: '#30363d',
        hover: '#1f6feb',
        muted: '#8b949e',
      },
      light: {
        bg: '#ffffff',
        text: '#24292e',
        link: '#0366d6',
        border: '#e1e4e8',
        hover: '#0366d6',
        muted: '#6a737d',
      },
    },
  },
  components: {
    Link: {
      baseStyle: ({ colorMode }) => ({
        color: colorMode === 'dark' ? 'github.dark.link' : 'github.light.link',
        _hover: {
          textDecoration: 'underline',
          color: colorMode === 'dark' ? 'github.dark.hover' : 'github.light.hover',
        },
      }),
    },
    Heading: {
      baseStyle: ({ colorMode }) => ({
        color: colorMode === 'dark' ? 'github.dark.text' : 'github.light.text',
      }),
    },
    Text: {
      baseStyle: ({ colorMode }) => ({
        color: colorMode === 'dark' ? 'github.dark.text' : 'github.light.text',
      }),
    },
    Button: {
      baseStyle: ({ colorMode }) => ({
        bg: colorMode === 'dark' ? 'github.dark.link' : 'github.light.link',
        color: 'white',
        _hover: {
          bg: colorMode === 'dark' ? 'github.dark.hover' : 'github.light.hover',
        },
      }),
    },
  },
  config: config,
  styles: {
    global: ({ colorMode }) => ({
      body: {
        bg: colorMode === 'dark' ? 'github.dark.bg' : 'github.light.bg',
        color: colorMode === 'dark' ? 'github.dark.text' : 'github.light.text',
      },
      'html, body': {
        minHeight: '100vh',
      },
      '*': {
        borderColor: colorMode === 'dark' ? 'github.dark.border' : 'github.light.border',
      },
    }),
  },
});

export default FoodieBoyTheme;