import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {CheckBox, Header} from "./common";
import LoginView from "./view/LoginView";

class App extends Component {

  constructor() {
    super()
  }

 componentDidMount() { 
  }

  componentDidUpdate(){

  }

 render() {
   const {main } = styles
  return (
    <View style={main}>
      <LoginView />
    </View>
  )
 }
}



const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor: '#AAA',
  }
})

export default App