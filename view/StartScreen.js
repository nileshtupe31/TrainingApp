import React, { PureComponent } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { getQuiz } from "../actions";
import { connect } from "react-redux";
import { Button } from '../common/Button';
import { ProcessIndicator } from '../common/ProcessIndicator';

class StartScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.questions.length > 0 && prevProps.questions.length == 0) {
        this.props.navigation.navigate("Quiz",{})
      }
    }

  render() {
    return (
      <View style = {styles.main}>
        {this.props.showLoading && <ProcessIndicator /> }
        {!this.props.showLoading &&
          <Button
            onPress={() => {

                this.props.getQuiz(1)
              }
            }
          >Start</Button>
        }
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

const mapStateToProps = (state) => {
  return (
    {
      questions:state.quiz.questions,
      currentQuestion:state.quiz.question,
      showLoading:state.appState.isLoading
    }
  )
}

export default connect(mapStateToProps,{
  getQuiz
})(StartScreen)