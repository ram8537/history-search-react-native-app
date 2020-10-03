import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image, Platform } from "react-native"
import { Button, Icon,} from 'native-base';
import { useStateValue } from "../State/StateProvider"
import { actionTypes } from "../State/reducer"
import * as Haptics from 'expo-haptics';


export default function SearchBar() {
    const [term, dispatch] = useStateValue();
    const [userInput, setUserInput] = useState(null)

    const onSubmit = (userInput) => {
        console.log("(SearchBar.js) the user input being pushed to data layer is:",userInput);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: userInput
        });
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', flex:1}}>
            <TextInput style={styles.textInput}
                placeholder="Search"
                placeholderTextColor="black"
                keyboardAppearance="dark"
                clearButtonMode="always"
                onEndEditing={(e) => setUserInput (e.nativeEvent.text)}
            />
            </View>

            <View>
                <Button style={{backgroundColor:'#62A4F7'}} onPress={(e) => {onSubmit(userInput); Haptics.selectionAsync()}}>
                    <Icon type="MaterialCommunityIcons" name='ship-wheel'/>
                </Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        marginTop: 30,
        marginBottom: 5,
        marginRight:10,
    },
    textInput: {
        flex:1,
        marginHorizontal: 11,
        backgroundColor: '#1ED760',
        color: 'white',
        fontWeight: 'bold',
        padding: 15,
        borderRadius: 10,
        borderColor: '#292929'
    }
});

