import React from 'react'
import { View, Text, StyleSheet, TextInput, Image,} from "react-native"



function SearchBar() {
   
    return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    placeholder="Search"
                    placeholderTextColor="#8F8F8F"
                    keyboardAppearance="dark"
                    clearButtonMode="always"/>
            </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    textInput: {
        flex: 1,
        height: 50,
        marginTop: 30,
        marginBottom: 5,
        marginHorizontal: 11,
        backgroundColor: '#292929',
        color: 'white',
        padding: 15,
        borderRadius: 100,
    }
});

export default SearchBar
