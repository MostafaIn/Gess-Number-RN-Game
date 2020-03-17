import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

import Card from '../components/Card';

import Colors from '../constants/colors';

const StartGame = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.container}>
                <Text>Select a Number</Text>
                <TextInput 
                    style={styles.input} 
                    type="number" 
                    
                />
                <View style={styles.btns}>
                    <Button style={styles.btn} title="reset" color={Colors.primary}  />
                    <Button style={styles.btn} title="confirm" color={Colors.accent} />
                </View>
            </Card>
        </View>
    )
}

export default StartGame

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    title:{
        fontSize:18,
        marginVertical:10
    },
    container:{
        width:300,
        maxWidth:'80%',
        alignItems:'center'
    },
    input:{
        width:100,
        borderWidth:1,
        borderColor:'#555',
        borderRadius:10,
        textAlign:'center',
        padding:5
    },
    btns:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    btn:{
        width: 90
    }
})
