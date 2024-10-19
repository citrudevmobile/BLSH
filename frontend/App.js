import React from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import Home from './components/home.js'
import Login from './components/login.js'
import Signup from './components/signup.js'

function App () {
  return (
    <Routes>

      <Route
        path='/'
        element={<Home />}
      />

      <Route
        path='/login'
        element={<Login />}
      />

      <Route
        path='/signup'
        element={<Signup />}
      />
      
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>

  )
}

export default App
