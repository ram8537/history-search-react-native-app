import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import { useStateValue } from '../State/StateProvider';
import CardComponent from './Card';

function parseFlaskResponse(data) {
    if (data.type == "basic_response") {
        console.log("received basic response")
        return <CardComponent text={data.message} />
    }
    else if (data.type == "filtered_response") {
        console.log("received filtered response")
        const ScrollItems = data.message.map((item) =>
            <CardComponent key={item.confidence_score} confidence_score={item.confidence_score} text={item.text} />);
        return (
            <ScrollView style={styles.container}>
                {ScrollItems}
            </ScrollView>
        )
    } else {
        console.log(data.message);
        return <CardComponent text={data.message} />
    }
}

const url = 'https://history-assistant-slack.ue.r.appspot.com'


export default function CardList() {
    const [{ term, item_number, filter }, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null);
    const [flaskresponse, setFlaskResponse] = useState(null);

    useEffect(() => {
        setLoading(true)
        const flaskMessage = (filter ? (term + " " + item_number) : term)

        console.log("(cardlist.js) flask message is:", flaskMessage)
        const sendFlaskMessage = { message: flaskMessage }


        axios.post(url, sendFlaskMessage)
            .then((response) => setFlaskResponse(parseFlaskResponse(response.data)))
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