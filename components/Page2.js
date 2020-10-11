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

const renderItems = (filter, term) => {
  if (filter && term) {
    return (
      <View>
        <Filter />
        <CardList data={term} />
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
  else { return (<NoSearchTerms />) }
}

export default function Page2() {

  const [{ term, filter, item_number }] = useStateValue();
  const [items, setItems] = useState();

  useEffect(() => {
    setItems(renderItems(filter, term))
  }, [term || filter])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <SearchBar />
{items}
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

