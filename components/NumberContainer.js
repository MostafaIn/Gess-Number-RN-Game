import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text sytle={styles.number}>{props.children}</Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor: colors.accent,
        borderRadius:10,
        padding:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'
    },
    number:{
        color: colors.accent,
        fontSize:22
    }
})
