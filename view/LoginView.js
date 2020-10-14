import Axios from 'axios';
import React, { PureComponent } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import axios from "axios";
import { connect } from "react-redux";
import { userNameChanged, passwordChanged, secureTextChanged } from "../actions";
import { CheckBox, Header, InputText } from '../common';
import { Button } from '../common/Button';
import { APP_BACKGROUND_COLOR, APP_THEME_COLOR, CONTAINER_COLOR } from '../Constants/Colors';
import { BASE_URL, END_POINTS } from '../Constants/constants';
import { ProcessIndicator } from '../common/ProcessIndicator';

class LoginView extends PureComponent {
  constructor(props) {
    super(props);
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
                        this.props.userNameChanged(text)
                    }}
                    value = {this.props.userName}
                />
                <InputText 
                    placeholderText = "Password"
                    secureText={this.props.isSecureText}
                    onValueChange = {(text) => {
                        this.props.passwordChanged(text)
                    }}
                    value = {this.props.password}
                />
                <CheckBox
                     onValueChange = {(checked) => {
                         this.props.secureTextChanged(checked)
                     }}
                     value = {this.props.isSecureText}

                >Show Password</CheckBox>
                {
                    !this.props.isFetching  &&

                    <Button
                    onPress={() => {

                        this.props.navigation.navigate("Start",{})

                        // console.log("User Name"+ this.state.userName);
                        // console.log("Password"+ this.state.password);
                        // this.setState({...this.state, isFetching:true})
                        // logIn(this.state.userName, this.state.password)
                    }}
                    >Log In</Button>
                }

                { this.props.isFetching &&   
                    <ProcessIndicator />
                }

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

const mapStateToProps = (state) => {
    return (
        {
            userName:state.login.userName,
            password:state.login.password,
            isSecureText:state.login.isSecureText,
            isFetching:false        
        }
    )
}

export default connect(mapStateToProps, {
    userNameChanged,
    passwordChanged,
    secureTextChanged
})(LoginView)
