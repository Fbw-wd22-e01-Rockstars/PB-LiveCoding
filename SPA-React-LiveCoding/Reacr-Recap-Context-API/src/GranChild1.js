import React, { useContext } from "react";
import { MyContext } from "./context/context";


export default function GranChild1() {
  const { name } = useContext(MyContext);
  return (
    <div>
      <h1>GrandChild one , Hi, {name}</h1>
    </div>
  );
}
