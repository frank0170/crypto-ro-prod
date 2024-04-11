import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import BackArrowIcon from "../../icons/BackArrowIcon.js";
import SettingsButton from "../../icons/SettingsButton.js";
import { ProfileStyles } from "./profileStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const AboutUs = () => {
  return (
    <ScrollView style={{ backgroundColor: "#24262B" }}>
      <View style={{ flexDirection: "row", alignContent: "center", top: "3%" }}>
        <TouchableOpacity style={[ProfileStyles.photoBox, { left: "8%" }]}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <BackArrowIcon />
          </View>
        </TouchableOpacity>

        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            fontWeight: 600,
            left: "32%",
          }}
        >
          AboutUs
        </Text>

        <TouchableOpacity style={[ProfileStyles.photoBox, { left: "54%" }]}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <SettingsButton />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "column",
          alignContent: "center",
          top: "5%",
          left: "8%",
          marginRight: "15%",
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 600 }}>
          Welcome!
        </Text>
        <Text
          style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 500, top: "1%" }}
        >
          Welcome to Shape-Mentor, where we believe in empowering individuals to
          achieve their health and fitness goals with personalized and
          accessible solutions. Our mission is to inspire and support a
          healthier, happier world by providing a user-centric fitness
          experience that goes beyond the ordinary.
        </Text>
        <Text
          style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 600, top: "2%" }}
        >
          Our Vision
        </Text>
        <Text
          style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 500, top: "3%" }}
        >
          At Shape-Mentor, we envision a world where everyone has the tools and
          knowledge to lead an active and fulfilling life. We are committed to
          breaking down barriers to fitness, making it enjoyable, adaptable, and
          sustainable for users of all backgrounds and fitness levels.
        </Text>
        <Text
          style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 600, top: "4%" }}
        >
          What Sets Us Apart
        </Text>
        <Text
          style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 500, top: "5%" }}
        >
          Personalization: We understand that every fitness journey is unique.
          That's why Shape-Mentor is built on the foundation of personalization.
          Accessibility: Fitness should be accessible to all. Whether you're a
          beginner or an experienced athlete, our app is designed to be
          inclusive and adaptable. With a variety of exercises that can be done
          at home or in the gym, we bring the gym to you, making fitness
          achievable anytime, anywhere. Innovation: We are committed to staying
          at the forefront of fitness technology. Shape-Mentor incorporates the
          latest advancements to ensure a seamless and engaging experience. We
          strive to make your fitness journey both effective and enjoyable.
        </Text>
        <Text
          style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 600, top: "6%" }}
        >
          Road Map
        </Text>
        <Text
          style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 500, top: "7%" }}
        >
          Exciting developments lie ahead on the Shape-Mentor journey! We're
          thrilled to announce that by June, we'll be rolling out over 100 new
          exercises and workouts meticulously crafted by at least three personal
          trainers. This expansion aims to provide you with a diverse array of
          options to keep your fitness routine fresh, challenging, and aligned
          with your goals. At Shape-Mentor, we're committed to constantly
          upgrading our features to enhance your experience and ensure that you
          have access to the latest innovations in fitness technology.
        </Text>
        <Text
          style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 600, top: "8%" }}
        >
          Our Team
        </Text>
        <Text
          style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 500, top: "9%" }}
        >
          Behind Shape-Mentor is a passionate team of fitness enthusiasts and
          tech innovators. We are dedicated to creating a platform that not only
          meets but exceeds your expectations. Our collective expertise forms
          the backbone of a fitness app that is not just a tool but a companion
          on your path to wellness.
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            fontWeight: 600,
            top: "10%",
          }}
        >
          Get Ready to Transform
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: 500,
            top: "11%",
          }}
        >
          Whether you're aiming for weight loss, muscle gain, or simply
          improving your overall well-being, Shape-Mentor is here to support
          you. Join our community of like-minded individuals who are on a
          similar journey. Together, we'll celebrate victories, overcome
          challenges, and make strides towards a healthier and more vibrant
          life.
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: 500,
            top: "12%",
          }}
        >
          Thank you for choosing Shape-Mentor. Let's embark on this
          transformative journey together!
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutUs;
