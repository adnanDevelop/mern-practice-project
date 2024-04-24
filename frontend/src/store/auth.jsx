import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("userToken"));
  const [userData, setUserData] = useState("");
  const [serviceData, storeServiceData] = useState(null);

  // Store user token function
  const storeToken = (userToken) => {
    setToken(userToken);
    localStorage.setItem("userToken", userToken);
  };

  // Logout user function
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

  // SERVICE PAGE DATA
  const fetchData = async () => {
    const getData = await fetch("http://localhost:4000/service");
    const response = await getData.json();
    storeServiceData(response.data);
  };

  useEffect(() => {
    fetchData();
    getUserData();
  }, []);
  return (
    <AuthContext.Provider
      value={{ storeToken, logoutUser, isLogedIn, userData, serviceData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// CUSTOM HOOK
export const useAuthContext = () => useContext(AuthContext);
