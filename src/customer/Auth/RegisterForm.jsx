import React, { useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, signupUser } from "../../redux/authSlice";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); // Select only the auth part
  const jwt = localStorage.getItem("jwt");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
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
    console.log("Form Data:", formData);

    try {
      const resultAction = await dispatch(signupUser({ userData: formData, navigate }));
      if (signupUser.fulfilled.match(resultAction)) {
        toast.success("Registration successful!");
        navigate('/'); 
      } else {
        toast.error("Registration failed: " + resultAction.payload.message);
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
      console.error("Dispatch error:", error);
    }
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUserProfile());
    }
  }, [jwt, auth.jwt, dispatch]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ padding: "0.8rem 0", bgcolor: "#9155FD" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex-justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>IF You Already Have an Account?</p>
          <Button
            onClick={() => navigate("/login")}
            className="ml-5"
            size="small"
          >
            Login
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
