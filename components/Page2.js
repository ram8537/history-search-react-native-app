import { Card } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardList from './Page2/CardList';
import FaqPopUp from './Page2/FaqPopUp';
import Filter from './Page2/Filter';
import NoSearchTerms from './Page2/NoSearchTerms';
import SearchBar from './Page2/SearchBar';
import { useStateValue } from './State/StateProvider';

const renderFilter = (filter, term) => {
  console.log("(page2) useEffect on filter", filter)
  if (filter && term) {
    return (
      <View>
        <Filter />
      </View>
    )
  }
  else if (filter) {
    return (
      <View>
        <Filter />
        <FaqPopUp />
      </View>
    )
  }
  if (!filter && term) {
    console.log("no filter and term")
  }
  else {
    return (
      <NoSearchTerms />
    )
  }
}

const renderSearchResults = (term) => {
  console.log("(page2) useEffect on term", term)
  if (term) {
    return (<CardList data={term} />)
  }
}

export default function Page2() {

  const [{ term, filter, item_number }] = useStateValue();
  const [showFilter, setShowFilter] = useState();
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    setShowFilter(renderFilter(filter, term))
  }, [filter, term])

  useEffect(() => {
    setSearchResults(renderSearchResults(term))
  }, [term])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <SearchBar />
        {showFilter}
        {searchResults}
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

