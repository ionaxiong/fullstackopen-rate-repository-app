import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";

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
    textAlign: "center",
  },
  countTitleText: {
    textAlign: "center",
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
        <Text fontWeight={"bold"} style={styles.countNumberText}>
          {handleDisplayCounts(item.stargazersCount)}
        </Text>
        <Text color={"textSecondary"} style={styles.countTitleText}>
          Stars
        </Text>
      </View>
      <View style={styles.countContainer}>
        <Text fontWeight={"bold"} style={styles.countNumberText}>
          {handleDisplayCounts(item.forksCount)}
        </Text>
        <Text color={"textSecondary"} style={styles.countTitleText}>
          Forks
        </Text>
      </View>
      <View style={styles.countContainer}>
        <Text fontWeight={"bold"} style={styles.countNumberText}>
          {handleDisplayCounts(item.reviewCount)}
        </Text>
        <Text color={"textSecondary"} style={styles.countTitleText}>
          Reviews
        </Text>
      </View>
      <View style={styles.countContainer}>
        <Text fontWeight={"bold"} style={styles.countNumberText}>
          {handleDisplayCounts(item.ratingAverage)}
        </Text>
        <Text color={"textSecondary"} style={styles.countTitleText}>
          Rating
        </Text>
      </View>
    </View>
  );
};

export default Count;
