import { Box, Container } from "@mui/material";
import Stepper from "../../../../common/stepper";
import { IStepper } from "../../../signup/nurseSignupSteps/main";
// import { Outlet } from "react-router-dom";

const OrganizationSetting = (props:IOrganizationSetting) => {
  const  {children}  = props
  return (
    <Box bgcolor={"#fff"}>
      <Container maxWidth={"xl"} sx={{ padding: "1.5rem" }}>
        <Stepper items={stepperArray} />
      </Container>
      {children}
      {/* <Outlet /> */}
    </Box>
  );
};

export default OrganizationSetting;

const stepperArray: IStepper[] = [
  {
    id: 1,
    title: "Name & Address",
    isActive: false,
  },
  {
    id: 2,
    title: "Payments",
    isActive: false,
  },
  {
    id: 3,
    title: "Add ons",
    isActive: false,
  },
];


interface IOrganizationSetting{
  children:React.ReactNode
}