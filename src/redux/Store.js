// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cartReducer from './cart/CartSlice';
//import productReducer from './product/productauthSlice';
import orderReducer from './Orders/OrdersSlice'; 
import { customerproductReducer } from './product/Reducer';
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: customerproductReducer, 
    order: orderReducer,
  },
});

export default store;
