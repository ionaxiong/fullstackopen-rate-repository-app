import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER, {
    refetchQueries: ["ME"],
  });

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    return data;
  };

  return [signUp, result];
};

export default useSignUp;
