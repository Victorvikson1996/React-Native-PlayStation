import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../Utils";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate("Home");
  }, 3000);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Fontisto name="playstation" size={40} color="white" />
      </View>
      <Text style={styles.text}>PlayStation</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.blue,
  },

  text: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: "bold",
  },
  imageContainer: {
    marginBottom: 20,
  },
  Image: {
    height: height * 9,
    width: width * 20,
    resizeMode: "contain",
  },
});

export default OnBoardingScreen;
