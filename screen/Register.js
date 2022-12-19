import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function Register({ navigation }) {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userAge, setUserAge] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // const handleSubmit = () => {
    //     navigation.navigate('Login')
    // }

    return (
        <KeyboardAwareScrollView>
            <View style={styles.inner}>
                <Text style={styles.header}>Registration Form</Text>
                <View style={styles.btnContainer}>
                    <TextInput style={styles.textInput} value={userName}
                        placeholder="Enter Name" onChangeText={newText => setUserName(newText)} returnKeyType="next" />
                    <TextInput style={styles.textInput} value={userEmail}
                        placeholder="Enter Email" onChangeText={newText => setUserEmail(newText)} keyboardType="email-address" />
                    <TextInput style={styles.textInput} value={userAge}
                        placeholder="Enter Age" onChangeText={newText => setUserAge(newText)} keyboardType='numeric' />
                    <TextInput style={styles.textInput} value={userPassword}
                        placeholder="Enter Password" onChangeText={newText => setUserPassword(newText)} secureTextEntry={true} />
                    <TextInput style={styles.textInput} value={confirmPassword}
                        placeholder="Confirm Password" onChangeText={newText => setConfirmPassword(newText)} secureTextEntry={true} />
                </View>
                <Button title="Submit" onPress={() => {
                    navigation.navigate('Login', {
                        name: userName, password: confirmPassword,
                    })
                }} />
            </View>
        </KeyboardAwareScrollView>

    )
}

export default Register

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: 'oldlace',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // }
    // container: {
    //     flex: 1,
    // },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        paddingTop: 15,
        fontSize: 36,
        marginBottom: 45,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 10,
    },
})