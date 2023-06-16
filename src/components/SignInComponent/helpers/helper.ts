import { FormErrors, FormValues } from "../SignInComponent";

export const validateFormBeforeSubmit = (
  values: FormValues,
  user: FormValues
): FormErrors | null => {
  const errors: FormErrors = {};

  const { email, password } = values;

  if (email.length < 1) {
    errors.email = "Field required";
  }

  if (password.length < 1) {
    errors.password = "Field required";
  }

  if (password.length > 1 && password.length < 4) {
    errors.password = "Password length should be more than 4";
  }
  if (email != user.email) {
    errors.email = "Wrong user email";
  }
  if (password != user.password) {
    errors.password = "Wrong user password";
  }

  return Object.keys(errors).length ? errors : null;
};
