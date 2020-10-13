import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { APP_THEME_COLOR } from '../Constants/Colors';

const Button = ({
    children, style, onPress
}) => (
    <TouchableOpacity 
        style={styles.container}
        onPress={() => {onPress()}}
    >
        <Text style = {styles.textStyle}>{children}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 10,
        marginHorizontal: 20,
        color:'white'
    },
    container:{
        backgroundColor: APP_THEME_COLOR,
        marginVertical: 10,
        marginHorizontal: 5,
        borderWidth:1,
        borderRadius:10,
        borderColor:'gray'
    }
});

export  {Button};
