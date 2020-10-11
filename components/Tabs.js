import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Page1 from './Page1';
import Page2 from './Page2';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Page1"
      tabBarOptions={{
        activeTintColor: '#1ED760',
        activeBackgroundColor:'#292929',
        inactiveBackgroundColor: '#121212',
        labelStyle: {
          color:'white',
          paddingBottom: 4,
          fontSize: 12,
        }
      }}
    >
      <Tab.Screen
        name="Page1"
        component={Page1}
        options={{
          tabBarLabel: 'Items',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pirate" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Page2"
        component={Page2}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ship-wheel" color={color} size={size}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Tabs