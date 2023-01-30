import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark, faBookOpen, faClockRotateLeft, faGear, faLocation} from '@fortawesome/free-solid-svg-icons';

import CustomSidebarMenu from '../components/CustomSidebarMenu';
import HomeStack from './HomeStack';
import OrderHistoryStack from './OrdersHistoryStack';
import SettingsStack from './SettingsStack';
import OurLocationScreen from '../screens/OurLocationScreen';


const Drawer = createDrawerNavigator();

const AppStack = () => {

  return (
    <Drawer.Navigator drawerContent={props => <CustomSidebarMenu {...props}/>} screenOptions={{
      headerShown: false, 
      swipeEnabled: false,
      drawerActiveBackgroundColor: 'white',
      drawerActiveTintColor: 'black',
      drawerInactiveTintColor: 'black',
      drawerLabelStyle: {
        fontWeight: 'bold',
        marginLeft: -20,
        fontSize: 15,
        color: '#FFFFFF'
      },
      drawerItemStyle: {
        marginLeft: 20,
        backgroundColor: '#2E3235'
      }
      }}>
        <Drawer.Screen component={HomeStack} name="Home" options={{
          drawerIcon: ({color}) => (
            <FontAwesomeIcon icon={faBookOpen} color='#F83103'/>
          )
        }}/> 
        <Drawer.Screen component={OrderHistoryStack} name="Order History" options={{
          drawerIcon: ({color}) => (
            <FontAwesomeIcon icon={faClockRotateLeft} color='#F83103'/>
          )
        }}/>
        <Drawer.Screen component={OurLocationScreen} name="Our Location" options={{
          drawerIcon: ({color}) => (
            <FontAwesomeIcon icon={faLocation} color='#F83103'/>
          )
        }}/>
        <Drawer.Screen component={SettingsStack} name="Settings" options={{
          drawerIcon: ({color}) => (
            <FontAwesomeIcon icon={faGear} color='#F83103'/>
          )
        }}/>
    </Drawer.Navigator> 
  )
}

export default AppStack
