import React from "react";
import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../redux/cart/CartSlice";

export default function Item({ item }) {
  const dispatch = useDispatch();

  const product = item.product || {};
  const {
    title = 'Unknown Title',
    brand = 'Unknown Brand',
    imageurl = '',
    price = 0,
    discountedprice = price,
    discountpercent = 0
  } = product;
  const { quantity = 1, size = 'Unknown Size' } = item;

  // Handle actions
//   const handleRemove = () => {
//     dispatch(removeCartItem(item._id));
//   };

//   const handleIncrement = () => {
//     console.log('Incrementing item:', item);
//     dispatch(updateCartItem({
//       cartItemId: item._id,
//       data: { quantity: quantity + 1 }
//     }));
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       dispatch(updateCartItem({
//         cartItemId: item._id,
//         data: { quantity: quantity - 1 }
//       }));
//     }
//   };

  return (
    <div className="p-5 shadow-lg border rounded-md grid-cols-12 mb-3">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={imageurl}
            alt={title}
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{title}</p>
          <p className="opacity-70">Size: {size}</p>
          <p className="opacity-70 mt-2">Seller: {brand}</p>
          <div>
            <div className="flex space-x-5 items-center text-gray-900 pt-6">
              <p className="font-semibold">₹{discountedprice}</p>
              {discountedprice < price && (
                <>
                  <p className="opacity-50 line-through">₹{price}</p>
                  <p className="text-green-600 font-semibold">{discountpercent}% off</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton color="error" onClick={handleDecrement} disabled={quantity <= 1}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{quantity}</span>
          <IconButton sx={{ color: "RGB(145,85,253)" }} onClick={handleIncrement}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145,85,253)" }} onClick={handleRemove}>
            Remove
          </Button>
        </div>
      </div> */}
    </div>
  );
}
