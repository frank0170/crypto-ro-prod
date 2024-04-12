import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import "./homeStyle.js";
import { homeStyles } from "./homeStyle.js";

const FitnessCard = ({ image, title, category, link, all }) => {
  const cardStyle = homeStyles.home_2.imageCard.cardAll;

  return (
    <View style={{ paddingRight: 24 }}>
      <ImageBackground source={image} style={cardStyle}>
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text style={homeStyles.home_2.imageCard.title}>{title}</Text>
          </View>
          <Text style={homeStyles.home_2.imageCard.category}>
            Acum {category} ore
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const HomePart2 = ({ person, sampleData }) => {
  const [seeAllTrue, setSeeAllTrue] = useState(false);

  const handleSeeAllClick = () => {
    setSeeAllTrue(!seeAllTrue);
  };

  const workoutsStyle = seeAllTrue
    ? homeStyles.home_2.workoutsStyle.seeAllOn
    : homeStyles.home_2.workoutsStyle.seeAllOff;

  const seeAllTextStyle = seeAllTrue
    ? homeStyles.home_2.seeAllTextOn
    : homeStyles.home_2.seeAllTextOff;

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async (page) => {
    const response = await fetch(`https://crypto.ro/feed/?paged=${page}`);
    const data = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");
    const items = xmlDoc.getElementsByTagName("item");
    const news = Array.from(items).map((item) => {
      const description =
        item.getElementsByTagName("description")[0].textContent;

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
    setItems(news);
  };

  return (
    <View style={workoutsStyle}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {items.map((item) => (
          <FitnessCard
            key={item.id} // Don't forget to add a unique key prop for each item
            image={item.image}
            title={item.title}
            category={item.category}
            all={false}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomePart2;
