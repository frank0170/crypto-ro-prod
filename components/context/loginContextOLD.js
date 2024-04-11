import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  // Function to load initial state
  const loadInitialState = async () => {
    try {
      const storedIsAuthenticated = await AsyncStorage.getItem(
        "isAuthenticated"
      );
      if (storedIsAuthenticated !== null) {
        setIsAuthenticated(JSON.parse(storedIsAuthenticated));
      }

      const storedUserData = await AsyncStorage.getItem("userData");
      if (storedUserData !== null) {
        setUserData(JSON.parse(storedUserData));
      }
    } catch (e) {
      // Handling error while reading from AsyncStorage
      console.log(e);
    }
  };

  // Load initial state from AsyncStorage
  useEffect(() => {
    loadInitialState();
  }, []);

  // Effect to persist isAuthenticated
  useEffect(() => {
    AsyncStorage.setItem(
      "isAuthenticated",
      JSON.stringify(isAuthenticated)
    ).catch((e) => console.log(e));
  }, [isAuthenticated]);

  // Effect to persist userData
  useEffect(() => {
    AsyncStorage.setItem("userData", JSON.stringify(userData)).catch((e) =>
      console.log(e)
    );
  }, [userData]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
