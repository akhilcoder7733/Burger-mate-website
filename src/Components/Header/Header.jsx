import { Box, Modal, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import CustomButton from "../StyledButton/StyledButton";
import { AuthContext } from "../../Firebase/AuthContext";
import { ClipLoader } from "react-spinners";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: 50,
  backgroundColor: "#101820",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  fontFamily: "Kanit, sans-serif",
}));

const LeftBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));
const RightBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
const LinksBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const NavLink = styled(Typography)({
  color: "#FEE715",
  fontFamily: "Kanit, sans-serif",
  cursor: "pointer",
  padding: "2px 4px",
  borderRadius: "5px",
  "&:hover": {
    color: "#fff",
    backgroundColor: "rgba(41, 60, 82, 0.5)",
  },
});

const navLinks = [
  {
    display: "Blog",
    path: "/blog",
  },
  {
    display: "Contact Us",
    path: "/contact",
  },
  {
    display: "About Us",
    path: "/about",
  },
];
function Header() {
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(AuthContext); // Access context

  const [open, setOpen] = useState(false); // State for popup visibility
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLogout = async () => {
    setLoading(true); // Set loading to true when logout starts
    handleClose(); // Close the popup

    // Simulate a loading time of 2 seconds before logging out
    setTimeout(async () => {
      await logout();
      setLoading(false); // Set loading to false when logout completes
      navigate('/')
    }, 2000);
  };

  return (
    <MainBox>
      <LeftBox>
        <LogoBox>
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ color: "#19a7ff", fontFamily: "Kanit, sans-serif" }}
          >
            Logo
          </Typography>
        </LogoBox>
        <LinksBox>
          {currentUser ? (
            <NavLink onClick={() => navigate("/start")}>Home</NavLink>
          ) : (
            <NavLink onClick={() => navigate("/")}>Home</NavLink>
          )}
          {navLinks.map((data, index) => (
            <NavLink onClick={() => navigate(data.path)}>
              {data.display}
            </NavLink>
          ))}
        </LinksBox>
      </LeftBox>
      <RightBox>
  {currentUser ? (
    <LinksBox>
      {!loading && <NavLink onClick={() => navigate("/profile")}>Profile</NavLink>}
      
      {/* Render the Logout button only when not loading */}
      {!loading && <CustomButton onClick={handleOpen}>Logout</CustomButton>}
    </LinksBox>
  ) : (
    <LinksBox>
      <NavLink onClick={() => navigate("/login")}>Login</NavLink>
      {/* Render the Register button only when not loading */}
      {!loading && (
        <CustomButton onClick={() => navigate("/register")}>
          Register
        </CustomButton>
      )}
    </LinksBox>
  )}
</RightBox>
      {/* Display loading spinner outside of the modal */}
      {loading && (
        <ClipLoader color="#FEE715" loading={loading} size={30} />
      )}
  
      {/* Modal component */}
      {currentUser && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          data-aos="fade-down"
        >
          <Stack
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              minWidth: "300px",
              minHeight: "150px",
              backgroundColor: "#FEE715",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            {/* Content of the modal */}
            <Typography
              variant="h6"
              id="modal-title"
              sx={{ fontFamily: "Kanit, sans-serif" }}
            >
              Are you sure you want to logout?
            </Typography>
            <Stack direction="row" spacing={2}>
              {/* Buttons for Yes and No */}
              <CustomButton
                variant="contained"
                color="error"
                onClick={handleClose}
              >
                No
              </CustomButton>
              <CustomButton variant="contained" onClick={handleLogout}>
                Yes
              </CustomButton>
            </Stack>
          </Stack>
        </Modal>
      )}
    </MainBox>
  );
  
};  
export default Header;