import React, { useReducer } from "react";
import { 
   INCREMENT,
   DECREMENT,
   MULTIPLY_BY_3,
   DIVIDE_BY_2,
   RESET 
} from "./types";
export const CountContext = React.createContext({});

const initialState = {
   count: 0,
};

// when using dispatch, just pass in the type we want to use
function reducer(state, action) {
   switch(action.type) {
      case INCREMENT:
         return {
            count: state.count + 1,
         };

      case DECREMENT:
         return {
            count: state.count - 1,
         };

      case MULTIPLY_BY_3:
         return {
            count: state.count * 3,
         }

      case DIVIDE_BY_2:
         return {
            count: state.count / 2,
         }
      
      case RESET:
         return {
            count: 0,
         };
      
      default:
         return state;
   }
};

function CountContextWrapper({children}) {
   // reducer and initialState are coming in from what we created above
   const [state, dispatch] = useReducer(reducer, initialState)

   return (
      // whatever children we pass in between will have access to our state and dispatch \
      //look at App.js line 10-12
      <CountContext.Provider value={{state, dispatch}}>
         {children}
      </CountContext.Provider>
   )
};

export default CountContextWrapper;