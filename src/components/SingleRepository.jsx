import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import RepositoryInfo from "./RepositoryInfo";
import ReviewItem from "./ReviewItem";
import { useParams } from "react-router-native";
import theme from "../theme";
import useRepository from "../hooks/useRepository";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.mainBackground,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const HeaderWithSeparator = ({ children }) => {
  return (
    <>
      {children}
      <ItemSeparator />
    </>
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  const first = 3;
  const { reviews, repository, loading, error, fetchMore } = useRepository(id, first);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
  if (!reviews || !repository) {
    return null;
  }

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={() => (
        <HeaderWithSeparator>
          <RepositoryInfo repository={repository} />
        </HeaderWithSeparator>
      )}
    />
  );
};

export default SingleRepository;
