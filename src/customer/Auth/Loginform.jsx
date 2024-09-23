import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(loginUser({ userData: formData, navigate }));
      if (loginUser.fulfilled.match(resultAction)) {
        toast.success("Login successful!");
        navigate('/'); // Redirect to the homepage or dashboard
      } else {
        toast.error("Login failed: " + resultAction.payload.message);
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
      console.error("Failed to log in:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id='email'
              name='email'
              label='Email'
              fullWidth
              autoComplete='email'
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='password'
              name='password'
              label='Password'
              type='password'
              fullWidth
              autoComplete='current-password'
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type='submit'
              variant='contained'
              fullWidth
              sx={{ padding: '0.8rem 0', bgcolor: '#9155FD' }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex-justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>IF You Haven't an Account?</p>
          <Button
            onClick={() => navigate("/register")}
            className="ml-5"
            size="small"
          >
            Signup
          </Button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
