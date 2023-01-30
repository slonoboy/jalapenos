import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faLocationDot, faP, faCirclePlus, faPlus, faBagShopping, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Spacer, Divider } from '@react-native-material/core';
import { HomeContext } from '../context/HomeContext';
import { set_first_char_to_capital } from '../utils/utils';

const CartItem = ({cartItem, incrementCartItem, decrementCartItem, setRemovingItem, setRemoveModalShow}) => {

  const decrementOrRemove = () => {
    if (cartItem.count <= 1){
        setRemovingItem(cartItem);
        setRemoveModalShow(true);
    }
    else {
        decrementCartItem(cartItem.dish)
    }
  }

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
                    backgroundColor: '#2E3235',
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
                        color: '#FFFFFF',
                    }}>{set_first_char_to_capital(cartItem.dish.name)}</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 12,
                        color: '#A8A8A8'
                    }}>{cartItem.dish.description ? cartItem.dish.description : "no description"}</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: '#F83103'
                    }}>${cartItem.sum_price.toFixed(2)}</Text>
                </View>

                <Spacer/>

                <View style={{
                    minHeight: 80,
                    borderRadius: 10,
                    backgroundColor: '#2E3235',
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
                    <TouchableOpacity style={{
                        paddingHorizontal: 20,
                        paddingVertical: 5 
                    }}
                    onPress={() => incrementCartItem(cartItem.dish)}>
                        {/* <FontAwesomeIcon
                        icon={faPlus}/> */}
                        <Text style={{
                            color: '#CDCDCD'
                        }}>Add</Text>
                    </TouchableOpacity>
                    
                    <Text style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        fontSize: 15,
                        color: '#FFFFFF'
                    }}>{cartItem.count}</Text>

                    <TouchableOpacity style={{
                        paddingHorizontal: 20,
                        paddingVertical: 5 
                    }}
                    onPress={() => decrementOrRemove()}>
                        {/* <FontAwesomeIcon
                        icon={faMinus}/> */}
                        <Text style={{
                            color: '#CDCDCD'
                        }}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TextInput
                        style={{
                            marginTop: 40, 
                            borderBottomWidth: 1,
                            borderColor: '#FFFFFF',
                            color: '#FFFFFF',
                            width: '100%',
                            fontSize: 15,
                        }} 
                        placeholder="Write down your preferences"
                        placeholderTextColor={"#FFFFFF"}
                    />

            <Divider style={{
                marginVertical: 30
            }}/>
    </View>
  )
}

export default CartItem