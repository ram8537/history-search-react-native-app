import React from 'react'
import { View, StyleSheet } from 'react-native';
import ParallaxHeader from './Page1/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import List from './Page1/List';

function Page2() {
    return (
        <View style={styles.container}>
          <ParallaxHeader />
          {/* <ScrollView><List /></ScrollView> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
  });
  

export default Page2
