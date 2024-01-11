import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import { useNavigate } from "react-router-native";

const useCreateReview = () => {
  const navigate = useNavigate();
  const [mutate, result] = useMutation(CREATE_REVIEW, {
    refetchQueries: ["GET_REPOSITORY"],
  });

  if (result.loading) {
    return "Loading...";
  }

  if (result.error) {
    return `Error! ${result.error.message}`;
  }

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    // second problem: the review variables were not being passed to the mutation
    console.log("createReview", { ownerName, repositoryName, rating, text });
    const { data } = await mutate({
      variables: {
        // review: {
        ownerName,
        repositoryName,
        rating: Number(rating),
        text,
        // },
      },
    });
    console.log(data);
    navigate(`/repositories/${data.createReview.repositoryId}`);
    return data;
  };

  return { createReview, result };
};

export default useCreateReview;
