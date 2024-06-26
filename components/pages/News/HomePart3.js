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

const Settings = () => {
  return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5C10.3062 5 11.4174 5.83477 11.8293 6.99992H20C20.5523 6.99992 21 7.44763 21 7.99992C21 8.5522 20.5523 8.99992 20 8.99992H11.8293C11.4175 10.1652 10.3062 11 9 11C7.69374 11 6.58248 10.1652 6.17067 8.99992H4C3.44772 8.99992 3 8.5522 3 7.99992C3 7.44763 3.44772 6.99992 4 6.99992H6.17073C6.58259 5.83477 7.69381 5 9 5ZM10 8C10 7.44772 9.55228 7 9 7C8.44771 7 8 7.44772 8 8C8 8.55229 8.44771 9 9 9C9.55228 9 10 8.55229 10 8Z" fill="#988EA9"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 13C16.3062 13 17.4174 13.8348 17.8293 14.9999H20C20.5523 14.9999 21 15.4476 21 15.9999C21 16.5522 20.5523 16.9999 20 16.9999H17.8293C17.4175 18.1652 16.3062 19 15 19C13.6937 19 12.5825 18.1652 12.1707 16.9999H4.00002C3.44774 16.9999 3.00002 16.5522 3.00002 15.9999C3.00002 15.4476 3.44774 14.9999 4.00002 14.9999H12.1707C12.5826 13.8348 13.6938 13 15 13ZM16 16C16 15.4477 15.5523 15 15 15C14.4477 15 14 15.4477 14 16C14 16.5523 14.4477 17 15 17C15.5523 17 16 16.5523 16 16Z" fill="#988EA9"/>
  </svg>
  )
}

const NewsCard = ({
  time,
  title,
  category,
  image,
  setContext,
  item,
  navigation,
  pubDate
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

const HomePart3 = ({ person, sampleData, navigation }) => {
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

<View style={{flexDirection: 'row', gap: 8, paddingBottom: 12}}>
      <View style={{padding: 12, borderWidth: 1, borderRadius: 12, borderColor: '#312745', width: '80%'}}>
        <Text style={{color: '#988EA9'}}>Cautare</Text>
      </View>

      <View style={{flex: 1, padding: 12, borderWidth: 1, borderRadius: 12, borderColor: '#312745', width: 'auto', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#988EA9'}}><Settings/></Text>
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
      <HomePart2/>
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

export default HomePart3;
