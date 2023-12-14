import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import MoodIndigoTheme from './theme.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={MoodIndigoTheme}>
      <ColorModeScript initialColorMode='dark' />
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
