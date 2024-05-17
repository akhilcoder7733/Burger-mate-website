import React from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "../StyledButton/StyledButton";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate =useNavigate();
  const MainBox = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    backgroundColor: "#FEE715",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }));

  return (
    <MainBox>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontFamily: "Kanit, sans-serif",
          fontSize: "48px",
          fontWeight: "500",
          marginBottom: "1rem",
        }}
        data-aos="zoom-in"
      >
        Whoops! Page Not Found
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          fontFamily: "Kanit, sans-serif",
          fontSize: "18px",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        The page you're looking for seems to be lost in the digital wilderness.
      </Typography>
      <CustomButton onClick={()=>navigate('/start')} data-aos="fade-up">Take me back home</CustomButton>
    </MainBox>
  );
};

export default NotFound;
