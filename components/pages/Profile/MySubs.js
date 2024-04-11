import React from "react";
import { ProfileStyles } from "./profileStyles";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const MySubs = () => {
  return (
    <View style={{ backgroundColor: "#111214", height: "100%" }}>
      <View
        style={{ flexDirection: "row", alignContent: "center", top: "10%" }}
      >
        <TouchableOpacity
          style={[ProfileStyles.photoBox, { left: "10%" }]}
        ></TouchableOpacity>

        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            fontWeight: 600,
            left: "25%",
          }}
        >
          My Subscriptions
        </Text>

        <TouchableOpacity
          style={[ProfileStyles.photoBox, { left: "36%" }]}
        ></TouchableOpacity>
      </View>

      <View
        style={[
          ProfileStyles.subBox,
          {
            top: "20%",
            left: "5%",
            alignContent: "center",
            flexDirection: "column",
          },
        ]}
      >
        <View style={{ left: "30%", top: "10%" }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: 500,
              left: "10%",
            }}
          >
            Basic
          </Text>
          <Text style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 700 }}>
            Iron Plan
          </Text>
          <Image></Image>
          <View>
            <Image></Image>
            <Text
              style={{
                color: "#FFFFFF",
                left: "-10%",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              3 videos/category with description
            </Text>
          </View>
          <View>
            <Image></Image>
            <Text
              style={{
                color: "#FFFFFF",
                left: "-10%",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              1 workout randomizer/month
            </Text>
          </View>
          <Image></Image>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 18,
              color: "#6A6B6F",
              left: "auto",
            }}
          >
            Your current Plan
          </Text>
        </View>
      </View>

      <View
        style={[
          ProfileStyles.subBox,
          {
            top: "25%",
            left: "5%",
            alignContent: "center",
            flexDirection: "column",
          },
        ]}
      >
        <View style={{ left: "30%", top: "10%" }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: 500,
              left: "10%",
            }}
          >
            Medium
          </Text>
          <Text style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 700 }}>
            Silver Plan
          </Text>
          <Image></Image>
          <View>
            <Image></Image>
            <Text
              style={{
                color: "#FFFFFF",
                left: "-10%",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              60+ videos with description
            </Text>
          </View>
          <View>
            <Image></Image>
            <Text
              style={{
                color: "#FFFFFF",
                left: "-10%",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Full access to randomizer
            </Text>
          </View>

          <View>
            <Image></Image>
            <Text
              style={{
                color: "#FFFFFF",
                left: "-10%",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Calorie Tracker
            </Text>
          </View>
          <Image></Image>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 18,
              color: "#6A6B6F",
              left: "auto",
            }}
          >
            Buy this plan - 5 €
          </Text>
        </View>
      </View>

      <View
        style={[
          ProfileStyles.subBox,
          {
            top: "30%",
            left: "5%",
            alignContent: "center",
            flexDirection: "column",
          },
        ]}
      >
        <View style={{ left: "30%", top: "10%" }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: 500,
              left: "10%",
            }}
          >
            Premium
          </Text>
          <Text style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 700 }}>
            Gold Plan
          </Text>
          <Image></Image>
          <View>
            <Image></Image>
            <Text
              style={{
                color: "#FFFFFF",
                left: "-10%",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              60+ videos with description
            </Text>
          </View>
          <View>
            <Image></Image>
            <Text
              style={{
                color: "#FFFFFF",
                left: "-10%",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Full access to randomizer
            </Text>
          </View>

          <View>
            <Image></Image>
            <Text
              style={{
                color: "#FFFFFF",
                left: "-10%",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Calorie Tracker
            </Text>
          </View>

          <View>
            <Image></Image>
            <Text
              style={{
                color: "#FFFFFF",
                left: "-10%",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Workouts designed by credited Personal Trainers
            </Text>
          </View>
          <Image></Image>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 18,
              color: "#6A6B6F",
              left: "auto",
            }}
          >
            Buy this plan - 10 €
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MySubs;
