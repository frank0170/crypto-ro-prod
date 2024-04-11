import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import closeButton from "../../public/closeButton.png";
import { LogInStyles } from "./loginStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const gender = () => {
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
            fontSize: 30,
            color: "#FFFFFF",
            top: "12%",
            left: "12%",
          }}
        >
          What is your gender?
        </Text>

        <TouchableOpacity>
          <Text>Man</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Woman</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            LogInStyles.greyBox,
            { top: "60%", backgroundColor: "#4F2400" },
          ]}
        >
          <View style={{ left: "30%", flexDirection: "row" }}>
            <Text style={{ fontSize: 18, color: "#FF8036" }}>
              Prefer to skip
            </Text>
            <Image source={closeButton} style={{ alignSelf: "center" }} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[LogInStyles.whiteBox, { top: "60%" }]}>
          <View style={{ left: "35%", flexDirection: "row" }}>
            <Text style={{ fontSize: 18, fontWeight: "medium" }}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default gender;
