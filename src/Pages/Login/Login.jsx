import React, { useState, useContext } from "react";
import { styled } from "@mui/system";
import { Box, TextField, Typography, CircularProgress } from "@mui/material"; // Import CircularProgress
import CustomButton from "../../Components/StyledButton/StyledButton"; // Assuming CustomButton is a styled button component
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthContext"; // Import AuthContext

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FEE715",
}));

const LoginForm = styled("form")(({ theme }) => ({
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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const { login } = useContext(AuthContext); // Use login function from AuthContext
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    try {
      const response = await login(email, password);
      console.log("User logged in successfully:", response);
      navigate("/start"); // Redirect to home page or desired location after login
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false); // Set loading state to false after login attempt (success or failure)
    }
  };

  return (
    <MainBox>
      <LoginForm onSubmit={handleSubmit}>
        <Typography variant="h3" sx={{ fontFamily: "Kanit, sans-serif" }}>
          Login
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontFamily: "Kanit, sans-serif" }}
        >
          Don't have an account?{" "}
          <span
            style={{ fontWeight: 600, color: "#1b6ac4", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </Typography>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Use e.target.value to get the input value
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Use e.target.value to get the input value
        />

        {isLoading ? (
          <CircularProgress sx={{alignSelf:"center",color:"#111"}}/> // Display spinner while loading
        ) : (
          <CustomButton type="submit" variant="contained">
            Login
          </CustomButton>
        )}
        <Typography variant="body1" onClick={()=>navigate('/forgot-password')} sx={{cursor:"pointer"}}>Forgot password?</Typography>
      </LoginForm>
    </MainBox>
  );
}

export default Login;
