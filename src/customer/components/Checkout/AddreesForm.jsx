import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import AdreesCard from '../Adreescard/AdreesCard';
import axios from 'axios'; // Import axios
import { useNavigate, useRouteLoaderData } from 'react-router-dom';
import api from '../../../apiconfig/axiosconfig';

export default function AddreesForm() {
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const address = {
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      // address: data.get('Address'),
      city: data.get('city'),
      state: data.get('state'),
      zipcode: data.get('zipcode'),
      phonenumber: data.get('phonenumber'),
    };
    console.log("address", address);

    try {
      // Make the POST request to create the order
      const response = await api.post('https://node-api-one-gold.vercel.app/api/orders/', address);
      const { data: responseData } = response;

      console.log('data from the response', responseData);

      if (responseData && responseData.createdOrder && responseData.createdOrder._id) {
        console.log('Order ID:', responseData.createdOrder._id);
        console.log('Navigating to:', `checkout?step=3&order_id=${responseData.createdOrder._id}`);

        // Navigate to the new URL
        navigate(`/checkout?step=3&order_id=${responseData.createdOrder._id}`);
        window.location.reload()
        console.log('Order created successfully', responseData.createdOrder._id);
      }
    } catch (error) {
      console.error('Create Order Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      {/* You can manage loading and error states within this component if needed */}
      <Grid container spacing={4}>
       
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
            <form onSubmit={handlesubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <TextField
                    required
                    id="address"
                    name="streetAddress"
                    label="Address"
                    fullWidth
                    autoComplete="shipping street-address"
                    multiline
                    rows={4}
                  /> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="FUll Adrees"
                    fullWidth
                    multiline
                    rows={4}
                    autoComplete="address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Region"
                    fullWidth
                    autoComplete="address-level1"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zipcode"
                    name="zipcode"
                    label="Zip Code"
                    fullWidth
                    autoComplete="postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="mobile"
                    name="phonenumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{ py: 1.5, mt: 2, bgcolor: 'RGB(145,85,253)' }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
