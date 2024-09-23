import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { deleteProduct, findproducts } from '../../redux/product/Action';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductTable() {
  const dispatch=useDispatch()
  const { products } = useSelector((state) => state);
  console.log("products---------",products)
  const handledelete = async (ProductId) => {
    try {
      // Dispatch the deleteProduct action
      await dispatch(deleteProduct(ProductId));
      
      // Define the data to fetch products again after deletion
      const data = {
        Category: null,
        colors: [],
        sizes: [],
        minprice: null,
        maxprice: null,
        minDiscount: 0,
        sort: "price_low",
        pageNumber: 0,
        pageSize: 10,
        stock: "",
      };
      
      // Fetch products again to refresh the list
      dispatch(findproducts(data));
    } catch (error) {
      console.error("Error deleting product or fetching updated product list:", error);
    }
  };
  
  useEffect(() => {
    const data = {
      Category:null,
      colors: [], // Send only if colorvalue exists
      sizes: [], // Send only if sizevalue exists
      minprice: null, // Avoid sending 0 or undefined
      maxprice: null,
      minDiscount:  0, // Default to 0 if no discount
      sort:  "price_low", // Default to "price_low"
      pageNumber: 0, // Ensure page starts from 1
      pageSize: 10,
      stock: "",
    };
    dispatch(findproducts(data));
    console.log("Fetching products with data:", data);
  }, []);
  return (
    <div className='p-5  text-white'>
      <Card className='mt-2'>
        <CardHeader title="All Products">

        </CardHeader>
        <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='right'>Image</TableCell>
            <TableCell align='right'>Title</TableCell>
            <TableCell align="right">ProductId</TableCell>
            <TableCell align="right">Category&nbsp;(C)</TableCell>
            <TableCell align="right">Price&nbsp;(P)</TableCell>
            <TableCell align="right">Quantity&nbsp;(Q)</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { products.products.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left'>
                <Avatar src={item.imageurl}></Avatar>
              </TableCell>
              <TableCell align='right' scope="row">
                {item.title}
              </TableCell>
              <TableCell align="right">{item._id}</TableCell>
              <TableCell align="right">{item.category.name}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">
                <Button  onClick={()=>handledelete(item._id)} variant='outlined'>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Card>
     
    </div>
  )
}
