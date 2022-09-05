import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Container from "./context/Container";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <Container>
        <Child1 /> 
        <Child2 />
      </Container>
      {/* <Container children={<Child1/><Child2/>} /> */}
    </div>
  );
}

export default App;
