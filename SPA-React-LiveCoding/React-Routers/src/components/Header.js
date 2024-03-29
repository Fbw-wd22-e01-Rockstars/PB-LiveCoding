import React from 'react'
import {NavLink} from "react-router-dom"

export default function Header() {
  return (
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/contactus">Contact Us</NavLink></li>
      </ul>
  )
}
