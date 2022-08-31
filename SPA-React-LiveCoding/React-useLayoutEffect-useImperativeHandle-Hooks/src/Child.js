import React,{useImperativeHandle, useState} from 'react'

 function Child(props,ref) {
  
    const [counter,setCounter]= useState(0)


    useImperativeHandle(ref, ()=>({
        setCounter
    }))

  return (
    <div>
        <h1>Child Comp</h1>
        <h2>Counter: {counter}</h2>
      
    </div>
  )
}
export default React.forwardRef(Child)