
import { InboxIcon } from '@heroicons/react/24/outline'
import { CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import Dashboard from './Dashboard'
import CreateProductForm from './CreateProductForm'
import ProductTable from './ProductTable'
import OrderTable from './OrderTable'

import CustomerTable from './CustomerTable'

const menu=[
    {name:"Dashborad",path:"/admin",icon:<DashboardIcon/>},
    {name:"products",path:"/admin/product",icon:<Inventory2OutlinedIcon/>},
    //{name:"customers",path:"/admin/customers",icon:<DashboardIcon/>},
    {name:"order",path:"/admin/order",icon:<DashboardIcon/>},
    {name:"Addproduct",path:"/admin/product/create",icon:<Inventory2OutlinedIcon/>}
]

export default function Admin() {
    const theme=useTheme()
    const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"))
    const [sideBarVisible,setSideBarVisible]=useState(false)
    const navigate=useNavigate()
    const drawer=(
        <Box sx={{overflow:"auto",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}}>
{isLargeScreen && <Toolbar/>}
<List>
    {menu.map((item,index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
        <ListItemButton>
            <ListItemIcon>
       {item.icon}
            </ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
        </ListItemButton>
    </ListItem>)}
</List>
<List>
    <ListItem  disablePadding >
        <ListItemButton>
            <ListItemIcon>
            <PersonPinIcon/>
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
        </ListItemButton>
    </ListItem>
</List>

        </Box>
    )


  return (
    <div>
      <div className='flex h-[100vh] '>
        <CssBaseline/>
        <div className='w-[15%] h-full sticky top-0 '
    
    >
      {drawer }
    </div>
<div className='w[85%] '>
    <Routes>
        <Route path='/'element={<Dashboard/>}></Route>
        <Route path='/product/create' element={<CreateProductForm/>}></Route>
        
        <Route path='/product' element={<ProductTable/>}></Route>
        <Route path='/order' element={<OrderTable/>}></Route>
        {/* <Route path='/customer' element={<CustomerTable/>}></Route> */}
    </Routes>
</div>
      </div>
    </div>
  )
}
