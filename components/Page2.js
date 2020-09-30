import React from 'react'
import { View, StyleSheet } from 'react-native';
import CardComponent from './Card';

function Page2() {
    return (
        <View style={styles.container}>
            <CardComponent />
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
