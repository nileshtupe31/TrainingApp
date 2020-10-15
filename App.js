import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers";
import Router from "./view/Router";

const store = createStore(reducer,{}, applyMiddleware(thunk))

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
      <Provider store={store}>
        <Router />
      </Provider>
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