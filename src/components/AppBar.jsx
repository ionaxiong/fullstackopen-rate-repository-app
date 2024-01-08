import React from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { useNavigate } from "react-router-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "web" ? 20 : Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    padding: 20,
  },
  appBarText: {
    color: theme.colors.onAppBar,
    marginRight: 20,
  },
});

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Text fontWeight={"bold"} style={styles.appBarText} onPress={() => navigate("/")}>
          Repositories
        </Text>
        <Text style={styles.appBarText} onPress={() => navigate("signin")}>
          Sign in
        </Text>
      </ScrollView>
    </View>
  );
};

export default AppBar;
