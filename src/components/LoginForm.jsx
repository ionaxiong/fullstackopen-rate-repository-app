import React from "react";
import { Button, View, StyleSheet } from "react-native";
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

const LoginForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput placeholder="Username" name="username" />
      <FormikTextInput secureTextEntry={true} placeholder="Password" name="password" />

      <View style={styles.button}>
        <Button title="Sign in" style={styles.button} onPress={onSubmit} />
      </View>
    </View>
  );
};

export default LoginForm;
