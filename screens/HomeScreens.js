import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StatusBar,
  TextInput,
  PlatformColor,
  TouchableOpacity,
  ListItem,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import BannerSlide from "../components/BannerSlide";
import { windowWidth } from "../util/Dimension";
import { sliderData } from "../model/data";
import CustomSwitch from "../components/customSwitch";
import List from "../components/List";

import { freeGames } from "../model/data";
import { paidGames } from "../model/data";

function HomeScreen() {
  const [gamesTab, setGamesTab] = useState(1);

  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };

  const renderBaner = ({ item, index }) => {
    return <BannerSlide data={item} />;
  };

  let [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Italic": require("../assets/fonts/Roboto-Italic.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: StatusBar.currentHeight,
        }}
      >
        <ScrollView>
          <View
            style={{
              width: "80%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Roboto-Bold",
                marginLeft: 10,
              }}
            >
              Hello Shubham!!!
            </Text>
            <ImageBackground
              source={require("../assets/images/user-profile.jpg")}
              style={{ width: 35, height: 35 }}
            />
          </View>
          <View
            style={{
              width: "80%",
              marginLeft: 15,
              flexDirection: "row",
              borderWidth: 2,
              borderColor: "grey",
              padding: 5,
              marginTop: 10,
              borderRadius: 5,
            }}
          >
            <AntDesign
              name="search1"
              size={24}
              color="black"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Search"
              style={{ flex: 1, fontFamily: "Roboto-Italic" }}
            />
          </View>
          <View
            style={{
              width: "80%",
              marginVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: 15,
              marginTop: 20,
            }}
          >
            <Text style={{ fontFamily: "Roboto-Bold", fontSize: 20 }}>
              Upcoming Games
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Roboto-Bold",
                  fontSize: 20,
                  color: "#0aada8",
                }}
              >
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            data={sliderData}
            renderItem={renderBaner}
            sliderWidth={windowWidth - 20}
            itemWidth={300}
            loop={true}
          />
          <View style={{ marginVertical: 20, width: "85%", marginLeft: 10 }}>
            <CustomSwitch
              selectionMode={1}
              option1="Free to play"
              option2="Paid games"
              onSelectSwitch={onSelectSwitch}
            />
          </View>

          <View>
            <Text
              style={{
                fontFamily: "Roboto-Bold",
                fontSize: 20,
                marginLeft: 20,
              }}
            >
              {gamesTab == 1 ? "Free to Play" : "Paid Games"}
            </Text>
          </View>

          {gamesTab == 1 && (
            <ScrollView>
              {freeGames.map((item) => (
                <List
                  key={item.id}
                  poster={item.poster}
                  title={item.title}
                  subtitle={item.subtitle}
                  isFree={item.isFree}
                  style={{ width: "100%" }}
                />
              ))}
            </ScrollView>
          )}
          {gamesTab == 2 && (
            <ScrollView>
              {paidGames.map((item) => (
                <List
                  key={item.id}
                  poster={item.poster}
                  title={item.title}
                  subtitle={item.subtitle}
                  isFree={item.isFree}
                  price={item.price}
                  style={{ width: "100%" }}
                />
              ))}
            </ScrollView>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
