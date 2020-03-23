import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import Colors from '../constants/colors'

const MainButton = (props) => {
    let ButtonComponent = TouchableOpacity;

    if(Platform.OS === 'Andriod' && Platform.Version >= 21){
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.btnContainer}>
        <ButtonComponent onPress={props.onPress} activeOpacity={0.6}>
            <View style={styles.button}>
                <Text style={styles.btnTxt}>{props.children}</Text>
            </View>
        </ButtonComponent>
        </View>
    )
}

export default MainButton

const styles = StyleSheet.create({
    btnContainer:{
        borderRadius:25,
        overflow:'hidden'
    },
    button:{
        backgroundColor: Colors.secondary,
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:25
    },
    btnTxt:{
       color:'white',
       fontFamily:'indieFlower-Regular',
       fontSize:18 
    }
})
