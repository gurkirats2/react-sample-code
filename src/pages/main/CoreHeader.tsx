import { Box, Stack, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const CoreHeader = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <Box bgcolor={(theme) => theme.palette.secondary.main} color={"#fff"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
        >
          <Stack
            position={"absolute"}
            right={"80px"}
            top={"18px"}
            spacing={2}
            direction={"row"}
          >
            <NotificationsNoneOutlinedIcon
              sx={{
                backgroundColor: "#336EBD",
                padding: "10px",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
              }}
            />
            <Box
              bgcolor={"#336EBD"}
              display={"flex"}
              flexDirection={"column"}
              borderRadius={"10px"}
              padding={"8px 0px 8px 8px"}
              sx={{ cursor: "pointer" }}
              className="profile_dropdown"
            >
              <div
                className="flex items-center"
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen);
                }}
              >
                <img
                  src="/images/placeholderImg.svg"
                  className="rounded-full w-6 h-6"
                />
                <Typography
                  fontSize={"14px"}
                  marginLeft={"10px"}
                  marginRight={"2px"}
                >
                  Aliparbhu
                </Typography>
                <ArrowDropDownIcon />
              </div>

              <div
                className={`text-sm mr-2 mt-4 dropdown_item ${
                  isProfileOpen && "active"
                }`}
              >
                <NavLink to="../nurseProfile/step1">
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    borderBottom={"1px solid #ffffff63"}
                    paddingBottom={"0.5rem"}
                  >
                    Profile
                    <img src="/images/rightSideArrow.svg" />
                  </Stack>
                </NavLink>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  borderBottom={"1px solid #ffffff63"}
                  paddingBottom={"0.5rem"}
                  paddingTop={"0.5rem"}
                >
                  Help Us
                  <img src="/images/rightSideArrow.svg" />
                </Stack>
                <NavLink to="../orgSetting/step1">
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    borderBottom={"1px solid #ffffff63"}
                    paddingBottom={"0.5rem"}
                    paddingTop={"0.5rem"}
                  >
                    Settings
                    <img src="/images/rightSideArrow.svg" />
                  </Stack>
                </NavLink>
                <NavLink to="../auth/login">
                  <Stack
                    position={"relative"}
                    zIndex={9}
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    paddingBottom={"0.5rem"}
                    paddingTop={"0.5rem"}
                  >
                    Signout
                    <LogoutIcon sx={{ width: "12px", height: "12px" }} />
                  </Stack>
                </NavLink>
              </div>
            </Box>
          </Stack>
        </Box>

        <Box padding={"1rem 3rem"}>
          <Typography fontSize={30} fontWeight={600}>
            Profile{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CoreHeader;
