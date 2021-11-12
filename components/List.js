import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Button,
} from "react-native";

const ListItem = ({ title, subtitle, isFree, price, poster }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "85%",
        padding: 5,
        marginLeft: 10,
        marginTop: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginLeft: 10,
        }}
      >
        <ImageBackground
          source={poster}
          style={{ width: 80, marginRight: 10 }}
        />
        <View>
          <Text>{subtitle}</Text>
          <Text>{title}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#3380FF",
          borderWidth: 1,
          borderColor: "Black",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#fff" }}>
          {isFree == "Yes" ? "Play" : `${price}`}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ListItem;
