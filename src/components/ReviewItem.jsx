import React, { useState } from "react";
import { Button, View, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { formatDate } from "../utils";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";
import { Dialog, Portal } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.itemBackground,
    padding: 20,
  },
  reviewContainer: {
    flexDirection: "row",
  },
  ratingContainer: {
    borderStyle: "solid",
    borderColor: theme.colors.primary,
    borderRadius: 25,
    borderWidth: 2,
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  ratingText: {
    textAlign: "center",
  },
  reviewInfoContainer: {
    marginLeft: 20,
    flexShrink: 1,
  },
  reviewInfoText: {
    marginTop: 10,
  },
  buttons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dialog: {
    backgroundColor: theme.colors.itemBackground,
  },
  dialogTitle: {
    color: theme.colors.textPrimary,
  },
});

const ReviewItem = ({ review, showButtons, refetch }) => {
  const navigate = useNavigate();
  const { deleteReview } = useDeleteReview();
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleDeleteReview = async () => {
    try {
      await deleteReview(review.id);
      refetch();
      console.log("deleted successfully!");
      setShowAlert(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.reviewContainer}>
        <View style={styles.ratingContainer}>
          <Text fontWeight={"bold"} style={styles.ratingText}>
            {review.rating}
          </Text>
        </View>
        <View style={styles.reviewInfoContainer}>
          <Text fontWeight={"bold"}>{review.user.username}</Text>
          <Text color={"textSecondary"}>{formatDate(review.createdAt)}</Text>
          <View style={styles.reviewInfoText}>
            <Text>{review.text}</Text>
          </View>
        </View>
      </View>
      {showButtons && (
        <View style={styles.buttons}>
          <Button
            title="View repository"
            onPress={() => navigate(`/repositories/${review.repositoryId}`)}
          />
          <Button color={theme.colors.error} title="Delete review" onPress={handleShowAlert} />
        </View>
      )}
      {showAlert && (
        <Portal>
          <Dialog style={styles.dialog} visible={showAlert} onDismiss={() => setShowAlert(false)}>
            <Dialog.Title style={styles.dialogTitle}>Delete review</Dialog.Title>
            <Dialog.Content>
              <Text>Are you sure you want to delete this review?</Text>
            </Dialog.Content>
            <Dialog.Actions style={styles.buttons}>
              <Button title="Cancel" onPress={() => setShowAlert(false)} />
              <Button color={theme.colors.error} title="Delete" onPress={handleDeleteReview} />
            </Dialog.Actions>
          </Dialog>
        </Portal>
      )}
    </View>
  );
};

export default ReviewItem;
