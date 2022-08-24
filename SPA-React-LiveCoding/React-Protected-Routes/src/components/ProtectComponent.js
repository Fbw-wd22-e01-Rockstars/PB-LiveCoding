import React from 'react'
import {Navigate} from "react-router-dom"

export default function ProtectComponent(props) {
  if(props.user){
      return props.children
  }else{
      return <Navigate to="/" />
  }
}

{/* <ProtectComponent user={user}> <Profile/> </ProtectComponent> */}