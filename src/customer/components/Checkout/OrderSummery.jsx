import React, { useEffect } from 'react';
import AdreesCard from '../Adreescard/AdreesCard';
import CartItem from '../Cart/CartItem';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../redux/Orders/OrdersSlice';
import { useLocation } from 'react-router-dom';
import Item from './Item';

export default function OrderSummery() {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchparams = new URLSearchParams(location.search);
  const orderId = searchparams.get('order_id');

  // Fetch order details from Redux store
  const order = useSelector((state) => state.order.order);
  console.log("order form page ",order)

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [dispatch, orderId]);

  // Handle case where order is null
  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AdreesCard address={order.order.shippingAddress} />
      </div>

      <div>
        <div className='lg:grid grid-cols-2 relative py-3'>
          <div className='grid-col-span-2'>
            {/* Render order items */}
            {order.order.orderItems && order.order.orderItems.map((item) => (
              <Item key={item.product._id} item={item} />
            ))}
          </div>

          <div className='px-5 sticky top-0-h-[100vh] mt-5 lg:mt-0'>
            <div className='border p-5'>
              <p className='uppercase font bold opacity-60 pb-4'>
                Price Details
              </p>
              <hr />
              <div className='space-y-3 font-semibold mb-10'>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Price</span>
                  <span>{order.order.totalprice}</span>
                </div>
                <div className='flex justify-between pt-3'>
                  <span>Discount</span>
                  <span className='text-green-600'>
                    {order.order.discount}
                  </span>
                </div>
                <div className='flex justify-between pt-3'>
                  <span>Delivery Charges</span>
                  <span className='text-green-600'>Free</span>
                </div>
                <div className='flex justify-between pt-3 font-bold'>
                  <span>Total Amount</span>
                  <span className='text-green-600'>
                    {order.order.totalDiscountedprice}
                  </span>
                </div>
              </div>
              <Button
                variant='contained'
                className='w-full mt-5'
                sx={{ px: '2.5rem', py: '0.7rem', bgcolor: '#9155fd' }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
