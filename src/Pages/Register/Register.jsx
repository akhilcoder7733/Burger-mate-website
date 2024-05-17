import React, { useState, useContext } from "react";
import { styled } from "@mui/system";
import { Box, TextField, Typography } from "@mui/material";
import { AuthContext } from "../../Firebase/AuthContext"; // Import AuthContext
import { useNavigate } from "react-router-dom";
import CustomButton from "../../Components/StyledButton/StyledButton";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FEE715",
}));

const RegisterForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  backgroundColor: "#FEE715",
  maxWidth: "400px",
  width: "100%",
  boxShadow: "0px 0px 21px 3px rgba(0,0,0,0.75)",
}));

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup } = useContext(AuthContext); // Use signup function from AuthContext
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await signup(email, password, name); // Call signup function from AuthContext
      console.log("User registered successfully:", response);
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      console.error("Registration failed:", error.message);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <MainBox>
      <RegisterForm onSubmit={handleSubmit}>
        <Typography variant="h3" sx={{ fontFamily: "Kanit, sans-serif" }}>
          Register
        </Typography>
        <Typography variant="subtitle2" sx={{ fontFamily: "Kanit, sans-serif" }}>
          Already have an account?
          <span style={{ fontWeight: 600, color: "#1b6ac4", cursor: "pointer" }} onClick={() => navigate("/login")}>
            Login
          </span>
        </Typography>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          fullWidth
          required
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <CustomButton variant="contained" type="submit">
          Register
        </CustomButton>
      </RegisterForm>
    </MainBox>
  );
}

export default Register;
