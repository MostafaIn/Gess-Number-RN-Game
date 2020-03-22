import React, { useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native'

import defaultStyles from '../constants/default-styles'

const GameOver = ({rndNumber, usrNumber, onRestart}) => {
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width / 4)

    useEffect(() => {
        const updateLayout = () =>{
            setDeviceWidth(Dimensions.get('window').width / 4)
        };
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    });
    if(deviceWidth < 200){
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>GAME IS OVER !</Text>
                    <Image 
                        source={require('../assets/success.png')}
                        style={defaultStyles.img}
                        resizeMode="contain"
                    />
                <View>
                    <Text>Number of rounds: {rndNumber}</Text>
                    <Text>Number was: {usrNumber} </Text>
                    <Button title="NEW GAME" onPress={onRestart} />
                </View>
            </View>
        )
    }else{
        return (
            <View style={styles.screen2}>
                <Image 
                    source={require('../assets/success.png')}
                    style={defaultStyles.img}
                    resizeMode="contain"
                />
                <View>
                <Text style={styles.title}>GAME IS OVER !</Text>
                    <Text>Number of rounds: {rndNumber}</Text>
                    <Text>Number was: {usrNumber} </Text>
                    <Button title="NEW GAME" onPress={onRestart} />
                </View>
            </View>
        )
    }
    
}

export default GameOver

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    screen2:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    title:{
        fontSize:32,
        fontFamily: 'indieFlower-Regular'
    }
})
