import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';
import ListItem from './components/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingLeft: 15,
  },
});
