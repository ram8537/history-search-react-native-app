import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NoSearchTerms() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Search results are more accurate when you include filters!
            </Text>

            <Text style={styles.text_subtitle}>
                Try swiping on an item first, or include the 4 digit number in your search
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    text: {
        color: 'white',
        fontSize: 20,
        padding:20,
    },
    text_subtitle:{
        color:'white',
        padding:20,
        fontSize:20,
        fontWeight:"300"
    }
});

