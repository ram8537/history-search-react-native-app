import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FooterComponent from './components/Footer';
import ParallaxHeader from './components/Header';
import List from './components/List';
import ListItem from './components/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ParallaxHeader />
      <FooterComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
