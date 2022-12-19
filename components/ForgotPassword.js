import React, { useEffect, useState } from "react";
import { Modal, View, StyleSheet, Alert, Pressable, Text } from 'react-native'

const ForgotPassword = (props) => {
    const [modalVisible, setModalVisible] = useState(props.boolean)
    // console.log("forgot",modalVisible)

    useEffect(() => {
        setModalVisible(props.boolean)
    }, [props])

    return (
        // <View style={ styles.centeredView }>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Are u sure.")
                setModalVisible(!modalVisible)
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>Unable to change the password</Text>
                    <Pressable style={[styles.button, styles.buttonClose]}
                        onPress={() => { setModalVisible(!modalVisible), props.updated(modalVisible) }}>
                        <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        //</View>
    )

}
export default ForgotPassword

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 5
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
})