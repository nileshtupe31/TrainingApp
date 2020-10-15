import Axios from 'axios';
import React, { PureComponent } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import axios from "axios";
import { connect } from "react-redux";
import { 
    userNameChanged, passwordChanged, secureTextChanged, login 
} from "../actions";
import { CheckBox, Header, InputText } from '../common';
import { Button } from '../common/Button';
import { APP_BACKGROUND_COLOR, APP_THEME_COLOR, CONTAINER_COLOR } from '../Constants/Colors';
import { BASE_URL, END_POINTS } from '../Constants/constants';
import { ProcessIndicator } from '../common/ProcessIndicator';

class LoginView extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.userId != null && prevProps.userId == null ) {
        this.props.navigation.navigate("Start",{})
    }
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

                        // this.props.navigation.navigate("Start",{})
                        this.props.login(this.props.userName, this.props.password)
                    }}
                    >Log In</Button>
                }
                {
                    this.props.errorMessage && <Text style={{color:'red'}}>{this.props.errorMessage}</Text>
                }


                { this.props.showLoading &&   
                    <ProcessIndicator />
                }

            </View>
        </View>
      </View>
    );
  }
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
            isFetching:false,
            userId:state.login.userId,
            errorMessage:state.login.errorMessage,
            showLoading:state.appState.isLoading        
        }
    )
}

export default connect(mapStateToProps, {
    userNameChanged,
    passwordChanged,
    secureTextChanged,
    login
})(LoginView)
