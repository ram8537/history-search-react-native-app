import React, {createContext, useContext, useReducer, useState} from 'react';

//creates the 'data layer'
export const StateContext = createContext();

export function StateProvider({reducer, intitialState, children}) {
    return(
        <StateContext.Provider value = {useReducer(reducer,intitialState)}>
        {children}
       </StateContext.Provider>
    );
}

//hook that lets us pull information from the data layer
export const useStateValue = () => useContext(StateContext);
