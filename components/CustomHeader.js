import BackArrow from '../assets/back-arrow.svg'

import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faLocationDot, faP, faCirclePlus, faPlus, faBagShopping, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Spacer, Divider } from '@react-native-material/core';
import { NavigationContainer, useRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const CustomHeader = ({navigation, name}) => {
  return (
               <SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity 
                    onPress={() => {navigation.goBack()}}>
                        <BackArrow/>
                    </TouchableOpacity>

                    <Spacer/>

                    <Text style={{
                        color: "#3D3838",
                        opacity: 0.5,
                        fontWeight: 'bold',
                        fontSize: 15
                    }}>{name}</Text>

                    <Spacer/>

                     <TouchableOpacity style={{
                        opacity: 0
                     }}>
                        <BackArrow/> 
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingVertical: 15,
        marginHorizontal: 30,
        marginBottom: 0,
        borderColor: 'grey',
        borderBottomWidth: 1,
    }
})


export default CustomHeader