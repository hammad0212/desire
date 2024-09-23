import { AccountCircleOutlined, CurrencyRupee, TrendingUp } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesData = [
  {
    stats: '145k',
    title: "Sales",
    color: "primary.main", // Updated to use Material UI theme colors
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />
  },
  {
    stats: '1.12k',
    title: "Customers",
    color: "success.main", // Updated color
    icon: <AccountCircleIcon sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '1.5k', // Corrected typo (was 'states')
    title: "Products",
    color: "warning.main",
    icon: <SettingsCellIcon sx={{ fontSize: "1.75rem" }} />
  },
  {
    stats: '88k', // Corrected typo (was 'states')
    title: "Revenue",
    color: "info.main",
    icon: <CurrencyRupeeIcon sx={{ fontSize: "1.75rem" }} />
  },
];

const renderState = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box sx={{
        display: "flex",
        alignItems: "center",
      }}>
        <Avatar variant='rounded' sx={{
          mr: 3,
          width: 44,
          height: 44,
          boxShadow: 3,
          color: 'white',
          backgroundColor: item.color, // Applying the correct color
        }}>
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

export default function MonthelyOverview() {
  return (
    <Card>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size='small'>
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component="span" sx={{ fontWeight: 600, color: "text.primary" }}>
              Total 45.5% Growth
            </Box>
            This Month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: ".15px !important"
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderState()} {/* Call the function here */}
        </Grid>
      </CardContent>
    </Card>
  );
}
