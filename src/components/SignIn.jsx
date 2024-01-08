import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import LoginForm from "./LoginForm";
import * as Yup from "yup";

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
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values) => {
    console.log("values", values);
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
