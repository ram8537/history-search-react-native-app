import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, ActivityIndicator } from "react-native";
import { Icon } from 'native-base';
import { useStateValue } from '../State/StateProvider';

export default function FaqPopUp() {
    const [modalVisible, setModalVisible] = useState(false);
    const [{ item_number, filter }, dispatch] = useStateValue();
    const [DATA, setData] = useState(null)
    const [modalAnswer, setModalAnswer] = useState(null)

    useEffect(() => {
        axios.get(`https://history-assistant-slack.ue.r.appspot.com/api/faq/${item_number}`)
            .then((response) => { setData(response.data); console.log("(FaqPopUp.js) useEffect to get FAQs from Django"); })
            .catch((error) => { console.log(error) })
    }, [item_number])

    //create one modal
    const modal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{modalAnswer}</Text>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#1ED760" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Icon type="MaterialCommunityIcons" name='arrow-down' style={{ color: 'white' }} />
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        )
    }


    const FAQs = () => {
        if (DATA) {
            return (DATA.map((item) =>
                <View style={styles.centeredView} key={item.answer}>
                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            setModalVisible(true)
                            setModalAnswer(item.answer);
                        }}
                    >
                        <Text style={styles.textStyle}>{item.question}</Text>
                    </TouchableHighlight>
                </View>
            ))
        }
        else { return (<ActivityIndicator style={{ paddingTop: 30 }} size="large" color="white" />) }

    }

    return (
        <View style={styles.centeredView}>
            <Text style={{color:'white', fontSize:20,fontWeight:'600'}}>Frequently asked questions</Text>
            {FAQs()}
            {modal()}
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#292929",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#292929",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        color: 'white',
        marginBottom: 15,
    }
});

