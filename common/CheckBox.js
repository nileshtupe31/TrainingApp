import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const CheckBox = ({value = false,children, onValueChange}) => {
    const [checked, setChecked] = useState(value)

    useEffect(() => {
        console.log("Value changed "+checked);
        onValueChange(checked)
    }, [checked])
    return (
        <View 
            style={styles.container}
        >
            <TouchableOpacity 
            style={[styles.checkBox,
                    checked?{backgroundColor:"#AAA"}:{backgroundColor: 'white'} 
                ]}
                onPress={()=>{
                    setChecked(!checked)
                }}
            >

            </TouchableOpacity>
            <Text>{children}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:30,
        flexDirection:'row',
    },
    checkBox:{
        height:20,
        width:20,
        borderColor:'gray',
        borderRadius:10,
        borderWidth:2
    },
    textStyle:{
        marginHorizontal: 10
    }
});

export {CheckBox}