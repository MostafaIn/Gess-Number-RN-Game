import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import TitleText from './TitleText'

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <TitleText style={styles.headTitle}>{title}</TitleText>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height: 90,
        paddingTop: 36,
        backgroundColor:'#f7287b',
        alignItems:"center",
        justifyContent:'center'
    },
    headTitle:{
        color:'black',
        fontSize: 16
    }
})
