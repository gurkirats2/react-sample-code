import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import MUIButton from "../../common/buttons/button";

const Footer = () => {
  return (
    <>
      <Box
        bgcolor={(theme) => theme.palette.secondary.main}
        color="#fff"
        marginTop={"13rem"}
        position={"relative"}
      >
        <Box
          bgcolor={(theme) => theme.palette.skyBlue.main}
          color={(theme) => theme.palette.black.main}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          position={"absolute"}
          top={-86}
          left={0}
          right={0}
          width={{ lg: "55%", xs: "40%" }}
          borderRadius={"999px"}
          margin={"auto"}
          paddingX={"4rem"}
          paddingY={"2rem"}
        >
          <Box>
            <Typography
              fontSize={{ lg: "26px", xs: "30px" }}
              fontWeight={700}
              whiteSpace={"nowrap"}
            >
              Nurses are the heart of healthcare
            </Typography>
            <Typography
              fontSize={{ lg: "18px", xs: "20px" }}
              fontWeight={300}
              width={"90%"}
            >
              We use only the best quality materials on the market in order to
              provide the best products to our patients.
            </Typography>
          </Box>

          <MUIButton
            color="secondary"
            variant="contained"
            borderRadius="999px"
            fontWeight="600"
            fontSize="16px"
          >
            Get Started
          </MUIButton>
        </Box>
        <Container
          maxWidth={"xl"}
          sx={{ paddingTop: "9rem", paddingBottom: "2rem" }}
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography fontSize={16} fontWeight={300} width={"20%"}>
              We use only the best quality materials on the market in order to
              provide the best products to our patients.
            </Typography>
            {/* Organisations */}
            <Stack direction={"column"} spacing={3}>
              <Typography fontSize={16} fontWeight={600}>
                Organizations
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                Care Homes
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                Clinics
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                Dentist
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                Gp Practice Hospitals
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                Community Services
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                Mental Health Services
              </Typography>
            </Stack>
            {/* Features */}
            <Stack direction={"column"} spacing={3}>
              <Typography fontSize={16} fontWeight={600}>
                Features
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                Rota
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                Market Place
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                Payments
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                Reports
              </Typography>
            </Stack>
            {/* Resources */}
            <Stack direction={"column"} spacing={3}>
              <Typography fontSize={16} fontWeight={600}>
                Resources
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                Help Center
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                Document Checklist
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                Book Demo
              </Typography>
            </Stack>
            {/* Company */}
            <Stack direction={"column"} spacing={3}>
              <Typography fontSize={16} fontWeight={600}>
                Company
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                About us
              </Typography>
            </Stack>
            {/* Legal */}
            <Stack direction={"column"} spacing={3}>
              <Typography fontSize={16} fontWeight={600}>
                Legal
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                T & C
              </Typography>
              <Typography fontSize={16} fontWeight={300}>
                Policy
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            borderTop={"2px solid #E6E6E61A"}
            marginTop={"2rem"}
            paddingTop={"2rem"}
            alignItems={"center"}
          >
            <Typography fontSize={16} fontWeight={300}>
              @ copyright 2024 2024 www.locumnurse.com. All Right Reserved
            </Typography>
            <Stack spacing={3} direction={"row"}>
              <Avatar
                src="/images/landingPageImg/facebook.svg"
                sx={{ width: "32px", height: "32px" }}
              />
              <Avatar
                src="/images/landingPageImg/instagram.svg"
                sx={{ width: "32px", height: "32px" }}
              />
              <Avatar
                src="/images/landingPageImg/linkedin.svg"
                sx={{ width: "32px", height: "32px" }}
              />
              <Avatar
                src="/images/landingPageImg/twitter.svg"
                sx={{ width: "32px", height: "32px" }}
              />
              <Avatar
                src="/images/landingPageImg/youtube.svg"
                sx={{ width: "32px", height: "32px" }}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
