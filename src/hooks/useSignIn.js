import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, { data, loading, error }] = useMutation(SIGN_IN);

  if (loading) {
    return "Loading...";
  }

  if (error) {
    return `Error! ${error.message}`;
  }

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    return data;
  };

  return [signIn, data];
};

export default useSignIn;
