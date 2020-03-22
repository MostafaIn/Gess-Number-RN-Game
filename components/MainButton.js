import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'

const MainButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
            <View style={styles.button}>
                <Text style={styles.btnTxt}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MainButton

const styles = StyleSheet.create({
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
