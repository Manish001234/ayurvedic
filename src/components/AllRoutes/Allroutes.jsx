import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Products from '../Products'
import Contactus from '../Contactus'
import AboutUs from '../AboutUs'

const Allroutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<AboutUs/>} />
        <Route path='/Shop' element={<Products/>} />
        <Route path='/ContactUs' element={<Contactus/>} />
        </Routes>
    </div>
  )
}

export default Allroutes