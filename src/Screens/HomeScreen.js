import { View, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Header } from "../components";

const { height, width } = Dimensions.get("screen");

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginTop: 12,
  },
});

export default HomeScreen;
