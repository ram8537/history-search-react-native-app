import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { CollapsibleHeaderFlatList, CollapsibleHeaderScrollView, CollapsibleHeaderSectionList } from 'react-native-collapsible-header-views';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import CardComponent from './Page2/Card';
import CardList from './Page2/CardList';
import SearchBar from './Page2/SearchBar';


const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;

const title = () => {
  return (
    <View style={styles.body}>
      <Text style={{ color: 'white', fontSize: 20 }}>Search</Text>
    </View>
  );
};

function Page2() {
  return (
    <>
      <ReactNativeParallaxHeader
        navbarColor="#121212"
        headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={120}
        extraScrollHeight={20}
        titleStyle={styles.titleStyle}
        title={SearchBar()}
        backgroundImageScale={1.2}
        backgroundColor={'#121212'}
        renderContent={CardList}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
export default Page2
