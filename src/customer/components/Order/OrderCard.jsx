import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderCard() {
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg  hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item sx={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top "
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className=""> Men Slim Mid Rise Shirt</p>
              <p className="opacity-50 text-xs font-semibold">Size:M</p>
              <p className="opacity-50 text-xs font-semibold">Color:Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>1099</p>
        </Grid>
        <Grid item xs={4}>
          { true && <div>
            <p>
            <span>Deliverd on March 03</span>
            
          </p>
          <p className="text-xs">
           Your item has Been Delivered
          </p>
          </div>  }
          { false &&<p>
            <span>Expected Delivery on Mar-3</span>
          </p>}
        </Grid>
      </Grid>
    </div>
  );
}
