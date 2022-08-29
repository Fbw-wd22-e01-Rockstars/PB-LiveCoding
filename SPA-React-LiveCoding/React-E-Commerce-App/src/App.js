
import React from 'react';
import Navbar from './components/Navbar';
import "./App.css"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Cart from "./pages/Cart"
import Products from "./pages/Products"
import Product from "./pages/Product"
import ContactUs from "./pages/ContactUs"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="App">
      <h1>E-Commerce Site</h1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="*" element={<NotFound/>} />

      </Routes>


    </div>
  );
}

export default App;