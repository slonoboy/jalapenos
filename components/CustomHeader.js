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
               <SafeAreaView style={{
                backgroundColor: '#15191F'
               }}>
                <View style={styles.header}>
                    <TouchableOpacity 
                    onPress={() => {navigation.goBack()}}>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" size={20} color="#FFFFFF50"/>
                    </TouchableOpacity>

                    <Spacer/>

                    <Text style={{
                        color: "#FFFFFF50",
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