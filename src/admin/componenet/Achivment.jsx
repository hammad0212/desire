import { Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const TringleImg = styled("img")({
  right: 0,
  bottom: 0,
  hight: 0,
  position: "absolute",
});
const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  position: "absolute",
});
export default function Achivment() {
  return (
    <Card  className=''sx={{ position: "relative" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Shop With Desire
        </Typography>
        <Typography variant="body2">COngratulation😊</Typography>
        <Typography variant="h5">320.5K</Typography>
         <TringleImg src=""></TringleImg>
         <TrophyImg src="https://t4.ftcdn.net/jpg/02/95/58/83/360_F_295588366_okoiymNZE45lh3u7BEx8L9HiaIkwuWYZ.jpg"/>
       
      </CardContent>
    </Card>
  );
}
