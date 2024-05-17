import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {styled} from '@mui/system'
import { useNavigate } from 'react-router-dom';

const MainBox =styled(Box)(({ theme }) =>({
    minHeight:100,
    backgroundColor: "#101820",
      display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center"
})) 

const LinksBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap:theme.spacing(1)
}));

const NavLink = styled(Typography)({
  color: "#FEE715",
  fontFamily: "Kanit, sans-serif",
cursor:"pointer",
padding:"2px 4px",
borderRadius:"5px",
"&:hover":{
  color:"#fff",
  backgroundColor:"rgba(41, 60, 82, 0.5)",
}
});

function Footer() {
  const navigate=useNavigate();
  return (
    <MainBox>
        <Box>
        <Typography variant="h6" sx={{fontFamily: "Kanit, sans-serif", color:"#FEE715"}}>
          Terminal Wizard
        </Typography>
        </Box>
         <LinksBox>
         <NavLink onClick={()=>navigate("/")}>
            Home
          </NavLink>
          <NavLink onClick={()=>navigate("/about")}>
            About Us
          </NavLink>
          <NavLink onClick={()=>navigate("/contact")}>
            Contact
          </NavLink>
         </LinksBox>
    </MainBox>
  )
}

export default Footer
