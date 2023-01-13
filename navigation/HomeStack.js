import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen component={HomeScreen} name="Home Stack" options={{headerShown: false}}/>
        <Stack.Screen component={CartScreen} name="Cart" options={{headerShown: false}}/>
        <Stack.Screen component={OrderDetailsScreen} name="Order Details" options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default HomeStack