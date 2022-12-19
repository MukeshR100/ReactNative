import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from 'react-native'
import './Feed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from "./Feed";
import Message from "./Message";
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function Home({ route, navigation }) {
    // const {name} = route.params;

    const [count, setCount] = React.useState(0)

    // React.useEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <Button onPress={() => setCount(c => c + 1)} title='Update count' />
    //         ),
    //     })
    // }, [navigation])

    return (
        // <View style={styles.container}>
        //     <Text style={styles.text}>Welcome :</Text>
        //     {/* <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} /> */}
        //     {/* <Button title="Go to home" onPress={()=> navigation.goBack('Login')} />
        //         <Button title="Go to login page" onPress={() => navigation.popToTop()} /> */}
        // </View>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    }
                    else if (route.name === 'Message') {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name='Feed' component={Feed} />
            <Tab.Screen name='Message' component={Message} />
        </Tab.Navigator>
    )
}
export default Home

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