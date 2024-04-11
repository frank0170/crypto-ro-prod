import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import BackArrowIcon from "../../icons/BackArrowIcon.js";
import SettingsButton from "../../icons/SettingsButton.js";
import { ProfileStyles } from "./profileStyles";
import HeightGrey from "../../icons/HeightGrey.js";
import CalendarGrey from "../../icons/CalendarGrey.js";
import WeightGrey from "../../icons/WeightGrey.js";
import ProfileGrey from "../../icons/ProfileGrey.js";
import FilledCircle from "../../icons/FilledCircle.js";
import LogOutIcon from "../../icons/LogOutIcon.js";
import EmptyCircle from "../../icons/EmptyCircle.js";
import MailGrey from "../../icons/MailGrey.js";
import PhotoCircle from "../../icons/PhotoCircle.js";
import EditPhoto from "../../icons/EditPhoto.js";
import { TouchableOpacity } from "react-native-gesture-handler";

const EditProfile = () => {
  return (
    <ScrollView style={{ backgroundColor: "#111214", height: "100%" }}>
      <View
        style={{
          backgroundColor: "#24262B",
          borderRadius: 32,
          top: "-4%",
          height: "20%",
        }}
      >
        <View
          style={{ flexDirection: "row", alignContent: "center", top: "40%" }}
        >
          <TouchableOpacity style={[ProfileStyles.photoBox, { left: "10%" }]}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BackArrowIcon />
            </View>
          </TouchableOpacity>

          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: 600,
              left: "35%",
            }}
          >
            Profile
          </Text>

          <TouchableOpacity style={[ProfileStyles.photoBox, { left: "58%" }]}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SettingsButton />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ left: "35%", height: 110, width: 110, top: "-10%" }}>
        <PhotoCircle />
        <Image />
      </View>

      <TouchableOpacity
        style={{ top: "-13%", justifyContent: "center", left: "55%" }}
      >
        <EditPhoto />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 16,
          fontWeight: 500,
          color: "#FFFFFF",
          left: "8%",
          top: "-10%",
        }}
      >
        First Name
      </Text>
      <View style={[ProfileStyles.greyBox, { top: "-12%" }]}>
        <ProfileGrey />
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: 500,
          color: "#FFFFFF",
          left: "8%",
          top: "-11%",
        }}
      >
        Last Name
      </Text>
      <View style={[ProfileStyles.greyBox, { top: "-13%" }]}>
        <ProfileGrey />
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: 500,
          color: "#FFFFFF",
          left: "8%",
          top: "-12%",
        }}
      >
        Email address
      </Text>
      <TouchableOpacity style={[ProfileStyles.greyBox, { top: "-14%" }]}>
        <MailGrey />
      </TouchableOpacity>

      <View style={{ flexDirection: "row", top: "-13%" }}>
        <View style={{ width: "50%" }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: "#FFFFFF",
              left: "15%",
            }}
          >
            Weight
          </Text>
          <TouchableOpacity
            style={[ProfileStyles.greyBox, { top: "-10%", width: "70%" }]}
          >
            <WeightGrey />
          </TouchableOpacity>
        </View>

        <View style={{ width: "50%" }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: "#FFFFFF",
              left: "15%",
            }}
          >
            Height
          </Text>
          <TouchableOpacity
            style={[ProfileStyles.greyBox, { top: "-10%", width: "70%" }]}
          >
            <HeightGrey />
          </TouchableOpacity>
        </View>
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: 500,
          color: "#FFFFFF",
          left: "8%",
          top: "-13%",
        }}
      >
        Date of birth
      </Text>
      <View style={[ProfileStyles.greyBox, { top: "-15%" }]}>
        <CalendarGrey />
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: 500,
          color: "#FFFFFF",
          left: "8%",
          top: "-14%",
        }}
      >
        Gender
      </Text>
      <View style={{ flexDirection: "row", top: "-13%" }}>
        <TouchableOpacity
          style={[ProfileStyles.greyBox, { width: "35%", top: "-30%" }]}
        >
          <FilledCircle />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: 400,
              left: "25%",
            }}
          >
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            ProfileStyles.greyBox,
            { width: "35%", top: "-30%", left: "3%" },
          ]}
        >
          <EmptyCircle />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: 400,
              left: "25%",
            }}
          >
            Female
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          ProfileStyles.whiteBox,
          {
            width: "70%",
            height: 50,
            left: "15%",
            top: "-14%",
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <View style={{ left: "30%" }}>
          <LogOutIcon />
        </View>
        <Text
          style={{
            color: "#111214",
            fontSize: 14,
            fontWeight: 600,
            left: "35%",
          }}
        >
          Save Changes
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfile;
