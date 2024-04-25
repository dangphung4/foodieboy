import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
import UserProfile from "./UserProfile";

const AuthenticationButton = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return !isAuthenticated ? (
    <Button onClick={() => loginWithRedirect()}>Log In</Button>
  ) : (
    <UserProfile user={user} logout={logout} />
  );
};

export default AuthenticationButton;
