import React from "react";
import { Image, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import playButtonTrans from "../../../public/playButton.png";
import { LogInStyles } from "../../LogIn/loginStyles";
import stopwatchTimer from "../../../public/timeClock.png";
import back from "../../../public/back.png";
import StopWatch from "../../../icons/stopWatch";
import PlayButton from "../../../icons/playButton";
import { workoutsStyle } from "./workoutsStyle.js";
import { useExerciseContext } from "../../../context/exerciseContext";
import timeClock from "../../../public/timeClock.png";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";

const WorkoutCard = ({ exercise, navigation }) => {
  const { exerciseData, setExerciseData } = useExerciseContext();

  const handleExercise = (exercise) => {
    setExerciseData(exercise);
    navigation.navigate("ExercisePreview");
  };
  return (
    <View
      style={{
        backgroundColor: "#24262b",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#37383C",
        marginTop: 24,
        height: 108,
        marginRight: 24,
        marginLeft: 24,
        padding: 14,
        flexDirection: "row",
      }}
    >
      <View>
        <Image style={workoutsStyle.card_image} source={exercise.image} />
      </View>

      <View style={{ marginLeft: 24, top: -10 }}>
        <Text style={workoutsStyle.exText1}> {exercise.status}</Text>
        <Text style={workoutsStyle.exText2}> {exercise.name} </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ height: 16, width: 16, marginTop: 6, marginRight: 4 }}
            source={timeClock}
          />
          <Text style={workoutsStyle.exText3}>{exercise.time} sec</Text>
        </View>
      </View>

      <TouchableOpacity
        style={workoutsStyle.playButton}
        onPress={() => handleExercise(exercise)}
      >
        <PlayButton />
      </TouchableOpacity>
    </View>
  );
};

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

  const exercisesList = [
    {
      image: back,
      status: "Uncompleted",
      name: "Incline Bench",
      time: 30,
    },
    {
      image: undefined,
      status: "Uncompleted",
      name: "Dumbbell Flyes",
      time: 30,
    },
    {
      image: undefined,
      status: "Uncompleted",
      name: "Bench Press",
      time: 30,
    },
    {
      image: undefined,
      status: "Uncompleted",
      name: "Decline Press",
      time: 30,
    },
    {
      image: undefined,
      status: "Uncompleted",
      name: "Dumbbell Flyes",
      time: 30,
    },
    {
      image: undefined,
      status: "Uncompleted",
      name: "Bench Press",
      time: 30,
    },
    {
      image: undefined,
      status: "Uncompleted",
      name: "Decline Press",
      time: 30,
    },
  ];

  return (
    <ScrollView>
      <View style={{ width: "100%", height: "60%", flexDirection: "column" }}>
        <ImageBackground source={exercise?.image} style={{ height: "100%" }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center", // Center vertically in the ImageBackground
              alignItems: "center", // Center horizontally in the ImageBackground
            }}
          ></View>
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              paddingBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                alignSelf: "center",
                color: "#FFFFFF",
              }}
            >
              25 Total
            </Text>
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
        </ImageBackground>
      </View>

      <View
        style={{
          flexDirection: "column",
          backgroundColor: "#24262B",
          width: "100%",
          height: "100%",

          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#D7D8D9",
            alignSelf: "center",

            textAlign: "center",
          }}
        >
          {exercise?.description}
        </Text>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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

        <View style={{ marginBottom: 24 }}>
          {exercisesList.map((exercise) => (
            <WorkoutCard exercise={exercise} />
          ))}
        </View>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FF8036",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#37383C",
            height: 54,
            width: "100%",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "#FFFFFF",
                marginRight: 8, // Add some space between text and SVG if needed
              }}
            >
              Start Workout
            </Text>
            <StopWatch />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ExercisePreview;
