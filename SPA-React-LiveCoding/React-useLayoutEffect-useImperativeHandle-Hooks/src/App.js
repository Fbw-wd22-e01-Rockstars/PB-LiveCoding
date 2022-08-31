
import React, { useEffect, useRef } from 'react';
import Child from './Child';

function App() {
  const myRef = useRef()

 
  // useLayoutEffect(()=>{
  // /*   let time = new Date().toTimeString()
  //   console.log(time.split(" ")[0].split(":")[0]) */
    
  //   myRef.current.style.backgroundColor="green"
  //   myRef.current.innerText="Good afternoon, Naqvi"
  //   myRef.current.style.position="absolute"
  //   myRef.current.style.top="150px"
  // },[])

  const IncrementChildCounter=()=>{
    myRef.current.setCounter(state=>state+1)
  }

console.log("render app ....")
  return (
    <div className="App">
     {/*  <h1 ref={myRef} > Good morning !</h1> */}

        <button onClick={IncrementChildCounter} >Parent increment counter button</button>
       <Child ref={myRef} />
    </div>
  );
}

export default App;