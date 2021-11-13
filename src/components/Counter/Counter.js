import React, {useContext} from 'react';
import { CountContext } from '../../context/CountContext';
import { 
   INCREMENT,
   DECREMENT,
   MULTIPLY_BY_3,
   DIVIDE_BY_2,
   RESET 
} from "../../context/types";

function Counter() {
   const { 
      state: { count }, 
      dispatch, 
   } = useContext(CountContext);

   return (
      <div>
         <h1>Count: {count}</h1>
         <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
         <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
         <button onClick={() => dispatch({ type: MULTIPLY_BY_3 })}>x3</button>
         <button onClick={() => dispatch({ type: DIVIDE_BY_2 })}>/2</button>
         <button onClick={() => dispatch({ type: RESET })}>RESET</button>
      </div>
   )
}

export default Counter;
