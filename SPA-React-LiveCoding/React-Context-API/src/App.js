import React from "react";
import A from "./components/A";
import B from "./components/B";
import Container from "./context/Container";
//1. create our context

//2. wrap your app withn Context Provider

//3.Provide values to your context

//4. use your context using useContext hook

function App() {
  return (
    <Container>
      <div className="App">
        <h1>Context API (APP Component)</h1>
        <A />
        <B />
      </div>
    </Container>
  );
}

export default App;
