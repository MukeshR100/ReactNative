import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native'
import './Message'

function Feed({ route, navigation }) {
    // const  {paramKey} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Feed</Text>
            {/* <Button
                title="Go to Message"
                onPress={() => navigation.navigate('Message')}
            /> */}
        </View>
    )
}

export default Feed

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