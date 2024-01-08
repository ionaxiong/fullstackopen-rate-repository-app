import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text onPress={() => console.log("Pressed the Repositories!")}>Repositories</Text>
    </View>
  );
};

export default AppBar;
