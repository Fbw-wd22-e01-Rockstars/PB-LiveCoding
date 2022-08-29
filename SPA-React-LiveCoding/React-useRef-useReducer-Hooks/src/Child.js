import React from 'react'

function Child() {
    console.log("child render ......")
  return (
    <div><h1>Child Component</h1>
    </div>
  )
}

export default React.memo(Child)

