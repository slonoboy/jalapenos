import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

const OrderHistoryStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen component={OrderHistoryScreen} name="Order History Stack" options={{headerShown: false}}/>
        <Stack.Screen component={OrderDetailsScreen} name="Order Details" options={{headerShown: false}}/>
        <Stack.Screen component={CartScreen} name="Cart" options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default OrderHistoryStack