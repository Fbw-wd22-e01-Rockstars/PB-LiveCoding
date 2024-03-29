// add routes in our react app
//1. install react-router-dom (npm i react-router-dom)
//2. import BrowserRouter , Routes, Route and NavLink from reactrouter-dom
//3. wrap our complete app into BrowserRouter
//4. wrap all pur routes in Routes
//5. Make our routes using Route tag (<Route path="pathname" element={component})


import React,{useState} from 'react';
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import ContactUs from "./components/ContactUs"
import { BrowserRouter ,Routes ,Route} from "react-router-dom"
import PageNottFound from './components/PageNottFound';
import "./App.css"
import Header from './components/Header';
function App() {
  /* const [page,setPage]=useState("home") */
  return (
    <BrowserRouter>
    <div className="App">
    {/*   <ul>
        <li onClick={()=>setPage("home")}><a href="/">Home </a></li>
        <li onClick={()=>setPage("about")}><a href="/about">About</a></li>
        <li onClick={()=>setPage("portfolio")}><a href="/portfolio">Portfolio</a></li>
        <li onClick={()=>setPage("contactus")}><a href="/contactus">Contact Us</a></li>
      </ul> */}
{/* 
    {page ==="home" && <Home/>} 
    {page==="about" && <About/>} 
    {page==="portfolio" && <Portfolio/>}
    {page==="contactus" && <ContactUs/>} */}


<Header/>

<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="about" element={<About/>}>
    <Route path="more" element={<h1>More info about us</h1>}  />
    <Route path="me" element={<h2>About me</h2>} />
  </Route>
  
  <Route path="portfolio" element={<Portfolio/>}  />
  <Route path="contactus" element={<ContactUs/>}  />
  <Route path="*" element={<PageNottFound/>}/>
</Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;