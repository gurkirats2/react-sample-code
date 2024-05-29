import { Form, Formik } from "formik";
import FormField from "../../../../common/form-field/inputField";
import { logInValidation } from "../../../../common/validations/validation";
import { NavLink } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import MUIButton from "../../../../common/buttons/button";
import { theme } from "../../../../theme";
import SelectField from "../../../../common/select-field/selectField";

const NameAndAddress = () => {
  return (
    <div>
      <Box sx={{ padding: "1.5rem 5rem" }} bgcolor={"#F9F9F9"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginBottom={"1rem"}
        >
          <Stack direction={"column"}>
            <Typography fontSize={"22px"} fontWeight={"700"}>
              Name & Address
            </Typography>
            <Typography color={"#646464"} fontWeight={"300"}>
              Lorem Ipsum has been the industry's standard dummy text
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={2}>
            <NavLink to="../nurseProfile/step1">
              <MUIButton
                textColor={theme.palette.secondary.main}
                variant="outlined"
                color="secondary"
                padding="0.5rem 1rem"
                fontWeight="600"
              >
                Cancel
              </MUIButton>
            </NavLink>
            <NavLink to="../orgSetting/step2">
              <MUIButton
                variant="contained"
                color="secondary"
                padding="0.5rem 1rem"
              >
                Save Location
              </MUIButton>
            </NavLink>
          </Stack>
        </Box>
        <Formik
          initialValues={{ firstName: "", password: "" }}
          validationSchema={logInValidation}
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
          {(formik) => (
            <Form>
              <Box bgcolor={"#fff"} borderRadius={"20px"} padding={"1rem"}>
                <Stack direction={"row"} spacing={3}>
                  <SelectField
                    formik={formik}
                    fieldName="firstName"
                    placeholder="Choose from these"
                    label="Organisation Type"
                  ></SelectField>
                  <FormField
                    label={"Name and Address"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="Name and Address"
                  ></FormField>
                  <FormField
                    label={"CQC Code"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="CQC Code"
                  ></FormField>
                </Stack>
                <Stack direction={"row"} spacing={3}>
                  <FormField
                    label={"First Name"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="First Name"
                  ></FormField>
                  <FormField
                    label={"Last Name"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="Last Name"
                  ></FormField>
                  <FormField
                    label={"Job Role"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="CQC Code"
                  ></FormField>
                </Stack>
                <Stack direction={"row"} spacing={3}>
                  <FormField
                    label={"Email ID"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="Email ID"
                  ></FormField>
                  <FormField
                    label={"Phone Number"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="Phone Number"
                  ></FormField>
                </Stack>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default NameAndAddress;
