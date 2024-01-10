import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { useNavigate } from "react-router-native";
import Text from "./Text";
import { useLazyQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "web" ? 20 : Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    padding: 20,
  },
  appBarText: {
    color: theme.colors.onAppBar,
    marginRight: 20,
  },
});

const AppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [getMe, { loading, error }] = useLazyQuery(ME, {
    fetchPolicy: "cache-and-network",
    onError: (error) => {
      console.log("error", error);
    },
    onCompleted: (data) => {
      console.log("me", data.me);
      setUser(data.me);
    },
  });

  apolloClient.onResetStore(() => {
    getMe();
  });

  useEffect(() => {
    getMe();
  }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  const handleLogout = async () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
    setUser(null);
    navigate("/signin");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Text fontWeight={"bold"} style={styles.appBarText} onPress={() => navigate("/")}>
          Repositories
        </Text>
        <Text fontWeight={"bold"} style={styles.appBarText} onPress={() => navigate("/review")}>
          Create a review
        </Text>
        {user ? (
          <Text style={styles.appBarText} onPress={handleLogout}>
            Sign out
          </Text>
        ) : (
          <Text style={styles.appBarText} onPress={() => navigate("/signin")}>
            Sign in
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
