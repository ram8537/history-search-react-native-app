import { Thumbnail } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";


export default function ListItem({ image_url, title, item_number }) {
    return (
            <View style={styles.container}>
                <View style={styles.container__thumbnail}>
                    <Thumbnail square medium source={{ uri: image_url }} />
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
        paddingLeft: 10,
        paddingTop: 5
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
        fontSize: 15
    },
    item_number: {
        color: '#FFFFFF',
        fontWeight: '100',
        fontSize: 14
    },
});
