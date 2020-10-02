import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';

const confidenceScore = (confidence_score) => {
  if (typeof confidence_score !== 'undefined') {
    return (
      <CardItem header style={styles.card}>
        <Text style={styles.cardText}>Confidence Score: {confidence_score} </Text>
      </CardItem>
    )
  }
}
export default function CardComponent({ confidence_score, text }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card} >
        {confidenceScore(confidence_score)}
        <CardItem bordered style={styles.card}>
          <Body>
            <Text style={styles.cardText}>{text}</Text>
          </Body>
        </CardItem>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
  },
  card: {
    borderRadius: 10,
    borderColor: '#292929',
    backgroundColor: '#292929',
  },
  cardText: {
    color: 'white'
  }
});