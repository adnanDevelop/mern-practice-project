import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("userToken"));
  // STORE USER TOKEN FUNCTION
  const storeToken = (userToken) =>
    localStorage.setItem("userToken", userToken);

  // LOGOUT USER FUNCTION
  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem("userToken");
  };

  // CHECKNG IF USER LOGGED IN THEN WE WON'T SHOW LOGIN AND SIGNUP NAVLINK
  const isLogedIn = token;

  return (
    <AuthContext.Provider value={{ storeToken, logoutUser, isLogedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// CUSTOM HOOK
export const useAuthContext = () => useContext(AuthContext);
