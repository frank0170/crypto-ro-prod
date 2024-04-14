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
import HomePart2 from "./HomePart2";
import { dateConverter } from "../../utils/dateConverter.js";
import metadata from "../../utils/metadata.json";

const Settings = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 5C10.3062 5 11.4174 5.83477 11.8293 6.99992H20C20.5523 6.99992 21 7.44763 21 7.99992C21 8.5522 20.5523 8.99992 20 8.99992H11.8293C11.4175 10.1652 10.3062 11 9 11C7.69374 11 6.58248 10.1652 6.17067 8.99992H4C3.44772 8.99992 3 8.5522 3 7.99992C3 7.44763 3.44772 6.99992 4 6.99992H6.17073C6.58259 5.83477 7.69381 5 9 5ZM10 8C10 7.44772 9.55228 7 9 7C8.44771 7 8 7.44772 8 8C8 8.55229 8.44771 9 9 9C9.55228 9 10 8.55229 10 8Z"
        fill="#988EA9"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 13C16.3062 13 17.4174 13.8348 17.8293 14.9999H20C20.5523 14.9999 21 15.4476 21 15.9999C21 16.5522 20.5523 16.9999 20 16.9999H17.8293C17.4175 18.1652 16.3062 19 15 19C13.6937 19 12.5825 18.1652 12.1707 16.9999H4.00002C3.44774 16.9999 3.00002 16.5522 3.00002 15.9999C3.00002 15.4476 3.44774 14.9999 4.00002 14.9999H12.1707C12.5826 13.8348 13.6938 13 15 13ZM16 16C16 15.4477 15.5523 15 15 15C14.4477 15 14 15.4477 14 16C14 16.5523 14.4477 17 15 17C15.5523 17 16 16.5523 16 16Z"
        fill="#988EA9"
      />
    </svg>
  );
};

const GreenArrow = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1243 10.3041L7.99951 6.17932L3.87471 10.3041C3.83405 10.3448 3.79018 10.3804 3.74398 10.4109C3.42051 10.6244 2.98098 10.5888 2.69618 10.3041C2.37078 9.97869 2.37078 9.45103 2.69618 9.12556L7.41025 4.41155C7.42978 4.39202 7.45018 4.37355 7.47138 4.3562C7.61965 4.2347 7.80611 4.16748 7.99951 4.16748C8.22051 4.16748 8.43245 4.25527 8.58878 4.41155L13.3028 9.12556C13.6282 9.45103 13.6282 9.97869 13.3028 10.3041C13.2621 10.3448 13.2183 10.3804 13.1721 10.4109C12.8486 10.6244 12.409 10.5888 12.1243 10.3041Z"
        fill="#1AB664"
      />
    </svg>
  );
};

const RedArrow = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.87571 5.69591L8.00049 9.82068L12.1253 5.69591C12.166 5.65524 12.2098 5.61964 12.256 5.58911C12.5795 5.37557 13.019 5.41117 13.3038 5.69591C13.6292 6.02131 13.6292 6.54897 13.3038 6.87444L8.58975 11.5884C8.57022 11.608 8.54982 11.6264 8.52862 11.6438C8.38035 11.7653 8.19389 11.8325 8.00049 11.8325C7.77949 11.8325 7.56755 11.7447 7.41122 11.5884L2.6972 6.87444C2.37177 6.54897 2.37177 6.02131 2.6972 5.69591C2.73788 5.65524 2.78172 5.61964 2.82793 5.58911C3.15139 5.37557 3.59095 5.41117 3.87571 5.69591Z"
        fill="#E33434"
      />
    </svg>
  );
};

const NewsCard = ({ item, navigation }) => {
  const handleNavigate = (item) => {
    setContext(item);
    navigation.navigate("NewsPage");
  };
  return (
    <TouchableOpacity
      style={{ marginBottom: 16 }}
      onPress={() => handleNavigate(item)}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
          borderColor: "#312745",
          borderWidth: 1,
          borderRadius: 12,
          backgroundColor: "#19102B",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: metadata[item.id]?.logo }}
            style={{ width: 48, height: 48, marginLeft: 16 }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginLeft: 8,
              height: 40,
            }}
          >
            <View style={{ display: "flex", flexWrap: "wrap" }}>
              <Text style={homeStyles.home_3.workoutCard.title}>
                {item.name}
              </Text>
              <Text style={homeStyles.home_3.workoutCard.category}>
                {item.symbol}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            paddingRight: 16,
            justifyContent: "flex-end",
            alignItems: "flex-end", // This will align items to the right
          }}
        >
          <Text style={homeStyles.home_3.workoutCard.title}>
            ${item.quote.USD.price.toFixed(2)}
          </Text>
          {item.quote.USD.percent_change_24h.toFixed(2) > 0 ? (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <GreenArrow />
              <Text style={homeStyles.home_3.workoutCard.categoryGreen}>
                +{item.quote.USD.percent_change_24h.toFixed(2)}%
              </Text>
            </View>
          ) : (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <RedArrow />
              <Text style={homeStyles.home_3.workoutCard.categoryRed}>
                {item.quote.USD.percent_change_24h.toFixed(2)}%
              </Text>
            </View>
          )}
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

const HomePart3 = ({ person, sampleData, navigation }) => {
  const { setExerciseData, exerciseData } = useExerciseContext();

  const [coins, setCoins] = useState([]);

  const fetchCoins = async () => {
    const res = await fetch(
      "https://seahorse-app-c5baz.ondigitalocean.app/top"
    );
    const data = await res.json();
    setCoins(data.data);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  console.log("ex", coins);

  const categories = [
    "Toate",
    "Bitcoin",
    "Ethereum",
    "Tether",
    "BNB",
    "Solana",
    "Cardano",
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
      key={item.slug} // Don't forget to add a unique key prop for each item
      setContext={setExerciseData}
      item={item}
      navigation={navigation}
    />
  );

  console.log("items", items);

  const [selectedCategory, setSelectedCategory] = useState("Toate");

  const workoutsStyle = homeStyles.home_3.workoutsStyle.seeAllOn;

  const seeAllTextStyle = homeStyles.home_2.seeAllTextOff;

  const cryptoExample = [
    {
      name: "Bitcoin",
      slug: "BTC",
      image: null,
      price: 67.0,
    },
    {
      name: "Ethereum",
      slug: "ETH",
      image: null,
      price: 3.4,
    },
    {
      name: "Solana",
      slug: "SOL",
      image: null,
      price: 167,
    },
  ];
  return (
    <View style={workoutsStyle}>
      <View style={{ flexDirection: "row", gap: 8, paddingBottom: 12 }}>
        <View
          style={{
            padding: 12,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: "#312745",
            width: "100%",
          }}
        >
          <Text style={{ color: "#988EA9" }}>Cautare</Text>
        </View>
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
        data={coins}
        renderItem={renderItem}
        keyExtractor={(item) => item.slug}
        onEndReachedThreshold={0.8}
        ListFooterComponent={() =>
          loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
      />
    </View>
  );
};

export default HomePart3;
