import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardList from './Page2/CardList';
import SearchBar from './Page2/SearchBar';
import { useStateValue } from './State/StateProvider';
import Filter from './Page2/Filter'



function Page2() {

  const [{term, filter}] = useStateValue();
  console.log("(page2), state of filter is", filter)

  
  return (
    <View style={styles.container}>
      <SearchBar />
      {filter ? <Filter /> : console.log("(page2) not rendering filter component")}
      {term ? <CardList data={term}/> : console.log("(page2) not rendering cardlist because there's no search term in data layer")}
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
