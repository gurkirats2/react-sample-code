import { Avatar, Box, Container, Stack, Typography } from "@mui/material";

const Features = () => {
  return (
    <>
      <Box bgcolor={"#F2F6FB"}>
        <Container
          maxWidth={"xl"}
          sx={{ paddingTop: "4rem", paddingBottom: "2rem" }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            textAlign={"center"}
          >
            <Typography fontSize={{ lg: "34px", xs: "40px" }} fontWeight={700}>
              Features
            </Typography>
            <Typography
              fontSize={{ lg: "18px", xs: "20px" }}
              fontWeight={300}
              marginTop={"10px"}
            >
              We use only the best quality materials on the market in order
              <br /> to provide the best products to our patients,
            </Typography>
          </Box>
          <Box display={"flex"} marginTop={"5rem"}>
            <Box position={"relative"}>
              <Avatar
                src="/images/landingPageImg/feature1.svg"
                sx={{ width: "100%", height: "unset" }}
                variant="square"
              ></Avatar>
              <Stack
                bgcolor={"#fff"}
                spacing={1}
                padding={"2rem"}
                position={"absolute"}
                width={{ lg: "90%", xs: "70%" }}
                bottom={"-102px"}
              >
                <Typography
                  fontSize={{ lg: "22px", xs: "26px" }}
                  fontWeight={700}
                >
                  Feature 01
                </Typography>
                <Typography
                  fontSize={{ lg: "16px", xs: "18px" }}
                  fontWeight={500}
                >
                  We use only the best quality materials on the market in order
                  to provide the best products to our patients. We use only the
                  best quality materials on the market
                </Typography>
                <Typography
                  color={"secondary"}
                  fontSize={{ lg: "18px", xs: "20px" }}
                  fontWeight={600}
                >
                  View More
                </Typography>
              </Stack>
            </Box>
            {/* feature 2 */}
            <Box position={"relative"} marginLeft={"2rem"}>
              <Avatar
                src="/images/landingPageImg/feature2.svg"
                sx={{ width: "100%", height: "unset" }}
                variant="square"
              ></Avatar>
              <Stack
                bgcolor={"#fff"}
                spacing={1}
                padding={"2rem"}
                position={"absolute"}
                width={{ lg: "90%", xs: "70%" }}
                bottom={"-102px"}
              >
                <Typography
                  fontSize={{ lg: "22px", xs: "26px" }}
                  fontWeight={700}
                >
                  Feature 02
                </Typography>
                <Typography
                  fontSize={{ lg: "16px", xs: "18px" }}
                  fontWeight={500}
                >
                  We use only the best quality materials on the market in order
                  to provide the best products to our patients. We use only the
                  best quality materials on the market
                </Typography>
                <Typography
                  color={"secondary"}
                  fontSize={{ lg: "18px", xs: "20px" }}
                  fontWeight={600}
                >
                  View More
                </Typography>
              </Stack>
            </Box>
            {/* feature 3 */}
            <Box position={"relative"} marginLeft={"2rem"}>
              <Avatar
                src="/images/landingPageImg/feature2.svg"
                sx={{ width: "100%", height: "unset" }}
                variant="square"
              ></Avatar>
              <Stack
                bgcolor={"#fff"}
                spacing={1}
                padding={"2rem"}
                position={"absolute"}
                width={{ lg: "90%", xs: "70%" }}
                bottom={"-102px"}
              >
                <Typography
                  fontSize={{ lg: "22px", xs: "26px" }}
                  fontWeight={700}
                >
                  Feature 03
                </Typography>
                <Typography
                  fontSize={{ lg: "16px", xs: "18px" }}
                  fontWeight={500}
                >
                  We use only the best quality materials on the market in order
                  to provide the best products to our patients. We use only the
                  best quality materials on the market
                </Typography>
                <Typography
                  color={"secondary"}
                  fontSize={{ lg: "18px", xs: "20px" }}
                  fontWeight={600}
                >
                  View More
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box paddingTop={"10rem"}></Box>
        </Container>
      </Box>
    </>
  );
};

export default Features;
