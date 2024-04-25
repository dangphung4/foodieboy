import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthContext = createContext<any>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isAdmin, setIsAdmin] = useState(false);
  const validEmails = ["dangphung4@gmail.com", "shamsabbaas98@gmail.com"];

  useEffect(() => {
    // Ensure setIsAdmin always receives a boolean value
    const adminStatus =
      isAuthenticated && user ? validEmails.includes(user.email ?? "") : false;
    setIsAdmin(adminStatus);
  }, [user, isAuthenticated, validEmails]);

  const value = {
    user,
    isAuthenticated,
    isAdmin,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
