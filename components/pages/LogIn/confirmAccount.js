import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { TextInput } from "react-native";
import closeButton from "../../public/closeButton.png";
import { LogInStyles } from "./loginStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const ConfirmAccount = () => {
  return (
    <View style={{ backgroundColor: "#111214", height: "100%" }}>
      <View style={{ flexDirection: "column", height: "100%" }}>
        <TouchableOpacity style={{ top: "5%", left: "5%" }}>
          <Image
            source={closeButton}
            style={{ height: "12px", width: "12px" }}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 28,

            color: "#FFFFFF",
            left: "5%",
            top: "8%",
          }}
        >
          Confirm Account
        </Text>

        <Text
          style={{
            fontSize: 16,

            top: "10%",
            color: "#6B7280",
            alignSelf: "center",
            left: "5%",
          }}
        >
          We may store and send a verification code to this number
        </Text>

        <View style={[LogInStyles.greyBox, { top: "10%" }]}>
          <TextInput></TextInput>
        </View>
      </View>
    </View>
  );
};

export default CreateAccount;
