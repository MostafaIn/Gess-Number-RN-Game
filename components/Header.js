import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'

import TitleText from './TitleText'
import Colors from '../constants/colors'

const Header = ({title}) => {
    return (
        <View style={{...styles.headerBase, ...Platform.select({
            ios: styles.headerIos,
            andriod: styles.headerAndriod
        })}}>
            <TitleText style={styles.headTitle}>{title}</TitleText>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerBase:{
        width:'100%',
        height: 90,
        paddingTop: 36,
        alignItems:"center",
        justifyContent:'center',
    },
    headerIos:{
        backgroundColor:Colors.primary,
        borderBottomWidth: 2
    },
    headerAndriod:{
        backgroundColor: 'white',
        borderBottomWidth: 1
    },
    headTitle:{
        color:'black',
        fontSize: 16
    }
})
