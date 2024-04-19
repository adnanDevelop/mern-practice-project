import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("userToken"));
  const [userData, setUserData] = useState("");

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

  // JWT AUTHENTICATION  TO GET CURRENTLY LOGGED IN USER DATA

  const getUserData = async () => {
    try {
      const request = await fetch("http://localhost:4000/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const response = await request.json();
      setUserData(response.message);
    } catch (error) {
      console.log("Error while fetching user data using token");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <AuthContext.Provider
      value={{ storeToken, logoutUser, isLogedIn, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// CUSTOM HOOK
export const useAuthContext = () => useContext(AuthContext);
