
import React, { useEffect, useLayoutEffect, useRef } from 'react';

function App() {
  const myRef = useRef()

  useLayoutEffect(()=>{
  /*   let time = new Date().toTimeString()
    console.log(time.split(" ")[0].split(":")[0]) */
    
    
    myRef.current.style.backgroundColor="green"
    myRef.current.innerText="Good afternoon, Naqvi"
    myRef.current.style.position="absolute"
    myRef.current.style.top="150px"
  },[])


console.log("render app ....")
  return (
    <div className="App">
      <h1 ref={myRef} > Good morning !</h1>
    </div>
  );
}

export default App;