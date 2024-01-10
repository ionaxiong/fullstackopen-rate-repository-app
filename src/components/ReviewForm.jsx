import React from "react";
import { View, StyleSheet, Button } from "react-native";
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "column",
  },
  button: {
    justifyContent: "center",
    padding: 10,
  },
});
const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput placeholder="Github Username" name="githubUsername" />
      <FormikTextInput placeholder="Repository Name" name="repoName" />
      <FormikTextInput placeholder="Rating" name="rating" />
      <FormikTextInput multiline={true} placeholder="review" name="review" />
      <View style={styles.button}>
        <Button testID="createReview" title="Create a review" style={styles.button} onPress={onSubmit} />
      </View>
    </View>
  );
};

export default ReviewForm;
