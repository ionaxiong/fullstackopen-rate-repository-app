import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import theme from "../theme";
import Count from "./Count";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.repositoryItemBackground,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  avatarNameDescriptionLanguageContainer: {
    flexDirection: "row",
  },
  nameDescriptionLanguageContainer: {
    paddingLeft: 20,
  },
  languageButtonContainer: {
    flexDirection: "row",
    paddingTop: 10,
  },
  fullName: {
    fontWeight: theme.fontWeights.bold,
  },
  description: {
    paddingTop: 5,
    color: theme.colors.textSecondary,
  },
  // countsContainer: {
  //   paddingTop: 20,
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  // },
  // countContainer: {
  //   flexDirection: "column",
  // },
  // countNumberText: {
  //   fontWeight: theme.fontWeights.bold,
  //   textAlign: "center",
  // },
  // countTitleText: {
  //   textAlign: "center",
  //   color: theme.colors.textSecondary,
  // },
});

const RepositoryItem = ({ item }) => {


  return (
    <View style={styles.container}>
      <View style={styles.avatarNameDescriptionLanguageContainer}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.nameDescriptionLanguageContainer}>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.languageButtonContainer}>
            <Button title={item.language} />
          </View>
        </View>
      </View>
      <Count item={item} />
    </View>
  );
};

export default RepositoryItem;
