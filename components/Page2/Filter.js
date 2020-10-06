import { Badge, Icon } from "native-base";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { actionTypes } from '../State/reducer';
import { useStateValue } from '../State/StateProvider';


export default function Filter() {
    const [{ item_number }, dispatch] = useStateValue();

    const removeFilter = (item_number) => {
        console.log("(filter.js) the item number being removed is", item_number)
        dispatch({
            type: actionTypes.SET_FILTER_STATE,
            filter: false,
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Filter:</Text>
            <View>
                <Badge style={styles.badge} >
                    <Text style={styles.text__badge}>{item_number}</Text>
                    <Icon type="MaterialCommunityIcons" style={{ color: 'white', fontSize: 15, marginLeft: 5 }} name='sword-cross' onPress={(e) => removeFilter(item_number)} />
                </Badge>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 14,
        paddingTop: 4,
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
    text__badge: {
        color: 'black',
        fontWeight: "700"
    },
    badge: {
        flexDirection: 'row',
        marginLeft: 5,
        backgroundColor: '#F780A9',
        alignItems: 'center'
    }
});