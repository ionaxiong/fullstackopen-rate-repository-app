import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
  const [mutate, { data, loading, error }] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  if (loading) {
    return "Loading...";
  }

  if (error) {
    return `Error! ${error.message}`;
  }

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    const accessToken = await authStorage.getAccessToken();
    console.log("accessToken", accessToken);
    apolloClient.resetStore();
    return data;
  };

  return [signIn, data];
};

export default useSignIn;
