import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import MUIButton from "../../common/buttons/button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Chooseoneofthese = () => {
  return (
    <>
      <Container
        maxWidth={"xl"}
        sx={{ position: "relative", marginTop: "12rem", marginBottom: "6rem" }}
      >
        <Avatar
          src="/images/landingPageImg/circle_Ring.svg"
          sx={{
            width: "65%",
            height: "unset",
            position: "absolute",
            left: 0,
            right: 0,
            margin: "auto",
          }}
        />
        <Grid container>
          <Grid item xs={6}>
            <Stack direction={"column"} spacing={3} marginTop={"5rem"}>
              <Avatar
                src="/images/landingPageImg/fornurse.svg"
                variant="square"
                sx={{ width: "70%", height: "unset" }}
              />
            </Stack>
            <Stack marginLeft={"2rem"} spacing={2} marginTop={"2rem"}>
              <Typography fontSize={25} fontWeight={700}>
                For Nurses
              </Typography>
              <Typography fontSize={20} fontWeight={200}>
                We use only the best quality materials on the
                <br />
                market in order to provide the best products to
                <br />
                our patients.
              </Typography>
              <Box>
                <MUIButton
                  color={"primary"}
                  variant="contained"
                  borderRadius="999px"
                  fontWeight="600"
                  fontSize="16px"
                >
                  Get started <ArrowRightAltIcon sx={{ marginLeft: "10px" }} />
                </MUIButton>
              </Box>
            </Stack>
          </Grid>
          {/* Grid  */}
          <Grid item xs={6} className="flex-col" paddingLeft={"5rem"}>
            <Typography fontSize={40} fontWeight={700}>
              Choose one of these
            </Typography>
            <Typography fontSize={20} fontWeight={400}>
              We use only the best quality materials on the market in order to
              provide the best products to our patients
            </Typography>
            <Stack direction={"column"} spacing={2} marginTop={"5rem"}>
              <Avatar
                src="/images/landingPageImg/fororganization.svg"
                variant="square"
                sx={{ width: "70%", height: "unset" }}
              />
            </Stack>
            <Stack marginLeft={"2rem"} spacing={2} marginTop={"2rem"}>
              <Typography fontSize={25} fontWeight={700}>
                For Organisation
              </Typography>
              <Typography fontSize={20} fontWeight={200}>
                We use only the best quality materials on the
                <br />
                market in order to provide the best products to
                <br />
                our patients.
              </Typography>
              <Box>
                <MUIButton
                  color={"secondary"}
                  variant="contained"
                  borderRadius="999px"
                  fontWeight="600"
                  fontSize="16px"
                >
                  Get started <ArrowRightAltIcon sx={{ marginLeft: "10px" }} />
                </MUIButton>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Chooseoneofthese;
