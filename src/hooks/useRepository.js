import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id, first) => {
  const [reviews, setReviews] = useState([]);
  const [repository, setRepository] = useState(null);
  const [getRepository, { loading, error, fetchMore }] = useLazyQuery(GET_REPOSITORY, {
    variables: { id, first },
    fetchPolicy: "cache-and-network",
    onError: (error) => {
      console.log("error", error);
    },
    onCompleted: (data) => {
      setRepository(data.repository);
      const reviewNodes = data.repository.reviews.edges.map((edge) => edge.node);
      console.log("reviewNodes", reviewNodes.length);
      setReviews(reviewNodes);
    },
  });

  useEffect(() => {
    getRepository();
  }, []);

  const handleFetchMore = () => {
    console.log("fetchMore");
    const canFetchMore = !loading && repository.reviews.pageInfo.hasNextPage;

    console.log("can fetch more", canFetchMore);
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORY,
      variables: {
        after: repository.reviews.pageInfo.endCursor,
        id,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        console.log({
          previousResult,
          fetchMoreResult,
        });
        const reviewNodes = [
          ...previousResult.repository.reviews.edges.map((edge) => edge.node),
          ...fetchMoreResult.repository.reviews.edges.map((edge) => edge.node),
        ];
        console.log("moreNodes", reviewNodes.length);
        setRepository(fetchMoreResult.repository);
        setReviews(reviewNodes);
      },
    });
  };

  return { loading, error, repository, reviews, fetchMore: handleFetchMore };
};

export default useRepository;
