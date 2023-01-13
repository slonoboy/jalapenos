import React, { useContext } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
    ImageBackground
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLocationDot, faGear } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/AuthContext';


const CustomSidebarMenu = (props) => {

    return(
        <View style={{
            flex: 1,
        }}>

            <DrawerContentScrollView 
             {...props}
             contentContainerStyle={{
                paddingTop: 0,
             }}>

                <View
                    style={{
                        width: '100%',
                        height: 160,
                        borderBottomEndRadius: 30,
                        borderBottomStartRadius: 30,
                        backgroundColor: '#FF0036'
                    }}>
                    <View style={{
                        paddingTop: 60,
                        paddingLeft: 30
                    }}>
                        <Text style={{
                            fontSize: 25,
                            color: 'white',
                            fontWeight: 'bold'
                        }}>Jalapenos</Text>

                        <Text style={{
                            color: 'white'
                        }}>
                        <FontAwesomeIcon style={{
                        color: "white",
                        }}
                        icon={ faLocationDot} />
                        Address</Text>
                    </View>
                </View>
                
                <DrawerItemList {...props} />
                {/* <DrawerItem
                    label="Logout" 
                    onPress={() => logout()} 
                /> */}
            </DrawerContentScrollView>
        </View>
    )
}

export default CustomSidebarMenu;