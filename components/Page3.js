import React from 'react';
import { StyleSheet, View } from "react-native";
import DetailViewCard from './Page3/DetailViewCard';
import NoItemSelected from './Page3/NoItemSelected';
import { useStateValue } from './State/StateProvider';

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
    {
        item_number: '1005',
        title: "Orang Laut",
        image_url: "https://cloud-object-storage-zn-cos-standard-nlt.s3.jp-tok.cloud-object-storage.appdomain.cloud/1005_oranglaut.jpg",
        description: "The Orang Laut ('sea people') in Malay have lived in Singapore since at least the 14th century. Some communities survived up to the 1960s in the estuaries of mainland Singapore and it's offshore islands.",
    },
    {
        item_number: '1006',
        title: "Singapore's maritime lifeline",
        image_url: "https://cloud-object-storage-zn-cos-standard-nlt.s3.jp-tok.cloud-object-storage.appdomain.cloud/1006_singaporeriver.jpg",
        description: "Singapore lies at the confluence of the seasonal monsoons, which the people in the Malay Archipelago relied on to travel from island to island.",
    },
    {
        item_number: '1008',
        title: "Porcelain jars",
        image_url: "https://cloud-object-storage-zn-cos-standard-nlt.s3.jp-tok.cloud-object-storage.appdomain.cloud/1008_porcelain.jpg",
        description: "Stoneware and porcelain from the 14th century",
    },
    {
        item_number: '1009',
        title: "Spongebob",
        image_url: "https://cloud-object-storage-zn-cos-standard-nlt.s3.jp-tok.cloud-object-storage.appdomain.cloud/spongebob1.jpg",
        description: "Who lives in a pineapple under the sea?",
    },
    {
        item_number: '1010',
        title: "Patrick",
        image_url: "https://cloud-object-storage-zn-cos-standard-nlt.s3.jp-tok.cloud-object-storage.appdomain.cloud/patrick.jpeg",
        description: " Maybe a story will cheer you up...Once upon a time there was an ugly barnacle. It was so ugly that everyone died. The end",
    },
    {
        item_number: '1011',
        title: "Mr Krabs",
        image_url: "https://cloud-object-storage-zn-cos-standard-nlt.s3.jp-tok.cloud-object-storage.appdomain.cloud/krabs.jpg",
        description: "I can think of ten good reasons to never let go of a dime, boy.",
    },
    {
        item_number: '1012',
        title: "Squidward",
        image_url: "https://cloud-object-storage-zn-cos-standard-nlt.s3.jp-tok.cloud-object-storage.appdomain.cloud/squidward.png",
        description: "Wake me up when I care",
    },
]

function retriveItem(chosenItem) {
    const retrievedItem = DATA.find(({ item_number }) => item_number === chosenItem);
    return retrievedItem
}

export default function Page3() {

    [{ item_number, filter }] = useStateValue();
    const item = retriveItem(item_number)

    return (
        <View style={styles.container}>
            {item && filter ? <DetailViewCard item_number={item_number} item={item} /> : <NoItemSelected />}
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
});

