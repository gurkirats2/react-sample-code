import { Box, Stack, Typography } from "@mui/material";
import FormField from "../../../../common/form-field/inputField";
import { NavLink } from "react-router-dom";
import MUIButton from "../../../../common/buttons/button";
import { theme } from "../../../../theme";
import { Form, Formik } from "formik";
import { logInValidation } from "../../../../common/validations/validation";
import CustomCheckbox from "../../../../common/checkbox/checkbox";
import { useState } from "react";

const Payments = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleCheckboxChange = (value: string[]) => {
    setSelectedOptions(value);
  };
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
              Payments
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
            <NavLink to="../orgSetting/step3">
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
          {() => (
            <Form>
              <Box bgcolor={"#fff"} borderRadius={"20px"} padding={"1rem"}>
                <Stack direction={"row"} spacing={3}>
                  <FormField
                    label={"Company name"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="Write your company name here.."
                  ></FormField>
                  <FormField
                    label={"Name and Address"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="Name and Address"
                  ></FormField>
                  <FormField
                    label={"Sort Code"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="CQC Code"
                  ></FormField>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <CustomCheckbox
                    data={Accounting}
                    onChange={handleCheckboxChange}
                    selectedValuesProps={selectedOptions}
                  ></CustomCheckbox>
                  <MUIButton
                    variant="contained"
                    color="primary"
                    padding="0.3rem 0.5rem"
                  >
                    Add Accountant
                  </MUIButton>
                </Stack>
                {/* Add accountant */}
                <Box
                  border={"1px solid #DFDFDF"}
                  padding={"0.5rem 0.5rem 0rem 0.5rem"}
                  marginTop={"1rem"}
                  marginBottom={"1rem"}
                  borderRadius={"12px"}
                >
                  <Stack direction={"row"} spacing={3}>
                    <FormField
                      label={"Accountant Email ID"}
                      type={"text"}
                      fieldName={"firstName"}
                      placeholder="Write your Accountant Email ID here"
                    ></FormField>
                    <FormField
                      label={"Accountant Account Number"}
                      type={"text"}
                      fieldName={"firstName"}
                      placeholder="Write your Accountant Account Number here"
                    ></FormField>
                  </Stack>
                </Box>
                <Stack direction={"row"} spacing={3}>
                  <FormField
                    label={"Email ID"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="Write your Email Id here"
                  ></FormField>
                  <FormField
                    label={"Phone Number"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="Write Your Phone Number here"
                  ></FormField>
                </Stack>
                <Stack direction={"row"} spacing={3}>
                  <FormField
                    label={"Payment Notes"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="Payment Notes"
                  ></FormField>
                  <FormField
                    label={"System Notes"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="System Notes"
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

export default Payments;

const Accounting = [
  {
    value: "true",
    label: "Accounting",
    isChecked: false,
  },
];
