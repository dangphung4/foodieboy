import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import FoodieBoyTheme from "./theme.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthProvider } from "./context/AuthContext.tsx";


/**
 * Auth0 domain and client id
 * These are used to authenticate the user
 * @type {string}
 */
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
export const apiUrl = import.meta.env.VITE_API_URL;


/**
 * Render the application
 * This is the entry point of the application
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={FoodieBoyTheme}>
      <ColorModeScript initialColorMode="dark" />
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        cacheLocation="localstorage"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <AuthProvider>
          <App />
        </AuthProvider>
      </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>
);
