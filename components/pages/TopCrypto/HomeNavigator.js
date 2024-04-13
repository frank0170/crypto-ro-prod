import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeMainPage from "./HomeView";
import NewsPage from "./NewsPage";

// import { VideoPlayer } from "../../common/videoElement";

const HomeStack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="MainPageHome" component={HomeMainPage} />
      <HomeStack.Screen name="NewsPage" component={NewsPage} />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
