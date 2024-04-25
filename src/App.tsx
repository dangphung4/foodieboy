import { Flex, Box, Link, Spacer } from "@chakra-ui/react";
import AnimatedRoutes from "./AnimatedRoutes";
import ThemeToggleIcon from "./components/ThemeToggleIcon";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import AuthenticationButton from "./components/auth/AuthenticationButton";
import { useAuth } from "./context/AuthContext";


/**
 * App
 * Main applicatin component, also has the navbar here
 * @see https://chakra-ui.com/docs/layout/flex
 *
 * @returns {JSX.Element}
 */
function App() {
  // TODO get the role to work from auth 0, ill just make this super janky for now and ahve emails.
  // right now this is with isAdmin, which is honestly just a manual check for now.
  const {isAdmin} = useAuth();

  return (
    <Router>
      {/* This is the navbar */}
      <Flex
        as="header"
        width="full"
        padding="4"
        align="center"
        boxShadow="lg"
        justifyContent="space-between"
      >
        {/* Direct links that user can press */}
        <Box>
          <Link as={RouterLink} to="/" marginRight="4">
            Home
          </Link>
          <Link as={RouterLink} to="/foods" marginRight="4">
            Restaurants
          </Link>
          <Link as={RouterLink} to="/food" marginRight="4">
            RandomReview
          </Link>
          {isAdmin && (
            <Link as={RouterLink} to="/create-review" marginRight="4">
              Create Review
            </Link>
          )}
          {/* <Link as={RouterLink} to="/blogs" marginRight="4">
            Blogs
          </Link> */}
        </Box>

        {/* Buttons on top right */}
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
