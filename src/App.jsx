import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Navbar from './components/Navbar'
import axios from 'axios'
import Footer from './components/Footer'
import PopUpAlert from './components/PopUpAlert'
import SingleProduct from './components/SingleProduct'
import CategoryProduct from './Pages/CategoryProduct'
import { useCart } from './Context/CartContext'
import ProtectedRoute from './components/ProtectedRoute'


const App = () => {
  const [location, setLocation] = useState();
  const [openDropdown, setOpenDropdown] = useState(false);


  function toggelDropdown() {
    setOpenDropdown(!openDropdown);
  }

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { longitude, latitude } = position.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`

      try {
        const response = await axios.get(url);
        const exactLocation = response.data.address;
        setLocation(exactLocation);
        setOpenDropdown(false);
        console.log(exactLocation);

      } catch (error) {
        console.error("Error", error);
      }
    });
  }



  return (
    <BrowserRouter>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} toggelDropdown={toggelDropdown} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/category/:category' element={<CategoryProduct />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<ProtectedRoute><Cart location={location} getLocation={getLocation} /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App