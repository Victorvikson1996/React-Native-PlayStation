import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { COLORS } from "../Utils";

const OnBoardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image />
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
});

export default OnBoardingScreen;
