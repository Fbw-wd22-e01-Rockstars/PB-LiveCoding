import React from 'react'

export default function Login({setUser}) {
  return (
    <div>Login Page 

      <button onClick= {()=>setUser({email:"test@gmail.com"})}>sign</button>
    </div>
  )
}
