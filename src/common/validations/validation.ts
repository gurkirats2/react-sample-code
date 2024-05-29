import * as Yup from "yup";

export const logInValidation = Yup.object({
  // email: Yup.string()
  //   .email("Invalid email address")
  //   .required("Please enter email"),
  // password: Yup.string()
  //   .min(8, "Password must be 8 characters")
  //   .required("Plese enter password"),
});

export const EmailValidation = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter email"),
});

export const UpdatePasswordValidation = Yup.object({
  newPassword: Yup.string()
    .min(8, "Password must be 8 characters")
    .required("Plese enter password"),
  confirmPassword: Yup.string()
    .min(8, "Password must be 8 characters")
    .required("Plese enter password"),
});
