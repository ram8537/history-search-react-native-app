import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Icon, Button } from 'native-base';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';

export default function NoItemSelected() {
    const navigation = useNavigation();
    return (
        <ScrollView styles={{backgroundColor:'#121212'}}>
        <View style={styles.container}>

            <Text style={styles.text}>You haven't swiped on an item yet.</Text>
            <Button style={styles.button_itemsPage} onPress={() => {Haptics.selectionAsync(); navigation.navigate('Page1') }}>
                <Text style={styles.text}>Back to items page</Text>
                <Icon type="MaterialCommunityIcons" name='pirate' style={styles.icon} />
            </Button>
            <Button style={styles.button_searchPage} onPress={() => {Haptics.selectionAsync(); navigation.navigate('Page2') }}>
                <Text style={styles.text}>Try a search</Text>
                <Icon type="MaterialCommunityIcons" name='ship-wheel' style={styles.icon} />
            </Button>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 20,
        backgroundColor: '#121212',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight:"700"
    },
    button_itemsPage: {
        backgroundColor: '#1ED760',
        marginTop:20,
        height: 100,
        width: 350,
        padding: 20,
    },
    button_searchPage: {
        backgroundColor: '#F780A9',
        marginTop:20,
        height: 100,
        width: 350,
        padding: 20,
    },
    icon : {
        fontSize: 50,
    }
});

