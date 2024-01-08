import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import LoginForm from "./LoginForm";

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

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log("values", values);
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
