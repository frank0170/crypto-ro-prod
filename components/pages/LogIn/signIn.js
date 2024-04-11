import React, { useEffect } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { LogInStyles } from "./loginStyles";
import col from "../../public/exPhoto/col2.png";
import appleIcon from "../../public/appleIcon.png";
import googleIcon from "../../public/googleIcon.png";
import { ImageBackground } from "react-native";
import Profile from "./ProfilePage";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useAuth } from "../../context/loginContext";
import { ScrollView } from "react-native";

const SignUp = ({ navigation }) => {
  const { userData } = useAuth();

  console.log(userData);

  useEffect(() => {
    if (userData) {
      navigation.navigate("ProfilePage");
    }
  }, [userData, navigation]);

  const handleNewSignUp = () => {
    navigation.navigate("CreateAccount");
  };

  return (
    <>
      {!userData ? (
        <ScrollView style={styles.container}>
          <ImageBackground source={col} style={styles.imageBackground}>
            <View style={styles.titleContainer}>
              <Text style={styles.headerTitle}>Your Shape Mentor</Text>
              <Text style={styles.subtitle}>
                One best app for all things fitness
              </Text>
            </View>
          </ImageBackground>

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={styles.orangeButton}
              onPress={handleNewSignUp}
            >
              <Text style={styles.buttonText}>Sign up with email</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.greyButton} disabled>
              <Image source={appleIcon} style={styles.icon} />
              <Text style={[styles.buttonText, { paddingLeft: 10 }]}>
                Sign up with Apple
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.greyButton} disabled>
              <Image source={googleIcon} style={styles.icon} />
              <Text style={[styles.buttonText, { paddingLeft: 10 }]}>
                Sign up with Google
              </Text>
            </TouchableOpacity>

            <Text style={styles.signInText}>
              Already have an account?
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginAccount")}
              >
                <Text style={styles.signInLink}>Sign in</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </ScrollView>
      ) : (
        <Profile />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111214",
  },
  imageBackground: {
    height: 500,
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  headerTitle: {
    fontSize: 30,

    alignSelf: "center",
    color: "#FFFFFF",
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 16,

    color: "#6B7280",
    alignSelf: "center",
    marginTop: 15,
  },
  orangeButton: {
    backgroundColor: "#FF8036",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  greyButton: {
    backgroundColor: "#26282C",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,

    textAlign: "center",
    flex: 1,
  },
  icon: {
    width: 18,
    height: 18,
  },
  signInText: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 24,
  },
  signInLink: {
    color: "#FF8036",
    marginLeft: 8,
  },
});

export default SignUp;
