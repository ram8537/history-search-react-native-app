import React, { useEffect, ActivityIndicator } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Container, Content, Card, CardItem, Left, Body, Button, Icon } from 'native-base';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '../State/StateProvider';


export default function DetailViewCard({ item_number, item }) {
  const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <Content>
        <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Left>
              <Body>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.item_number}>{item_number}</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Body>
              <View >
                <Image source={{ uri: item.image_url }} resizeMethod={"scale"} resizeMode={'contain'} style={{ height: 250, width: 360, flex: 0 }} defaultSource={require("./images/loading_gif.gif")} />
              </View>
              <Text style={styles.details}>{item.description}</Text>
            </Body>
          </CardItem>
        </Card>

        <CardItem style={{ backgroundColor: '#121212', alignItems: "center" }}>
          <Button style={styles.button} onPress={() => { Haptics.selectionAsync(); navigation.navigate('Page2') }}>
            <Text style={{ fontWeight: '700' }}>Try a search</Text>
            <Icon type="MaterialCommunityIcons" name='ship-wheel' />
          </Button>
        </CardItem>

      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
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