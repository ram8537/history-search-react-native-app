import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardList from './Page2/CardList';
import Filter from './Page2/Filter';
import NoSearchTerms from './Page2/NoSearchTerms';
import SearchBar from './Page2/SearchBar';
import { useStateValue } from './State/StateProvider';



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
