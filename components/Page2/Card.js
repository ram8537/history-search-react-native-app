import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';

export default function CardComponent({confidence_score, text}) {
    return (
        <View style={styles.container}>
          <Card style={styles.card} >
            <CardItem header style={styles.card}>
              <Text style={styles.cardText}>Confidence Level: {confidence_score} </Text>
            </CardItem>
            <CardItem bordered style={styles.card}>
              <Body>
                <Text style={styles.cardText}>
                  I don't wanna be anything other than what I've been trying to be lately: {text}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:7,
    },
    card:{
        borderRadius: 10,
        borderColor: '#292929',
        backgroundColor: '#292929',
    },
    cardText:{
        color: 'white'
    }
});