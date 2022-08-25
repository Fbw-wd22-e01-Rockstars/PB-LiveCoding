import React,{useState} from 'react'
import { MyContext} from './context'

export default function Container({children}) {
    const [counterA, setCounterA] = useState(0)
    const [todoList,setTodoList] = useState(["Breakfast","Live Coding","Exercises"])
    
  
    return (
   <MyContext.Provider value={{ counterA, setCounterA,todoList, setTodoList}}>
       {children}
   </MyContext.Provider>
    )
}
