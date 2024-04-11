import { createContext, useContext, useEffect, useState } from "react";

const ContextExercise = createContext();

export const ExerciseProvider = ({ children }) => {
  const [exerciseData, setExerciseData] = useState();

  return (
    <ContextExercise.Provider value={{ exerciseData, setExerciseData }}>
      {children}
    </ContextExercise.Provider>
  );
};

export const useExerciseContext = () => {
  return useContext(ContextExercise);
};
