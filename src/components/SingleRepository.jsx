import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import RepositoryInfo from "./RepositoryInfo";
import { useLazyQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";
import ReviewItem from "./ReviewItem";
import { useParams } from "react-router-native";
import theme from "../theme";

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
  const [reviews, setReviews] = useState([]);
  const [repository, setRepository] = useState(null);
  const [getRepository, { loading, error }] = useLazyQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: "cache-and-network",
    onError: (error) => {
      console.log("error", error);
    },
    onCompleted: (data) => {
      setRepository(data.repository);
      const reviewNodes = data.repository.reviews.edges.map((edge) => edge.node);
      setReviews(reviewNodes);
    },
  });

  useEffect(() => {
    getRepository();
  }, []);

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
      ListHeaderComponent={() => (
        <HeaderWithSeparator>
          <RepositoryInfo repository={repository} />
        </HeaderWithSeparator>
      )}
    />
  );
};

export default SingleRepository;
