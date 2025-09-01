import React from 'react'
import countReducer from '../reducers/countReducer';

let intialState = {
    count: 0
}
export default function Counter() {
 let [state, dispatch] = React.useReducer(countReducer, intialState);
 
  return (
    <div>
        Counter
        <h1>State: {state.count}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT", payload:5})}>Increment by 5</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement by 1</button>
        <button onClick={()=>dispatch({type:"RESET"})  }>Reset</button>
    </div>
  )
}
