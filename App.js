import 'react-native-gesture-handler';
import React, {createContext, useContext, useReducer} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/Tabs';
import reducer, {initialState} from './components/State/reducer'
import {StateProvider} from './components/State/StateProvider'
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <NavigationContainer>
      <StateProvider initialState={initialState} reducer={reducer}>
      <Tabs />
      </StateProvider>
    </NavigationContainer>
  );
}

