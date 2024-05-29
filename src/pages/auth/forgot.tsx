import { Typography, Stack } from "@mui/material";
import { Formik, Form } from "formik";
import MUIButton from "../../common/buttons/button";
import FormField from "../../common/form-field/inputField";
import { EmailValidation } from "../../common/validations/validation";
import { NavLink } from "react-router-dom";

const Forgot = () => {
  return (
    <div>
      <Typography color={"#000"} fontWeight={700} fontSize={34}>
        Forgot Password
      </Typography>
      <Typography
        color={"#000"}
        fontWeight={400}
        fontSize={16}
        marginTop={"1rem"}
      >
        Enter your Email for the verification process, we will send 4 digit code
        to your email id
      </Typography>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={EmailValidation}
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
            label={"Email ID"}
            type={"text"}
            fieldName={"email"}
            placeholder="Email Address"
          ></FormField>
          <Stack marginTop={"3rem"} spacing={3} direction={"row"}>
            <NavLink to="../login">
              <MUIButton
                color="secondary"
                variant="outlined"
                textColor={"#004AAD"}
                width="170px"
              >
                Back
              </MUIButton>
            </NavLink>
            <NavLink to="../verify">
              <MUIButton color="secondary" variant="contained" width="170px">
                Continue
              </MUIButton>
            </NavLink>
          </Stack>
        </Form>
      </Formik>
    </div>
  );
};

export default Forgot;
