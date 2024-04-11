import { createContext, useContext, useEffect, useState } from "react";

const ContextCategory = createContext();

export const CategoryProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState([]);

  return (
    <ContextCategory.Provider value={{ categoryData, setCategoryData }}>
      {children}
    </ContextCategory.Provider>
  );
};

export const useCategoryContext = () => {
  return useContext(ContextCategory);
};
