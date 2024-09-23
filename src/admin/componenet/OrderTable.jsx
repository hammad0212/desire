import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, deleteOrder, deliverOrder, getAllOrders, shipOrder } from '../../redux/Orders/OrdersSlice'
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export default function OrderTable() {
  
  
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event,index) => {
    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=event.currentTarget
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=null
    setAnchorEl(newAnchorElArray);
    
  };
  const dispatch = useDispatch()
  const { orders } = useSelector((state) => state.order) // Adjusted to use 'orders'
// console.log(" from page ",orders._id)
console.log(orders)
  const finalOrders = orders.orders

  
  
  const handlshipOrder=async (orderId)=>{
    await dispatch(shipOrder(orderId))
    dispatch(getAllOrders())
    handleClose()
  }
  
  const handlconfirmed=async(orderId)=>{
   await dispatch(confirmOrder(orderId))
    console.log("confirem order",orderId)
    dispatch(getAllOrders())
    handleClose()
  }
  
  const handldeliverd=async (orderId)=>{
    await dispatch(deliverOrder(orderId))
    console.log("deliverd order",orderId)
    dispatch(getAllOrders())
    handleClose()
  }
  
  const handldelete=async(orderId)=>{
    await dispatch(deleteOrder(orderId))
    dispatch(getAllOrders())
  }
  useEffect(() => {
    dispatch(getAllOrders())
  }, [])

  return (
    <div>
      <Card className='mt-2'>
        <CardHeader title="All Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='right'>Image</TableCell>
                <TableCell align='right'>Title</TableCell>
                <TableCell align="right">OrderId</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Update</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {finalOrders?.map((order,index) => (
                <TableRow
                  key={order._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='left'>
                    <AvatarGroup>
                      {order.orderItems.map((orderItem) => (
                        <Avatar key={orderItem._id} src={orderItem.product.imageurl} />
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align='right'>
                    {order.orderItems.map((orderItem) => (
                      <p key={orderItem._id}>{orderItem.product.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="right">{order._id}</TableCell>
                  
                  <TableCell align="right">{order.totalprice}</TableCell>
                  <TableCell align="right">{order.totalItem}</TableCell>
                  <TableCell align="right">{order.orderStatus}</TableCell>
                  <TableCell align="right">
                  <Button
        id="basic-button"
        
        aria-haspopup="true"
       
        onClick={(event)=>handleClick(event,index)}
        aria-controls={`basic-menu-${order._id}`
      }
      aria-expanded={Boolean(anchorEl[index])}
      >
        Status
      </Button>
      <Menu
        id={`basic-menu-${order._id}`}
        anchorEl={anchorEl[index]}
        open={Boolean(anchorEl[index])}
        onClose={()=>handleClose(index)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>handlconfirmed(order._id)}>Confiremd Order</MenuItem>
        <MenuItem onClick={()=>handlshipOrder(order._id)}>Shipped Order</MenuItem>
        <MenuItem onClick={()=>handldeliverd(order._id)}>Deliverd Order</MenuItem>
      </Menu>
                  </TableCell>
                  <TableCell align="right">
                    <Button onClick={()=>handldelete(order._id)} variant='outlined'
                   
                     >Delete</Button>
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
