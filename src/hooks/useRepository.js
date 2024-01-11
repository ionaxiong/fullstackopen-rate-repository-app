import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
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

  return { loading, error, repository, reviews };
};

export default useRepository;
