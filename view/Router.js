import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginView from "./LoginView";
import StartScreen from "./StartScreen";
import QuizView from "./QuizView";

const Stack = createStackNavigator()



const Router = ({
}) => (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
        <Stack.Screen
            name="Login"
            component={LoginView}
        >
        </Stack.Screen>
        <Stack.Screen
            name="Start"
            component={StartScreen}
        >
        </Stack.Screen>
        <Stack.Screen
            name="Quiz"
            component={QuizView}
        >
        </Stack.Screen>
        </Stack.Navigator>     
    </NavigationContainer>

);

export default Router;

