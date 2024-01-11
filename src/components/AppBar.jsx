import React from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { useNavigate } from "react-router-native";
import Text from "./Text";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
import useGetMe from "../hooks/useGetMe";

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
  const { user, setUser, loading, error } = useGetMe({ includeReviews: false });

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
        <Text
          fontWeight={"bold"}
          style={styles.appBarText}
          onPress={() => navigate("/createreview")}
        >
          Create a review
        </Text>
        {user ? (
          <>
            <Text
              fontWeight={"bold"}
              style={styles.appBarText}
              onPress={() => navigate("/myreviews")}
            >
              My reviews
            </Text>
            <Text style={styles.appBarText} onPress={handleLogout}>
              Sign out
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.appBarText} onPress={() => navigate("/signin")}>
              Sign in
            </Text>
            <Text style={styles.appBarText} onPress={() => navigate("/signup")}>
              Sign up
            </Text>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
