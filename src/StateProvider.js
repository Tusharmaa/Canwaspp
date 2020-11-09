//setup the data layer
//We need to travk the basket

import React, { createContext, useContext, useReducer } from "react";

//This is the data layer

export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
