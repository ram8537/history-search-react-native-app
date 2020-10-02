import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image, } from "react-native"
import axios from 'axios';
import {useStateValue} from "../State/StateProvider"
import {actionTypes} from "../State/reducer"


function SearchBar() {
    const [term, dispatch] = useStateValue();

    const onSubmit = (userInput) => {
        console.log(userInput);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: userInput
        });
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput}
                placeholder="Search"
                placeholderTextColor="black"
                keyboardAppearance="dark"
                clearButtonMode="always"
                onSubmitEditing={(event) => onSubmit(event.nativeEvent.text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textInput: {
        flex: 1,
        height: 50,
        marginTop: 30,
        marginBottom: 5,
        marginHorizontal: 11,
        backgroundColor: '#1ED760',
        color: 'white',
        fontWeight: 'bold',
        padding: 15,
        borderRadius: 10,
        borderColor: '#292929'
    }
});

export default SearchBar
