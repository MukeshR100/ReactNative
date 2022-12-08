import React, { useState, useEffect } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

    const EditList = (list) => {
        const [updateState, setUpdateState] = useState({
            id: '',
            name: '',
            age: ''
        });
        useEffect(() => {
            setUpdateState({
                id: list.list.id,
                name: list.list.name,
                age: list.list.age
            })
        }, [list])
        console.log("updated", list)
        return (
            <View style={styles.update}>
                {/* <TextInput style={styles.edit} value={updateState.id}
                    onChangeText={newText => setUpdateState({ ...updateState, id: newText })} /> */}
                <TextInput style={styles.edit} value={updateState.name}
                    onChangeText={newText => setUpdateState({ ...updateState, name: newText })} />
                <TextInput style={styles.edit} value={updateState.age}
                    onChangeText={newText => setUpdateState({ ...updateState, age: newText })} keyboardType="numeric"/>
                {/* <Button title="Update" onPress={() => list.handleUpdate(updateState)} /> */}
                <TouchableOpacity onPress={() => list.handleUpdate(updateState)}>
                    <Ionicons name="checkmark-circle" size={23} color="black"/>
                </TouchableOpacity>
            </View>
        )
    }


export default EditList
const styles = StyleSheet.create({
    edit: {
        borderWidth: 1,
        padding:4,
        backgroundColor:'white',
        borderRadius:10
    },
    update: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        padding:5,
        alignItems:'center'
    }
})