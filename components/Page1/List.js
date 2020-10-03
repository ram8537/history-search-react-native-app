import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, } from "react-native"
import * as Haptics from 'expo-haptics';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useStateValue } from '../State/StateProvider';
import ListItem from './ListItem'
import { Icon } from 'native-base'
import { actionTypes } from '../State/reducer';


const DATA = [
    {
        item_number: '1001',
        title: "Abraham Ortelius's map",
        image_url: "https://cloud-object-storage-zn-cos-standard-nlt.s3.jp-tok.cloud-object-storage.appdomain.cloud/map.jpg",
        description: "Abraham Ortelius (1527-1598) was a Flemish cartographer whose Theatrum Orbis Terrarum (Theatre of the World) was regarded as the first modern atlas. In this 1570 map, the Malay Peninsula appears as an elongated extension of mainland Southeast Asia, and Singapore as an appendix, marked 'Cincapura', with a cluster of islets. As was common practice for the time, the map also has illustrations of mermaids and imaginary sea creatures.",
    },
    {
        item_number: '1002',
        title: "Archaeology",
        image_url: "https://cloud-object-storage-zn-cos-standard-nlt.s3.jp-tok.cloud-object-storage.appdomain.cloud/1002_arch.jpg",
        description: "Although there are only a few historical sources that address Singapore's pre-colonial past, archaeology has helped to fill some of the gaps. Since 1984, archaeologists in Singapore have uncovered traces of pre-colonial Singapura or Temasek in the Singapore River and Fort Canning areas. This settlement flourished for about a hundred years between the 14th and 15 centuries. This was followed by a hiatus in the 165h century, before a brief revival in the 17th century. Over the years, archaeological excavations have revealed many remarkable finds. Some highlights which were recovered from 2001 to 2015 are displayed here. All objects in this showcase are courtesy of the Archaeology Unit, Institute of Southeast Asian Studies.",
    },
    {
        item_number: '1003',
        title: "Singapore Stone",
        image_url: "https://cloud-object-storage-zn-cos-standard-nlt.s3.jp-tok.cloud-object-storage.appdomain.cloud/1003_stone.jpg",
        description: "10-14th centuries, Singapore River mouth, Inscribed sandstone.",
    },
    {
        item_number: '1004',
        title: "Singapura 1299-1818",
        image_url: "https://cloud-object-storage-zn-cos-standard-nlt.s3.jp-tok.cloud-object-storage.appdomain.cloud/1004_statue_sangnilaautama.jpg",
        description: "Where does Singapore's history begin?",
    },
]


function RightActions() {
    Haptics.selectionAsync()
    return (
        <View style={{ backgroundColor: '#292929', flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                <Icon type='MaterialIcons' name="search" style={{ color: 'white' }} />
                <Text style={{ color: 'white', paddingRight: 3 }}>Search</Text>
            </View>
        </View>
    )
}


export default function List() {
    const [item_number, dispatch] = useStateValue();

    const RightOpened = (chosen_item) => {
        console.log(chosen_item)
        dispatch({
            type: actionTypes.SET_ITEM_NUMBER,
            item_number:chosen_item,
        })
    }

    const ScrollItems = DATA.map((item) =>
        <Swipeable renderRightActions={RightActions} onSwipeableRightOpen={() => RightOpened(item.item_number)} key={item.item_number}>
            <View style={{ flex: 1, backgroundColor: '#121212' }}>
                <ListItem image_url={item.image_url} title={item.title} item_number={item.item_number} />
            </View>
        </Swipeable>
    );

    return (
        <SafeAreaView style={styles.container}>
            {ScrollItems}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    }
});

