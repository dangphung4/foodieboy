import { Flex, Box, Link } from "@chakra-ui/react";
import AnimatedRoutes from "./AnimatedRoutes";
import ThemeToggleIcon from "./components/ThemeToggleIcon";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";

function App() {
  return (
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
          <Link as={RouterLink} to="/food/list" marginRight="4">
            Restaurants
          </Link>
          <Link as={RouterLink} to="/csv" marginRight="4">
            CSV
          </Link>
        </Box>
        <ThemeToggleIcon />
      </Flex>
      <Flex direction="column" padding="4">
        <AnimatedRoutes />
      </Flex>
    </Router>
  );
}

export default App;
