import React,{useState,createContext} from 'react';
import A from './components/A';
import B from './components/B';

//1. create our context
export const MyContext = createContext()
//2. wrap your app withn Context Provider

//3.Provide values to your context

//4. use your context using useContext hook



function App() {
  const [counterA, setCounterA] = useState(0)
  const [todoList,setTodoList] = useState(["Breakfast","Live Coding","Exercises"])

  return (
    <MyContext.Provider value={{counterA, setCounterA,todoList, setTodoList}}> 
      <div className="App">
        <h1>Context API (APP Component)</h1>
        <A />
        <B />
      </div>
    </MyContext.Provider>
  );
}

export default App;