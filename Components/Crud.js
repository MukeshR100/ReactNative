import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import EditList from "./EditList.js";

function Crud() {
    const initialId = 1;
    const [list, setList] = useState([])
    const [listVal, setListVal] = useState({
        id: initialId,
        name: '',
        age: ''
    })
    const valSubmit = () => {
        // console.log(list)
        console.log("empId",listVal.id)
        if(listVal.name && listVal.age){
            setList([...list, listVal])
            setListVal({
                id: listVal.id + 1,
                name: '',
                age: ''
            })
        }
    }
    const [update, setUpdate] = useState(-1)

    const handleEdit = (id) => {
        setUpdate(id)
    }

    const updateData = (updatedData) => {
        const newList = list.map(emp => {
            if (emp.id === updatedData.id) {
                return {
                    id: updatedData.id,
                    name: updatedData.name,
                    age: updatedData.age
                }
            }
            else {
                return emp
            }
        })
        setList(newList)
        setUpdate(-1)
    }
    const handleDelete = (empId) => {
        console.log("dlt",empId)
        const newList = list.filter(emp => emp.id !== empId)
        setList(newList)
    }
    return (
        <View >
            <View style={styles.header}>
                <Text style={styles.title}>Employee Details</Text>
                {/* <Ionicons name="call" size={32} color="red" /> */}
            </View>
            {/* <DetailView text="Id :" value={listVal.id} /> */}
              
            <DetailView text="Name :" placeholder="Enter name" value={listVal.name} type
                onchange={newText => setListVal({ ...listVal, name: newText })} />
            <DetailView text="Age :" placeholder="Enter age" value={listVal.age}
                onchange={newText => setListVal({ ...listVal, age: newText })} keyboardType="numeric"/>
            <View style={styles.Button}>
                <Button onPress={valSubmit} title="Add" />
            </View>
            <View style={styles.content}>
                <FlatList
                    data={list}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (update === item.id ? <EditList list={item} handleUpdate={updateData} /> :
                        <View style={styles.text}>
                            <Text style={{ fontSize:18,flex:1 }}>{item.id}   {item.name}   {item.age}  </Text>
                            {/* <Button title="Edit" onPress={() => handleEdit(item.id)} /> */}
                            {/* <Button title="Delete" onPress={() => handleDelete(item.id)} /> */}
                            <TouchableOpacity onPress={() => handleEdit(item.id)}>
                                <Ionicons name="create-outline" size={23} color="black"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleDelete(item.id)}>
                                <Ionicons name="close-circle" size={23} color="black"/>
                            </TouchableOpacity>
                        </View> 
                    )}
                />
            </View>
        </View>
    )
}

const DetailView = ({ text, placeholder, value, onchange, keyboardType}) => {
    return (
        <View style={styles.content}>
            <Text style={{ fontSize:24 }}>{text}</Text>
            <TextInput style={{ padding:4,backgroundColor:'white',borderRadius:10 }} value={value} onChangeText={onchange}
                placeholder={placeholder} keyboardType={keyboardType}/>
        </View>
    )
}

export default Crud

const styles = StyleSheet.create({
    content: {
        padding: 5,
        marginTop:20,
        // paddingTop:5,
        flexDirection: 'row',
        justifyContent:'flex-start',
        marginLeft: 125
    },
    text : {
        // fontSize: 28,
        // alignItems:'center',
        flexDirection:'row',
        padding:5,
        justifyContent:'space-around'
    },
    header: {
        height: 85,
        padding: 28,
        backgroundColor: 'steelblue'
        
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    Button: {
        paddingHorizontal: 100

    },
});