import { Box, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import FormField from "../../common/form-field/inputField";
import { logInValidation } from "../../common/validations/validation";
import MUIButton from "../../common/buttons/button";
import CustomCheckbox from "../../common/checkbox/checkbox";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { useLoginMutation } from "../../service/auth.service";
// import { ResponseData } from "../../models/responsedata.model";
// import { User } from "../../models/user.model";

const Login = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleCheckboxChange = (value: string[]) => {
    setSelectedOptions(value);
  };
  const navigate = useNavigate();
  // const [login, { isLoading }] = useLoginMutation();

  return (
    <>
      <Typography color={"#979797"} fontWeight={600} fontSize={22}>
        Welcome to Login
      </Typography>

      <Formik
        initialValues={{ email: "dummy@yopmail.com", password: "qwerty" }}
        validationSchema={logInValidation}
        onSubmit={async (values, { setSubmitting }) => {
          // console.log(values);
          // const formValue = {
          //   ...values,
          //   deviceId: "string",
          //   deviceType: "web",
          // };
          navigate("../../core");
          // const { data, error } = (await login(
          //   formValue
          // )) as ResponseData<User>;
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
          <FormField
            label={"Password"}
            type={"password"}
            fieldName={"password"}
            placeholder="Password"
          ></FormField>
          <div>
            <Box display={"flex"} justifyContent={"space-between"}>
              <CustomCheckbox
                data={remember_Me}
                onChange={handleCheckboxChange}
                selectedValuesProps={selectedOptions}
              />
              <Typography
                color={(theme) => theme.palette.primary.main}
                fontWeight={500}
                fontSize={"14px"}
              >
                <NavLink to={"../forgot"}> Forgot Password ? </NavLink>
              </Typography>
            </Box>
          </div>
          <Box marginTop={"3rem"} onClick={()=>{navigate('../../core')}}>
            <MUIButton
            
              color="secondary"
              // isLoading={isLoading}
              variant="contained"
              width="250px"
            >
              Login
            </MUIButton>
          </Box>
          <Box display={"flex"} alignItems={"center"} marginTop={"1rem"}>
            <Typography color={"#646464"} fontWeight={"300"}>
              Are you new to locum nurse?
            </Typography>
            <NavLink to={"../selectRole"}>
              <Typography
                color={"#004AAD"}
                fontWeight={"600"}
                marginLeft={"0.5rem"}
              >
                Get Started
              </Typography>
            </NavLink>
          </Box>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
const remember_Me = [
  {
    value: "true",
    label: "Remember me",
    isChecked: false,
    id: 1,
  },
];
