import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)({
  padding: '5px 10px',
  backgroundColor: '#101820',
  color: "#FEE715",
  border: '1px solid #FEE715',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight:600,
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: '#FEE715',
    color: '#101820',
  },
});

export default CustomButton;
