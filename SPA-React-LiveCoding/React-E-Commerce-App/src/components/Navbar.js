import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../ContextAPI/context";

export default function Navbar() {
  const { state } = useContext(MyContext)
  return (
    <nav>
      <div>
        <NavLink to="/"> 
        <img src="https://www.creativefabrica.com/wp-content/uploads/2021/06/29/Gradient-ecommerce-logo-Online-shop-Graphics-14011621-1.png" width="100" alt="" /></NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart <sup style={{display:"inline-block", width:"20px",height:"20px",color:"white",fontSize:"16px",textAlign:"center",padding:"5px",borderRadius:"10px",backgroundColor:"black"}}>{state.cart.length}</sup> </NavLink>
        </li>
        <li>
          <NavLink to="contactus">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}
