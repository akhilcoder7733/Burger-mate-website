import React from 'react'
import { styled } from "@mui/system";
import { Box, Typography } from '@mui/material';

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  backgroundColor: "#FEE715",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const MainTypo = styled(Typography)(({ theme }) => ({
  fontFamily: "Kanit, sans-serif",
  fontWeight:500,
WebkitTextFillColor:"transparent",
WebkitTextStrokeColor:"#111",
WebkitTextStrokeWidth:"2px",

}));
function Hero() {
  return (
    <MainBox>
      <MainTypo variant='h1'>Eda Monee..!</MainTypo>
      <MainTypo variant='h3'>Happy Alle</MainTypo>
    </MainBox>
  )
}

export default Hero
