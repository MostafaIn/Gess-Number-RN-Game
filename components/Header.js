import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headTitle}>{title}</Text>
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
