import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const InputText = ({
    placeholderText, secureText = false, value, onValueChange,
}) => (
    <View style={styles.container}>
        <TextInput
            placeholder={placeholderText} 
            style={styles.textInputStyle}
            secureTextEntry={secureText}
            onChangeText={(text) => { onValueChange(text)}}
            value = {value}
        />
    </View>
);

export {InputText};


const styles = StyleSheet.create({
    textInputStyle:{
        flex:1,
        marginHorizontal: 5
    },
   container:{
        height:40,
        borderRadius:10,
        backgroundColor: 'white',
        borderColor :'gray',
        borderWidth:1,
        margin: 10,

   } 
});