import React from 'react';
import { Animated, Dimensions, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import List from './List';



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    containerStyle:{
        flex: 1,
        backgroundColor: '#121212'
    },
    contentContainerStyle:{
        flexGrow: 1,
        backgroundColor: '#121212',
    },
    innerContainerStyle:{
        flex: 1,
        backgroundColor: '#121212'
    },
    scrollView: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: DEFAULT_NAVBAR_COLOR,
        overflow: 'hidden',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: DEFAULT_HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    bar: {
        backgroundColor: 'transparent',
        height: DEFAULT_HEADER_MIN_HEIGHT,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    headerTitle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingTop: STATUS_BAR_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: DEFAULT_TITLE_COLOR,
        textAlign: 'center',
        fontSize: 16,
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
      }
});


const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;

const SCROLL_EVENT_THROTTLE = 16;
const DEFAULT_HEADER_MAX_HEIGHT = 230;
const DEFAULT_HEADER_MIN_HEIGHT = HEADER_HEIGHT;
const DEFAULT_EXTRA_SCROLL_HEIGHT = 20;
const DEFAULT_BACKGROUND_IMAGE_SCALE = 1.2;

const DEFAULT_NAVBAR_COLOR = '#3498db';
const DEFAULT_BACKGROUND_COLOR = '#303F9F';
const DEFAULT_TITLE_COLOR = 'white';

function RNParallax() {

    const scrollY = new Animated.Value(0)
    const headerMaxHeight = DEFAULT_HEADER_MAX_HEIGHT
    const headerMinHeight = DEFAULT_HEADER_MIN_HEIGHT
    const alwaysShowTitle = true
    const alwaysShowNavBar = true
    const backgroundImage = require('./images/museum2.jpg')
    const headerScrollDistance = headerMaxHeight - headerMinHeight
    const extraScrollHeight = DEFAULT_EXTRA_SCROLL_HEIGHT
    const backgroundImageScale = DEFAULT_BACKGROUND_IMAGE_SCALE

    const inputRange = [- extraScrollHeight, 0, headerScrollDistance]

    const headerHeight = (
        scrollY.interpolate({
            inputRange: inputRange,
            outputRange: [
                headerMaxHeight + extraScrollHeight,
                headerMaxHeight,
                headerMinHeight,
            ],
            extrapolate: 'clamp',
        })
    )


    const navBarOpacity = (
        scrollY.interpolate({
            inputRange: inputRange,
            outputRange: [0, 1, 1],
            extrapolate: 'clamp',
        })
    )
    
    const navBarForegroundOpacity = (
        scrollY.interpolate({
            inputRange: inputRange,
            outputRange: [alwaysShowNavBar ? 1 : 0, alwaysShowNavBar ? 1 : 0, 1],
            extrapolate: 'clamp',
          })
    )

    const imageOpacity = (
        scrollY.interpolate({
            inputRange: inputRange,
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        })
    )

    const imageTranslate = (
        scrollY.interpolate({
            inputRange: inputRange,
            outputRange: [0, 0, -50],
            extrapolate: 'clamp',
        })
    )

    const imageScale = (
        scrollY.interpolate({
            inputRange: inputRange,
            outputRange: [backgroundImageScale, 1, 1],
            extrapolate: 'clamp',
        })
    )

    const titleTranslateY = (
        scrollY.interpolate({
            inputRange: inputRange,
            outputRange: [5, 0, 0],
            extrapolate: 'clamp'
        })
    )
    
    const titleOpacity = (
        scrollY.interpolate({
            inputRange: inputRange,
            outputRange: [1, 1, alwaysShowTitle ? 1 : 0],
            extrapolate: 'clamp',
        })
    )


    const renderBackgroundImage = () => {
        return (
            <Animated.Image
                style={[
                    styles.backgroundImage,
                    {
                        height: headerMaxHeight,
                        opacity: imageOpacity,
                        transform: [{ translateY: imageTranslate }, { scale: imageScale }],
                    },
                ]}
                source={require('./images/museum2.jpg')}
            />
        )
    }

    const renderPlainBackground = () => {
        return (
            <Animated.View
                style={{
                    height: headerMaxHeight,
                    backgroundColor:'#292929',
                    opacity: imageOpacity,
                    transform: [{ translateY: imageTranslate }, { scale: imageScale }],
                }}
            />
        )
    }

    const renderNavbarBackground = () => {
        return (
            <Animated.View
                style={[
                    styles.header,
                    {
                        height: headerHeight,
                        backgroundColor: '#292929',
                        opacity: navBarOpacity,
                    },
                ]}
            />
        )
    }

    const renderHeaderBackground = () => {
        return (
            <Animated.View
                style={[
                    styles.header,
                    {
                        height: headerHeight,
                        opacity: imageOpacity,
                        backgroundColor: backgroundImage ? 'transparent' : backgroundColor,
                    },
                ]}>
                {backgroundImage && renderBackgroundImage()}
                {!backgroundImage && renderPlainBackground()}
            </Animated.View>
        )
    }

    const renderHeaderTitle = () => {
        return (
            <Animated.View
                style={[
                    styles.headerTitle,
                    {
                        transform: [{ translateY: titleTranslateY }],
                        height: headerHeight,
                        opacity: titleOpacity,
                    },
                ]}>
                    <Text style={[styles.headerText, styles.titleStyle]}>National Museum Singapore</Text>
            </Animated.View>
        );
    }


    const renderHeaderForeground = () => {
        return (
            <Animated.View
                style={[
                    styles.bar,
                    {
                        height: headerMinHeight,
                        opacity: navBarOpacity,
                    },
                ]}>
            </Animated.View>
        );
    }


    const renderScrollView = () => {
        return (
            <Animated.ScrollView
                style={[styles.scrollView]}
                contentContainerStyle={styles.contentContainerStyle}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    {
                        useNativeDriver: false,
                    },
                )}>
                <View
                    style={[{ marginTop: headerMaxHeight }, styles.innerContainerStyle]}>
                    {List()}
                </View>
            </Animated.ScrollView>
        )
    }
    
    return (
        <View style={[styles.container, styles.containerStyle]}>
            <StatusBar />
            {renderScrollView()}
            {renderNavbarBackground()}
            {renderHeaderBackground()}
            {renderHeaderTitle()}
            {renderHeaderForeground()}
        </View>
    )

}


export default RNParallax;