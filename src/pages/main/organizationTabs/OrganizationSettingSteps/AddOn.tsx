import { Box, Stack, Typography } from "@mui/material";
import FormField from "../../../../common/form-field/inputField";
import MUIButton from "../../../../common/buttons/button";

import { Form, Formik } from "formik";
import { logInValidation } from "../../../../common/validations/validation";
import CustomCheckbox from "../../../../common/checkbox/checkbox";
import { useState } from "react";
import IOSSwitch from "../../../../common/iosSwitch";

const AddOn = () => {
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
              Add On
            </Typography>
            <Typography color={"#646464"} fontWeight={"300"}>
              Lorem Ipsum has been the industry's standard dummy text
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={2}>
            <MUIButton variant="contained" color="secondary" padding="0.5rem">
              Default Setting
            </MUIButton>
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
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  marginBottom={"1.5rem"}
                >
                  <CustomCheckbox
                    data={Millage}
                    onChange={handleCheckboxChange}
                    selectedValuesProps={selectedOptions}
                  ></CustomCheckbox>
                </Stack>
                {/* Add accountant */}

                <Stack direction={"row"} spacing={3}>
                  <FormField
                    label={"Minimum Millage to unlock Millage Payments"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="Write Your Minimum millage"
                  ></FormField>
                  <FormField
                    label={"How much per mile"}
                    type={"text"}
                    fieldName={"firstName"}
                    placeholder="Write Your Rate here"
                  ></FormField>
                </Stack>
              </Box>

              {/* Parking */}
              <Stack direction={"row"} spacing={2} marginTop={"1rem"}>
                <Box
                  bgcolor={"#fff"}
                  borderRadius={"20px"}
                  padding={"1rem"}
                  className="w-1/2"
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    marginBottom={"1.5rem"}
                  >
                    <CustomCheckbox
                      data={Parking}
                      onChange={handleCheckboxChange}
                      selectedValuesProps={selectedOptions}
                    ></CustomCheckbox>
                  </Stack>
                  {/* Add accountant */}

                  <Stack direction={"row"} spacing={3} alignItems={"center"}>
                    <div className="w-1/2">
                      <FormField
                        label={"Maximum amount can claim for parking"}
                        type={"text"}
                        fieldName={"firstName"}
                        placeholder="Write Your Amount here"
                      ></FormField>
                    </div>
                    <CustomCheckbox
                      data={FreeParking}
                      onChange={handleCheckboxChange}
                      selectedValuesProps={selectedOptions}
                    ></CustomCheckbox>
                  </Stack>
                </Box>
                <Box
                  bgcolor={"#fff"}
                  borderRadius={"20px"}
                  padding={"1rem"}
                  className="w-1/2"
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    marginBottom={"1.5rem"}
                  >
                    <CustomCheckbox
                      data={PublicTransport}
                      onChange={handleCheckboxChange}
                      selectedValuesProps={selectedOptions}
                    ></CustomCheckbox>
                  </Stack>
                  {/* Add accountant */}

                  <Stack direction={"row"} spacing={3} flex={"1"}>
                    <FormField
                      label={"Maximum amount can claim for public tansport"}
                      type={"text"}
                      fieldName={"firstName"}
                      placeholder="Write Your Amount Here"
                    ></FormField>
                  </Stack>
                </Box>
              </Stack>

              {/* permision */}
              <Box
                bgcolor={"#fff"}
                borderRadius={"20px"}
                padding={"1rem"}
                marginTop={"1rem"}
              >
                <Typography fontSize={"14px"} fontWeight={700}>
                  Permissions
                </Typography>
                <Stack direction={"row"} spacing={3} marginTop={"1rem"}>
                  <Stack className="w-1/2" spacing={2}>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>Add Roles</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>Add Shift Notes</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>Approve Shift Rate</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>Delete Shift</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>Manage Negotiation</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>Create & Edit Shift Expense</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>View Shift Notes</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>View Reports</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>View Locum Details (Name, Email, Number)</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>View Messages</Typography>
                      <IOSSwitch />
                    </Box>
                  </Stack>
                  {/* 2nd */}
                  <Stack className="w-1/2" spacing={2}>
                  <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>Add & Edit Shift</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>Assign Shifts</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>Cancel Shifts</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>View Shift Expenses</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>Approve Shift Expenses</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>View Rates</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>View Leave</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>View Locum Additional Details (Bank Details)</Typography>
                      <IOSSwitch />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography color={"#606060"}>Notification of Change in Bank Details</Typography>
                      <IOSSwitch />
                    </Box>
                  
                  </Stack>
                </Stack>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default AddOn;

const Millage = [
  {
    value: "true",
    label: "Millage (Millage will be calculated from there Address)",
    isChecked: false,
  },
];

const Parking = [
  {
    value: "true",
    label: "Parking",
    isChecked: false,
  },
];

const PublicTransport = [
  {
    value: "true",
    label: "Public Transport",
    isChecked: false,
  },
];

const FreeParking = [
  {
    value: "true",
    label: "Free Parking available at sight",
    isChecked: false,
  },
];
