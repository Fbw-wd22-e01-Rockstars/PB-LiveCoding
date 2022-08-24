
import React,{useState} from 'react';
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import ProtectComponent from "./components/ProtectComponent"

function App() {
  const [user,setUser]=useState(null)
  return (
    <BrowserRouter> 
    <div className="App">
      <ul>
       
        {user ?  <><li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li></> :
         <li><NavLink to="/login">Login</NavLink></li> }
        

      </ul>
      <Routes>
      <Route path="/login" element={<Login setUser={setUser}/>}/>
      <Route path="/profile" element={<ProtectComponent user={user}>  <Profile/> </ProtectComponent>} /> 
       <Route path="/projects" element={<ProtectComponent user={user}><Projects/></ProtectComponent>} /> 
      </Routes>





{/* <Profile name="Naqvi"> <Projects/> </Profile> */}

    </div>
    </BrowserRouter>
  );
}

export default App;