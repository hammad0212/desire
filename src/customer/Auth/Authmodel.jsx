import { Box, Modal } from '@mui/material';
import React from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './Loginform';
import { useLocation } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  p: 4,
};

export default function Authmodel({ handleClose, open }) {
  // const location=useLocation()
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {location.pathname==="/login"? <LoginForm/>:<RegisterForm/>}
        
         {/* {open && <RegisterForm/>}
         {openLogin && <LoginForm/>} */}
      </Box>
    </Modal>
  );
}
