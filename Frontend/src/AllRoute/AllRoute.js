import Login from 'components/Authetication/Login'
import Register from 'components/Authetication/Register'
import Home from 'components/Home'

import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/React-Notes-App" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
          </Routes> 
    </div>
  )
}

export default AllRoute
