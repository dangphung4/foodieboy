import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import FoodieBoyTheme from "./theme.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={FoodieBoyTheme}>
      <ColorModeScript initialColorMode="dark" />
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        cacheLocation="localstorage"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
          <App />
      </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>
);
