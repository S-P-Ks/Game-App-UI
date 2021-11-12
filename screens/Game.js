import React from "react";
import { View, Text, Image, ImageBackground, SafeAreaView } from "react-native";

const Game = ({ poster, title, subtitle, price, isFree }) => {
  return (
    <SafeAreaView>
      <ImageBackground source={poster} />
    </SafeAreaView>
  );
};

export default Game;
