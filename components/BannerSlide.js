import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const BannerSlide = ({ data }) => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={data.image}
          style={{ height: 150, width: 300, borderRadius: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BannerSlide;
