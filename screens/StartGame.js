import React,{ useState, useEffect } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native'

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

import Colors from '../constants/colors';

const StartGame = ({onStartGame}) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4)

    useEffect(() => {
        const updateLayout = () =>{
            setButtonWidth(Dimensions.get('window').width / 4)
        }
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);

        }
    });
    
    const resetInputHandler = () =>{
        setEnteredValue('');
        setConfirmed(false)
    };

    const confirmInputHandler = () =>{
        let chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
            Alert.alert('Invalid Number!', 'number has to be between 1 and 99.',[{
                text:'Okay',
                style:'destructive',
                onPress: resetInputHandler
            }])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(parseInt(chosenNumber));
        setEnteredValue('');
    };

    let confirmedOutput;
    if(confirmed){
    confirmedOutput =(
        <Card style={styles.summaryContainer}>
            <BodyText>you selected</BodyText>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton onPress={() => onStartGame(selectedNumber)} >
                Start Game
            </MainButton>
            {/* <Button title="Start Game" onPress={() => onStartGame(selectedNumber)} /> */}
        </Card>
    );
    }

    console.log(enteredValue)
    return (
        <ScrollView>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={40} >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
            <TitleText style={styles.title}>Start a New Game!</TitleText>
            <Card style={styles.container}>
                <BodyText>Select a Number</BodyText>
                <Input 
                    style={styles.input} 
                    blurOnSubmit
                    keyboardType="number-pad"
                    maxLength={2}
                    value={enteredValue}
                    onChangeText={value => setEnteredValue(value.replace(/[^0-9]/g, ''))}
                />
                <View style={styles.btns}>
                    <Button style={{width: buttonWidth}} title="reset" color={Colors.primary} onPress={resetInputHandler}  />
                    <Button style={{width: buttonWidth}}title="confirm" color={Colors.accent} onPress={confirmInputHandler} />
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </ScrollView>
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
    container:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        marginBottom: 20
    },
    input:{
        width:80,
        textAlign:'center',
        padding:5
    },
    btns:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    // btn:{
    //     // width: 90,
    //     width: Dimensions.get('window').width / 4
    // },
    summaryContainer:{
        marginTop:20,
        alignItems:'center'
    }
})
