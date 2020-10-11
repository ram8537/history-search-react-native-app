import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import * as Haptics from 'expo-haptics';
import { Icon } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { actionTypes } from '../State/reducer';
import { useStateValue } from '../State/StateProvider';
import ListItem from './ListItem';

function RightActions() {
    Haptics.selectionAsync()
    return (
        <View style={{ backgroundColor: '#292929', flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                <Icon type='MaterialCommunityIcons' name="ship-wheel" style={{ color: 'white' }} />
                <Text style={{ color: 'white', paddingRight: 3 }}>Search</Text>
            </View>
        </View>
    )
}
function LeftActions() {
    Haptics.selectionAsync()
    return (
        <View style={{ backgroundColor: '#1ED760', flex: 1, flexDirection: 'column-reverse', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon type='MaterialCommunityIcons' name="anchor" style={{ color: 'white' }} />
                <Text style={{ color: 'black', paddingRight: 3, fontWeight: "700" }}>Details</Text>
            </View>
        </View>
    )
}

export default function List() {
    const [{ item_number, filter }, dispatch] = useStateValue();
    const [DATA, setData] = useState(null)

    useEffect(() => {
        axios.get('https://history-assistant-slack.ue.r.appspot.com/api/')
            .then((response) => { setData(response.data); console.log("(list.js) useEffect to get data from Django"); })
            .catch((error) => { console.log(error) })
    }, [])

    const dispatchActions = ({ item_number, title, image_url, description }) => {
        dispatch({
            type: actionTypes.SET_ITEM_NUMBER,
            item_number: item_number,
        })
        dispatch({
            type: actionTypes.SET_FILTER_STATE,
            filter: true,
        })
    }

    const navigation = useNavigation();

    const openRight = (item) => {
        console.log("(listjs) swipe open right")
        navigation.navigate('Page2')
        dispatchActions(item)
    }

    const openLeft = (item) => {
        console.log("(listjs) swipe open left")
        navigation.navigate('Page3')
        dispatchActions(item)
    }

    const ScrollItems = () => {
        if (DATA) {
            return (DATA.map((item) =>
                <Swipeable renderRightActions={RightActions} onSwipeableRightOpen={() => openRight(item)} key={item.item_number} renderLeftActions={LeftActions} onSwipeableLeftOpen={() => openLeft(item)}>
                    <View style={{ flex: 1, backgroundColor: '#121212' }}>
                        <ListItem image_url={item.image} title={item.title} item_number={item.item_number} />
                    </View>
                </Swipeable>
            ))
        }
        else {return(<ActivityIndicator style={{ paddingTop: 30 }} size="large" color="white" />)}
    }

    return (
        <View style={styles.container}>
            {ScrollItems()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    }
});

