import React from 'react'
import { StyleSheet, Text, View, FlatList, } from "react-native"
import { ScrollView } from 'react-native-gesture-handler'
import CardComponent from './Card'
import SearchBar from './SearchBar'


const DATA = [
    {
        item_number: '1001',
        description: "Abraham Ortelius (1527-1598) was a Flemish cartographer whose Theatrum Orbis Terrarum (Theatre of the World) was regarded as the first modern atlas. In this 1570 map, the Malay Peninsula appears as an elongated extension of mainland Southeast Asia, and Singapore as an appendix, marked 'Cincapura', with a cluster of islets. As was common practice for the time, the map also has illustrations of mermaids and imaginary sea creatures.",
    },
    {
        item_number: '1002',
        description: "Although there are only a few historical sources that address Singapore's pre-colonial past, archaeology has helped to fill some of the gaps. Since 1984, archaeologists in Singapore have uncovered traces of pre-colonial Singapura or Temasek in the Singapore River and Fort Canning areas. This settlement flourished for about a hundred years between the 14th and 15 centuries. This was followed by a hiatus in the 165h century, before a brief revival in the 17th century. Over the years, archaeological excavations have revealed many remarkable finds. Some highlights which were recovered from 2001 to 2015 are displayed here. All objects in this showcase are courtesy of the Archaeology Unit, Institute of Southeast Asian Studies.",
    },
    {
        item_number: '1003',
        description: "10-14th centuries, Singapore River mouth, Inscribed sandstone.",
    },
    {
        item_number: '1004',
        description: "Where does Singapore's history begin?",
    },
]

function parseFlaskResponse(data) {
    if (data.type=="basic_response") {
      console.log(data.message)
    }else if (data.type=="filtered_response"){
      console.log(data.message)
    }else if (data.type=="error_response")
      console.log(data.message)
  }

export default function CardList() {
    const ScrollItems = DATA.map((item) =>
        <View style={{ flex: 1, backgroundColor: '#121212' }} key={item.item_number}>
        <CardComponent confidence_score={item.item_number} text={item.description} />
        </View>
    );
    return (
        <View style={styles.container__flatlist}>
            {ScrollItems}
        </View>
    )
}

const styles = StyleSheet.create({
    container__flatlist: {
        flex: 1,
        backgroundColor: '#121212',
    }
});

