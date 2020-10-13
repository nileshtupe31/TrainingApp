import Axios from 'axios';
import React, { PureComponent } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import axios from "axios";
import { CheckBox, Header, InputText } from '../common';
import { Button } from '../common/Button';
import { APP_BACKGROUND_COLOR, APP_THEME_COLOR, CONTAINER_COLOR } from '../Constants/Colors';
import { BASE_URL, END_POINTS } from '../Constants/constants';

export default class LoginView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        userName: "",
        password: "",
        isSecureText: true
    };
  }

  render() {
    return (
      <View style={styles.main}>
        <Header style={styles.header} />
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <InputText 
                    placeholderText= "User Name"
                    onValueChange = {(text) => {
                        this.setState({...this.state, userName:text})
                    }}
                    value = {this.state.userName}
                />
                <InputText 
                    placeholderText = "Password"
                    secureText={this.state.isSecureText}
                    onValueChange = {(text) => {
                        this.setState({...this.state, password:text})
                    }}
                    value = {this.state.password}
                />
                <CheckBox
                     onValueChange = {(checked) => {
                        this.setState({...this.state, isSecureText:!checked})
                     }}

                >Show Password</CheckBox>
                <Button
                    onPress={() => {
                        console.log("User Name"+ this.state.userName);
                        console.log("Password"+ this.state.password);
                        logIn(this.state.userName, this.state.password)
                    }}
                >Log In</Button>

            </View>
        </View>
      </View>
    );
  }
}

const logIn = (userName, password) => {
    const url = BASE_URL + END_POINTS.login

    const params = new URLSearchParams()
    params.append('employeeId', userName)
    params.append('password', password)
    axios.post(url, params)
    .then(res => {
        console.log(JSON.stringify(res));

    })
    .catch(error => {
        console.log(JSON.stringify(error));
    })
}


const styles = StyleSheet.create({
    main:{
        flex:1
    },
    header:{
        flex:1,
        backgroundColor: APP_THEME_COLOR,
    },
    container:{
        flex:9,
        backgroundColor: APP_BACKGROUND_COLOR,
    },
    loginContainer:{
        backgroundColor: CONTAINER_COLOR,
        flex:1,
        margin: '10%',
        borderRadius:10,
        justifyContent:'center',
        alignItems: 'center',
    }
});
