import { Box } from "@mui/material";
import CoreHeader from "./CoreHeader";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <Box
        bgcolor={"#F9F9F9"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <CoreHeader></CoreHeader>
        <Outlet></Outlet>
      </Box>
    </>
  );
};

export default AuthLayout;

