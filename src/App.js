import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/pages/Footer/Footer'
import Home from './components/pages/HomePages/Home'
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

