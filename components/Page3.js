import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { StyleSheet, View } from "react-native";
import DetailViewCard from './Page3/DetailViewCard';
import NoItemSelected from './Page3/NoItemSelected';
import { useStateValue } from './State/StateProvider';

function retriveItem(chosenItem) {
    const retrievedItem = DATA.find(({ item_number }) => item_number === chosenItem);
    return retrievedItem
}

export default function Page3() {
    [{ item_number, filter }] = useStateValue();
    const [DATA, setData] = useState(null)

    useEffect(() => {
        axios.get(`https://history-assistant-slack.ue.r.appspot.com/api/${item_number}`)
            .then((response) => { setData(response.data); console.log("(list.js) useEffect to get data from Django"); })
            .catch((error) => { console.log(error) })
    }, [item_number])

    console.log(DATA)
    return (
        <View style={styles.container}>
            {DATA && filter ? <DetailViewCard item_number={item_number} item={DATA} /> : <NoItemSelected />}
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
});

