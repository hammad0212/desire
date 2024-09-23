import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../admin/componenet/Admin'

export default function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/*'element={<Admin/>}></Route>
      </Routes>
    </div>
  )
}
