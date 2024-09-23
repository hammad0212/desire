import React, { useEffect } from 'react';
import Slider from '../../components/Homecarusel/Slider';
import Homesectioncarusel from '../../components/Homesectioncarusel/Homesectioncarusel';
import { useDispatch, useSelector } from 'react-redux';
import { findproducts } from '../../../redux/product/Action';

export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state); 

  useEffect(() => {
    const data = {
      Category: null,
      colors: [],
      sizes: [],
      minprice: null,
      maxprice: null,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 100, // Fetch more products if necessary
      stock: "",
    };
    dispatch(findproducts(data));
  }, [dispatch]);

  // Group products by category
  const groupedProducts = products.products.reduce((acc, product) => {
    const category = product.category.name; // Adjust according to your product structure
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <>
      <div>
        <Slider />
      </div>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        {Object.entries(groupedProducts).map(([categoryName, categoryProducts]) => (
          <Homesectioncarusel 
            key={categoryName} // Using category name as key
            data={categoryProducts} // Pass filtered products
            sectionName={categoryName} 
          />
        ))}
      </div>
    </>
  );
}
