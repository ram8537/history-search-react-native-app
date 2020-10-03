import React, {createContext, useContext, useReducer, useState} from 'react';
import { initialState } from './reducer';

//creates the 'data layer'
export const StateContext = createContext();

export function StateProvider({reducer, initialState, children}) {
    return(
        <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
       </StateContext.Provider>
    );
}

//hook that lets us pull information from the data layer
export const useStateValue = () => useContext(StateContext);
