import { Box, TextField, Typography, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Alert } from "@mui/material"; // Import Alert component for Snackbar content
import { styled } from "@mui/system";
import CustomButton from '../../Components/StyledButton/StyledButton'

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FEE715",
}));

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar visibility
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // State for Snackbar severity (success or error)
  const [snackbarMessage, setSnackbarMessage] = useState(""); // State for Snackbar message

  const handleForgotPassword = async () => {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      setOpenSnackbar(true);
      setSnackbarSeverity("success");
      setSnackbarMessage("Password reset email sent! Please check your inbox.");
    } catch (error) {
      setOpenSnackbar(true);
      setSnackbarSeverity("error");
      setSnackbarMessage("Failed to send password reset email.");
      console.error("Error sending password reset email:", error.message);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <MainBox>
      <Box sx={{ width: "400px", display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h5" sx={{ fontFamily: "Kanit, sans-serif" }}>
          Forgot Password
        </Typography>
        <TextField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomButton variant="contained" onClick={handleForgotPassword}>
          Reset Password
        </CustomButton>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000} // Auto-hide after 6 seconds
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity={snackbarSeverity} sx={{ width: "100%" }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </MainBox>
  );
}

export default ForgotPassword;
