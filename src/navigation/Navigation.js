import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, OnBoardingScreen } from "../Screens";

const Stack = createStackNavigator();

const ScreenOptions = {
  headerShown: false,
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOptions}>
        <Stack.Screen name="ON_Board" component={OnBoardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
