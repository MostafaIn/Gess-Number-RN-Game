import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

import defaultStyles from '../constants/default-styles'

const GameOver = ({rndNumber, usrNumber, onRestart}) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>GAME IS OVER !</Text>
            <Image 
                source={require('../assets/success.png')}
                style={defaultStyles.img}
                resizeMode="contain"
            />
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
