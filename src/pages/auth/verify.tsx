import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import MUIButton from "../../common/buttons/button";
import OTPInput from "./otpInput";

const Verify = () => {
  return (
    <div>
      <Typography color={"#000"} fontWeight={700} fontSize={34}>
      Enter 4 Digit Code
      </Typography>
      <Typography
        color={"#000"}
        fontWeight={400}
        fontSize={16}
        marginTop={"1rem"}
      >
        Lorem Ipsum has been the industry's standard dummy text
      </Typography>
      <OTPInput />
      <Stack marginTop={"3rem"} spacing={3} direction={"row"}>
      <NavLink to="../forgot">
        <MUIButton
          color="secondary"
          variant="outlined"
          textColor={"#004AAD"}
          width="170px"
        >
          Back
        </MUIButton>
        </NavLink>
        <NavLink to="../updatePwd"> 
        <MUIButton color="secondary" variant="contained" width="170px">
          Continue
        </MUIButton>
        </NavLink>
      </Stack>
    </div>
  );
};

export default Verify;
