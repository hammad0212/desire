import { Grid } from '@mui/material';
import React from 'react';
import Achievement from './Achivment';
import MonthelyOverview from './MonthelyOverview';
import ProductTable from './ProductTable';


export default function Dashboard() {
  return (
    <div className='p-10'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Achievement />
        </Grid>
        <Grid item xs={12} md={8}>
<MonthelyOverview/>
        </Grid>
        <Grid item xs={12} md={6}>
        {/* <ProductTable/> */}

        </Grid>
      </Grid>
    </div>
  );
}
