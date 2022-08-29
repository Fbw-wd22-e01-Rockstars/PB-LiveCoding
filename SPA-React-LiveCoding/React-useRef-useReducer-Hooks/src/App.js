





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