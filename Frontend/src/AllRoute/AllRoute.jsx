

import { Route, Routes } from 'react-router-dom'
import Login from '../components/Authetication/Login'
import Register from '../components/Authetication/Register'
import Home from '../components/Home'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
          </Routes> 
    </div>
  )
}

export default AllRoute
