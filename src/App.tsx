import { Flex, Box, Link, Spacer } from "@chakra-ui/react";
import AnimatedRoutes from "./AnimatedRoutes";
import ThemeToggleIcon from "./components/ThemeToggleIcon";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import AuthenticationButton from "./components/auth/AuthenticationButton";
import { useAuth } from "./context/AuthContext";

function App() {
  // TODO get the role to work from auth 0, ill just make this super janky for now and ahve emails.
  // right now this is with isAdmin, which is honestly just a manual check for now.
  const {isAdmin} = useAuth();

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
          <Link as={RouterLink} to="/foods" marginRight="4">
            Restaurants
          </Link>
          <Link as={RouterLink} to="/food" marginRight="4">
            Randomizer
          </Link>
          {isAdmin && ( // Conditionally render this link based on isAuthenticated
            <Link as={RouterLink} to="/food" marginRight="4">
              neednewidea
            </Link>
          )}
          {/* <Link as={RouterLink} to="/blogs" marginRight="4">
            Blogs
          </Link> */}
        </Box>
        <Flex align="center">
          <ThemeToggleIcon />
          <Spacer width="4" />
          <AuthenticationButton />
        </Flex>
      </Flex>
      <Flex direction="column" padding="4">
        <AnimatedRoutes />
      </Flex>
    </Router>
  );
}

export default App;
