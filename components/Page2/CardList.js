import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Linking, Text } from "react-native";
import { Button, Icon, View } from 'native-base';
import { useStateValue } from '../State/StateProvider';
import CardComponent from './Card';


function googleSearch(query) {
    url = `https://www.google.com/search?q=${query}`
    return (
        <View style={{ flexDirection: "column", margin: 15 }}>
            <Text style={{ color: "white", paddingBottom: 10, }}>There were no results for your query: "{query}"</Text>
            <Button style={{ backgroundColor: "#292929", paddingRight: 20, justifyContent: "center", alignItems: "center" }} onPress={() => { Linking.openURL(url) }}>
                <Icon type="AntDesign" name='google' style={{ color: "#F780A9" }} />
                <Text style={{ color: "white" }}>Google Search</Text>
            </Button>
        </View>
    )
}

function parseFlaskResponse(django, error_message) {
    if (django.type == "basic_response") {
        console.log("received basic response")
        return <CardComponent text={django.message} />
    }
    else if (django.type == "filtered_response") {
        console.log("received filtered response")
        console.log(django.message)

        const ScrollItems = django.message.map((item) =>
            <CardComponent key={item.confidence_score} confidence_score={item.confidence_score} text={item.text} />);

        return (
            <ScrollView style={styles.container}>
                {django.message.length != 0 ? ScrollItems : googleSearch(error_message) }
            </ScrollView>
        )
    } else if (django.type == "error_message") {
        console.log("received error message");
        return (googleSearch(query = error_message))
    }
    else {
        console.log(django.message);
        return <CardComponent text={django.message} />
    }
}



export default function CardList() {
    const [{ term, item_number, filter }, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null);
    const [flaskresponse, setFlaskResponse] = useState(null);

    useEffect(() => {
        setLoading(true)
        const djangoMessage = (filter ? (term + " " + item_number) : term)

        console.log("(cardlist.js) django message is:", djangoMessage)
        axios.get('https://history-assistant-slack.ue.r.appspot.com/api/watson', {
            params: {
                message: djangoMessage
            }
        })
            .then((response) => setFlaskResponse(parseFlaskResponse(django = response.data, error_message = term)))
            .then(() => setLoading(false))
            .catch((error) => console.error(error))
    }, [term])

    return (loading ? <ActivityIndicator style={{ paddingTop: 30 }} size="large" color="white" /> : flaskresponse)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    }
});