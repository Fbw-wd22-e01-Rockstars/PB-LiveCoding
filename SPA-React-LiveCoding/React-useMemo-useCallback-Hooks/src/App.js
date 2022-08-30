
import React, { useCallback, useMemo, useState } from 'react';
import Child from './Child';

//three cases where your component re-render
//1. when parent component re-render, child component/componnents will re-render as well
//2. if there is any change in props
//3. if there is any change in state

let max_num=10000000;

function App() {
  const [counter,setCounter]= useState(0)
  const [inputValue, setInputValue]=useState("")

  const computedValue=(max_num)=>{
    let value=0;
    for(let i=0;i<max_num;i++){
      value+=i
    }
    console.log("value computed ....")
    return value
  }

  //memorize value coming out of that function
  const memorizedValue= useMemo(()=>computedValue(max_num), [max_num])


  const incrementCounter=()=>{
    setCounter(counter+1)
  }

  //memorize callback function
 const memorizedCallback = useCallback(()=>incrementCounter() , [counter])

console.log("app render ....")
  return (
    <div className="App">
      <h1>React useMemo and useCallback</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={incrementCounter}>increment</button>

      <input type="text" onChange={e=>setInputValue(e.target.value)} />

      <br />
      <h2>computed value: {memorizedValue} </h2>
      <Child counter={counter} memorizedCallback={memorizedCallback }/>
    </div>
  );
}

export default App;


