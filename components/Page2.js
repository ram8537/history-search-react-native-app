import React from 'react'
import { View, StyleSheet, } from 'react-native';
import CardComponent from './Page2/Card';
import CardList from './Page2/CardList';
import SearchBar from './Page2/SearchBar';

function Page2() {
  return (
    <View style={styles.container}>
      <CardList/>
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
