import React from 'react'

 function Child({counter,memorizedCallback}) {
    console.log("child render .....")
  return (
    <div>
        <h1>Child Component: {counter}</h1>
        <button onClick={memorizedCallback}>increment from child</button>
    </div>
  )
}
export default React.memo(Child)