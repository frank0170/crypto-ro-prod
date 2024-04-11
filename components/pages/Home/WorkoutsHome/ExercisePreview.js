import React from "react";
import { Image, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import { useExerciseContext } from "../../../context/exerciseContext";
import back from "../../../public/back.png";
import { TouchableOpacity } from "react-native-gesture-handler";

import { workoutsStyle } from "./workoutsStyle.js";

const ExercisePreview = () => {
  const { exerciseData } = useExerciseContext();

  const exercise = {
    image: back,
    status: "Uncompleted",
    name: "Incline Bench",
    time: 30,
    description:
      "In this short tutorial, we'll guide you through the basics of performing a bench press, a fundamental exercise for building chest, shoulder, and triceps strength.  ",
  };

  return (
    <View style={{ width: "100%", height: "100%", flexDirection: "column" }}>
      <ImageBackground source={exercise?.image} style={{ height: "100%" }}>
        <View
          style={{
            flex: 1,
            height: "50%",
            alignItems: "flex-end", // Center horizontally in the ImageBackground
          }}
        >
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View>
              <View>
                <Text>25 Total</Text>
              </View>

              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 36,
                  alignSelf: "center",
                  color: "#FFFFFF",
                }}
              >
                {exercise?.name}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  alignSelf: "center",
                  color: "#FFFFFF",
                }}
              >
                With {exercise?.trainer} Trainer
              </Text>
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text>SVG</Text>
                <Text>58min</Text>
                <Text>Time</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRight: "1px solid grey",
                  borderLeft: "1px solid grey",
                }}
              >
                <Text>SVG</Text>
                <Text>254kcal</Text>
                <Text>Calorie</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text>SVG</Text>
                <Text>3x4</Text>
                <Text>Sets</Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <View style={{ padding: 12 }}>
                  <Text>Details</Text>
                  <Text>SVG</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{ padding: 12 }}>
                  <Text>Start</Text>
                  <Text>SVG</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ExercisePreview;
