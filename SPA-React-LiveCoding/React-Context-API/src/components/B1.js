import React,{useContext} from 'react'
import { MyContext } from '../context/context'

export default function B1() {
  const context = useContext(MyContext)
  console.log(context)
  return (
    <div><h2>B1 Component : {context.counterA}</h2></div>
  )
}
