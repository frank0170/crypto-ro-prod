import { createContext, useContext, useEffect, useState } from "react";

const ContextSignup = createContext();

export const SignupProvider = ({ children }) => {
  const [signupDataContext, setSignupDataContext] = useState({});

  return (
    <ContextSignup.Provider value={{ signupDataContext, setSignupDataContext }}>
      {children}
    </ContextSignup.Provider>
  );
};

export const useSignupContext = () => {
  return useContext(ContextSignup);
};
