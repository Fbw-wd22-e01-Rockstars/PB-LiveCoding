import React, { useContext } from 'react'
import { MyContext } from './context/context'


export default function Child2() {
   
  const state = useContext(MyContext)
  return (
    <div style={{height:"200px",border:"2px solid"}}>Child2, Hi ,{state.data}</div>
  )
}
