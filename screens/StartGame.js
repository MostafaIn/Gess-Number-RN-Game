import React,{ useState } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Alert
} from 'react-native'

import Card from '../components/Card';
import Input from '../components/Input';

import Colors from '../constants/colors';

const StartGame = () => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')

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
    confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>
    }

    console.log(enteredValue)
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.container}>
                <Text>Select a Number</Text>
                <Input 
                    style={styles.input} 
                    blurOnSubmit
                    keyboardType="number-pad"
                    maxLength={2}
                    value={enteredValue}
                    onChangeText={value => setEnteredValue(value.replace(/[^0-9]/g, ''))}
                />
                <View style={styles.btns}>
                    <Button style={styles.btn} title="reset" color={Colors.primary} onPress={resetInputHandler}  />
                    <Button style={styles.btn} title="confirm" color={Colors.accent} onPress={confirmInputHandler} />
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
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
    btn:{
        width: 90
    },
})
