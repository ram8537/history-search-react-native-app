import React, { useState } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import CardList from './Page2/CardList';
import SearchBar from './Page2/SearchBar';
import { useStateValue } from './State/StateProvider';
import Filter from './Page2/Filter'
import { ScrollView } from 'react-native-gesture-handler';
import NoSearchTerms from './Page2/NoSearchTerms';



function Page2() {

  const [{ term, filter }] = useStateValue();


  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <SearchBar />
        {filter ? <Filter /> : console.log("(page2) no filters")}
        {term ? <CardList data={term} /> : console.log("(page2) no search terms")}
        {filter || term ? console.log("(page2)") : <NoSearchTerms/>}
      </View>
    </ScrollView>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default Page2
