import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native'

function Message({ route, navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Message</Text>
            {/* <Button title="G to Home" onPress={() =>  navigation.navigate('Home')}/>
            <Button title="G to Login" onPress={() =>  navigation.popToTop()}/> */}
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25
    },
})