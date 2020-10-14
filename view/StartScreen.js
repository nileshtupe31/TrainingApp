import React, { PureComponent } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { Button } from '../common/Button';

export default class StartScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style = {styles.main}>
          <Button
            onPress={() => {this.props.navigation.navigate("Quiz",{})}}
          >Start</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});