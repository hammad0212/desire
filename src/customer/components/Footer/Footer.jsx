import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h-6">
            Company
          </Typography>
          <div>
            <button className="pb-5" varient="h-6" gutterBottom>
              {" "}
              About{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" varient="h-6" gutterBottom>
              {" "}
              Blog{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" varient="h-6" gutterBottom>
              {" "}
              Jobs{" "}
            </button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h-6">
            Solutions
          </Typography>
          <div>
            <button className="pb-5" varient="h-6" gutterBottom>
              {" "}
              Marketing{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" varient="h-6" gutterBottom>
              {" "}
              Analysis{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" varient="h-6" gutterBottom>
              {" "}
              Support{" "}
            </button>
          </div>
        </Grid>
              </Grid>
    </div>
  );
}
