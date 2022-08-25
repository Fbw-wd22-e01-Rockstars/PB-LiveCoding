import React, { useContext }  from 'react'
import { MyContext } from '../App'
import A1 from "./A1"

export default function A() {
const context = useContext(MyContext)

  return (
    <div><h1>A Component</h1>
    <div>
      {context.todoList.map(todo=>{
        return (<h3>{todo}</h3>)
      })}
    </div>
      <A1/>
    
    </div>
  )
}
