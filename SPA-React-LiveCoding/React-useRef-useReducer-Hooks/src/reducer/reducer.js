//universal funciton
// perform all state operation
export default function reducer(state, action){
    console.log(action)
    switch(action.type){
      case "increment counter": 
            // using spread operator, we keep all other properties inside our state as it is.
          return { ...state, counter:state.counter+1}
      case "decrement counter":
          return {...state, counter : state.counter-1}
      case "reset counter":
          return {...state, counter: 0 }
      case "add new task":
          return {...state, tasks: [...state.tasks, {id:state.tasks.length+1, text:action.payload, status:false}]}
      default:
          return state
    }
  }

  export const initialState= { 
    ounter:0, 
    tasks:[
    {id:1,text:"breakfast",status:false},
    {id:2,text:"live code",status:false}
  ] }