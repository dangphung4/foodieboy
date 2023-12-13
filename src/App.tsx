// App.js
import * as React from "react"
import {
  ChakraProvider,
  Flex,
  VStack,
  Box,
  Link,
  Spacer,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import HomePage from "./Views/HomePage";
import MoodIndigoTheme from "./theme"; // Import your custom theme
import FoodButton from "./components/FoodButton";
import ThemeToggleIcon from "./components/ThemeToggleIcon";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";

function App() {
  const { toggleColorMode } = useColorMode();
  const linkColor = useColorModeValue("red.200", "blue");

  return (
    <ChakraProvider theme={MoodIndigoTheme}>
      <Router>
        <Flex
          as="header"
          color={linkColor}
          width="full"
          padding="4"
          align="center"
          boxShadow="md"
        >
          <Box>
            <Link as={RouterLink} to="/" marginRight="4">
              Home
            </Link>
            <Link as={RouterLink} to="/food" marginRight="4">
              FoodieBoy
            </Link>
          </Box>
          <ThemeToggleIcon />
        </Flex>
        <Flex minHeight="100vh"></Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
