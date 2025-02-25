import { useState } from "react"
import {View,Text, StyleSheet, Alert} from "react-native"
import { Button } from "../components/button"
import {Input} from"../components/input"
import { router } from "expo-router"

export default function Index(){

    const [name, setName]= useState<string>()

    function turmas(opcao:string){
        if(opcao==="A"){
            router.navigate("/turmasA")
        }else if(opcao==="B"){
            router.navigate("/turmaB")
        }else if(opcao==="C"){
            router.navigate("/turmaC")
        }
}

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Turmas: </Text>


            <Button title="Turma A" onPress={() =>turmas("A")}/>
            <Button title="Turma B" onPress={() =>turmas("B")}/>
            <Button title="Turma C" onPress={() =>turmas("C")}/>

        </View>

    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:16,
        padding:32,
        justifyContent:'center'
    },
    title: {
        color:'red',
        fontSize: 24,
        fontWeight: 'bold'
    }
})