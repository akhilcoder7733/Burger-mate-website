import React, { useState } from "react";
import { Box, Typography, TextField, Snackbar, Alert } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from "../../Components/StyledButton/StyledButton";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/Config";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  backgroundColor: "#FEE715",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(3),
}));

const ContactBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(3),
}));

const DetailsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      setShowErrorSnackbar(true);
      return;
    }
  
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      console.log("Document written with ID: ", docRef.id);
      setShowSuccessSnackbar(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      setShowErrorSnackbar(true);
    }
  };
  

  const handleSuccessSnackbarClose = () => {
    setShowSuccessSnackbar(false);
  };

  const handleErrorSnackbarClose = () => {
    setShowErrorSnackbar(false);
  };

  return (
    <MainBox>
      <DetailsBox>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, fontFamily: "Kanit, sans-serif" }}
          gutterBottom
        >
          Get in touch!
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: "Kanit, sans-serif" }}>
          Feel free to reach out to us with any questions, feedback, or
          inquiries. We are here to assist you and will get back to you as soon
          as possible.
        </Typography>
      </DetailsBox>
      <ContactBox>
        <Typography variant="body1" sx={{ fontFamily: "Kanit, sans-serif" }}>
          Tell us your feedback, Share your thoughts!
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          sx={{ width: 300 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          sx={{ width: 300 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          sx={{ width: 300 }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <CustomButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </CustomButton>
      </ContactBox>
      <Snackbar
        open={showSuccessSnackbar}
        autoHideDuration={3000}
        onClose={handleSuccessSnackbarClose}
      >
        <Alert severity="success" variant="filled">
          Message sent successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={showErrorSnackbar}
        autoHideDuration={3000}
        onClose={handleErrorSnackbarClose}
      >
        <Alert severity="error" variant="filled">
          Failed to send message. Please try again.
        </Alert>
      </Snackbar>
    </MainBox>
  );
}

export default Contact;
