import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

function FooterComponent() {
  return (
    <View>
      <Content style={styles.container} />
      <Footer style={styles.container}>
        <FooterTab>
          <Button vertical>
            <Icon type="Entypo" name="tree" style={styles.icon} />
          </Button>
          <Button vertical>
            <Icon type="Entypo" name="magnifying-glass" style={styles.icon}/>
          </Button>
        </FooterTab>
      </Footer>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  icon: {
    color: 'white',
  },
});
export default FooterComponent
