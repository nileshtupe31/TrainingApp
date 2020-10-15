import React, { PureComponent } from 'react';
import {  View, StyleSheet, Text } from 'react-native';
import { connect } from "react-redux";
import { Header } from '../common';
import { Button } from '../common/Button';
import { APP_BACKGROUND_COLOR } from '../Constants/Colors';
import CommonStyles from "../Constants/CommonStyles";

class QuizView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        selectedAnswer: null
    };

  }

  render() {
      const { main, header,container, contentStyle } = CommonStyles

      const {question, option1, option2, option3, option4 } = this.props.question
    return (
      <View style={main}>
        <Header style={header}></Header>
        <View style={container}>
            <View style={contentStyle}>
                <Text style={styles.textStyle}> {question}</Text>
                <Button 
                    onPress={() =>{this.setState({selectedAnswer:"1"})}}
                    isSelected={this.state.selectedAnswer == "1"}
                >{option1}</Button>
                <Button 
                    onPress={() =>{this.setState({selectedAnswer:"2"})}}
                    isSelected={this.state.selectedAnswer == "2"}                
                >{option2}</Button>
                                <Button 
                    onPress={() =>{this.setState({selectedAnswer:"3"})}}
                    isSelected={this.state.selectedAnswer == "3"}                
                >{option3}</Button>
                <Button 
                    onPress={() =>{this.setState({selectedAnswer:"4"})}}
                    isSelected={this.state.selectedAnswer == "4"}                
                >{option4}</Button>

                <View style={styles.bottomView}>
                    <Button onPress={() =>{}}>Previous</Button>
                    <Button onPress={() =>{}}>Next</Button>
                </View>

            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    main:{
        flex:1,
        backgroundColor: APP_BACKGROUND_COLOR,
    },
    textStyle:{
        fontSize:20,
        fontWeight:'bold'
    },
    bottomView:{
        flexDirection:'row'
    }
});

const mapStateToProps = (state) => {
    return ({
        question:state.quiz.question
    })
}

export default connect(mapStateToProps,{

})(QuizView)