import React, { useState, useEffect } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { workoutsStyle } from "./workoutsStyle.js";
import { ScrollView } from "react-native-gesture-handler";
import HomePart1 from "../Home/HomePart1.js";
import { TouchableOpacity } from "react-native-gesture-handler";

const WorkoutExerciseTab = ({ exercisesList }) => {
  const exampleExercise = exercisesList[0];

  return (
    <View>
      <View>
        <ImageBackground></ImageBackground>
      </View>

      <View>
        <Text></Text>

        <TouchableOpacity>
          <View>
            <Text>Start Workout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkoutExerciseTab;
