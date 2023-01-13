import React, {useContext} from 'react'
import 'react-native-gesture-handler' 
import { View, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native' 
import {createStackNavigator} from '@react-navigation/stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSidebarMenu from './components/CustomSidebarMenu'
import { AuthContext, AuthProvider } from './context/AuthContext'
import { ActivityIndicator } from '@react-native-material/core'
import AuthStack from './navigation/AuthStack'
import AppStack from './navigation/AppStack'
import AppNav from './navigation/AppNav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas)
 

const App = () => {

    return(
      <AuthProvider>
          <AppNav/> 
      </AuthProvider>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})

export default App;