import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import MainImg from "../../assets/img (2).png";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  backgroundColor: "#FEE715",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));

const LeftBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  maxWidth: "45%",
  minHeight: "80vh",
}));

function Home() {
  return (
    <MainBox>
      <LeftBox>
        <Typography
          variant="h1"
          data-aos="zoom-in"
          data-aos-delay="100"
          sx={{ fontFamily: "Kanit, sans-serif" }}
        >
          Burger Zone..!
        </Typography>
        <Typography
          variant="subtitle2"
          data-aos="zoom-in"
          data-aos-delay="200"
          sx={{ fontFamily: "Kanit, sans-serif" }}
        >
          The hamburger is one of the most popular foods in the world, and there
          are many variations on the basic theme. There are regional variations,
          such as the New York-style burger, which is typically made with a thin
          patty and grilled onions, and the California burger, which often
          includes avocado. There are also vegetarian and vegan burgers, which
          are made with plant-based patties.
        </Typography>
      </LeftBox>
      <Box>
        <img src={MainImg} alt="main" style={{ width: "400px" }} />
      </Box>
    </MainBox>
  );
}

export default Home;
