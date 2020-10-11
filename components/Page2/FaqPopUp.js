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

    const modal = () => {
        return (
            <Modal
                animationType="slide"
                presentationStyle="overFullScreen"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{modalAnswer}</Text>
                    <TouchableHighlight
                        style={{ backgroundColor: '#292929', elevation: 2, alignItems: "center" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={{ flexDirection: "row", marginTop: 40 }}>
                            <Text style={{ color: 'white', alignItems:"flex-end" }}>Close</Text>
                            <Icon type="MaterialCommunityIcons" name='chevron-triple-down' style={{ color: '#F780A9', fontSize: 25 }} />
                        </View>
                    </TouchableHighlight>
                </View>
            </Modal>
        )
    }

    //not visible
    const FAQs = () => {
        if (DATA) {
            return (DATA.map((item) =>
                <View style={styles.faq} key={item.answer}>
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
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>Frequently asked questions</Text>
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
        marginTop: 22,
    },
    faq: {
        alignItems:"center",
        marginTop:20,
    },
    modalView: {
        backgroundColor: "#292929",
        marginTop:400,
        margin:20,
        padding:25,
        borderRadius:20,
        paddingTop: 20,
        paddingHorizontal: 20,
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
        textAlign: "center",
    },
    modalText: {
        color: 'white',
        marginBottom: 15,
        marginTop:20,
        fontSize: 16,
    }
});

