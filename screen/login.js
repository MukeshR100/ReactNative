import React, { useEffect, useState } from "react";
import { TextInput, View, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text, Pressable, Modal } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import ForgotPassword from "../components/ForgotPassword";
import './Home'

function Login({ route, navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorText, setErrorText] = useState('')
    const [bool, setBool] = useState(false)
    const [regUserName, setRegUserName] = useState('')
    const [regUserPwd, setUserPwd] = useState('')

    useEffect(() => {
        setErrorText('')
        if (route.params) {
            const name = route.params.name;
            const password = route.params.password;
            setRegUserName(name)
            setUserPwd(password)
        }
    }, [route])

    // useEffect(()=>{
    //     setErrorText('')
    // },[email,password])

    const handleLogin = (email, password) => {
        setErrorText('')
        if (email == regUserName && password == regUserPwd) {
            console.log("login", email, password)
            navigation.navigate('Home')

        } else {
            console.log("wrong")
            setErrorText('Please check your user id or password')
        }
        setEmail('')
        setPassword('')
    }
    const updatedBool = () => {
        setBool(false)
    }

    const handlRegister = () => {
        console.log("register..")
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View >
                        <View style={styles.content}>
                            <Ionicons name="person-circle" size={30} color="black" style={{ marginBottom: 20 }} />
                            <TextInput style={styles.inputView} value={email} placeholder="User Id" onChangeText={newText => setEmail(newText)} />
                        </View>
                        <View style={styles.content}>
                            <Ionicons name="lock-closed" size={30} color="black" style={{ marginBottom: 20 }} />
                            <TextInput style={styles.inputView} value={password} placeholder="Password" onChangeText={newText => setPassword(newText)} secureTextEntry={true} />
                        </View>
                        <TouchableOpacity onPress={() => setBool(true)}>
                            <Text style={styles.forgotButton}>Forgot Password ?</Text>
                        </TouchableOpacity>
                        {/* <Pressable essable onPress={() => setBool(true)}>
                            <Text style={styles.forgotButton}>Forgot Password ?</Text>
                        </Pressable> */}
                        {errorText != '' ? (
                            <Text style={styles.errorTextStyle}>
                                {errorText}
                            </Text>
                        ) : null
                        }
                        <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin(email, password)}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlRegister}>
                            <Text style={styles.RegisterBtn}>New Here ? Register</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <ForgotPassword boolean={bool} updated={updatedBool} />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'oldlace',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        backgroundColor: "coral",
        borderRadius: 20,
        height: 45,
        width: '70%',
        marginBottom: 20,
        padding: 10,
        textAlign: 'center',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: "center",
        marginLeft: 25
    },
    forgotButton: {
        // height:30,
        // marginBottom:30
    },
    loginBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#FF1493',
        borderRadius: 30,
        height: 40,
    },
    RegisterBtn: {
        textAlign: 'center',
        marginTop: 10,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
        paddingTop: 10,
    },
})