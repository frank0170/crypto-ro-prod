import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import "./homeStyle.js";
import { homeStyles } from "./homeStyle.js";
import CaloriesIconSmall from "../../icons/caloriesIconSmall.js";
import TimeSmallIcon from "../../icons/timeSmallIcon.js";
import { TouchableOpacity } from "react-native-gesture-handler";

const WorkoutCard = ({ image, name, kcal, time }) => {
  const cardStyle = homeStyles.home_3.workoutCard.card;

  return (
    <ImageBackground source={image} style={cardStyle}>
      <View style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-end",
          }}
        >
          <Text style={homeStyles.home_3.workoutCard.title}>{name}</Text>
        </View>
        <View style={homeStyles.home_3.workoutCard.secondaryTextPart}>
          <View style={homeStyles.home_3.workoutCard.secondaryTextPartDiv}>
            <Text style={homeStyles.home_3.workoutCard.secondaryTextPartText}>
              <CaloriesIconSmall /> {kcal} kcal
            </Text>
          </View>
          <View style={homeStyles.home_3.workoutCard.secondaryTextPartDiv}>
            <Text style={homeStyles.home_3.workoutCard.secondaryTextPartText}>
              <TimeSmallIcon /> {time} min
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const CategoryCard = ({ category, selectedCategory, setSelectedCategory }) => {
  const cardStyle =
    selectedCategory === category
      ? homeStyles.home_3.categoryCard.selected
      : homeStyles.home_3.categoryCard.notSelected;

  const textStyle =
    selectedCategory === category
      ? homeStyles.home_3.categoryCard.selectedText
      : homeStyles.home_3.categoryCard.notSelectedText;

  return (
    <TouchableOpacity
      style={cardStyle}
      onPress={() => setSelectedCategory(category)}
    >
      <Text style={textStyle}>{category}</Text>
    </TouchableOpacity>
  );
};

const HomePart2 = ({ person, sampleData }) => {
  const categories = [
    "All type",
    "Chest",
    "Cardio",
    "Lower",
    "Back",
    "Shoulders",
    "Legs",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All type");

  const workoutsStyle = homeStyles.home_2.workoutsStyle.seeAllOff;

  const seeAllTextStyle = homeStyles.home_2.seeAllTextOff;
  return (
    <View style={workoutsStyle}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={homeStyles.home_1.welcome}>Choose your exercise</Text>
        {/* <TouchableOpacity>
          <Text style={seeAllTextStyle}>Select type</Text>
        </TouchableOpacity> */}
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {categories.map((item) => (
          <CategoryCard
            key={item.id} // Don't forget to add a unique key prop for each item
            category={item}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        ))}
      </ScrollView>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 24 }}
      >
        {sampleData.workouts.map((item, index) => (
          <WorkoutCard
            key={item.index} // Don't forget to add a unique key prop for each item
            image={item.image}
            name={item.name}
            kcal={item.kcal}
            time={item.time}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomePart2;
