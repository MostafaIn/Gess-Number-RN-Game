import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native'

import TitleText from './TitleText'
import Colors from '../constants/colors'

const Header = ({title}) => {
    const [headerWidth, setHeaderWidth] = useState(Dimensions.get('window').width / 4)

    useEffect(() => {
        const updateLayout = () =>{
            setHeaderWidth(Dimensions.get('window').width / 4)
        }
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    });
console.log('w', headerWidth)
    return (
        <View style={{backgroundColor: headerWidth < 200 ? Colors.primary : 'white', ...styles.headerBase, ...Platform.select({
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
        // backgroundColor: Colors.primary,
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
