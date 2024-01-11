import { useLazyQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import { useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

const useGetMe = ({ includeReviews }) => {
  const apolloClient = useApolloClient();
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState(null);
  const [getMe, { loading, error }] = useLazyQuery(ME, {
    fetchPolicy: "cache-and-network",
    onError: (error) => {
      console.log("error", error);
    },
    onCompleted: (data) => {
      const reviewNodes = data.me.reviews ? data.me.reviews.edges.map((edge) => edge.node) : [];
      setUser(data.me);
      setReviews(reviewNodes);
    },
  });

  const refetch = () => {
    getMe({ variables: { includeReviews } });
  };

  apolloClient.onResetStore(() => {
    getMe({ variables: { includeReviews } });
  });

  useEffect(() => {
    getMe({ variables: { includeReviews } });
  }, []);

  return { loading, error, setUser, user, reviews, refetch };
};

export default useGetMe;
