import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import List from './List'

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;


const title = () => {
  return (
    <View style={styles.body}>
      {/* <Text style={{ color: 'white', fontSize: 20, }}>National Museum Singapore</Text> */}
    </View>
  );
};

const ParallaxHeader = () => {
  return (
    <>
      <ReactNativeParallaxHeader
        navbarColor="#292929"
        headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={230}
        extraScrollHeight={20}
        titleStyle={styles.titleStyle}
        title={title()}
        backgroundImage={require('./images/museum2.jpg')}
        backgroundImageScale={1.2}
        renderContent={List}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: '#121212'
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ParallaxHeader;
