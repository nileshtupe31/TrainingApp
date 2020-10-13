import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { APP_THEME_COLOR } from '../Constants/Colors';

const ProcessIndicator = ({
}) => (
    <View style={styles.container}>
        <ActivityIndicator 
            size="large"
            color = {APP_THEME_COLOR}
        />
        <Text>Loading...</Text>
    </View>
);

const styles = StyleSheet.create({
    container:{
        width:100,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    }
});

export  {ProcessIndicator};
