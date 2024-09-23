import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../customer/pages/Homepages/Home';
import Cart from '../customer/components/Cart/Cart';
import Navbar from '../customer/components/navigation/Navbar';
import Footer from '../customer/components/Footer/Footer';
import Product from '../customer/components/product/Product';
import Prodcutdetails from '../customer/components/productdetails/Productdetails';
import Checkout from '../customer/components/Checkout/Checkout';
import Order from '../customer/components/Order/Order';
import Orderdetails from '../customer/components/Order/Orderdetails';

export default function CustomerRouts() {
  return (
    <div>
      <Navbar />
      <Routes>
      {/* <Route path='/login' element={<Home />} />
      <Route path='/register' element={<Home />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/:LavelOne/:LavelTwo/:LavelThree' element={<Product />} />
        <Route path='/product/:productId' element={<Prodcutdetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/account/order' element={<Order />} />
        <Route path='/account/order/:orderid' element={<Orderdetails />} />
        
      </Routes>
      <Footer />
    </div>
  );
}
