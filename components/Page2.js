import React, {useState} from 'react';
import { View, StyleSheet} from 'react-native';
import CardList from './Page2/CardList';
import SearchBar from './Page2/SearchBar';
import useSearch from './Page2/useSearch';
import { useStateValue } from './State/StateProvider';


// function getSearchResult(){
//   try {
//     const [{ term }, dispatch] = useStateValue();
//     const { data } = useSearch(term);
//     console.log(data)
//   }catch(err){
//     console.log('no searches yet')
//   }
// }

function Page2() {
  const [term, dispatch] = useStateValue();
  (term ? console.log(term) : console.log('no term'))

  return (
      <View style={styles.container}>
        <SearchBar />
        {/* {loading ? <LoadingSpinner /> : <ResultsTable results={data} />} */}
        {/* <CardList data={data} /> */}
        {term ? <CardList data={term}/> : console.log ('no term')}
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
