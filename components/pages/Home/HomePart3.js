import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import "./homeStyle.js";
import { homeStyles } from "./homeStyle.js";
import chestImage from "../../public/eth.png";
import { useExerciseContext } from "../../context/exerciseContext.js";
import { dateConverter } from "../../utils/dateConverter.js";
const NewsCard = ({
  time,
  title,
  category,
  image,
  setContext,
  item,
  navigation,
}) => {
  const handleNavigate = (item) => {
    setContext(item);
    navigation.navigate("NewsPage");
  };
  return (
    <TouchableOpacity onPress={() => handleNavigate(item)}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: 360,
          height: 120,
        }}
      >
        <Image
          source={image}
          style={{ width: 100, height: 100, borderRadius: 12 }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 280,
            marginLeft: 16,
            height: 100,
          }}
        >
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
              {category}
            </Text>
          </View>
          <View style={{ display: "flex", flexWrap: "wrap" }}>
            <Text style={homeStyles.home_3.workoutCard.title}>{title}</Text>
          </View>
          <Text style={homeStyles.home_3.workoutCard.category}>
          Acum {dateConverter(item.pubDate)} 
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CategoryCard = ({ category, selectedCategory, setSelectedCategory }) => {
  const cardStyle =
    selectedCategory === category
      ? homeStyles.home_3.categoryCard.selected
      : homeStyles.home_3.categoryCard.notSelected;

  const textStyle =
    selectedCategory === category
      ? homeStyles.home_3.categoryCard.selectedText
      : homeStyles.home_3.categoryCard.notSelectedText;

  return (
    <TouchableOpacity
      style={cardStyle}
      onPress={() => setSelectedCategory(category)}
    >
      <Text style={textStyle}>{category}</Text>
    </TouchableOpacity>
  );
};

const NextCatgory = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M7.12025 15.1558L12.2762 9.99988L7.12025 4.84388C7.06942 4.79305 7.02492 4.73821 6.98675 4.68046C6.71983 4.27613 6.76433 3.72671 7.12025 3.37071C7.527 2.96396 8.18658 2.96396 8.59342 3.37071L14.4859 9.2633C14.5103 9.28771 14.5334 9.31321 14.5551 9.33971C14.707 9.52505 14.791 9.75813 14.791 9.99988C14.791 10.2761 14.6813 10.541 14.4859 10.7365L8.59342 16.629C8.18658 17.0358 7.527 17.0358 7.12025 16.629C7.06942 16.5781 7.02492 16.5233 6.98675 16.4656C6.71983 16.0613 6.76433 15.5118 7.12025 15.1558Z"
        fill="#8C38F9"
      />
    </svg>
  );
};

const fetchItems = async (page) => {
  const response = await fetch(`https://crypto.ro/feed/?paged=${page}`);
  const data = await response.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(data, "text/xml");
  const items = xmlDoc.getElementsByTagName("item");
  const news = Array.from(items).map((item) => {
    const description = item.getElementsByTagName("description")[0].textContent;

    // Try to extract image from <media:content> or <enclosure>
    let imageUrl = "";
    const mediaContent = item.getElementsByTagName("media:content")[0];
    const enclosure = item.getElementsByTagName("enclosure")[0];

    if (mediaContent) {
      imageUrl = mediaContent.getAttribute("url");
    } else if (enclosure) {
      imageUrl = enclosure.getAttribute("url");
    } else {
      // Fallback to extracting from description (parse as HTML to find <img> tag)
      const htmlParser = new DOMParser();
      const htmlDoc = htmlParser.parseFromString(description, "text/html");
      const img = htmlDoc.querySelector("img");
      if (img) {
        imageUrl = img.src;
      }
    }
    return {
      title: item.getElementsByTagName("title")[0].textContent,
      link: item.getElementsByTagName("link")[0].textContent,
      image: imageUrl,
      comments: item.getElementsByTagName("comments")[0].textContent,
      pubDate: item.getElementsByTagName("pubDate")[0].textContent,
      creator: item.getElementsByTagName("dc:creator")[0].textContent,
      description: description,
      content: item.getElementsByTagName("content:encoded")[0].textContent,
      categories: Array.from(item.getElementsByTagName("category")).map(
        (c) => c.textContent
      ),
    };
  });
  return news;
};

const HomePart2 = ({ person, sampleData, navigation }) => {
  const { setExerciseData, exerciseData } = useExerciseContext();

  console.log("ex", exerciseData);

  const categories = [
    "Toate",
    "Stiri",
    "Educatie",
    "Analize",
    "Bitcoin",
    "Ethereum",
    "Cardano",
    "Solana",
  ];

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMoreItems = async () => {
    if (loading) return; // Prevent multiple loads
    setLoading(true);
    try {
      const newItems = await fetchItems(page);
      setItems((prevItems) => [...prevItems, ...newItems]); // Append new items
      setPage((prevPage) => prevPage + 1); // Increment page
    } catch (error) {
      console.error("Failed to fetch items:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadMoreItems();
  }, []);

  const renderItem = ({ item }) => (
    <NewsCard
      key={item.link} // Don't forget to add a unique key prop for each item
      image={item.image}
      time={item.time}
      title={item.title}
      category={item.categories[0]}
      setContext={setExerciseData}
      item={item}
      navigation={navigation}
    />
  );

  console.log("items", items);

  const [selectedCategory, setSelectedCategory] = useState("Toate");

  const workoutsStyle = homeStyles.home_3.workoutsStyle.seeAllOn;

  const seeAllTextStyle = homeStyles.home_2.seeAllTextOff;
  return (
    <View style={workoutsStyle}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={homeStyles.home_3.welcome}>Categorii</Text>
        <TouchableOpacity style={{ marginBottom: 8 }}>
          <NextCatgory />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ borderBottom: "1px solid #312745", marginBottom: 24 }}
      >
        {categories.map((item) => (
          <CategoryCard
            key={item.id} // Don't forget to add a unique key prop for each item
            category={item}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        ))}
      </ScrollView>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.link}
        onEndReachedThreshold={0.8}
        ListFooterComponent={() =>
          loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
      />
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: "#8C38F9",
          marginTop: 10,
          borderRadius: 12,
          marginBottom: 20,
        }}
        onPress={loadMoreItems}
        disabled={loading}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Incarca mai multe
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePart2;
