import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TitleText = props => <Text style={{...styles.title, ...props.style}}>{props.children}</Text>;

const styles = StyleSheet.create({
    title:{
        fontFamily:'inknutAntiqua-Regular',
        fontSize:18,
        margin: 10
    }
});

export default TitleText;