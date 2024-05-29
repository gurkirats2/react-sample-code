import { Stack, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { UpdatePasswordValidation } from "../../common/validations/validation";
import FormField from "../../common/form-field/inputField";
import MUIButton from "../../common/buttons/button";
import { NavLink } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div>
      <Typography color={"#000"} fontWeight={700} fontSize={34}>
        Change Password
      </Typography>
      <Typography
        color={"#000"}
        fontWeight={400}
        fontSize={16}
        marginTop={"1rem"}
      >
        Lorem Ipsum has been the industry's standard dummy text
      </Typography>
      <Formik
        initialValues={{ newPassword: "", confirmPassword: "" }}
        validationSchema={UpdatePasswordValidation}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          // const formValue = {
          //   ...values,
          //   deviceId: "string",
          //   deviceType: "web",
          // };
          // const { data, error } = (await login(
          //   formValue as any
          // )) as LoginResponseData;
          // console.log(data);
          // console.log(error);
          setSubmitting(false);
        }}
      >
        <Form className="mt-11">
          <FormField
            label={"New Password"}
            type={"text"}
            fieldName={"email"}
            placeholder="New Password"
          ></FormField>
          <FormField
            label={"Confirm Password"}
            type={"text"}
            fieldName={"email"}
            placeholder="Confirm Password"
          ></FormField>
          <Stack marginTop={"3rem"} spacing={3} direction={"row"}>
            <NavLink to="../verify">
              <MUIButton
                color="secondary"
                variant="outlined"
                textColor={"#004AAD"}
                width="170px"
              >
                Back
              </MUIButton>
            </NavLink>
            <MUIButton color="secondary" variant="contained" width="170px">
              <NavLink to="../login"> Continue</NavLink>
            </MUIButton>
          </Stack>
        </Form>
      </Formik>
    </div>
  );
};

export default ResetPassword;
