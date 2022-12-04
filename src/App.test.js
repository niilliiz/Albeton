/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUp from "./pages/authentication/sign-up/sign-up";
import SignIn from "./pages/authentication/sing-in/sign-in";

// --------------------SIGNUP TESTS---------------
describe("SIGN UP TEST", () => {
  beforeEach(() => {
    render(<SignUp />);
  });

  it("Input must be empty", () => {
    const textBoxRoles = screen.getAllByRole("textbox");
    const passwordRelatedBox = screen.getAllByLabelText(/password/i);
    [...textBoxRoles, ...passwordRelatedBox].forEach((element) =>
      expect(element.value).toBe("")
    );
  });

  it("Weak password", async () => {
    const passwordElement = screen.getByLabelText("Password *");

    expect(
      screen.queryByText(
        "Weak password. It must contain at least 6 characters."
      )
    ).toBeNull();

    await userEvent.type(passwordElement, "12345");

    const helperTextElement = screen.queryByText(
      "Weak password. It must contain at least 6 characters."
    );
    expect(helperTextElement).toBeInTheDocument();
  });

  it("Not equal password", async () => {
    const passwordElement = screen.getByLabelText("Password *");
    const confirmPasswordElement = screen.getByLabelText("Confirm password *");

    expect(screen.queryByText("Passwords don't match. Try again!")).toBeNull();

    await userEvent.type(passwordElement, "123456");
    await userEvent.type(confirmPasswordElement, "12345");

    const helperTextElement = screen.queryByText(
      "Passwords don't match. Try again!"
    );
    expect(helperTextElement).toBeInTheDocument();
  });
});

// --------------------SIGN IN TESTS---------------
describe("SIGN IN TEST", () => {
  it("Input must be empty", () => {
    render(<SignIn />);
    const emailInput = screen.getByRole("textbox");
    const passwordInput = screen.getByLabelText(/password/i);
    [emailInput, passwordInput].forEach((element) =>
      expect(element.value).toBe("")
    );
  });
});
