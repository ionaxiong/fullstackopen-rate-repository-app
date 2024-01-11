import React from "react";
import FormikTextInput from "./FormikTextInput";
import { View, StyleSheet, Button } from "react-native";

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

const SignupForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput placeholder="Username" name="username" />
      <FormikTextInput secureTextEntry={true} placeholder="Password" name="password" />
      <FormikTextInput
        secureTextEntry={true}
        placeholder="Password confirmation"
        name="passwordConfirmation"
      />
      <View style={styles.button}>
        <Button testID="signUp" title="Sign up" style={styles.button} onPress={onSubmit} />
      </View>
    </View>
  );
};

export default SignupForm;
