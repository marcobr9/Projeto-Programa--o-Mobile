import { useState } from "react"
import {View,Text, StyleSheet, Alert} from "react-native"
import { Button } from "../components/button"
import { router } from "expo-router"

export default function turmaB(){


    function paginaTurmaB(opcaoA: string){
        if(opcaoA==="A"){
            router.navigate("/segundaB");
        }else if(opcaoA==="B"){
            router.navigate("/tercaB")
        }else if(opcaoA==="C"){
            router.navigate("/quartaB")
        }else if(opcaoA==="D"){
            router.navigate("/quintaB")
        }else if (opcaoA==="E"){
            router.navigate("/sextaB")
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Horario Turma B!</Text>



            <Button title="Segunda" onPress={() => paginaTurmaB("A")} />
            <Button title="Terça" onPress={() => paginaTurmaB("B")} />
            <Button title="Quarta" onPress={() => paginaTurmaB("C")} />
            <Button title="Quinta" onPress={() => paginaTurmaB("D")} />
            <Button title="Sexta" onPress={() => paginaTurmaB("E")} />
            
            <Button title='Voltar' onPress={()=> router.back()}/>

        </View>

        )
    }

export const styles = StyleSheet.create({
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