import { Box, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import MUIButton from "../buttons/button";

const SignUpHeader = (props: ISignUpHeader) => {
  const { title, description, children } = props;

  return (
    <>
      <Box bgcolor={(theme) => theme.palette.secondary.main} color={"#fff"}>
        <Container maxWidth={"xl"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <NavLink to="../landingPage">
              <img
                src="/images/landingPageImg/locumnurselogo.svg"
                width={212}
              />
            </NavLink>
            {children}
            {!children && (
              <Box display={"flex"} alignItems={"center"}>
                <Typography
                  color={"#fff"}
                  fontWeight={"300"}
                  marginRight={"1rem"}
                >
                  Already Have An Account?
                </Typography>
                <NavLink to={"../login"}>
                  <MUIButton
                    color={"primary"}
                    variant={"contained"}
                    padding="0.4rem 1rem"
                    fontWeight="600"
                  >
                    Login
                  </MUIButton>
                </NavLink>
              </Box>
            )}
          </Stack>
          <Box
            display={"flex"}
            justifyContent={"center"}
            position={"relative"}
            paddingBottom={"2.5rem"}
          >
            <Box textAlign={"center"}>
              <Typography fontWeight={"700"} fontSize={"32px"}>
                {title}
              </Typography>
              <Typography fontWeight={"200"}>{description}</Typography>
            </Box>
            <Box>
              <img
                src="/images/signupheaderimg.svg"
                className="absolute right-[-31px] bottom-0"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SignUpHeader;

interface ISignUpHeader {
  title: string;
  description: string;
  children?: React.ReactNode;
}
