import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import MUIButton from "../../common/buttons/button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { NavLink } from "react-router-dom";
import "./landing.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div className="header_overlay"></div>
      <Avatar
        src="/images/landingPageImg/white-grill-rounded.svg"
        sx={{
          width: "48%",
          height: "unset",
          position: "absolute",
          left: 0,
          bottom: -306,
        }}
      />
      {/* <Avatar
        src="/images/landingPageImg/landingbg.svg"
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "78%",
          height: "unset",
        }}
        variant="square"
      /> */}
      <Box
        bgcolor={"#004AAD0D"}
        position={"relative"}
        zIndex={"9"}
        paddingBottom={"6rem"}
      >
        <Container>
          <Stack
            justifyContent={"space-between"}
            direction={"row"}
            alignItems={"center"}
          >
            <img src="/images/landingPageImg/locumnurselogo.svg" width={212} />
            <Stack direction={"row"} color={"#fff"} alignItems={"center"}>
              <Typography fontSize={20} fontWeight={500}>
                Nurse
              </Typography>
              <Typography
                fontSize={20}
                fontWeight={500}
                marginRight={"5rem"}
                marginLeft={"2rem"}
              >
                Organization
              </Typography>
              <NavLink to={"/selectRole"}>
                <MUIButton
                  color={"primary"}
                  variant={"contained"}
                  borderRadius="999px"
                  fontWeight="600"
                  fontSize="16px"
                >
                  Get started
                </MUIButton>
              </NavLink>
            </Stack>
          </Stack>
          {/* Nursing anywhere */}
          <Stack
            justifyContent={"space-between"}
            direction={"row"}
            alignItems={"center"}
            marginTop={{ xl: "10rem", lg: "6rem" }}
          >
            <motion.div
              animate={{ x: 0, transition: { duration: 1, ease: "easeInOut" } }}
              className="slide-in-left"
              onAnimationComplete={() => console.log("Animation complete!")}
            >
              <Stack direction={"column"} color={"#fff"} spacing={3}>
                <Typography fontSize={60} fontWeight={700}>
                  Nursing <br />
                  Anywhere
                </Typography>
                <Typography fontSize={20} fontWeight={200}>
                  We use only the best quality materials on the market in order
                  to
                  <br />
                  provide the best products to our patients, So don’t worry
                  about
                  <br />
                  anything and book yourself.
                </Typography>
                <Typography
                  color={"white"}
                  alignItems={"center"}
                  display={"flex"}
                  fontSize={22}
                  fontWeight={600}
                  marginTop={"1rem"}
                >
                  Get started <ArrowRightAltIcon sx={{ marginLeft: "10px" }} />
                </Typography>
              </Stack>
            </motion.div>
            <motion.div
              animate={{ x: 0, transition: { duration: 1, ease: "easeInOut" } }}
              className="slide-in-right"
              onAnimationComplete={() => console.log("Animation complete!")}
            >
              <Stack position={"relative"} alignItems={"end"}>
                <Avatar
                  src="/images/landingPageImg/playIcon.svg"
                  sx={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    left: 76,
                    zIndex: 999,
                    top: -53,
                  }}
                  variant="rounded"
                />

                <Avatar
                  src="/images/landingPageImg/nurseimg.svg"
                  sx={{
                    width: "78%",
                    height: "unset",
                  }}
                  variant="square"
                />
                <Avatar
                  src="/images/landingPageImg/dottedgrill.svg"
                  sx={{
                    position: "absolute",
                    width: "150px",
                    height: "150px",
                    right: -83,
                    top: -44,
                  }}
                  variant="square"
                />
              </Stack>
            </motion.div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Header;
