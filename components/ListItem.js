import React from 'react'
import { StyleSheet, Text, View, Animated } from "react-native"
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Thumbnail } from 'native-base'
import { render } from 'react-dom';
import { RectButton } from 'react-native-gesture-handler';


export default function ListItem({ image_url, title, item_number }) {
    return (
            <View style={styles.container}>
                <View style={styles.container__thumbnail}>
                    {/* <Thumbnail square medium source={{ uri: image_url }} /> */}
                </View>
                <View style={styles.container__text} >
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.item_number}>{item_number}</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
    },
    container__thumbnail: {
        paddingRight: 6
    },
    container__text: {
        justifyContent: 'space-evenly'
    },
    title: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 19
    },
    item_number: {
        color: '#FFFFFF',
        fontWeight: '100',
        fontSize: 15
    },
});
