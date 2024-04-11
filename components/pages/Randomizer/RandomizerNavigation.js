import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WorkoutsMainPage from "./WorkoutsMainPage";
import WorkoutsExerciseList from "./WorkoutsExerciseList";
import ExercisePreview from "./ExercisePreview";

const WorkoutsStack = createNativeStackNavigator();

const WorkoutsScreen = () => {
  return (
    <WorkoutsStack.Navigator screenOptions={{ headerShown: false }}>
      <WorkoutsStack.Screen
        name="MainPageRandom"
        component={WorkoutsMainPage}
      />
      <WorkoutsStack.Screen
        name="ExerciseListRandom"
        component={WorkoutsExerciseList}
      />
      <WorkoutsStack.Screen
        name="ExercisePreviewRandom"
        component={ExercisePreview}
      />
    </WorkoutsStack.Navigator>
  );
};

export default WorkoutsScreen;
