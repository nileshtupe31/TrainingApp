import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = ({title, style}) => {
    return (
        <View style={[stytles.header, style]}>
            <Text 
                style={stytles.textStyle}
            >{title}</Text>
        </View>
    )
}

const stytles = StyleSheet.create({
    header:{
        backgroundColor: '#ff8c00',
      },
    textStyle:{
        fontWeight:'bold'
    }
})

export {Header}