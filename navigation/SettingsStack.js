import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import CustomHeader from '../components/CustomHeader';

const Tab = createMaterialTopTabNavigator();

const SettingsStack = ({navigation}) => {
    return(
        <> 
            <CustomHeader name={"Profile settings"} navigation={navigation}/>
            <Tab.Navigator
            style={{
            }}
            initialRouteName='Profile'
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#15191F',
                    borderWidth: 0,
                    shadowOpacity: 0,
                    elevation: 0,
                },
                tabBarIndicatorStyle: {
                    margin: 0,
                    padding: 0,
                    backgroundColor: 'transparent',
                    opacity: 0,
                    borderWidth: 0
                },
                tabBarIndicatorContainerStyle:{

               },
                tabBarLabelStyle:{
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: 12,
                    margin: 0,
                    padding: 0,
                },
                tabBarItemStyle:{
                    width: 'auto',
                    padding: 0,
                    height: 40,
                    marginHorizontal: 0,
                },
                tabBarContentContainerStyle:{
                    justifyContent: 'space-evenly'
                },
                tabBarActiveTintColor: '#F83103',
                tabBarInactiveTintColor: '#CDCDCD'
            }}
            >
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen}/>
                <Tab.Screen name="About" component={AboutScreen}/>
            </Tab.Navigator>
        </>
    )
}

export default SettingsStack