import React from 'react'
import { View, Text, StyleSheet, TextInput, Image,} from "react-native"



function SearchBar() {
   
    return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    placeholder="Search"
                    placeholderTextColor="black"
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
        backgroundColor: '#1ED760',
        color: 'white',
        fontWeight:'bold',
        padding: 15,
        borderRadius: 10,
        borderColor:'#292929'
    }
});

export default SearchBar
