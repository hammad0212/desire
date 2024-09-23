import React from "react";
import AdreesCard from "../Adreescard/AdreesCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Orderdetails() {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="fontbold text-xl py-7">Delivry Address</h1>

        <AdreesCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="spcae-y-5">
        {[1,1,1,1].map((item)=><Grid
          item
          container
          className="shadow-xl rounded.md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item sx={6}>
            <div className="flex item-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
                alt=""
              />
              <div className="space-y-2 ml-5 ">
                <p className="font-semibold"> Men Slim Mid Rise Shirt</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  {" "}
                  <span>Color:Pink </span>
                  <span>Size:M</span>
                </p>
                <p>Seller:pttt</p>
                <p>1099</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{color:deepPurple[500]}}>
              <StarBorderIcon sx={{fontSize:'2rem'}} className="px-2 text-5xl"></StarBorderIcon>
<span> Rate & Review Product</span>
            </Box>

          </Grid>
        </Grid>)}
        
      </Grid>
    </div>
  );
}
//1383176985175
