import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../redux/cart/CartSlice";
import {updateCartItem} from "../../../redux/cart/CartSlice"

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, totalprice, totalDiscountprice } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
    
  }, [dispatch]);

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  // Calculate total price and discounted price
  const calculateTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotalDiscountedPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.discountedprice * item.quantity, 0);
  };

  const calculatedTotalPrice = calculateTotalPrice();
  const calculatedTotalDiscountedPrice = calculateTotalDiscountedPrice();

  return (
    <div>
      <div className="lg:grid grid-cols-2 lg:px-16 relative py-3">
        <div className="grid-col-span-2">
          {/* Display cart items */}
          {cartItems?.length > 0 ? (
            cartItems.map((item) => <CartItem key={item._id} item={item} />)
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Price Details */}
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border p-5">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{calculatedTotalPrice}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">-₹{calculatedTotalPrice - calculatedTotalDiscountedPrice}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹{calculatedTotalDiscountedPrice}</span>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
