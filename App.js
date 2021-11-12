import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import GameIMG from "./assets/gaming.svg";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { SvgUri } from "react-native-svg";
import SVGImg from "./assets/gaming.svg";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreens.js";
import { CardStyleInterpolators } from "@react-navigation/stack";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
  },
};

function Main({ navigation }) {
  let [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#20315f" }}>
            Game ON
          </Text>
        </View>
        <View
          style={{
            flexShrink: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SVGImg
            width={300}
            height={400}
            style={{ transform: [{ rotate: "-15deg" }] }}
          />
        </View>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "yellow",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "space-between",
            borderRadius: 5,
            border: 2,
            width: "90%",
            backgroundColor: "#AD40AF",
            color: "#fff",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Roboto-Regular",
              fontSize: 20,
            }}
          >
            Let's Begin
          </Text>
          <AntDesign name="caretright" size={24} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

// const config = {
//   animation: "spring",
//   config: {
//     stiffness: 10000,
//     damping: 15000,
//     mass: 5,
//     overshootClamping: true,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
            title: "Main",
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            title: "Home",
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
