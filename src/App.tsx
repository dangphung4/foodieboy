// App.js
import * as React from "react";
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
import { AnimatePresence } from "framer-motion";
import HomePage from "./Views/HomePage";
import FoodPickerPage from "./Views/FoodPickerPage";
import MoodIndigoTheme from "./theme";
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
          // Make sure the content starts below the header
          // You can adjust the `pt` value as per your header height
          pt={{ base: "16", md: "20" }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/food" element={<FoodPickerPage />} />
            {/* <Route path="/page2" element={<PageTwo />} /> */}
          </Routes>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
