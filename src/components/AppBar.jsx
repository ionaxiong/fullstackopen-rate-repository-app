import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  appBarText: {
    color: theme.colors.onAppBar,
    fontWeight: theme.fontWeights.bold,
    padding: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appBarText} onPress={() => console.log("Pressed the Repositories!")}>
        Repositories
      </Text>
    </View>
  );
};

export default AppBar;
