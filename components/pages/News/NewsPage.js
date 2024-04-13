import React from "react";
import { Image, Text, View } from "react-native";

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useExerciseContext } from "../../context/exerciseContext.js";

import { StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { homeStyles } from "./homeStyle.js";

// Header component, similar to <h2>
const Header = ({ children }) => <Text style={stylesC.header}>{children}</Text>;

// CustomList component, similar to <ul>
const CustomList = ({ children }) => (
  <View style={stylesC.customList}>{children}</View>
);

// ListItem component, similar to <li>
const ListItem = ({ children }) => (
  <View style={stylesC.listItem}>
    <Text style={stylesC.listItemText}>{children}</Text>
  </View>
);

// Styles
const stylesC = StyleSheet.create({
  header: {
    color: "blue",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  customList: {
    paddingLeft: 20,
  },
  listItem: {
    marginTop: 5,
    marginBottom: 5,
  },
  listItemText: {
    fontSize: 16,
  },
});
// Main component that parses and replaces HTML strings
const ContentParser = ({ html }) => {
  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  // A function to replace specific tags with custom components
  const transformNodes = (node) => {
    const tagType = node.nodeName.toLowerCase();
    if (tagType === "h2") {
      return <Header>{node.textContent}</Header>;
    } else if (tagType === "ul") {
      const items = Array.from(node.children).map((li, index) => (
        <ListItem key={index}>{li.textContent}</ListItem>
      ));
      return <CustomList>{items}</CustomList>;
    } else if (tagType === "li") {
      return <ListItem>{node.textContent}</ListItem>;
    } else {
      return node.textContent;
    }
  };

  // Using DOMParser to parse HTML string into DOM elements
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const bodyContent = doc.body;

  // Recursively replace nodes with custom components
  const processNodes = (node) => {
    return React.Children.toArray(
      Array.from(node.childNodes).map((child) => {
        return child.childNodes.length > 0
          ? processNodes(child)
          : transformNodes(child);
      })
    );
  };

  return <div>{processNodes(bodyContent)}</div>;
};

const BackIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0319 6.78152L10.8136 13.9999L18.0319 21.2183C18.1031 21.2894 18.1654 21.3662 18.2188 21.4471C18.5925 22.0131 18.5302 22.7823 18.0319 23.2807C17.4625 23.8502 16.5391 23.8502 15.9695 23.2807L7.71998 15.0311C7.68579 14.9969 7.65348 14.9612 7.62311 14.9241C7.41048 14.6646 7.29285 14.3383 7.29285 13.9999C7.29285 13.6131 7.44649 13.2422 7.71998 12.9687L15.9695 4.71912C16.5391 4.14962 17.4625 4.14962 18.0319 4.71912C18.1031 4.79031 18.1654 4.86703 18.2188 4.94789C18.5925 5.51395 18.5302 6.28319 18.0319 6.78152Z"
        fill="white"
      />
    </svg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0418",
    padding: 24,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 12,
  },
  header: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "white",
  },
  categoryButton: {
    marginVertical: 16,
    backgroundColor: "#8C38F9",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 32,
  },
  categoryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const ExercisePreview = ({ navigation }) => {
  const { exerciseData } = useExerciseContext();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{ alignItems: "flex-start" }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#312745",
              borderRadius: 12,
              paddingHorizontal: 10, // Set padding horizontal if the width should only cover the icon
              paddingVertical: 10,
            }}
          >
            <BackIcon />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ paddingTop: 40 }}>
        <Image source={exerciseData.image} style={styles.image} />

        <View style={{ flexDirection: "row", gap: 8, marginTop: 24 }}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 24,
              width: 120,
              borderRadius: 4,
              backgroundColor: "#8C38F9",
            }}
          >
            <Text style={homeStyles.home_3.workoutCard.category2}>
              {exerciseData.categories[0]}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 24,
              width: 120,
              borderRadius: 4,
              backgroundColor: "#8C38F9",
            }}
          >
            <Text style={homeStyles.home_3.workoutCard.category2}>
              {exerciseData.categories[1]}
            </Text>
          </View>
        </View>

        <View style={styles.header}>
          <Text style={styles.headerText}>{exerciseData.title}</Text>
        </View>

        <Text style={styles.content}>
          <ContentParser html={exerciseData.content} />
        </Text>
      </View>
    </ScrollView>
  );
};

export default ExercisePreview;
