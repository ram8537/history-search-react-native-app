import { Body, Card, CardItem, Container, Content, Left } from 'native-base';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export default function DetailViewCard({ item }) {
  return (
    <Container style={styles.container}>
      <Content>
        <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Left>
              <Body>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.item_number}>{item.item_number}</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Body>
              <View >
                <Image source={{ uri: item.image }} resizeMethod={"scale"} resizeMode={'contain'} style={{ height: 250, width: 360, flex: 0 }} defaultSource={require("./images/loading_gif.gif")} />
              </View>
              <Text style={styles.details}>{item.description}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },
  card: {
    flex: 0,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#292929',
    borderRadius: 10,
    borderColor: '#292929'

  },
  cardItem: {
    backgroundColor: '#292929',
    borderColor: 'red',
    borderRadius: 20,
  },
  title: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
  item_number: {
    color: 'white',
    paddingTop: 5,
    fontWeight: '100',
    fontSize: 16
  },
  details: {
    color: 'white',
    paddingTop: 20,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#1ED760',
    paddingLeft: 20,

  }
});