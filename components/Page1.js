import React from 'react'
import { View, StyleSheet} from 'react-native';
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
