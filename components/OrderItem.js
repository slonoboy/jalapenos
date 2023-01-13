import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faLocationDot, faP, faCirclePlus, faPlus, faBagShopping, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Spacer, Divider } from '@react-native-material/core';
import { HomeContext } from '../context/HomeContext';

const OrderItem = ({item}) => {

  return (
    <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    minHeight: 100,
                    width: 200,
                    borderRadius: 20,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    padding: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 12,
                        color: '#3D3838',
                        textTransform: 'uppercase'
                    }}>{item.dish.name}</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 12,
                        color: '#A8A8A8'
                    }}>{item.dish.description ? item.dish.description : "no description"}</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: '#FF0036'
                    }}>${item.sum_price}</Text>
                </View>

                <Spacer/>

                <View style={{
                    minHeight: 80,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}>
                    <Text style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        fontSize: 15,
                        color: '#3D3838'
                    }}>{item.count}</Text>

                </View>
            </View>

            <Divider style={{
                marginVertical: 30
            }}/>
    </View>
  )
}

export default OrderItem