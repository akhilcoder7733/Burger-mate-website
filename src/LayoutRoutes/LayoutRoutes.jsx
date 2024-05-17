import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Start from '../Pages/Start/Start'
import Footer from '../Components/Footer/Footer'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import NotFound from '../Components/NotFound/NotFound'
import Contact from '../Pages/Contact/Contact'
import Profile from '../Pages/Profile/Profile'
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword'
import Hero from '../Pages/Hero/Hero'
import Blog from '../Pages/Blog/Blog'
import About from '../Pages/About/About'

function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='/Burger-mate-website' element={<Hero/>}/>
            <Route path='/start' element={<Start/>}/>
            <Route path='/*' element={<NotFound/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default LayoutRoutes
