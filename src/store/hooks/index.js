import {  useReducer } from "react";

 const useReducerWithMiddleware = (
  reducer,
  initialState,
  middlewaresArray,
) => {

  const [state, dispatch] = useReducer(reducer, initialState);


  // TODO replace foreach to the loop

  const  dispatchWithMiddlewares = (action) => {
    middlewaresArray.forEach((middleware)=>{middleware(action)})
    // @ts-ignore
    dispatch(action);
  };

  return [state, dispatchWithMiddlewares];
};

export default useReducerWithMiddleware;
