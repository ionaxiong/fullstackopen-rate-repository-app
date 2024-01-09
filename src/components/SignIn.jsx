import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import LoginForm from "./LoginForm";
import * as Yup from "yup";
import useSignIn from "../hooks/useSignIn";

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

export const SignInContainer = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const data = await signIn({ username, password });
      console.log("successfully retrieved data: ", data);
    } catch (error) {
      console.log(error);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
