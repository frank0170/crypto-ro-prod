import React from "react";
import { Image, Text, View, TextInput } from "react-native";
import appleIcon from "../../public/appleIcon.png";
import closeButton from "../../public/closeButton.png";
import googleIcon from "../../public/googleIcon.png";
import line from "../../public/line.png";
import { LogInStyles } from "./loginStyles";
import { useAuth } from "../../context/loginContext";
import { useSignupContext } from "../../context/signupContext";
import md5 from "md5";
import { TouchableOpacity } from "react-native-gesture-handler";

const ConfigureAccount = ({ navigation }) => {
  const { logIn, userData } = useAuth();
  const { signupDataContext } = useSignupContext();
  const [signUpData, setSignUpData] = React.useState({});
  const [errorMsg, setErrorMsg] = React.useState();

  console.log("check", signupDataContext);

  const handleText = (value) => {
    setSignUpData((prev) => {
      return { ...prev, ...value };
    });
    setErrorMsg(null);
  };

  const validatePasswords = () => {
    const { password, confirmPassword } = signUpData;
    if (password === confirmPassword) {
      navigation.navigate("ProfilePage");
    } else {
      setErrorMsg("Passwords do not match.");
    }
  };

  const handleSetUp = () => {
    handleSignUpClick();
    navigation.navigate("ProfilePage");
  };

  console.log(userData);
  const handleSignUpClick = async () => {
    const { name, weight, height, age, fitnessLevel } = signUpData;

    const { email, password } = signupDataContext;

    try {
      const encryptedPassword = md5(password);

      const response = await fetch(
        "https://jellyfish-app-2-7736b.ondigitalocean.app/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password: encryptedPassword,
            name,
            weight,
            height,
            age,
            fitnessLevel,
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const loginData = await response.json();

      if (response.ok) {
        logIn(loginData);
        console.log(loginData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ backgroundColor: "#111214", flex: 1, padding: 12 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginVertical: 20,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#111214",
            paddingHorizontal: 16,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#FFFFFF" }}>
            Configure your Account
          </Text>
        </View>

        <View style={{ justifyContent: "space-between", width: "100%" }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 30,
                paddingHorizontal: 24,
              }}
            >
              <Image source={line} style={{ flex: 1, height: 1 }} />
              <Text
                style={{
                  color: "#6B7280",
                  fontSize: 14,

                  marginHorizontal: 8,
                }}
              >
                General data
              </Text>
              <Image source={line} style={{ flex: 1, height: 1 }} />
            </View>

            <TextInput
              style={LogInStyles.inputBox}
              placeholder="Name"
              placeholderTextColor="#6B7280"
              onChange={(e) => handleText({ name: e.target.value })}
            />
            <TextInput
              style={LogInStyles.inputBox}
              placeholder="Gender"
              placeholderTextColor="#6B7280"
              onChange={(e) => handleText({ gender: e.target.value })}
            />
            <TextInput
              style={LogInStyles.inputBox}
              placeholder="Age"
              placeholderTextColor="#6B7280"
              onChange={(e) => handleText({ age: e.target.value })}
            />
            <TextInput
              style={LogInStyles.inputBox}
              placeholder="Weight"
              placeholderTextColor="#6B7280"
              onChange={(e) => handleText({ weight: e.target.value })}
            />
            <TextInput
              style={LogInStyles.inputBox}
              placeholder="Height"
              placeholderTextColor="#6B7280"
              onChange={(e) => handleText({ height: e.target.value })}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 30,
                paddingHorizontal: 24,
              }}
            >
              <Image source={line} style={{ flex: 1, height: 1 }} />
              <Text
                style={{
                  color: "#6B7280",
                  fontSize: 14,
                  fontWeight: "400",
                  marginHorizontal: 8,
                }}
              >
                Fitness skill
              </Text>
              <Image source={line} style={{ flex: 1, height: 1 }} />
            </View>

            <TextInput
              style={LogInStyles.inputBox}
              placeholder="Rate your fitness level (1-5)"
              placeholderTextColor="#6B7280"
              onChange={(e) => handleText({ fitnessLevel: e.target.value })}
            />

            <TextInput
              style={LogInStyles.inputBox}
              placeholder="How many days/week will you commit?"
              placeholderTextColor="#6B7280"
              onChange={(e) => handleText({ daysWeek: e.target.value })}
            />

            <TouchableOpacity
              style={[LogInStyles.inputBoxSignUp]}
              onPress={handleSetUp}
            >
              <Text
                style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "medium" }}
              >
                Set up my Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ConfigureAccount;
