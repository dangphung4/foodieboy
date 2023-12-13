import * as React from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  Link,
  Spacer,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import AnimatedRoutes from "./AnimatedRoutes";
import MoodIndigoTheme from "./theme";
import ThemeToggleIcon from "./components/ThemeToggleIcon";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
  useLocation,
} from "react-router-dom";

function App() {
  const { toggleColorMode } = useColorMode();
  const linkColor = useColorModeValue("red.200", "blue");
  const bg = useColorModeValue("red.500", "red.200");

  
  return (
    <ChakraProvider theme={MoodIndigoTheme}>
      <Router>
        <Flex
          as="header"
          width="full"
          padding="4"
          align="center"
          boxShadow="lg"
          justifyContent="space-between"
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
        <Flex
          direction="column"
          minHeight="100vh"
          padding="4"
          pt={{ base: "16", md: "20" }}
        >
          <AnimatedRoutes />
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
