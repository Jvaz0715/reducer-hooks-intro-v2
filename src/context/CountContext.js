import React, { useReducer } from "react";

export const CountContext = React.createContext({});

const initialState = {
   count: 0,
};

// when using dispatch, just pass in the type we want to use
function reducer(state, action) {
   switch(action.type) {
      case "INCREMENT":
         return {
            count: state.count + 1,
         };

      case "DECREMENT":
         return {
            count: state.count - 1,
         };

      case "MULTIPLY-BY-3":
         return {
            count: state.count * 3,
         }

      case "DIVIDE-BY-2":
         return {
            count: state.count / 2,
         }
      
      case "CLEAR":
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