import React from "react";
import { View, StyleSheet, Button } from "react-native";
import theme from "../theme";
import * as Linking from "expo-linking";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
  },
  button: {
    backgroundColor: theme.colors.itemBackground,
    padding: 20,
  },
});

const RepositoryInfo = ({ repository }) => {
  return (
    <View style={styles.container}>
      <RepositoryItem item={repository} />
      <View style={styles.button}>
        <Button title="Open in GitHub" onPress={() => Linking.openURL(repository.url)} />
      </View>
    </View>
  );
};

export default RepositoryInfo;
