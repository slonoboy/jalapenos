import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CartScreen from '../screens/CartScreen'


const Stack = createNativeStackNavigator();

const AuthStack = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen component={LoginScreen} name="Login" options={{headerShown: false}}/>  
    </Stack.Navigator>
  )
}

export default AuthStack
