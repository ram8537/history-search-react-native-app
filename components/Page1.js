import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import ParallaxHeader from './Page1/Header';
import { ScrollView } from 'react-native-gesture-handler';
import List from './Page1/List';
import RNParallax from './Page1/RefactoringParallaxHeader';


function Page1() {
    return (
        <View style={styles.container}>
          <RNParallax />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:25,
      backgroundColor: '#121212',
    },
  });
  

export default Page1
