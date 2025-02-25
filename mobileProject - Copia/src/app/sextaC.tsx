import { Button } from '../components/button'
import { router } from 'expo-router'
import {View, Text, StyleSheet} from 'react-native'

export default function AulasSextaC(){
    return(
        <View style={styles.container}>
           
            <Text style={styles.dia}>Terça: </Text>
            <Text  style={styles.hora}>7:00 as 9:30    </Text>
            <Text style={styles.title}>Português - Professor: Edu</Text>
            <Text  style={styles.hora}>10:00 as 11:50</Text>
            <Text style={styles.title}>Educação Fisica - Professor: Paulo </Text>

            <Button title='Voltar' onPress={()=> router.back()}/>
          
        </View>
    )
}

export const styles =  StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        padding:43,
        gap:16,
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        backgroundColor:"green"
    },
    hora:{
        fontSize:20,
        fontWeight:"bold",
        backgroundColor:"red"
    },
    dia:{
        fontSize:22,
        fontWeight:"bold",
        backgroundColor:"blue"
    }
})