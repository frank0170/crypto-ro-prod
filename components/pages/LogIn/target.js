import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { TextInput } from "react-native";
import closeButton from "../../public/closeButton.png";
import { LogInStyles } from "./loginStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const target = () => {
  return (
    <View style={{ backgroundColor: "#111214", height: "100%" }}>
      <View style={{ flexDirection: "column", height: "100%" }}>
        <View style={{ flexDirection: "row", top: "5%" }}>
          <TouchableOpacity style={{ left: "5%", alignSelf: "center" }}>
            <Image
              source={closeButton}
              style={{ height: "12px", width: "12px" }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,

              color: "#FFFFFF",
              left: "35%",
              alignSelf: "center",
            }}
          >
            Assesement
          </Text>
        </View>

        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 30,

            left: "20%",
            top: "15%",
            alignSelf: "center",
          }}
        >
          What's your fitness goal/target?
        </Text>

        <TouchableOpacity
          style={[LogInStyles.greyBox, { flexDirection: "row", top: "20%" }]}
        >
          <Image></Image>
          <Text style={{ color: "#FFFFFF", fontSize: 16 }}>
            I wanna lose weight
          </Text>
          <Image></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={[LogInStyles.greyBox, { flexDirection: "row", top: "18%" }]}
        >
          <Image></Image>
          <Text style={{ color: "#FFFFFF", fontSize: 16 }}>
            I wanna get bulks
          </Text>
          <Image></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={[LogInStyles.greyBox, { flexDirection: "row", top: "16%" }]}
        >
          <Image></Image>
          <Text style={{ color: "#FFFFFF", fontSize: 16 }}>
            I wanna gain endurance
          </Text>
          <Image></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={[LogInStyles.greyBox, { flexDirection: "row", top: "14%" }]}
        >
          <Image></Image>
          <Text style={{ color: "#FFFFFF", fontSize: 16 }}>
            Just trying out the app
          </Text>
          <Image></Image>
        </TouchableOpacity>

        <TouchableOpacity style={[LogInStyles.whiteBox, { top: "30%" }]}>
          <Text
            style={{
              color: "#000000",
              alignContent: "center",
              left: "40%",

              fontSize: 18,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default target;
