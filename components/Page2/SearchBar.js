import React, {useEffect, useState}  from 'react'
import { View, Text, StyleSheet, TextInput, Image,} from "react-native"
import axios from 'axios';



function SearchBar() {
    const [data, setData] = useState();
    const onSubmit = (userInput) => {
        const sendFlaskMessage = {message: userInput}
        axios.post('https://921c16b4ece7.ngrok.io', sendFlaskMessage)
        .then((response) => setData(response.data))
        .catch((error) => console.error(error))
    };
    console.log(JSON.stringify(data))
    
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
