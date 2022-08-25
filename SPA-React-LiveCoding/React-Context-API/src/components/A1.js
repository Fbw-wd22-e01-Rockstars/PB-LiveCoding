import React, { useContext } from 'react'
import { MyContext } from '../App'

export default function A1() {
  const context = useContext(MyContext)
  return (
    <div><h2>A1 Component</h2>
    <button onClick={()=>context.setCounterA(context.counterA+1)}>Increment counterA</button></div>
  )
}
