import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ExerciseProvider } from "./components/context/exerciseContext";
import { CategoryProvider } from "./components/context/categoryContext";
import { AuthProvider } from "./components/context/loginContext";
import { SignupProvider } from "./components/context/signupContext";
// import "./App.css";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import Home from "./components/pages/Home/HomeContainer";
import HomeIcon from "./components/icons/homeIcon";
import TopCrypto from "./components/icons/topCryptoIcon";
import LearnIcon from "./components/icons/learnIcon";
import PodcastIcon from "./components/icons/podcastIcon";
import BitcoinIcon from "./components/icons/bitcoinIcon";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconComponent;

            if (route.name === "Home") {
              iconComponent = <HomeIcon isActive={focused} />;
            } else if (route.name === "Learn") {
              iconComponent = <LearnIcon isActive={focused} />;
            } else if (route.name === "Podcast") {
              iconComponent = <PodcastIcon isActive={focused} />;
            } else if (route.name === "Top crypto") {
              iconComponent = <TopCrypto isActive={focused} />;
            } else if (route.name === "Bitcoin") {
              iconComponent = <BitcoinIcon isActive={focused} />;
            }

            return iconComponent;
          },
          headerShown: false,
          tabBarLabel: () => null, // Remove labels
          tabBarStyle: {
            backgroundColor: "#19102B",
            border: "1px solid #312745",
            height: 85, // Adjust the height to make the icons bigger
          },
        })}
        tabBarOptions={{
          activeTintColor: "#6b0ecf",
          inactiveTintColor: "#6B7280",
          style: {},
          labelStyle: {
            display: "none", // Remove label
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Learn" component={Home} />
        <Tab.Screen name="Bitcoin" component={Home} />
        <Tab.Screen name="Podcast" component={Home} />
        <Tab.Screen name="Top crypto" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <SignupProvider>
          <CategoryProvider>
            <ExerciseProvider>
              <AppNavigation />
            </ExerciseProvider>
          </CategoryProvider>
        </SignupProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
