import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WorkoutsMainPage from "./WorkoutsMainPage";
import WorkoutsExerciseList from "./WorkoutsExerciseList";
import ExercisePreview from "./ExercisePreview";

// import { VideoPlayer } from "../../common/videoElement";

const WorkoutsStack = createNativeStackNavigator();

const WorkoutsScreen = () => {
  return (
    <WorkoutsStack.Navigator screenOptions={{ headerShown: false }}>
      <WorkoutsStack.Screen
        name="MainPageWorkouts"
        component={WorkoutsMainPage}
      />
      <WorkoutsStack.Screen
        name="ExerciseListWorkouts"
        component={WorkoutsExerciseList}
      />
      <WorkoutsStack.Screen
        name="ExercisePreviewWorkouts"
        component={ExercisePreview}
      />
      {/* <WorkoutsStack.Screen name="VideoPlayer" component={VideoPlayer} /> */}
    </WorkoutsStack.Navigator>
  );
};

export default WorkoutsScreen;
