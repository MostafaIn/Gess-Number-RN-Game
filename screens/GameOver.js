import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const GameOver = ({rndNumber, usrNumber, onRestart}) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>GAME OVER !!!</Text>
            <Text>Number of rounds: {rndNumber}</Text>
            <Text>Number was: {usrNumber} </Text>
            <Button title="NEW GAME" onPress={onRestart} />
        </View>
    )
}

export default GameOver

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:32,
        fontFamily: 'indieFlower-Regular'
    }
})
