import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { APP_THEME_COLOR, BUTTON_SELECTED_COLOR } from '../Constants/Colors';

const Button = ({
    children, style, onPress, isSelected = false, isEnabled = true
}) => (
    <TouchableOpacity 
        style={[styles.container, 
            isSelected?
            {backgroundColor: BUTTON_SELECTED_COLOR}:{backgroundColor: APP_THEME_COLOR}]}
        onPress={() => {onPress()}}
        disabled={!isEnabled}
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
        marginVertical: 10,
        marginHorizontal: 5,
        borderWidth:1,
        borderRadius:10,
        borderColor:'gray'
    }
});

export  {Button};
