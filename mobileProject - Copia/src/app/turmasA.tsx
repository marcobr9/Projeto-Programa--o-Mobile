import { useState } from "react"
import {View,Text, StyleSheet, Alert} from "react-native"
import { Button } from "../components/button"
import { router } from "expo-router"

export default function turmasA(){


    function paginaTurma(opcaoA: string){
        if(opcaoA==="A"){
            router.navigate("/segundaA");
        }else if(opcaoA==="B"){
            router.navigate("/tercaA")
        }else if(opcaoA==="C"){
            router.navigate("/quartaA")
        }else if(opcaoA==="D"){
            router.navigate("/quintaA")
        }else if (opcaoA==="E"){
            router.navigate("/sextaA")
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Horario Turma A!</Text>



            <Button title="Segunda" onPress={() => paginaTurma("A")} />
            <Button title="Terça" onPress={() => paginaTurma("B")} />
            <Button title="Quarta" onPress={() => paginaTurma("C")} />
            <Button title="Quinta" onPress={() => paginaTurma("D")} />
            <Button title="Sexta" onPress={() => paginaTurma("E")} />
            
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