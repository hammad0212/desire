import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

export default function ProdcutReviewCard() {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            ></Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <p className="font-bold text-lg">hammad</p>
            <p className="opacity-70">Aug-2024</p>
          </div>
          <Rating value={4.5} name="half-Rating"readOnly precision={0.5} />
          <p >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
