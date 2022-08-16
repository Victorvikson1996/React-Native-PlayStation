import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import ScrollViewCommands from "react-native/Libraries/Components/ScrollView/ScrollViewCommands";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../Utils";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.search}>
        <FontAwesome name="search" size={24} color={COLORS.blue} />
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.cart}>
          <AntDesign name="shoppingcart" size={30} color={COLORS.blue} />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Fontisto name="playstation" size={40} color={COLORS.blue} />
        </View>
        <View style={styles.menu}>
          <MaterialIcons name="menu" size={40} color={COLORS.blue} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  search: {
    marginLeft: 100,
    left: 100,
  },
  imageContainer: {
    justifyContent: "center",
    right: 60,
    top: -20,
  },
  cart: {
    justifyContent: "space-between",
    top: 20,
    marginLeft: 30,
  },
  menu: {
    top: -30,
    right: 170,
  },
});

export default Header;
