import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { SignInContainer } from "../../components/SignIn";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // Mock the onSubmit function
      const onSubmit = jest.fn();

      // Render the SignInContainer component with the mock onSubmit function
      const { getByPlaceholderText, getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);

      // Get the text inputs and submit button
      const usernameInput = getByPlaceholderText("Username");
      const passwordInput = getByPlaceholderText("Password");
      const signInButton = getByTestId("signIn");

      // Simulate user interaction by filling in the text inputs
      fireEvent.changeText(usernameInput, "kalle");
      fireEvent.changeText(passwordInput, "password");

      // Simulate clicking the submit button
      fireEvent.press(signInButton);

      // Wait for the onSubmit function to be called
      await waitFor(() => {
        // Expect the onSubmit function to have been called once
        expect(onSubmit).toHaveBeenCalledTimes(1);

        // Get the first argument of the first call to onSubmit
        const submittedData = onSubmit.mock.calls[0][0];

        // Expect only the relevant fields to match
        expect(submittedData.username).toEqual("kalle");
        expect(submittedData.password).toEqual("password");
      });
    });
  });
});
