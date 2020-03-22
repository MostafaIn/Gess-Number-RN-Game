import React,{ useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import MainButton from '../components/MainButton'

import defaultStyles from '../constants/default-styles'

const generateRandomBetween = (min, max, exclude) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude); // this is called recursion;
    }else{
        return rndNum;
    }
};

const GameScreen = ({userChoice, onGameOver}) => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, userChoice)
    );
    const [rounds, setRounds] = useState(0)

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
       if(currentGuess === userChoice){
           onGameOver(rounds)
       }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction =>{
        if(
            (direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'greater' && currentGuess > userChoice)
        ){
            Alert.alert("don't lie!", "You know that this is wrong...",[
                {text: 'Sorry!', style:'cancel'}
            ])
            return;
        }

        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(curRnd => curRnd + 1)
    };
    return (
        <View style={styles.screen}>
            <Text style={defaultStyles.txt}>Opponnet's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btns}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="md-remove" size={25} color="white" />
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name="md-add" size={25} color="white" />
                </MainButton>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    btns:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    }
})
