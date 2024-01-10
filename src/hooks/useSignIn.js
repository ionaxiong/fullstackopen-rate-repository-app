import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  if (result.loading) {
    return "Loading...";
  }

  if (result.error) {
    return `Error! ${result.error.message}`;
  }

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    const accessToken = await authStorage.getAccessToken();
    console.log("accessToken", accessToken);
    navigate("/");
    apolloClient.resetStore();
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
