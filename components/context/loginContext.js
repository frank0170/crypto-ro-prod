// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState(null);

  // Load the user's data from AsyncStorage
  useEffect(() => {
    const loadUserData = async () => {
      const isLoggedIn = await AsyncStorage.getItem("isLogged");
      const data = await AsyncStorage.getItem("userData");
      if (isLoggedIn !== null && data !== null) {
        setIsLogged(JSON.parse(isLoggedIn));
        setUserData(JSON.parse(data));
      }
    };

    loadUserData();
  }, []);

  const logIn = async (data) => {
    await AsyncStorage.setItem("isLogged", JSON.stringify(true));
    await AsyncStorage.setItem("userData", JSON.stringify(data));
    setIsLogged(true);
    setUserData(data);
  };

  const logOut = async () => {
    await AsyncStorage.removeItem("isLogged");
    await AsyncStorage.removeItem("userData");
    setIsLogged(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ isLogged, userData, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = () => useContext(AuthContext);
