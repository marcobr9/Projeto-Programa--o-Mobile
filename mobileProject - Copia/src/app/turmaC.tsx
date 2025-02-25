import { useState } from "react"
import {View,Text, StyleSheet, Alert} from "react-native"
import { Button } from "../components/button"
import { router } from "expo-router"

export default function turmaC(){


    function paginaTurmaC(opcaoA: string){
        if(opcaoA==="A"){
            router.navigate("/segundaC");
        }else if(opcaoA==="B"){
            router.navigate("/tercaC")
        }else if(opcaoA==="C"){
            router.navigate("/quartaC")
        }else if(opcaoA==="D"){
            router.navigate("/quintaC")
        }else if (opcaoA==="E"){
            router.navigate("/sextaC")
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Horario Turma C!</Text>



            <Button title="Segunda" onPress={() => paginaTurmaC("A")} />
            <Button title="Terça" onPress={() => paginaTurmaC("B")} />
            <Button title="Quarta" onPress={() => paginaTurmaC("C")} />
            <Button title="Quinta" onPress={() => paginaTurmaC("D")} />
            <Button title="Sexta" onPress={() => paginaTurmaC("E")} />
            
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