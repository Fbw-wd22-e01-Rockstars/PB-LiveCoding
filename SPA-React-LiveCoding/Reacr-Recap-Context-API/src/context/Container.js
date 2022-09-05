import React,{useState} from 'react'
import { MyContext } from './context'

export default function Container({children}) {

    const [name,setName]=useState("Naqvi") 
    const [data,setData]=useState("John")


  return (
    <MyContext.Provider value={{name,setName,data,setData}}>
        {children}
    </MyContext.Provider>
  )
}
