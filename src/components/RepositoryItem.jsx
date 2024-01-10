import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.itemBackground,
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
  countsContainer: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  countContainer: {
    flexDirection: "column",
  },
  countNumberText: {
    textAlign: "center",
  },
  countTitleText: {
    textAlign: "center",
  },
});

export const Item = ({ item }) => {
  const handleDisplayCounts = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    } else {
      return count;
    }
  };
  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.avatarNameDescriptionLanguageContainer}>
        <Image testID="avatarUrl" source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.nameDescriptionLanguageContainer}>
          <Text testID="fullName" fontWeight={"bold"} style={styles.fullName}>
            {item.fullName}
          </Text>
          <Text testID="description" color={"textSecondary"} style={styles.description}>
            {item.description}
          </Text>
          <View style={styles.languageButtonContainer}>
            <Button testID="language" title={item.language} />
          </View>
        </View>
      </View>
      <View style={styles.countsContainer}>
        <View style={styles.countContainer}>
          <Text testID="stargazersCount" fontWeight={"bold"} style={styles.countNumberText}>
            {handleDisplayCounts(item.stargazersCount)}
          </Text>
          <Text color={"textSecondary"} style={styles.countTitleText}>
            Stars
          </Text>
        </View>
        <View style={styles.countContainer}>
          <Text testID="forksCount" fontWeight={"bold"} style={styles.countNumberText}>
            {handleDisplayCounts(item.forksCount)}
          </Text>
          <Text color={"textSecondary"} style={styles.countTitleText}>
            Forks
          </Text>
        </View>
        <View style={styles.countContainer}>
          <Text testID="reviewCount" fontWeight={"bold"} style={styles.countNumberText}>
            {handleDisplayCounts(item.reviewCount)}
          </Text>
          <Text color={"textSecondary"} style={styles.countTitleText}>
            Reviews
          </Text>
        </View>
        <View style={styles.countContainer}>
          <Text testID="ratingAverage" fontWeight={"bold"} style={styles.countNumberText}>
            {handleDisplayCounts(item.ratingAverage)}
          </Text>
          <Text color={"textSecondary"} style={styles.countTitleText}>
            Rating
          </Text>
        </View>
      </View>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  const handleDisplayCounts = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    } else {
      return count;
    }
  };

  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.avatarNameDescriptionLanguageContainer}>
        <Image testID="avatarUrl" source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.nameDescriptionLanguageContainer}>
          <Text testID="fullName" fontWeight={"bold"} style={styles.fullName}>
            {item.fullName}
          </Text>
          <Text testID="description" color={"textSecondary"} style={styles.description}>
            {item.description}
          </Text>
          <View style={styles.languageButtonContainer}>
            <Button testID="language" title={item.language} />
          </View>
        </View>
      </View>
      <View style={styles.countsContainer}>
        <View style={styles.countContainer}>
          <Text testID="stargazersCount" fontWeight={"bold"} style={styles.countNumberText}>
            {handleDisplayCounts(item.stargazersCount)}
          </Text>
          <Text color={"textSecondary"} style={styles.countTitleText}>
            Stars
          </Text>
        </View>
        <View style={styles.countContainer}>
          <Text testID="forksCount" fontWeight={"bold"} style={styles.countNumberText}>
            {handleDisplayCounts(item.forksCount)}
          </Text>
          <Text color={"textSecondary"} style={styles.countTitleText}>
            Forks
          </Text>
        </View>
        <View style={styles.countContainer}>
          <Text testID="reviewCount" fontWeight={"bold"} style={styles.countNumberText}>
            {handleDisplayCounts(item.reviewCount)}
          </Text>
          <Text color={"textSecondary"} style={styles.countTitleText}>
            Reviews
          </Text>
        </View>
        <View style={styles.countContainer}>
          <Text testID="ratingAverage" fontWeight={"bold"} style={styles.countNumberText}>
            {handleDisplayCounts(item.ratingAverage)}
          </Text>
          <Text color={"textSecondary"} style={styles.countTitleText}>
            Rating
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
