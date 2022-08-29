import React, { useReducer, useRef } from "react";
import reducer , {initialState} from "./reducer/reducer"
// importing default and named export together


export default function App() {
//  useReducer hook receives 2 arguments ,first is reducer function(universal function) and second your initial state and returns array of 2 items ,inside that array first item is your state and second otem is dispatch function,use to send actions to your reducer function
const [state, dispatch] = useReducer(reducer, initialState )

  const myRef= useRef()
  return (
    <div>
      <h2>counter: {state.counter}</h2>
      <button onClick={()=>dispatch({type:"increment counter"})}>increment</button>

      <button onClick={()=>dispatch({type:"decrement counter"})} >decrement</button>
      <button  onClick={()=>dispatch({type:"reset counter"})} >reset</button>
        <br /><br />
      <div>
        <input type="text" ref={myRef}/> 
        <button onClick={()=>dispatch({type:"add new task",payload:myRef.current.value})} >add task</button>

        <div>
          {state.tasks.map(todo=>{
            return(
              <div>
                <p>{todo.text} <span>X</span></p>
                
              </div>
            )
          })}
        </div>
      </div>


    </div>
  );
}

/* 
  const [counter, setCounter] = useState(0);
  const [tasks,setTasks]=useState([
    {id:1,text:"breakfast",status:false},
    {id:2,text:"live code",status:false}
  ])
 */

/* 

const incrementFunc=()=>{
 setCounter(counter+1)
}

const decrementFunc=()=>{
  setCounter(counter-1)
}

const resetFunc=()=>{
  setCounter(0)
}

const addTaskItem=()=>{
  let task= {id:tasks.length+1, text:myRef.current.value , status:false }
  setTasks([...tasks, task])
}
 */




// import React, { useRef, useState } from 'react';
// import Child from './Child';

// function App() {
// const [inputValue,setInputValue]=useState("")
//   const myRef = useRef()
//   const myHeader=useRef()

//  const getInputValueFunc =()=>{
//    setInputValue(myRef.current.value)
//    myRef.current.style.backgroundColor="green"
//     myHeader.current.style.border="2px solid black"
//  }

//   console.log("app render.....")

//   return (
//     <div className="App">
// {      <h1 ref={myHeader}>useRef Hook</h1>
//       <input ref={myRef} type="text"/><br></br>
//       <button onClick={getInputValueFunc} >show input value</button>
//         <h2>{inputValue}</h2>
//         <Child inputValue={inputValue}/>
// }
//     </div>
//   );
// }

// export default App;
