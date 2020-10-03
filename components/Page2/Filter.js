import React from 'react'
import { View, StyleSheet, Text} from 'react-native';
import {Badge} from "native-base"
export default function Filter() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Filter:</Text>
            <View>
            <Badge style={styles.badge}><Text style={styles.text__badge}>what's up</Text></Badge>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:14,
        paddingTop:4,
    },
    text:{
        color:'white',
        fontSize:15,
    },
    text__badge:{
        color:'black',
        fontWeight:"700"
    },
    badge: {
        marginLeft:5,
        backgroundColor:'#F780A9'
        // marginTop:10,
    }
});