import { Formik } from "formik";
import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
import ReviewForm from "./ReviewForm";
import useCreateReview from "../hooks/useCreateReview";

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
  githubUsername: "",
  repoName: "",
  rating: "",
  review: "",
};

const CreateReview = () => {
  const { createReview } = useCreateReview();
  const validationSchema = Yup.object().shape({
    githubUsername: Yup.string().required("Github Username is required"),
    repoName: Yup.string().required("Repository Name is required"),
    rating: Yup.number().integer().min(0).max(100).required("Rating is required"),
    review: Yup.string().max(2000, "Review must be less than 2000 characters"),
  });

  const onSubmit = async (values) => {
    const { githubUsername, repoName, rating, review } = values;
    try {
      // first problem: the variables object is not formatted correctly
      const variables = {
        repositoryName: repoName,
        ownerName: githubUsername,
        rating,
        text: review,
      };
      await createReview(variables);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default CreateReview;
