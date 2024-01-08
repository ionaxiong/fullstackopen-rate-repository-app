import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  countsContainer: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  countContainer: {
    flexDirection: "column",
  },
  countNumberText: {
    fontWeight: theme.fontWeights.bold,
    textAlign: "center",
  },
  countTitleText: {
    textAlign: "center",
    color: theme.colors.textSecondary,
  },
});

const Count = ({ item }) => {
  const handleDisplayCounts = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    } else {
      return count;
    }
  };

  return (
    <View style={styles.countsContainer}>
      <View style={styles.countContainer}>
        <Text style={styles.countNumberText}>{handleDisplayCounts(item.stargazersCount)}</Text>
        <Text style={styles.countTitleText}>Stars</Text>
      </View>
      <View style={styles.countContainer}>
        <Text style={styles.countNumberText}>{handleDisplayCounts(item.forksCount)}</Text>
        <Text style={styles.countTitleText}>Forks</Text>
      </View>
      <View style={styles.countContainer}>
        <Text style={styles.countNumberText}>{handleDisplayCounts(item.reviewCount)}</Text>
        <Text style={styles.countTitleText}>Reviews</Text>
      </View>
      <View style={styles.countContainer}>
        <Text style={styles.countNumberText}>{handleDisplayCounts(item.ratingAverage)}</Text>
        <Text style={styles.countTitleText}>Rating</Text>
      </View>
    </View>
  );
};

export default Count;
