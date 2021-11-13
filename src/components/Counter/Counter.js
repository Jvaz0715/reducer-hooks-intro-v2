import React, {useContext} from 'react';
import { CountContext } from '../../context/CountContext';

function Counter() {
   const { 
      state: { count }, 
      dispatch, 
   } = useContext(CountContext);

   return (
      <div>
         <h1>Count: {count}</h1>
         <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
         <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
         <button onClick={() => dispatch({ type: "MULTIPLY-BY-3" })}>x3</button>
         <button onClick={() => dispatch({ type: "DIVIDE-BY-2" })}>/2</button>
         <button onClick={() => dispatch({ type: "CLEAR" })}>CLEAR</button>
      </div>
   )
}

export default Counter;
