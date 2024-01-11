import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import theme from "../theme";
import ReviewItem from "./ReviewItem";
import useGetMe from "../hooks/useGetMe";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.mainBackground,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviewList = () => {
  const { reviews, loading, error } = useGetMe({ includeReviews: true });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default MyReviewList;
