import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { workoutsStyle } from "./workoutsStyle.js";
import WorkoutsGrid from "../../common/workoutsGrid.js";
import { SafeAreaView } from "react-native-safe-area-context";

const WorkoutsMainPage = ({ navigation }) => {
  const [selectedItemsArray, setSelectedItemsArray] = useState([]);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#111214" }}
      edges={["right", "top", "left"]}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: 16,
        }}
      >
        <Text style={workoutsStyle.title}>
          What do you want to train today?
        </Text>

        <Text style={workoutsStyle.subtitle}>
          You need to select 2-3 muscle groups.
        </Text>

        <WorkoutsGrid
          multipleSelection={true}
          navigation={navigation}
          {...{ selectedItemsArray, setSelectedItemsArray }}
        />
      </View>
    </SafeAreaView>
  );
};

export default WorkoutsMainPage;
