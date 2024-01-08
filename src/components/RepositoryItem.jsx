import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";
import Text from "./Text";
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
  description: {
    paddingTop: 5,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarNameDescriptionLanguageContainer}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.nameDescriptionLanguageContainer}>
          <Text fontWeight={"bold"} style={styles.fullName}>
            {item.fullName}
          </Text>
          <Text color={"textSecondary"} style={styles.description}>
            {item.description}
          </Text>
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
