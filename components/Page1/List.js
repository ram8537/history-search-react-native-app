import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import * as Haptics from 'expo-haptics';
import { Icon } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import DetailViewCard from './DetailViewCard';
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

export default function List() {
    const [{ item_number, filter }, dispatch] = useStateValue();
    const [DATA, setData] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalItem, setModalItem] = useState()

    useEffect(() => {
        axios.get('https://history-assistant-slack.ue.r.appspot.com/api/')
            .then((response) => { setData(response.data); console.log("(list.js) useEffect to get listview from Django"); })
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


    const renderModal = () => {
        console.log("(modal item is)", modalItem)
        return (
            <Modal animationType="slide" presentationStyle="overFullScreen" transparent={true} visible={modalVisible} onRequestClose={() => { Alert.alert("Modal has been closed."); }}>
                <View style={styles.centeredView}>


                    <DetailViewCard item={modalItem} />
                    <TouchableHighlight
                        style={{ backgroundColor: '#121212', elevation: 2, alignItems: "center" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={{ flexDirection: "row", marginTop: 40 }}>
                            <Text style={{ color: 'white', fontSize: 17 }}>Close</Text>
                            <Icon type="MaterialCommunityIcons" name='chevron-triple-down' style={{ color: '#F780A9', fontSize: 25 }} />
                        </View>
                    </TouchableHighlight>


                </View>
            </Modal>
        )
    }

    const ScrollItems = () => {
        if (DATA) {
            return (DATA.map((item) =>
                <Swipeable renderRightActions={RightActions} onSwipeableRightOpen={() => openRight(item)} key={item.item_number} >
                    <View style={{ flex: 1, backgroundColor: '#121212', flexDirection: "row", alignItems: "center" }}>
                        <ListItem image_url={item.image} title={item.title} item_number={item.item_number} />
                        <TouchableHighlight onPress={() => {setModalVisible(true); setModalItem(item) }}>
                            <Icon type="MaterialCommunityIcons" name='anchor' style={{ color: '#F780A9', fontSize: 25, paddingRight: 4, }} />
                        </TouchableHighlight>
                    </View>
                </Swipeable>
            ))
        }
        else { return (<ActivityIndicator style={{ paddingTop: 30 }} size="large" color="white" />) }
    }

    return (
        <View style={styles.container}>
            {ScrollItems()}
            {renderModal()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    centeredView: {
        flex: 1,
    },

});

