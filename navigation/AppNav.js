import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react'
import { ActivityIndicator } from '@react-native-material/core';
import LottieView from 'lottie-react-native'

import AppStack from './AppStack';
import { HomeProvider } from '../context/HomeContext';
import { AuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';


const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    return(
        <View style={{
            flex: 1,
            justifyContent:'center',
            alignItems: 'center',
        }}>
            <LottieView
              style={{
              }}
              source={require("../assets/loading_animation.json")}  autoPlay loop 
            /> 
        </View>
    )
  }

  return (
    <NavigationContainer>
        { userToken !== null ? 
        <HomeProvider>
          <AppStack/>
        </HomeProvider>  
           : 
        <AuthStack/>
        }
    </NavigationContainer>
  )
}

export default AppNav