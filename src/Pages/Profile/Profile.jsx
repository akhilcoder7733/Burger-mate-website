import React, { useContext, useState, useEffect } from "react";
import { Box, Typography, Input, CircularProgress } from "@mui/material";
import { AuthContext } from "../../Firebase/AuthContext";
import { styled } from "@mui/system";
import CustomButton from "../../Components/StyledButton/StyledButton";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import UserImg from "../../assets/user/user.png";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  backgroundColor: "#FEE715",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const UserBox = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  display: "flex",
  gap: theme.spacing(10),
  justifyContent: "center",
  alignItems: "center",
}));

const ProfileBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const ProfilePictureBox = styled(Box)(({ theme }) => ({
  height: "150px",
  width: "150px",
  borderRadius: "50%",
  overflow: "hidden",
  backgroundColor: "#101820",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
}));

const ProfileImage = styled("img")(({ theme }) => ({
  height: "100%",
  width: "100%",
  objectFit: "cover",
}));

const UserDetailsBox = styled(Box)(({ theme }) => ({
  minHeight: "40vh",
}));

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setImageUrl(currentUser.photoURL);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setIsUploading(true);
    const storage = getStorage();
    const storageRef = ref(storage, `profile_pictures/${currentUser.uid}`);

    try {
      await uploadBytes(storageRef, selectedFile);
      const url = await getDownloadURL(storageRef);
      setImageUrl(url); // Update the image URL

      // Update the user's profile picture URL in Firebase Authentication
      await updateProfile(currentUser, { photoURL: url });
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Image upload failed!");
    } finally {
      setIsUploading(false);
    }
  };

  const removeProfilePicture = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, `profile_pictures/${currentUser.uid}`);
    
    try {
      // Delete the profile picture from Firebase Storage
      await deleteObject(storageRef);
      
      // Update the user's profile with a null photoURL
      await updateProfile(currentUser, { photoURL: null });
      
      // Clear the image URL in the component state
      setImageUrl(null);
    } catch (error) {
      console.error("Failed to remove profile picture:", error);
      alert("Failed to remove profile picture. Please try again.");
    }
  };

  return (
    <MainBox>
      <Typography variant="h3" sx={{ fontFamily: "Kanit, sans-serif" }}>
        Profile
      </Typography>
      {currentUser ? (
        <>
          <UserBox>
            <ProfileBox>
              {imageUrl ? (
               <Box sx={{padding:"5px", backgroundColor:"#101820", borderRadius:"50%"}}>
                 <ProfilePictureBox>
                  <ProfileImage src={imageUrl} alt="Profile Picture" />
                </ProfilePictureBox>
               </Box>
              ) : (
                <ProfilePictureBox>
                  <ProfileImage src={UserImg} alt="Profile Picture" />{" "}
                </ProfilePictureBox>
              )}
              <Input
                type="file"
                onChange={handleChange}
                sx={{ display: "none" }}
                id="contained-button-file" // Add id for label association
              />
              <CustomButton
                variant="contained"
                component="label"
                htmlFor="contained-button-file"
              >
                Edit Profile Picture
              </CustomButton>
              {isUploading && (
                <CircularProgress sx={{ mt: 2 }} /> // Display loading indicator during upload
              )}
              <CustomButton variant="contained" onClick={handleUpload}>
                Save Profile Picture
              </CustomButton>
              {imageUrl && (
                <CustomButton variant="contained" onClick={removeProfilePicture} sx={{backgroundColor:"red"}}>
                  Remove Profile Picture
                </CustomButton>
              )}
            </ProfileBox>
            <UserDetailsBox>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "Kanit, sans-serif", marginTop: "20px" }}
              >
                Name:{" "}
                {currentUser.displayName || currentUser.email.split("@")[0]}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "Kanit, sans-serif" }}
              >
                Email: {currentUser.email}
              </Typography>
            </UserDetailsBox>
          </UserBox>
        </>
      ) : (
        <Typography
          variant="body1"
          sx={{ fontFamily: "Kanit, sans-serif", marginTop: "20px" }}
        >
          You are not logged in. Please login to view your profile.
        </Typography>
      )}
    </MainBox>
  );
};

export default Profile;
