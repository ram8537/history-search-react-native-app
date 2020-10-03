import React, {useState} from 'react';
import { View, StyleSheet} from 'react-native';
import CardList from './Page2/CardList';
import SearchBar from './Page2/SearchBar';
import { useStateValue } from './State/StateProvider';
import Filter from './Page2/Filter'



function Page2() {
  const [term, dispatch] = useStateValue();
  (term ? console.log(term) : console.log('no term'))

  return (
      <View style={styles.container}>
        <SearchBar />
        <Filter />
        {/* {term ? <CardList data={term}/> : console.log ('no term')} */}
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
