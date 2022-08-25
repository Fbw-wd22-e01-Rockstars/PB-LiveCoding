import React, { useContext } from "react";
import { MyContext } from "../context/context";
import A1 from "./A1";

export default function A() {
  const { todoList } = useContext(MyContext);

  return (
    <div>
      <h1>A Component</h1>
      <div>
        {todoList.map((todo) => {
          return <h3>{todo}</h3>;
        })}
      </div>
      <A1 />
    </div>
  );
}

// export default function A() {
//   /* const context = useContext(MyContext) */

//   return (
//     <div>
//       <MyContext.Consumer>
//         {(context) => {
//           return (
//             <>
//               <h1>A Component</h1>
//               <div>
//                 {context.todoList.map((todo) => {
//                   return <h3>{todo}</h3>;
//                 })}
//               </div>
//               <A1 />
//             </>
//           );
//         }}
//       </MyContext.Consumer>
//     </div>
//   );
// }
