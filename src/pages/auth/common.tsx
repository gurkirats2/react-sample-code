import { Outlet } from "react-router-dom";
import MUIButton from "../../common/buttons/button";
import {  Box } from "@mui/material";
import { supportEmail } from "../../globalConstant";

const AuthCommon = () => {
  return (
    <div className="flex relative">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <Box width={"82%"} paddingLeft={"9rem"}>
          <Outlet/>
        </Box>
      </div>
      <div className="w-2/3 flex flex-col justify-center items-center">
        <div
          className="bg-black h-screen w-full"
          
        >
          <Box
            justifyContent={"end"}
            display={"flex"}
            marginRight={"7rem"}
            marginTop={"2rem"}
          >
            <div onClick={supportEmail}>
              <MUIButton
                color={"navyBlue"}
                variant="contained"
                padding="0.5rem 1rem"
              >
                <img src="/images/auth/head_phone.svg" className="mr-2" />
                Support
              </MUIButton>
            </div>
          </Box>
          <Box
            className="flex justify-end mr-36 mt-24"
            display={"flex"}
            justifyContent={"flex-end"}
            marginRight={"9rem"}
            marginTop={{ lg: "4rem", xl: "6rem" }}
          >
            <div className="playStoreBtn">
              <img src="/images/auth/apple-store.svg" className="mr-3" />
              <div className="flex-col flex items-baseline">
                Download on the
                <div className="font-bold text-2xl">App Store</div>
              </div>
            </div>
            <div className="playStoreBtn ml-8">
              <img src="/images/auth/google-store.svg" className="mr-3" />
              <div className="flex-col flex items-baseline">
                Get it on
                <div className="font-bold text-2xl">Google play</div>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AuthCommon;
